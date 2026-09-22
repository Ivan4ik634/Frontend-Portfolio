import { Database, Globe, ServerIcon, Wrench } from 'lucide-react';

export const skillsData = [
  {
    titleKey: 'frontend',
    icon: Globe,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
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
    titleKey: 'backend',
    icon: Database,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    items: ['Nest.js', 'Supabase', 'Node.js', 'JWT', 'Livekit', 'SendGrid', 'Cloudinary', 'Bcrypt'],
  },
  {
    titleKey: 'deploy',
    icon: ServerIcon,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    items: ['Vercel', 'Render', 'Railway'],
  },
  {
    titleKey: 'tools',
    icon: Wrench,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    items: ['TypeScript', 'MongoDB', 'Git', 'VSCode', 'Socket.io', 'SEO'],
  },
];
export const skillsHoverData = {
  frontend: [
    {
      title: 'Next.js',
      descriptionKey: 'nextjs',
      logo: 'https://nextjs.org/favicon.ico',
    },
    {
      title: 'React',
      descriptionKey: 'react',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    },
    {
      title: 'Zustand',
      descriptionKey: 'zustand',
      logo: 'https://zustand-demo.pmnd.rs/favicon.ico',
    },
    {
      title: 'TailwindCSS',
      descriptionKey: 'tailwind',
      logo: 'https://tailwindcss.com/favicon.ico',
    },
    {
      title: 'React-Query',
      descriptionKey: 'reactQuery',
      logo: 'https://tanstack.com/favicon.ico',
    },
    {
      title: 'React-Hook-Form',
      descriptionKey: 'reactHookForm',
      logo: '',
    },
    {
      title: 'Axios',
      descriptionKey: 'axios',
      logo: 'https://www.axios.com/favicon.ico',
    },
    {
      title: 'Framer Motion',
      descriptionKey: 'framerMotion',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Framer_Motion_logo.svg',
    },
  ],
  backend: [
    {
      title: 'Nest.js',
      descriptionKey: 'nestjs',
      logo: 'https://nestjs.com/logo-small-gradient.0ed287ce.svg',
    },
    {
      title: 'Supabase',
      descriptionKey: 'supabase',
      logo: 'https://supabase.com/_next/image?url=https%3A%2F%2Ffrontend-assets.supabase.com%2Fwww%2F69bbbd1ebf42%2F_next%2Fstatic%2Fmedia%2Flogo-preview.50e72501.jpg&w=3840&q=75',
    },
    {
      title: 'Node.js',
      descriptionKey: 'nodejs',
      logo: 'https://nodejs.org/static/images/favicons/favicon.png',
    },
    {
      title: 'JWT',
      descriptionKey: 'jwt',
      logo: 'https://www.jwt.io/favicon.ico',
    },
    {
      title: 'Livekit',
      descriptionKey: 'livekit',
      logo: 'https://livekit.io/favicon.ico',
    },
    {
      title: 'SendGrid',
      descriptionKey: 'sendgrid',
      logo: 'https://www.sendgrid.com/favicon.ico',
    },
    {
      title: 'Cloudinary',
      descriptionKey: 'cloudinary',
      logo: 'https://cloudinary.com/favicon.ico',
    },
    {
      title: 'Bcrypt',
      descriptionKey: 'bcrypt',
      logo: '',
    },
  ],
  deploy: [
    {
      title: 'Vercel',
      descriptionKey: 'vercel',
      logo: 'https://vercel.com/favicon.ico',
    },
    {
      title: 'Render',
      descriptionKey: 'render',
      logo: 'https://render.com/favicon.ico',
    },
    {
      title: 'Railway',
      descriptionKey: 'railway',
      logo: 'https://railway.app/favicon.ico',
    },
  ],
  tools: [
    {
      title: 'TypeScript',
      descriptionKey: 'typescript',
      logo: 'https://www.typescriptlang.org/favicon.ico',
    },
    {
      title: 'MongoDB',
      descriptionKey: 'mongodb',
      logo: 'https://www.mongodb.com/favicon.ico',
    },
    {
      title: 'Git',
      descriptionKey: 'git',
      logo: 'https://git-scm.com/favicon.ico',
    },
    {
      title: 'VSCode',
      descriptionKey: 'vscode',
      logo: 'https://code.visualstudio.com/favicon.ico',
    },
    {
      title: 'Socket.io',
      descriptionKey: 'socketio',
      logo: 'https://socket.io/images/logo-dark.svg',
    },
    {
      title: 'SEO',
      descriptionKey: 'seo',
      logo: '',
    },
  ],
};
