# 7Sigma Solutions

Professional career guidance and development website for 7Sigma Solutions.

## Table of Contents

- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Pages](#pages)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Contact Form / Resend Integration](#contact-form--resend-integration)
- [Development](#development)
- [Production Deployment](#production-deployment)
- [Git Workflow](#git-workflow)
- [Contact / Business Information](#contact--business-information)
- [License](#license)

## Project Overview

7Sigma Solutions is a professional career guidance website built with React and Vite. It provides a polished online presence for career development services, featuring easy navigation, animated interfaces, and a contact workflow powered by a serverless email integration.

The site is intended to showcase service offerings, support career advancement, and capture inquiries through a mobile-friendly experience.

## Key Features

- Responsive design for desktop and mobile screens
- Home page with hero imagery and service highlights
- About page with mission and company values
- Services page showcasing career development offerings
- Why Us page presenting benefits and value propositions
- Contact page with a working inquiry form
- Active navigation state for current route highlighting
- Smooth routing with React Router DOM
- Scroll-to-top behavior on route changes
- Floating WhatsApp button for quick messaging
- Contact form submission through `/api/contact`
- Vercel serverless function for outgoing email delivery
- Resend integration for sending contact notifications
- Framer Motion animations throughout the UI
- Responsive mobile navigation menu
- Hero background imagery and branded visuals

## Pages

- `/` – Home page with hero section, service overview, why choose us content, and CTA
- `/about` – About page with company mission, strengths, and values
- `/services` – Services page listing career guidance offerings and program details
- `/why-us` – Why Us page explaining competitive advantages and support benefits
- `/contact` – Contact page with inquiry form, email, phone, address, and business hours

## Technology Stack

- React
- Vite
- React Router DOM
- Tailwind CSS
- Framer Motion
- React Icons
- Resend SDK
- Vercel serverless deployment
- ESLint

## Project Structure

- `api/`
  - `contact.js` — serverless route handling contact form submissions and sending email via Resend
- `public/`
  - `images/` — brand, hero, and service image assets
- `src/`
  - `App.jsx` — application routes and layout composition
  - `main.jsx` — React application bootstrap
  - `index.css` — global styles
  - `components/`
    - `home/` — home page sections such as Hero, Services, WhyChooseUs, CTA
    - `layout/` — Navbar, Footer, and route-aware ScrollToTop behavior
    - `common/` — FloatingWhatsApp and any shared components
  - `pages/` — route components for Home, About, Services, WhyUs, Contact

## Installation

Install dependencies and run the project locally:

```bash
npm install
npm run dev
```

## Environment Variables

The contact form requires the Resend API key to be configured server-side.

```env
RESEND_API_KEY=your_resend_api_key
```

Ensure this key is never exposed in frontend code or committed to version control.

## Contact Form / Resend Integration

The contact flow works like this:

React Contact Form
↓
`/api/contact`
↓
Vercel Serverless Function
↓
Resend
↓
Email Inbox

The serverless function validates input and sends the inquiry email using the Resend API key on the backend.

## Development

Available commands:

- `npm install` — install dependencies
- `npm run dev` — start the Vite development server
- `npm run build` — create a production build
- `npm run preview` — preview the production build locally

## Production Deployment

Deploy this site to Vercel for production. The API route in `api/contact.js` is deployed as a serverless function, and `RESEND_API_KEY` should be configured in Vercel environment settings.

## Git Workflow

Common Git commands:

```bash
git add .
git commit -m "Your commit message"
git push
```

## Contact / Business Information

Public contact details visible in the project:

- Email: `sigma7tech@outlook.com`
- Phone: `+1 (945) 401-9183`
- Address: `1305 Elijah Dr, Anna, TX`

## License

License information is not currently specified.
