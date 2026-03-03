# ⛪ IJUS - Iglesia Jesucristo Único Salvador

<div align="center">
<img width="80%" alt="IJUS Website Cover" src="visuals/public/Nuestra Iglesia.jpg" />

![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-Database-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)

**A modern, lightning-fast landing page and visitor management system for Iglesia IJUS.**
*Built with React, Vite, Tailwind CSS, and powered by Supabase + Resend.*

</div>

---

## 📖 Overview

**IJUS Website** is a modern Single Page Application (SPA) designed to provide a welcoming digital front door for the church, while automating the collection of visitor data and follow-up communication.

The project was engineered focusing on the **B.L.A.S.T.** protocol and **A.N.T.** (Aesthetic, Network, Trigger) layer architecture. It prioritizes a "Minimal Luxury" visual style to appeal to its target demographic, ensuring high contrast, clean typography, and smooth micro-interactions without performance degradation.

### The Scenario
The goal is to move away from static, unresponsive pages and provide a unified digital platform where visitors can learn about the church's vision, see upcoming events, and—most importantly—schedule a visit. Scheduling a visit triggers an automated onboarding email workflow via Supabase Edge Functions.

## ⚙️ Key Technical Features

### 1. Modern Frontend (React + Vite)
* **Modular Components:** Built using functional React components (Hero, Bento Grid, Navigation, Modals).
* **Smooth Animations:** Powered by `motion/react` and `lenis` for smooth scrolling and layout transitions.
* **Component-Level Styling:** Tailwind CSS v4 provides a strict, utility-first design system synced with the brand's primary and high-contrast color palette.

### 2. Serverless Backend (Supabase + Resend)
* **Row Level Security (RLS):** Strict database policies allowing anonymous inserts for new visitors while keeping records private.
* **Database Webhooks:** PostgreSQL triggers (`pg_net`) that listen to new inserts on the `subscriber` table and execute backend logic automatically.
* **Edge Functions (Deno):** A lightweight cloud function that connects to the Resend API to dispatch beautifully formatted HTML welcome emails dynamically based on the visitor's name.

### 3. Layered Architecture (A.N.T.)
The system strictly separates concerns into 3 layers:
* `Layer 1`: Standard Operating Procedures & Architecture rules (`gemini.md`).
* `Layer 2`: Human/AI Reasoning & Prompt orchestration.
* `Layer 3`: Deterministic tools and execution (React frontend + Supabase backend).

## 🛠️ Project Architecture

```text
/
├── .gitignore                          # Git configuration
├── visuals/                            # Frontend Application Workspace
│   ├── index.html                      # Application Entry Point
│   ├── package.json                    # Dependencies & Scripts
│   ├── src/                            
│   │   ├── App.tsx                     # Main Router/Controller
│   │   ├── main.tsx                    # React DOM Entry
│   │   ├── index.css                   # Global Tailwind definitions
│   │   ├── lib/                        # External Service Clients
│   │   │   └── supabase.ts             # Supabase Client Initialization
│   │   ├── components/                 # Reusable UI Components
│   │   │   ├── Navbar.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── MVPSelectedWork.tsx     # Events & News (Connected to DB)
│   │   │   ├── MVPJakobAndSam.tsx      # Pastors Section
│   │   │   ├── VisitModal.tsx          # Subscription Form
│   │   │   └── ...
│   └── public/                         # Static Assets (Images, Videos)
└── supabase/                           # Backend Configuration (Edge Functions)
    └── functions/                      
        └── send-welcome-email/         # Deno Edge Function for Resend
```

## 🚀 Installation & Usage

### Prerequisites

* Node.js (v18 or higher)
* Git

### Setup

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/dianAnton/IJUS-Website.git
    cd IJUS-Website/visuals
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Environment Variables Configuration:**

    Create a `.env.local` file inside the `visuals/` folder with your Supabase keys:

    ```env
    VITE_SUPABASE_URL=your_supabase_project_url
    VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
    ```

4.  **Run the application locally:**

    ```bash
    npm run dev
    ```

## 📸 Visual Preview

| **Landing Page** | **Subscription Flow** |
|:---:|:---:|
| *(Welcome Section)* | *(Contact Modal)* |
| <img width="95%" alt="Hero Section" src="visuals/public/Nuestra Iglesia.jpg" /> | <img width="85%" alt="Subscription" src="visuals/public/ijus-noticias-eventos-placeholder.png" />|
|  |  |
