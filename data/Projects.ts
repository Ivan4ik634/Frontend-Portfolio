import { ProjectT } from '@/types/project';

export const Projects: ProjectT[] = [
  {
    title: 'Telegram Clone',
    image: '/projects/chat.png',
    description:
      'A real-time chat application inspired by Telegram. Features include messaging, online status, photo sharing, chat deletion.',
    link: 'https://white-chat-ten.vercel.app/home',
    tags: ['TypeScript', 'FullStack', 'Nest.js', 'Socket.io', 'Next.js', 'React', 'MongoDB'],
  },
  {
    title: 'Documentation Library',
    image: '/projects/documentation.png',
    description:
      'A custom React hooks library showcasing reusable hooks with examples. Built with TypeScript, Next.js, and TailwindCSS for a modern developer experience.',
    link: 'https://docs-react-hooks-lib.vercel.app',
    tags: ['TypeScript', 'Next.js', 'React', 'TailwindCSS'],
  },
  {
    title: 'Netflix Clone',
    image: '/projects/white-netflix.png',
    description:
      'A Netflix-inspired web application built with modern technologies, focused on clean UI and smooth user experience. The platform allows users to browse movies, view details, and explore categorized content. It features dynamic routing, responsive design, and optimized performance for fast navigation. This project demonstrates skills in frontend architecture, state management, and building scalable user interfaces similar to real-world streaming platforms.',
    link: 'https://white-netflix.vercel.app',
    tags: ['Next.js', 'React', 'TypeScript', 'Supabase', 'TailwindCSS'],
  },
  {
    title: 'Miro Clone',
    image: '/projects/white-miro.png',
    description:
      'An online collaborative whiteboard app similar to Miro. Includes real-time collaboration, board management, and Stripe integration.',
    link: 'https://white-miro.vercel.app',
    tags: [
      'TypeScript',
      'FullStack',
      'Nest.js',
      'Socket.io',
      'Next.js',
      'React',
      'Stripe Checkout',
      'MongoDB',
      'TailwindCSS',
    ],
  },
];
