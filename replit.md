# SilverX Fund - AI-First Venture Capital Platform

## Overview

SilverX Fund is a $100M AI-first venture capital firm focused on backing India's next generation of deep-tech unicorns. The platform serves as a digital presence showcasing the fund's investment thesis, leadership team, portfolio companies, and value proposition to both founders and limited partners (LPs). The application is built as a single-page marketing website with a premium institutional aesthetic inspired by leading VC firms like Sequoia Capital and Andreessen Horowitz.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast HMR and optimized production builds
- Wouter for lightweight client-side routing (single-page application with `/` home route and 404 handling)

**UI Component System**
- Shadcn/ui component library (New York style variant) providing enterprise-grade, accessible React components
- Radix UI primitives as the foundation for complex interactive components (dialogs, dropdowns, navigation menus, etc.)
- Tailwind CSS for utility-first styling with custom design tokens
- Class Variance Authority (CVA) for type-safe component variants

**State Management & Data Fetching**
- TanStack React Query (v5) for server state management, caching, and data fetching
- Custom query client configuration with authentication handling and error boundaries
- Form state managed via React Hook Form with Zod schema validation

**Styling System**
- Custom color palette with dark/light mode support using CSS custom properties
- HSL-based color system for theme consistency
- Premium institutional design with Inter font family (Google Fonts)
- Responsive breakpoints following mobile-first approach
- Custom shadow and elevation systems for depth hierarchy

**Key Design Decisions**
- Component-based architecture with atomic design principles (UI components, feature components, page compositions)
- Accessibility-first approach using Radix UI primitives with ARIA compliance
- Performance optimization through code splitting and lazy loading patterns
- Theme toggle functionality with localStorage persistence

### Backend Architecture

**Server Framework**
- Express.js server with TypeScript for type safety
- ES Modules (type: "module") for modern JavaScript module system
- HTTP server creation via Node's native `http` module
- Middleware-based request processing pipeline

**Development Environment**
- Vite dev server integration in development mode with HMR support
- Custom error overlay plugin (@replit/vite-plugin-runtime-error-modal)
- Request/response logging middleware with JSON capture
- Static file serving in production via compiled Vite build

**Data Layer**
- In-memory storage implementation (MemStorage class) for development
- Storage interface pattern (IStorage) allowing easy swap to database implementation
- User entity with basic CRUD operations (create, read by id/username)
- UUID-based entity identification using crypto.randomUUID()

**API Architecture**
- RESTful API design with `/api` prefix convention
- JSON request/response handling with express.json() middleware
- Centralized error handling middleware with status code normalization
- Route registration pattern separating concerns (routes.ts)

**Key Architectural Decisions**
- Monorepo structure with shared types between client/server (`@shared` path alias)
- Environment-based configuration (NODE_ENV) for dev/production behavior
- Separation of concerns: routes, storage layer, and server initialization
- Vite integration only in development to avoid production overhead

### Database Schema (Drizzle ORM)

**ORM Configuration**
- Drizzle ORM with PostgreSQL dialect for type-safe database operations
- Neon serverless PostgreSQL driver for edge-compatible database connections
- Schema-first approach with TypeScript types derived from database schema
- Zod integration for runtime validation via drizzle-zod

**Schema Design**
- Users table with UUID primary keys, username, and password fields
- Unique constraint on username for authentication purposes
- Schema defined in `shared/schema.ts` for cross-platform type sharing
- Migration system via drizzle-kit with migrations output to `./migrations`

**Database Strategy**
- Connection via DATABASE_URL environment variable
- Validation ensuring database provisioning before application start
- Insert schemas generated via createInsertSchema for input validation
- Type inference using Drizzle's $inferSelect for query results

**Key Design Choices**
- Shared schema location allows client/server type reuse
- UUID generation at database level using gen_random_uuid()
- Password storage field (implementation of hashing/security left to application layer)
- Prepared for PostgreSQL deployment (Neon, Vercel Postgres, or self-hosted)

## External Dependencies

### UI & Component Libraries
- **Radix UI Suite** (@radix-ui/react-*): Comprehensive set of unstyled, accessible UI primitives including accordion, dialog, dropdown-menu, navigation-menu, popover, select, toast, tooltip, and 20+ other components
- **Shadcn/ui**: Pre-built component system built on Radix UI with Tailwind styling
- **Lucide React**: Icon library for consistent iconography
- **React Icons**: Additional icon sets (SiLinkedin, SiX for social media)
- **Embla Carousel**: Touch-friendly carousel component for interactive content

### Form & Validation
- **React Hook Form**: Performant form state management with minimal re-renders
- **@hookform/resolvers**: Integration layer for validation schemas
- **Zod**: TypeScript-first schema validation for forms and API contracts
- **Drizzle Zod**: Bridge between Drizzle ORM schemas and Zod validators

### Styling & Design
- **Tailwind CSS**: Utility-first CSS framework with PostCSS processing
- **Autoprefixer**: CSS vendor prefix automation
- **Class Variance Authority (CVA)**: Type-safe variant API for components
- **clsx & tailwind-merge**: Conditional className utilities with conflict resolution

### Database & Backend
- **Drizzle ORM**: TypeScript ORM with PostgreSQL support
- **@neondatabase/serverless**: Serverless PostgreSQL driver for Neon database
- **connect-pg-simple**: PostgreSQL session store (prepared for future authentication)
- **Express.js**: Web server framework for API routes

### Build & Development Tools
- **Vite**: Next-generation frontend build tool with HMR
- **TypeScript**: Static type checking across full stack
- **ESBuild**: Fast JavaScript bundler for production server build
- **TSX**: TypeScript execution for development server
- **@replit/vite-plugin-***: Replit-specific development plugins (cartographer, dev-banner, runtime-error-modal)

### Utilities
- **date-fns**: Modern date manipulation library
- **nanoid**: Compact unique ID generator
- **cmdk**: Command menu component (prepared for future search/command palette)
- **Wouter**: Lightweight routing library (2KB alternative to React Router)

### Design Assets
- **Google Fonts**: Inter font family for professional typography
- **Custom Assets**: Logo and team photos stored in `attached_assets/` directory