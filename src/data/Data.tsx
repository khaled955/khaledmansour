import type { Project } from "../types/Types";
import quizz from "../assets/ProjectsPhoo/quizzApp.png"
import hotel from "../assets/ProjectsPhoo/hotel-managment-system.jpg"
import book from "../assets/ProjectsPhoo/bookstore.png"
import projectManagment from "../assets/ProjectsPhoo/project_management.avif"
import food from "../assets/ProjectsPhoo/food-manamgent.jpg"
import ecommerce from "../assets/ProjectsPhoo/fresh-cart.jpg"
import usermanagment from "../assets/ProjectsPhoo/user-managment.jpg"
import product from "../assets/ProjectsPhoo/product.png"
import templatefour from "../assets/ProjectsPhoo/templatefour.jpg"
import templatethree from "../assets/ProjectsPhoo/template-3.jpeg"
import rentcar from "../assets/ProjectsPhoo/rentcar.png"
import portifolio from "../assets/ProjectsPhoo/portifolio.webp"
import yummy from "../assets/ProjectsPhoo/Yummy.jpg"
import egypt from "../assets/ProjectsPhoo/egypt.webp"
import weather from "../assets/ProjectsPhoo/weather.jpg"
import devfolio from "../assets/ProjectsPhoo/folio.jpg"
import daniels from "../assets/ProjectsPhoo/daniels.jpg"
import quote from "../assets/ProjectsPhoo/quote.jpg"
import bookmarker from "../assets/ProjectsPhoo/bookmarker.jpg"
import smartlogin from "../assets/ProjectsPhoo/smartlogin.webp"
import osaka from "../assets/ProjectsPhoo/osaka.png"
import specialTemplate from "../assets/ProjectsPhoo/specialTemplate.png"






