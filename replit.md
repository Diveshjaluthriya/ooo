# OpsIntellect AI Website

## Overview

OpsIntellect AI is a premium marketing/portfolio website for a boutique automation consultancy targeting scaling startups. The site showcases services in data operations, workflow automation, internal tools, and AI agent integration. It features a high-end, dark-themed design with advanced animations (magnetic buttons, split-text reveals, smooth scrolling, parallax effects) to create a cinematic, agency-level experience.

The application is a full-stack TypeScript project with a React frontend and Express backend. The backend currently serves one API endpoint for contact form submissions (inquiries), stored in a PostgreSQL database.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side router) with pages for Home, Services, Industries, Process, Case Studies, About, and Contact
- **Styling**: Tailwind CSS with CSS variables for theming, dark mode by default
- **UI Components**: shadcn/ui (new-york style) built on Radix UI primitives, stored in `client/src/components/ui/`
- **Animations**: Framer Motion for physics-based transitions, magnetic buttons, split-text reveals, parallax effects, and scroll-reactive elements
- **Smooth Scrolling**: Lenis.js integrated via `SmoothScroll` component for premium scroll feel
- **Typography**: Inter (body) and Space Grotesk (headings/display), loaded via Google Fonts
- **State Management**: TanStack React Query for server state; no global client state library needed
- **Forms**: React Hook Form with Zod validation via `@hookform/resolvers`
- **Build Tool**: Vite with React plugin, path aliases (`@/` → `client/src/`, `@shared/` → `shared/`)

### Backend Architecture
- **Runtime**: Node.js with Express 5
- **Language**: TypeScript, executed via tsx in development
- **API Design**: Single REST endpoint `POST /api/inquiries` for contact form submissions
- **Route Definitions**: Shared route contracts in `shared/routes.ts` using Zod schemas for input validation and response types — used by both frontend and backend
- **Storage Layer**: `server/storage.ts` provides a `DatabaseStorage` class implementing `IStorage` interface for data access abstraction
- **Dev Server**: Vite dev server integrated as Express middleware (via `server/vite.ts`) for HMR in development
- **Production**: Static files served from `dist/public`, built with Vite (client) and esbuild (server bundled to `dist/index.cjs`)

### Database
- **Database**: PostgreSQL (required, via `DATABASE_URL` environment variable)
- **ORM**: Drizzle ORM with `drizzle-zod` for schema-to-validation integration
- **Schema**: Defined in `shared/schema.ts` — currently one table:
  - `inquiries`: id (serial), name (text), email (text), company (text), message (text), createdAt (timestamp)
- **Migrations**: Drizzle Kit with `drizzle-kit push` command (`npm run db:push`) for schema synchronization
- **Connection**: `pg` Pool in `server/db.ts`
- **Sessions**: `connect-pg-simple` is listed as a dependency (available for future session storage)

### Shared Code (`shared/` directory)
- `schema.ts`: Database table definitions and Zod validation schemas, shared between frontend and backend
- `routes.ts`: API route contracts (paths, methods, input/output schemas) — provides type-safe API usage on both sides

### Build & Deploy
- `npm run dev`: Development mode with Vite HMR and tsx
- `npm run build`: Builds client (Vite) and server (esbuild) to `dist/`
- `npm run start`: Runs production build from `dist/index.cjs`
- `npm run db:push`: Pushes Drizzle schema to PostgreSQL

## External Dependencies

- **PostgreSQL**: Required database, connected via `DATABASE_URL` environment variable
- **Google Fonts**: Inter and Space Grotesk loaded via CDN
- **Unsplash Images**: Case study images loaded from Unsplash URLs (no API key needed)
- **Lenis.js**: Smooth scroll library (npm package)
- **Framer Motion**: Animation engine (npm package)
- **Radix UI**: Headless UI primitives for accessible components (npm packages)
- **Replit Plugins**: `@replit/vite-plugin-runtime-error-modal`, `@replit/vite-plugin-cartographer`, `@replit/vite-plugin-dev-banner` used in development on Replit