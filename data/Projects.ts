import { ProjectT } from '@/types/project';

export const Projects: ProjectT[] = [
  {
    title: 'Claro',
    image: '/projects/claro.png',
    description:
      'A collaborative whiteboard application focused on real-time teamwork, AI-powered features, and a polished user experience. Built with Next.js, TypeScript, Supabase, and modern frontend technologies.',
    link: 'https://claroapp.xyz',
    featured: true,
    tags: [
      'Next.js',
      'React',
      'Supabase',
      'TypeScript',
      'Socket.io',
      'MongoDB',
      'TailwindCSS',
      'AI',
    ],
  },
  {
    title: 'Netflix Clone',
    image: '/projects/white-netflix.png',
    description:
      'A modern streaming platform inspired by Netflix with responsive layouts, dynamic routing, and optimized performance. Built to explore scalable frontend architecture and polished user experiences.',
    link: 'https://white-netflix.vercel.app',
    github: 'https://github.com/Ivan4ik634/Frontend-White-Netflix',
    tags: ['Next.js', 'React', 'TypeScript', 'Supabase', 'TailwindCSS'],
  },

  {
    title: 'Miro Clone',
    image: '/projects/white-miro.png',
    description:
      'A collaborative online whiteboard featuring real-time synchronization, board management, and interactive canvas tools. Includes authentication, Stripe integration, and a scalable full-stack backend.',
    link: 'https://white-miro.vercel.app',
    github: 'https://github.com/Ivan4ik634/Frontend-White-Miro',
    tags: [
      'Next.js',
      'React',
      'NestJS',
      'Socket.io',
      'MongoDB',
      'TypeScript',
      'Stripe',
      'TailwindCSS',
    ],
  },
  {
    title: 'Pizzeria Napoli',
    image: '/projects/pizzeria-napoli.png',
    description:
      'Moderne Website für eine authentische italienische Pizzeria mit Fokus auf Pizza, frische Zutaten und traditionelles Handwerk.',
    link: 'https://pizzeria-napoli-livid.vercel.app',
    github: 'https://github.com/Ivan4ik634/Frontend-Pizzeria-Napoli',
    tags: ['Web Design', 'React', 'UI/UX', 'TypeScript', 'Next.js'],
  },
  {
    title: 'Vexora Ai',
    image: '/projects/visora-ai.png',
    description:
      'Modern landing page design for a digital creative platform, with a clear focus on innovative technologies, modern aesthetics, and a high-quality user experience.',
    link: 'https://visora-ai-eosin.vercel.app',
    github: 'https://github.com/Ivan4ik634/Frontend-Visora-AiJ',
    tags: ['Web Design', 'React', 'UI/UX', 'TypeScript', 'Next.js'],
  },
];
