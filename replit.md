# Taj India Tours - Travel Website

## Overview

This is a modern travel website for Taj India Tours, specializing in Golden Triangle tours and other Indian heritage destinations. The application is built as a full-stack web application with a React frontend and Express.js backend, featuring tour packages, booking functionality, contact forms, and a gallery of destinations.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom color scheme for travel branding
- **State Management**: TanStack Query for server state management
- **Forms**: React Hook Form with Zod validation
- **Animations**: Framer Motion for smooth animations and transitions

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **Database**: PostgreSQL with Neon serverless connection
- **ORM**: Drizzle ORM for type-safe database operations
- **Email Service**: EmailJS for handling contact forms and booking confirmations

### Build System
- **Frontend Build**: Vite with React plugin
- **Backend Build**: esbuild for server bundling
- **Development**: Hot reload with Vite dev server
- **TypeScript**: Shared types between client and server

## Key Components

### Database Schema
Located in `shared/schema.ts`, defines three main tables:
- **users**: Basic user authentication (username, email, password)
- **bookings**: Tour booking records with booking ID, customer details, tour package, dates, and status
- **contactMessages**: Contact form submissions with status tracking

### API Endpoints
- `GET/POST /api/bookings` - Booking management
- `GET /api/bookings/:id` - Individual booking retrieval
- `GET /api/bookings/booking-id/:bookingId` - Booking lookup by booking ID
- Contact message endpoints (implied from schema)

### Frontend Pages
- **Home**: Hero section, featured tours, testimonials, gallery, FAQ
- **Tours**: Complete tour catalog with filtering and search
- **Destinations**: Gallery of Indian destinations with categories
- **Contact**: Contact form and company information

### Key Features
- Responsive design optimized for mobile and desktop
- Tour booking system with form validation
- Email integration for booking confirmations
- Image gallery with lightbox functionality
- FAQ accordion interface
- Customer testimonials carousel
- Search and filter functionality for tours

## Data Flow

1. **Tour Browsing**: Users browse tours from static data in `tour-data.ts`
2. **Booking Process**: 
   - User fills booking form with validation
   - Data sent to backend API
   - Booking stored in database with unique booking ID
   - Email confirmation sent via EmailJS
3. **Contact Forms**: Similar flow for contact inquiries
4. **Data Persistence**: All user interactions stored in PostgreSQL via Drizzle ORM

## External Dependencies

### Email Service
- EmailJS for transactional emails
- Requires environment variables for service configuration
- Handles booking confirmations and contact form submissions

### Database
- Neon PostgreSQL serverless database
- Connection via `@neondatabase/serverless` package
- WebSocket connection for real-time features

### UI Libraries
- Radix UI primitives for accessible components
- Lucide React for consistent iconography
- Framer Motion for animations
- React Hook Form + Zod for form validation

### Development Tools
- Replit integration with cartographer and error overlay
- ESLint and TypeScript for code quality
- PostCSS with Tailwind for styling

## Deployment Strategy

### Production Build
- Frontend: Static files built to `dist/public`
- Backend: Bundled server code to `dist/index.js`
- Single deployment artifact with Express serving static files

### Environment Configuration
- Database URL required for Drizzle connection
- EmailJS credentials for email functionality
- Vite environment variables for client-side configuration

### Database Migrations
- Drizzle Kit for schema migrations
- `db:push` command for development schema updates
- Migration files generated in `./migrations` directory

## Changelog
- June 28, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.