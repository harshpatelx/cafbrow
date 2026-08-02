# CafBrow — Coffee House & Kitchen Website

A modern, fully responsive cafe website for **CafBrow**, a neighborhood coffee house in **Ahmedabad, India**.
Built as a real-world business website project: menu showcase, about/story sections, photo gallery,
and a working **table reservation system** that saves bookings to a database.

---

## Features

- **Homepage** — kinetic line-by-line hero reveal, parallax illustration, call-to-action buttons
- **Menu** — 15 items across 5 categories (Coffee, Fast Food, Desserts, Beverages, Specials) with photos, descriptions and prices in ₹ (INR)
- **About Us** — cafe story told in 4 numbered chapters (Story, Craft, Space, Promise)
- **Gallery** — draggable image carousel with arrows and dot navigation
- **Reservation Form** — name, email, phone, date, time slot, guests, special requests
  - Client-side validation (per-field error messages)
  - Server-side validation (email format, phone format, no past dates, 1–20 guests)
  - Bookings saved to MongoDB with instant on-screen confirmation
- **Navbar & Footer** — sticky glass navbar, smooth scrolling, mobile hamburger menu, social links
- **Fully responsive** — mobile, tablet and desktop
- **Motion** — Lenis smooth momentum scrolling + Framer Motion scroll reveals

---

## Tech Stack

| Layer    | Technology |
|----------|-----------|
| Frontend | React 19, Tailwind CSS, Framer Motion, Lenis, Embla Carousel, Axios, Sonner (toasts), Lucide icons |
| Backend  | FastAPI (Python), Pydantic validation, Motor (async MongoDB driver) |
| Database | MongoDB |
| Fonts    | Playfair Display (headings), Manrope (body), Cormorant Garamond (accents) |

---

## Project Structure

```
/app
├── backend/
│   ├── server.py              # FastAPI app — reservation API with validation
│   ├── requirements.txt       # Python dependencies
│   └── .env                   # MONGO_URL, DB_NAME, CORS_ORIGINS
│
├── frontend/
│   ├── public/
│   │   ├── index.html         # Page shell (title, meta)
│   │   └── assets/
│   │       ├── cafe-bright.jpg   # Brand illustration (hero)
│   │       └── cafe-dark.jpg     # Brand illustration (about)
│   ├── src/
│   │   ├── index.js           # React entry point
│   │   ├── App.js             # Page composition (all sections)
│   │   ├── index.css          # Fonts, CSS variables, utilities
│   │   ├── data/
│   │   │   └── menu.js        # Menu items (₹ prices) + gallery images
│   │   ├── components/
│   │   │   ├── Navbar.jsx        # Sticky nav + mobile menu
│   │   │   ├── Hero.jsx          # Kinetic hero with parallax
│   │   │   ├── Marquee.jsx       # Scrolling text divider
│   │   │   ├── Intro.jsx         # Cafe intro + stats
│   │   │   ├── MenuSection.jsx   # Category tabs + menu cards
│   │   │   ├── About.jsx         # Numbered story chapters
│   │   │   ├── Gallery.jsx       # Image carousel
│   │   │   ├── Reservation.jsx   # Booking form + validation
│   │   │   ├── Footer.jsx        # Contact, links, socials
│   │   │   ├── SmoothScroll.jsx  # Lenis setup + section scrolling
│   │   │   └── Reveal.jsx        # Shared animation helpers
│   │   └── components/ui/     # shadcn/ui component library
│   ├── package.json
│   ├── tailwind.config.js     # Brand colors (cream/terracotta/mustard/charcoal)
│   └── .env                   # REACT_APP_BACKEND_URL
│
├── design_guidelines.json     # Design system reference
└── memory/
    └── PRD.md                 # Project requirements & history
```

---

## Setup & Run

### Prerequisites
- Node.js 18+ with **yarn**
- Python 3.10+
- MongoDB running locally (or a connection string)

### Backend
```bash
cd backend
pip install -r requirements.txt
# set MONGO_URL and DB_NAME in backend/.env
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

### Frontend
```bash
cd frontend
yarn install
# set REACT_APP_BACKEND_URL in frontend/.env (e.g. http://localhost:8001)
yarn start
```


---

## API Endpoints

All backend routes are prefixed with `/api`.

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/api/`              | Health check |
| POST   | `/api/reservations`  | Create a reservation (validated) |
| GET    | `/api/reservations`  | List all reservations (newest first) |

### Example: create a reservation
```bash
curl -X POST http://localhost:8001/api/reservations \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Priya Shah",
    "email": "priya@example.com",
    "phone": "+91 98765 43210",
    "date": "2026-08-15",
    "time": "18:30",
    "guests": 2,
    "message": "Window seat please"
  }'
```

**Validation rules** (enforced on both frontend and backend):
- Name: minimum 2 characters
- Email: valid email format
- Phone: 7–20 digits (may include +, spaces, dashes)
- Date: `YYYY-MM-DD`, cannot be in the past
- Time: `HH:MM` (24-hour)
- Guests: 1–20
- Message: optional, max 500 characters

---

## Cafe Details (sample content — edit freely)

- **Address:** 21 Shree Krishna Complex, C.G. Road, Ahmedabad, Gujarat 380009
- **Phone:** +91 98765 01420
- **Email:** hello@cafbrow.in
- **Hours:** Mon–Sun, 8:00 AM – 9:00 PM

To change menu items or prices, edit `frontend/src/data/menu.js`.
To change address/phone/hours, edit `Reservation.jsx` and `Footer.jsx`.

---

## Design System

- Cream `#F9F6F0` · Charcoal `#1E1E1E` · Terracotta `#E07A5F` · Mustard `#F2CC8F` · Teal `#2A9D8F`
- Headings: Playfair Display · Body: Manrope
- Soft cards, clean frames, generous spacing, smooth momentum scrolling
