import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertSubscriberSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
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

  const httpServer = createServer(app);

  return httpServer;
}
