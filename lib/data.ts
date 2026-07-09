// All site content lives here. Edit this file to update the portfolio;
// layout and styling live in components/.

export const site = {
  name: "Helee Ramani",
  role: "Backend Developer",
  location: "Surat, India",
  tagline: {
    before: "I build the ",
    highlight: "quiet stuff",
    after: " nobody sees but everyone needs.",
  },
  summary:
    "Backend developer with 1.5 years building production casino and betting platforms: JWT and 2FA authentication, multi-role access control, payment gateway integrations, and REST APIs that stay up while thousands of players are online.",
  stackLine: "Node.js · Express · MongoDB · PostgreSQL · Redis · Docker",
  status: "Open to backend roles",
  email: "heleeramani@gmail.com",
  resumeHref: "/resume.pdf",
  links: {
    github: "https://github.com/heleeramani",
    linkedin: "https://www.linkedin.com/in/heleeramani",
  },
} as const;

export const experience = [
  {
    role: "Backend Developer",
    company: "Geek Web Solution",
    period: "Jan 2025 – Present",
    points: [
      "Built the backend of a large casino platform: JWT and 2FA authentication, multi-role access control, casino and sports-betting modules, payment gateway and casino provider integrations.",
      "Created a central back office that manages multiple casino brands from one system, with bonus, referral, commission, and reporting features on scalable REST APIs.",
      "Developed Python REST APIs using Flask and FastAPI.",
      "Built demo backend management systems with Node.js, Express, MongoDB, PostgreSQL, and JWT authentication.",
    ],
  },
] as const;

export const projects = [
  {
    index: "P-01",
    name: "H79 Casino Platform",
    kind: "Casino platform",
    description:
      "Full-scale online casino platform with secure authentication, wallet management, game provider integrations, sports betting, and an advanced back-office management system. Includes multi-role access control, payment gateway integrations, referral, affiliate, cashback, bonus, and commission systems. Telegram Bot integration provides real-time player activity monitoring, while fraud detection identifies suspicious logins and auto-blocks malicious activity.",
    stack: [
      "Node.js",
      "Express.js",
      "Strapi CMS",
      "PostgreSQL",
      "MongoDB",
      "REST APIs",
      "Telegram Bot",
    ],
    href: "https://www.h79.one/en",
  },

  {
    index: "P-02",
    name: "Casino Stars",
    kind: "Player panel & admin platform",
    description:
      "Multi-role casino management platform with six role-based panels (Super Admin, Admin, Shop Manager, Shop Cashier, Operator, and Player). Features hierarchical RBAC, automatic gameplay screenshot and video capture for game events, multi-language support, transaction management, reporting, and secure backend APIs built for large-scale casino operations.",
    stack: [
      "Node.js",
      "Strapi CMS",
      "PostgreSQL",
      "JWT Authentication",
      "REST APIs",
    ],
    href: "https://www.casinostars.live",
  },

  {
    index: "P-03",
    name: "Casino Admin Dashboard",
    kind: "Back-office dashboard",
    description:
      "Secure administration system for managing casino operations, providers, games, wallets, transactions, players, and agents. Built REST APIs for CRUD operations, reporting dashboards, fraud monitoring, player tracking, activity logs, bonus and commission rules, and optimized backend performance for Next.js frontends.",
    stack: [
      "Node.js",
      "Express.js",
      "Strapi CMS",
      "PostgreSQL",
      "Next.js",
      "REST APIs",
    ],
    href: "http://casinoadmin.org",
  },

  {
    index: "P-04",
    name: "Library Management System",
    kind: "Full-stack web application",
    description:
      "College final-year project featuring separate Admin and User panels. Developed complete CRUD modules for books, students, and librarians, borrowing and return workflows, payment integration, responsive React frontend, and secure REST APIs using Node.js and Express.",
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
    ],
    href: "#",
  },

  {
    index: "P-05",
    name: "Glass Calc",
    kind: "AI-powered gesture calculator",
    description:
      "Scientific calculator controlled through real-time hand gestures using Computer Vision. Supports arithmetic and scientific operations, finger-count recognition via webcam, and traditional calculator controls alongside gesture-based interaction.",
    stack: [
      "Python",
      "Flask",
      "OpenCV",
      "Computer Vision",
      "Gunicorn",
    ],
    href: "https://py-calculator-simple-finger-detection-1.onrender.com",
  },

  {
    index: "P-06",
    name: "AI Todo Management System",
    kind: "AI-powered productivity app",
    description:
      "Scalable Todo Management application built with layered FastAPI architecture. Supports JWT authentication, task CRUD operations, AI-powered task generation using Google Gemini, and automatic extraction of task title, due date, and priority from natural language.",
    stack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Gemini AI",
    ],
    href: "https://py-todo-1.onrender.com/",
  },

  {
    index: "P-07",
    name: "Daily Tech News AI Automation",
    kind: "Workflow automation",
    description:
      "Fully automated workflow built with n8n that collects, filters, summarizes, and publishes daily technology news to Telegram. Uses Cron scheduling, JavaScript processing, AI summarization, REST APIs, and RSS feeds to deliver curated news every morning without manual intervention.",
    stack: [
      "n8n",
      "JavaScript",
      "Telegram Bot API",
      "Cron",
      "REST APIs",
    ],
    href: "#",
  },

  {
    index: "P-08",
    name: "Employee Management System",
    kind: "Task management platform",
    description:
      "Employee management platform with Admin and Employee portals. Features department management, task assignment, JWT authentication, role-based access control (RBAC), password hashing, refresh tokens, and secure profile management.",
    stack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "JWT",
    ],
    href: "https://py-emp-management-system-front.onrender.com",
  },
] as const;

export const stack = [
  {
    label: "Backend",
    items:
      "Node.js · Express.js · REST & CRUD APIs · JWT authentication · Middleware · Role-based access · Payment gateway integration · Strapi CMS · Payload CMS · FastAPI · Flask · Docker · Redis · Socket.IO",
  },
  // {
  //   label: "Frontend",
  //   items: "JavaScript · React.js · Next.js (basic)",
  // },
  {
    label: "Databases",
    items: "MongoDB · PostgreSQL",
  },
  {
    label: "Tools & Workflow",
    items:
      "Git · GitHub · Postman · VS Code · NPM · Yarn · Render · Vercel · Netlify · Expo Go · Notion · ClickUp · Linux (Ubuntu)",
  },
] as const;

export const about = {
  education: {
    degree: "Bachelor of Computer Applications",
    school: "Sutex Bank College of Computer Applications",
    period: "2022 – 2025",
  },
  languages: "English · Hindi · Gujarati",
  prose: [
    "Good communicator: I work directly with clients and teams, turning business needs into reliable systems.",
    "I enjoy writing clean, simple code that solves real problems, and I am always picking up new backend tools and practices.",
  ],
} as const;

// Decorative request-log lines for the hero texture. Purely visual.
export const logLines = [
  "POST /api/v1/auth/login              200  12ms",
  "POST /api/v1/auth/2fa/verify         200   8ms",
  "GET  /api/v1/wallet/balance          200   4ms",
  "POST /api/v1/bets/place              201  19ms",
  "POST /api/v1/payments/webhook        200  23ms",
  "GET  /api/v1/games?provider=live     200  11ms",
  "POST /api/v1/withdrawals/request     202  31ms",
  "GET  /api/v1/reports/monthly         200  42ms",
  "POST /api/v1/bonus/claim             200   9ms",
  "GET  /api/v1/players/me              200   5ms",
  "POST /api/v1/referrals/track         201  14ms",
  "GET  /api/v1/providers/status        200   7ms",
] as const;
