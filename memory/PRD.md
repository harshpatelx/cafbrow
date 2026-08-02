# CafBrow — Cafe Website PRD

## Original Problem Statement
Student project: design and develop a modern, responsive cafe website for a restaurant/cafe business presenting menu items, services, pricing, and contact details. Required features: (1) Homepage with hero/banner, intro, typography/images, CTAs; (2) Menu section (coffee, fast food, desserts, beverages, specials) with image/name/description/price per item; (3) About Us (story, services, environment, quality); (4) Contact & reservation form with validation; (5) Gallery; (6) Fully responsive; (7) Navbar + footer with social links and smooth navigation. Bonus options available.

## User Choices (confirmed)
- Cafe name: **CafBrow**
- Branding: user-provided flat-illustration assets (bright interior scene + dark counter scene) → palette: warm cream #F9F6F0, charcoal #1E1E1E, terracotta #E07A5F, mustard #F2CC8F, teal #2A9D8F
- Bonus features chosen: gallery image carousel
- Reservations: saved to database (backend)
- Craft bar: Awwwards-level — kinetic masked hero reveal, lenis smooth scroll, framer-motion reveals, parallax hero, numbered manifesto chapters, editorial marquee

## User Personas
- Cafe visitor: browses menu/gallery, books a table
- Student/developer: demonstrates real-world responsive business website

## Architecture
- Frontend: React 19 + Tailwind + framer-motion + lenis + embla-carousel (single-page, `/app/frontend/src/components/`: Navbar, Hero, Marquee, Intro, MenuSection, About, Gallery, Reservation, Footer, SmoothScroll, Reveal; data in `src/data/menu.js`)
- Backend: FastAPI (`/app/backend/server.py`) — `/api` prefix, Pydantic validation (email, phone, date not-in-past, HH:MM time, 1–20 guests)
- DB: MongoDB via MONGO_URL, collection `reservations` (uuid ids, no auth — public site)

## Implemented
- 2026-08-02: Full v1 — kinetic hero (masked line reveal, parallax framed illustration), editorial marquee, intro + stats, menu with 5 category tabs × 15 items (image/name/desc/price), About as 4 numbered manifesto chapters, draggable gallery carousel (embla), reservation form (client + server validation, sonner toasts, saved to MongoDB), dark footer with socials, sticky glass nav with smooth scroll, fully responsive (mobile nav panel verified)
- 2026-08-02: Localized for India per user request — prices in ₹ (INR), address moved to C.G. Road, Ahmedabad (Gujarat 380009), +91 phone, hello@cafbrow.in; simplified front style (removed grain overlay, outlined display text, hard offset shadows → soft minimal cards and frames)

## Verified
- POST /api/reservations (valid + invalid payloads), GET /api/reservations — OK
- E2E screenshots: hero reveal, menu tab filtering, gallery next/dots, reservation submit + success toast, validation errors, About, footer, mobile hero + nav — OK

## Backlog
- P0: none
- P1: Admin view for reservations (protected list page), reservation confirmation email (Resend), testimonials section, dark mode toggle
- P2: Online food ordering UI, login/signup, table availability slots, hero image slider, i18n

## Next Tasks
1. Add customer testimonials/reviews section
2. Admin page to view/manage reservations
3. Dark mode toggle
4. Email confirmation on booking
