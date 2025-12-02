import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertSubscriberSchema, insertNewsletterSubscriberSchema } from "@shared/schema";
import fs from "fs";
import path from "path";
import { addNewsletterSubscriberToSheet } from "./googleSheets";

interface PageMeta {
  title: string;
  description: string;
  url: string;
  type?: string;
  image?: string;
}

const pageMeta: Record<string, PageMeta> = {
  "/reports/indias-next-wave-5-sectors": {
    title: "India's Next Wave: 5 Sectors Poised for Growth | SilverX Fund Research",
    description: "In-depth investment research analyzing 5 high-growth sectors in India: Eldercare, Fintech, AI & LLMs, EDA IP, and Semiconductors. Comprehensive market analysis with charts and data-driven insights from SilverX Fund.",
    url: "https://silverx.vc/reports/indias-next-wave-5-sectors",
    type: "article",
    image: "https://silverx.vc/report-5-sectors-preview.jpg"
  },
  "/reports/resilient-sectors": {
    title: "Resilient Sectors: Industries Minimally Disrupted by AI | SilverX Fund Research",
    description: "Research report on industries with natural AI resistance: Agriculture, Construction, Healthcare, Mining, and more. Strategic investment analysis showing sectors where physical presence and human judgment remain essential.",
    url: "https://silverx.vc/reports/resilient-sectors",
    type: "article"
  },
  "/subscribe": {
    title: "Newsletter | SilverX Fund - Stay Updated on Deep Tech Investments",
    description: "Subscribe to SilverX Fund newsletter for exclusive insights on AI-first venture capital, deep tech investments, and India's emerging startup ecosystem.",
    url: "https://silverx.vc/subscribe"
  }
};

function injectMetaTags(html: string, pagePath: string): string {
  const meta = pageMeta[pagePath];
  if (!meta) return html;

  const ogType = meta.type || "website";
  
  let result = html;
  
  result = result.replace(/<title>[^<]*<\/title>/, `<title>${meta.title}</title>`);
  result = result.replace(/<meta name="title" content="[^"]*"/, `<meta name="title" content="${meta.title}"`);
  result = result.replace(/<meta name="description" content="[^"]*"/, `<meta name="description" content="${meta.description}"`);
  result = result.replace(/<meta property="og:type" content="[^"]*"/, `<meta property="og:type" content="${ogType}"`);
  result = result.replace(/<meta property="og:url" content="[^"]*"/, `<meta property="og:url" content="${meta.url}"`);
  result = result.replace(/<meta property="og:title" content="[^"]*"/, `<meta property="og:title" content="${meta.title}"`);
  result = result.replace(/<meta property="og:description" content="[^"]*"/, `<meta property="og:description" content="${meta.description}"`);
  result = result.replace(/<meta property="twitter:url" content="[^"]*"/, `<meta property="twitter:url" content="${meta.url}"`);
  result = result.replace(/<meta property="twitter:title" content="[^"]*"/, `<meta property="twitter:title" content="${meta.title}"`);
  result = result.replace(/<meta property="twitter:description" content="[^"]*"/, `<meta property="twitter:description" content="${meta.description}"`);
  result = result.replace(/<link rel="canonical" href="[^"]*"/, `<link rel="canonical" href="${meta.url}"`);
  
  // Inject og:image and twitter:image if provided
  if (meta.image) {
    // Add og:image after og:description
    result = result.replace(
      /(<meta property="og:description" content="[^"]*" \/>)/,
      `$1\n    <meta property="og:image" content="${meta.image}" />`
    );
    // Add twitter:image after twitter:description
    result = result.replace(
      /(<meta property="twitter:description" content="[^"]*" \/>)/,
      `$1\n    <meta property="twitter:image" content="${meta.image}" />`
    );
  }
  
  return result;
}

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Serve pages with injected meta tags for social media crawlers (production only)
  // In development, Vite handles this. In production, we need to serve these pages
  // with the correct meta tags before the static file handler catches them.
  const metaRoutes = Object.keys(pageMeta);
  
  for (const route of metaRoutes) {
    app.get(route, async (req, res, next) => {
      // Only handle in production - in dev, let Vite handle it
      if (app.get("env") === "development") {
        return next();
      }
      
      try {
        const distPath = path.resolve(import.meta.dirname, "public");
        const indexPath = path.resolve(distPath, "index.html");
        
        if (!fs.existsSync(indexPath)) {
          return next();
        }
        
        let html = fs.readFileSync(indexPath, "utf-8");
        html = injectMetaTags(html, route);
        
        res.status(200).set({ "Content-Type": "text/html" }).end(html);
      } catch (error) {
        console.error("Error serving page with meta tags:", error);
        next();
      }
    });
  }

  app.post("/api/subscribe", async (req, res) => {
    try {
      const parsed = insertSubscriberSchema.safeParse(req.body);
      
      if (!parsed.success) {
        return res.status(400).json({ error: "Invalid data", details: parsed.error.issues });
      }

      const existing = await storage.getSubscriberByEmail(parsed.data.email);
      if (existing) {
        return res.status(409).json({ error: "This email is already subscribed" });
      }

      const subscriber = await storage.createSubscriber(parsed.data);
      return res.status(201).json({ message: "Successfully subscribed!", subscriber });
    } catch (error) {
      console.error("Subscription error:", error);
      return res.status(500).json({ error: "Failed to subscribe" });
    }
  });

  app.get("/api/subscribers", async (_req, res) => {
    try {
      const subscribers = await storage.getAllSubscribers();
      return res.json(subscribers);
    } catch (error) {
      console.error("Error fetching subscribers:", error);
      return res.status(500).json({ error: "Failed to fetch subscribers" });
    }
  });

  app.post("/api/newsletter", async (req, res) => {
    try {
      const parsed = insertNewsletterSubscriberSchema.safeParse(req.body);
      
      if (!parsed.success) {
        return res.status(400).json({ error: "Invalid data", details: parsed.error.issues });
      }

      const existing = await storage.getNewsletterSubscriberByEmail(parsed.data.email);
      if (existing) {
        return res.status(409).json({ error: "This email is already subscribed to the newsletter" });
      }

      const subscriber = await storage.createNewsletterSubscriber(parsed.data);
      
      // Also add to Google Sheet
      await addNewsletterSubscriberToSheet(
        parsed.data.name,
        parsed.data.email,
        parsed.data.phone || ""
      );
      
      return res.status(201).json({ message: "Successfully subscribed to newsletter!", subscriber });
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      return res.status(500).json({ error: "Failed to subscribe to newsletter" });
    }
  });

  app.get("/api/newsletter", async (_req, res) => {
    try {
      const subscribers = await storage.getAllNewsletterSubscribers();
      return res.json(subscribers);
    } catch (error) {
      console.error("Error fetching newsletter subscribers:", error);
      return res.status(500).json({ error: "Failed to fetch newsletter subscribers" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
