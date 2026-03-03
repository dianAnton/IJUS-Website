# findings.md

## Research & Discoveries
**North Star:** 
- Fully functional website for IJUS (Iglesia Jesucristo Único Salvador) located at Constantino 104, Santiago de Chile.
- Central hub for the church family and new visitors.
- Features: Announcements, news, events, service schedules, location, pastoral info, community details.
- Subscription system for new users (email or WhatsApp) to receive service reminders and address.

**Integrations:**
- Database for storing emails and phone numbers.
- WhatsApp API (or similar messaging API) for sending direct messages to valid phone numbers.
- Email service provider.

## Constraints
**Behavioral & UI/UX Rules:**
- **Aesthetic:** Organized, clean, attractive, easy to use. Modern and useful.
- **Audience:** Must be highly accessible for older demographics (large, clear fonts, obvious navigation).
- **Platform:** Mobile-first priority.
- **Ultimate Goal:** "Todo sea para glorificar a Dios."

## Visuals (Starting Point) Observation
- The `visuals` directory contains a Vite + React + TailwindCSS application.
- It already establishes a very solid aesthetic baseline:
  - Excellent typography (sans-serif for body/headings, italic serif for emphasis like "IJUS").
  - Clean layout with sections for "Misión", "Proceso" (Conectar, Crecer, Servir), and "Ministerios" (Niños, Alabanza, Mujeres, Jóvenes).
  - Elegant use of color (deep blues, whites, dark text on light backgrounds for contrast).
- **Action Items to make it "Ideal" (Phase 4 Goal):**
  - [x] Integrate the Bento Grid layout for events/schedules as planned.
  - [x] Elevate Typography (Cormorant Garamond & Montserrat).
  - [ ] Implement the Subscription Form (Email/WhatsApp) in the footer/hero.
  - [ ] Connect this frontend to the real data (Supabase) in Phase 3.
