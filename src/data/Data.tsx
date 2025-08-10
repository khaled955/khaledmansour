import type { Project } from "../types/Types";

export const DATA = {
  name: 'Dr Khaled',
  role: 'Front‑End Developer',
  location: 'Saudi Arabia',
  summary:
    'Front-end developer specialized in React, TypeScript, Tailwind, and animation. I build accessible, fast, multilingual apps with clean UX.',
  socials: {
    github: 'https://github.com/khaled955',
    linkedin: 'https://www.linkedin.com/in/',
    email: 'mailto:your@email.com',
  },
  skills: [
    'HTML5','CSS3','Bootstrap','TailwindCSS','JavaScript','TypeScript','React','Next.js','Redux Toolkit','React Hook Form','Axios','MUI','i18next','Stripe','Git','GitHub','Figma'
  ],
  projects: [
    {
      title: 'Quiz Wiz App',
      description: 'Quiz platform with timers, certificates (PDF), QR code, charts, and email notifications.',
      tech: ['React','TypeScript','Tailwind','Redux','Recharts'],
      live: 'https://quizz-wizz-app.vercel.app/',
      repo: 'https://github.com/khaled955',
      image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1200&q=60'
    },
    {
      title: 'Hotel Management System',
      description: 'Room booking, calendar, admin dashboard, multilingual (EN/AR), and payments integration.',
      tech: ['React','Tailwind','Redux','i18next','Stripe'],
      live: '#',
      repo: '#',
      image: 'https://images.unsplash.com/photo-1501117716987-c8e3f1a9fafa?auto=format&fit=crop&w=1200&q=60'
    },
    {
      title: 'Book Store',
      description: 'E‑commerce bookstore with Redux cart, checkout, and profile with password change.',
      tech: ['React','Tailwind','Redux','Stripe'],
      live: '#',
      repo: '#',
      image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=60'
    }
  ] as Project[],
}