export const DATA = {
  name: 'Khaled Mansour',
  role: 'Front‑End Developer',
  location: 'Saudi Arabia',
  summary:
    'Front-end developer specialized in React, TypeScript, Tailwind,Bootstrap ,and animation. I build accessible, fast, multilingual apps with clean UX.',
  socials: {
    github: 'https://github.com/khaled955',
    linkedin: 'https://www.linkedin.com/in/',
    email: 'khaledmansour104@yahoo.com',
  },
  skills: [
    'HTML5','CSS3','Bootstrap','TailwindCSS','JavaScript','TypeScript','React','Next.js','Redux Toolkit','React Hook Form','Axios','MUI','Stripe','Git','GitHub',
    
    'Figma',`formik`,`Yup`,`Vite`,`Figma`,`Context`,`JQuery`,`Font Awesome`,`Framer Motion`,`TanStack Query`,`Cookies`
  ],
  projects: [
    {
      title: 'Quiz Wiz App',
      description: 'Quiz platform with timers, certificates (PDF), QR code, charts, and email notifications.',
      tech: ['React','TypeScript','Tailwindcss','Recharts',`Role Based`],
      live: 'https://quizz-wizz-app.vercel.app/',
      repo: 'https://github.com/khaled955/Quizz-Wizz-App',
      image: quizz
    },
    {
      title: 'Hotel Management System',
      description: 'Room booking, calendar, admin dashboard, multilingual (EN/AR), and payments integration.',
      tech: ['React',`MUI`,`Slider`,`Typescript`,'Stripe',`Cookies`,`framer-motion`,`js-cookie`],
      live: 'https://hotel-managment-system-snowy.vercel.app/',
      repo: 'https://github.com/khaled955/Hotel-Managment-System',
      image: hotel,
    },
  
    {
      title: 'Project Managment System',
      description: 'create tasks from manager to employee and follow up and excute from employee',
      tech: ['React','bootstrap','context','bootstrap',`axios`,`framer-motion`],
      live: 'https://project-managment-system-sigma.vercel.app/',
      repo: 'https://github.com/khaled955/ProjectManagmentSystem',
      image:projectManagment,
    },
    {
      title: 'Food Managment System',
      description: 'crude operation for create recipies and managment food',
      tech: ['React','bootstrap','context','framer-motion',`react-helmet`,`react-pro-sidebar`],
      live: 'https://food-managment-two.vercel.app/',
      repo: 'https://github.com/khaled955/FoodManagment',
      image:food,
    },
    {
      title: 'Book Store',
      description: 'E‑commerce bookstore with Redux cart, checkout, and profile with password change.',
      tech: ['React','tailwindcss','Redux','Stripe',`framer-motion`,`formik`,`react-helmet`,`tanstack-query`],
      live: 'https://bookstore-eosin-kappa.vercel.app/',
      repo: 'https://github.com/khaled955/bookstore',
      image:book,
    },
    {
      title: 'E-commerce fresh-cart',
      description: 'E‑commerce bookstore with Redux cart, checkout, and profile with password change.',
      tech: ['React','Tailwindcss','Redux','Stripe',`formik`,`Yup`,`tanstack-query`,`Swiper`],
      live: 'https://freshcart-flax-gamma.vercel.app/',
      repo: 'https://github.com/khaled955/freshcart',
      image:ecommerce,
    },
    {
      title: 'User-Managment-System',
      description: 'Role based managment platform',
      tech: ['React','Tailwindcss','formik','Yup',`tsparticles`,`hero-icons`],
      live: 'https://usermanagmentsystem.vercel.app/',
      repo: 'https://github.com/khaled955/usermanagmentsystem',
      image:usermanagment,
    },
    {
      title: 'Product-Managment-System',
      description: 'Crude Project For Create Products And Retrive And Delete And Updates',
      tech: ['Javascript','Bootstrap'],
      live: 'https://khaled955.github.io/CRUD-project/',
      repo: 'https://github.com/khaled955/CRUD-project',
      image:product,
    },
    {
      title: 'Template -4-Elzero',
      description: ' Static Dashboard Website From Multi-pages',
      tech: ['Html','Css',`Font-awesome`],
      live: 'https://khaled955.github.io/templatefour/',
      repo: 'https://github.com/khaled955/templatefour',
      image:templatefour,
    },
    {
      title: 'Template-3-Elzero',
      description: 'Static Website By Html , Css , Font-awesome.',
      tech: ['Html','Css','Font-awesome'],
      live: 'https://khaled955.github.io/templatethree/',
      repo: 'https://github.com/khaled955/templatethree',
      image:templatethree,
    },

 

    {
      title: 'Rent-car',
      description: 'Gallery Website For Cars',
      tech: ['React','Tailwindcss','Typescript',`react-hot-toast`,`Swiper`],
      live: 'https://rentcar-rose.vercel.app/',
      repo: 'https://github.com/khaled955/Rentcar',
      image:rentcar,
    },

    {
      title: 'Jackson-Portifolio',
      description: 'Static Portifolio Website With Slider',
      tech: ['React','Tailwindcss','Typescript',`flowbite-react`],
      live: 'https://portifolio-tau-one-28.vercel.app/',
      repo: 'https://github.com/khaled955/portifolio',
      image:portifolio,
    },

    {
      title: 'Yummy',
      description: 'Website For Display Foods And Its Ingriedient And Recipies',
      tech: ['Html',`Css`,'Bootstrap','Javascript'],
      live: 'https://khaled955.github.io/Yummy/',
      repo: 'https://github.com/khaled955/Yummy',
      image:yummy,
    },
    {
      title: 'Egyptian-Party',
      description: 'Static Website that display counter for party time by using Jquery',
      tech: ['Html',`Css`,'Bootstrap','Javascript',`JQuery`],
      live: 'https://khaled955.github.io/EgyptianParty/',
      repo: 'https://github.com/khaled955/EgyptianParty',
      image:egypt,
    },

    {
      title: 'Weather-App',
      description: 'Website that display Weather Status And Search By City With Geolocation Api And Dark And Light Mood',
      tech: ['Html',`Css`,'Bootstrap','Javascript',`Geolocation-api`],
      live: 'https://khaled955.github.io/Weather-App/',
      repo: 'https://github.com/khaled955/Weather-App',
      image:weather,
    },

    {
      title: 'DevFolio-App',
      description: 'Static Website For Display Portifolio',
      tech: ['Html',`Css`,'Bootstrap',`Font-awesome`],
      live: 'https://khaled955.github.io/DevFolio-By-Route/',
      repo: 'https://github.com/khaled955/DevFolio-By-Route',
      image:devfolio,
    },

    {
      title: 'Daniels-App',
      description: 'Static Website For Display Portifolio',
      tech: ['Html',`Css`,'Bootstrap',`Font-awesome`],
      live: 'https://khaled955.github.io/Daniels-Assignment-By-Route/',
      repo: 'https://github.com/khaled955/Daniels-Assignment-By-Route',
      image:daniels,
    },

    {
      title: 'Quote-App',
      description: 'Display Random Quotes For Day',
      tech: ['Html',`Css`,'Javascript',`Font-awesome`],
      live: 'https://khaled955.github.io/Quote-App/',
      repo: 'https://github.com/khaled955/Quote-App',
      image:quote,
    },

    {
      title: 'BookMarker-App',
      description: 'Website For Bookmarker Import Websites and validation ',
      tech: ['Html',`Css`,'Javascript',`Font-awesome`,`Bootstrap`],
      live: 'https://khaled955.github.io/BookMarker-App/',
      repo: 'https://github.com/khaled955/BookMarker-App',
      image:bookmarker,
    },
    {
      title: 'Smart-login-system',
      description: 'Static Website Using Login And Sign Up By localstorage',
      tech: ['Html',`Css`,'Javascript',`Font-awesome`,`Bootstrap`],
      live: 'https://khaled955.github.io/smart-login-system/',
      repo: 'https://github.com/khaled955/smart-login-system',
      image:smartlogin,
    },
    {
      title: 'Osaka-Landing-page',
      description: 'Static Website to display Portifolio',
      tech: ['Html',`Css`,'Javascript',`Font-awesome`,`Tailwindcss`,`jQuery`],
      live: 'https://khaled955.github.io/Osaka/',
      repo: 'https://github.com/khaled955/Osaka',
      image:osaka,
    },
    {
      title: 'Special-Template-Elzero-Landing-page',
      description: 'Static Website to display Portifolio',
      tech: ['Html',`Css`,'Javascript',`Font-awesome`,`Bootstrap`],
      live: 'https://khaled955.github.io/Special-Template-Elzero/',
      repo: 'https://github.com/khaled955/Special-Template-Elzero',
      image:specialTemplate,
    },










  ] as Project[],
}
