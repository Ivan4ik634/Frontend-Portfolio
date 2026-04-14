import { Database, Globe, ServerIcon, Wrench } from 'lucide-react';

export const skillsData = [
  {
    title: 'Frontend',
    icon: Globe,
    color: 'text-red-400',
    bg: 'bg-red-400/50',
    items: [
      'Next.js',
      'React',
      'Zustand',
      'TailwindCSS',
      'React-Query',
      'React-Hook-form',
      'Axios',
      'Framer Motion',
    ],
  },
  {
    title: 'Backend',
    icon: Database,
    color: 'text-red-400',
    bg: 'bg-red-400/50',
    items: ['Nest.js', 'Supabase', 'Node.js', 'JWT', 'Livekit', 'SendGrid', 'Cloudinary', 'Bcrypt'],
  },
  {
    title: 'Deploy',
    icon: ServerIcon,
    color: 'text-red-400',
    bg: 'bg-red-400/50',
    items: ['Vercel', 'Render', 'Raiway'],
  },
  {
    title: 'Tools',
    icon: Wrench,
    color: 'text-red-400',
    bg: 'bg-red-400/50',
    items: ['TypeScript', 'MongoDB', 'Git', 'VSCode', 'Socket.io', 'SEO'],
  },
];
export const skillsHoverData = {
  frontend: [
    {
      title: 'Next.js',
      description: 'A React framework for server-side rendering and static website generation.',
      logo: 'https://nextjs.org/favicon.ico',
    },
    {
      title: 'React',
      description: 'A JavaScript library for building user interfaces, developed by Facebook.',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    },
    {
      title: 'Zustand',
      description: 'A minimal and fast state management library for React.',
      logo: 'https://zustand-demo.pmnd.rs/favicon.ico',
    },
    {
      title: 'TailwindCSS',
      description: 'A utility-first CSS framework for creating custom designs.',
      logo: 'https://tailwindcss.com/favicon.ico',
    },
    {
      title: 'React-Query',
      description: 'A data fetching and state management library for React.',
      logo: 'https://tanstack.com/favicon.ico',
    },
    {
      title: 'React-Hook-Form',
      description:
        'A library for handling forms in React, supporting validation and state management.',
      logo: '',
    },
    {
      title: 'Axios',
      description: 'A promise-based HTTP client for JavaScript, used to make HTTP requests.',
      logo: 'https://www.axios.com/favicon.ico',
    },
    {
      title: 'Framer Motion',
      description: 'A library for animations in React.',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Framer_Motion_logo.svg',
    },
  ],
  backend: [
    {
      title: 'Nest.js',
      description:
        'A progressive Node.js framework for building efficient and scalable server-side applications.',
      logo: 'https://nestjs.com/logo-small-gradient.0ed287ce.svg',
    },
    {
      title: 'Supabase',
      description:
        'Implemented backend infrastructure using Supabase as a scalable open-source alternative to Firebase.',
      logo: 'https://supabase.com/_next/image?url=https%3A%2F%2Ffrontend-assets.supabase.com%2Fwww%2F69bbbd1ebf42%2F_next%2Fstatic%2Fmedia%2Flogo-preview.50e72501.jpg&w=3840&q=75',
    },
    {
      title: 'Node.js',
      description:
        "A JavaScript runtime built on Chrome's V8 JavaScript engine for building scalable network applications.",
      logo: 'https://nodejs.org/static/images/favicons/favicon.png',
    },
    {
      title: 'JWT',
      description:
        'JSON Web Token is an open standard for securely transmitting information between parties as a JSON object.',
      logo: 'https://www.jwt.io/favicon.ico',
    },
    {
      title: 'Livekit',
      description: 'A platform for building live video and audio applications.',
      logo: 'https://livekit.io/favicon.ico',
    },
    {
      title: 'SendGrid',
      description:
        'A cloud-based email delivery service for sending transactional and marketing emails.',
      logo: 'https://www.sendgrid.com/favicon.ico',
    },
    {
      title: 'Cloudinary',
      description: 'A cloud service for managing and delivering images and videos.',
      logo: 'https://cloudinary.com/favicon.ico',
    },
    {
      title: 'Bcrypt',
      description: 'A library to hash passwords in Node.js applications securely.',
      logo: '',
    },
  ],
  deploy: [
    {
      title: 'Vercel',
      description: 'A platform for frontend frameworks and static sites, optimized for Next.js.',
      logo: 'https://vercel.com/favicon.ico',
    },
    {
      title: 'Render',
      description: 'A cloud platform for deploying applications and websites.',
      logo: 'https://render.com/favicon.ico',
    },
    {
      title: 'Railway',
      description: 'A platform for deploying and managing apps with minimal configuration.',
      logo: 'https://railway.app/favicon.ico',
    },
  ],
  tools: [
    {
      title: 'TypeScript',
      description: 'A superset of JavaScript that adds static types.',
      logo: 'https://www.typescriptlang.org/favicon.ico',
    },
    {
      title: 'MongoDB',
      description: 'A NoSQL database that uses a document-oriented data model.',
      logo: 'https://www.mongodb.com/favicon.ico',
    },
    {
      title: 'Git',
      description:
        'A version control system for tracking changes in source code during software development.',
      logo: 'https://git-scm.com/favicon.ico',
    },
    {
      title: 'VSCode',
      description: 'A free, open-source code editor developed by Microsoft for web development.',
      logo: 'https://code.visualstudio.com/favicon.ico',
    },
    {
      title: 'Socket.io',
      description:
        'A library for real-time web applications that enables bi-directional communication.',
      logo: 'https://socket.io/images/logo-dark.svg',
    },
    {
      title: 'SEO',
      description:
        'Search Engine Optimization, the process of optimizing a website to rank higher on search engines.',
      logo: '',
    },
  ],
};
