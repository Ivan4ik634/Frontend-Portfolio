import uk from './uk';

type DictionaryShape<T> = {
  [Key in keyof T]: T[Key] extends object ? DictionaryShape<T[Key]> : string;
};

const en: DictionaryShape<typeof uk> = {
  metadata: {
    title: 'Ivan | Portfolio',
    description: 'Full-stack developer portfolio for product-focused web applications.',
  },
  navigation: {
    home: 'Home',
    about: 'About',
    stack: 'Stack',
    projects: 'Projects',
    contact: 'Contact',
    menu: 'Menu',
  },
  language: {
    label: 'Language',
    ukrainian: 'Українська',
    english: 'English',
  },
  theme: {
    switchToDark: 'Switch to dark mode',
    switchToLight: 'Switch to light mode',
  },
  hero: {
    eyebrow: 'Full-stack developer for polished digital products',
    title: 'Building clean, fast web products with founder-level taste.',
    description:
      'I am Ivan, a full-stack developer focused on modern interfaces, strong architecture, and product details that make applications feel calm, premium, and ready to scale.',
    viewProjects: 'View projects',
    contact: 'Contact',
    portraitAlt: 'Ivan portrait',
    products: 'Products',
    stack: 'Stack',
    focused: 'Focus',
  },
  portfolio: {
    eyebrow: 'Featured projects',
    title: 'Premium builds with real product depth.',
    description:
      'Selected work across full-stack systems, product interfaces, collaboration tools, and developer experience.',
    featured: 'Featured',
    liveDemo: 'Live Demo',
    previewAlt: 'Preview of {{title}} project',
    projectDescriptions: {
      claro:
        'A collaborative whiteboard for real-time teamwork with AI-powered features and a polished user experience. Built with Next.js, TypeScript, Supabase, and modern frontend technologies.',
      netflix:
        'A modern streaming platform inspired by Netflix, with responsive layouts, dynamic routing, and optimized performance.',
      miro: 'A collaborative online whiteboard with real-time synchronization, board management, and interactive tools. Includes authentication, Stripe integration, and a scalable full-stack backend.',
      pizzeria:
        'A modern website for an authentic Italian pizzeria, focused on pizza, fresh ingredients, and traditional craftsmanship.',
      vexora:
        'A modern landing page for a digital creative platform, focused on innovative technology, contemporary aesthetics, and a high-quality user experience.',
    },
  },
  about: {
    eyebrow: 'About',
    title: 'Product-minded engineering with a sharp eye for interface quality.',
    firstParagraph:
      'I build full-stack applications from the first product idea to the deployed interface. My work balances clean UI, maintainable architecture, fast feedback loops, and the small details that make software feel trustworthy.',
    secondParagraph:
      'I enjoy creating products from scratch, improving system structure, and turning complex workflows into calm, readable experiences for users.',
  },
  skills: {
    eyebrow: 'Tech stack',
    title: 'Tools I use to ship complete products.',
    description:
      'Modern frontend, backend, deployment, and product tooling in one focused workflow.',
    categories: { frontend: 'Frontend', backend: 'Backend', deploy: 'Deployment', tools: 'Tools' },
    descriptions: {
      nextjs: 'A React framework for server-side rendering and static website generation.',
      react: 'A JavaScript library for building user interfaces, developed by Facebook.',
      zustand: 'A minimal and fast state management library for React.',
      tailwind: 'A utility-first CSS framework for creating custom designs.',
      reactQuery: 'A data fetching and state management library.',
      reactHookForm:
        'A library for handling React forms with validation and state management support.',
      axios: 'A promise-based HTTP client for making requests.',
      framerMotion: 'A library for animations in React.',
      nestjs:
        'A progressive Node.js framework for building efficient and scalable server-side applications.',
      supabase: 'Backend infrastructure built with a scalable open-source alternative to Firebase.',
      nodejs: 'A JavaScript runtime powered by V8 for building scalable network applications.',
      jwt: 'An open standard for securely transmitting information between parties as JSON.',
      livekit: 'A platform for building live video and audio applications.',
      sendgrid: 'A cloud email delivery service for transactional and marketing messages.',
      cloudinary: 'A cloud service for managing and delivering images and videos.',
      bcrypt: 'A library for securely hashing passwords in Node.js applications.',
      vercel: 'A platform for frontend frameworks and static sites, optimized for Next.js.',
      render: 'A cloud platform for deploying applications and websites.',
      railway: 'A platform for deploying and managing apps with minimal configuration.',
      typescript: 'A superset of JavaScript that adds static typing.',
      mongodb: 'A NoSQL database with a document-oriented data model.',
      git: 'A version control system for tracking changes in source code.',
      vscode: 'A free, open-source code editor from Microsoft for web development.',
      socketio: 'A library for real-time web applications with bidirectional communication.',
      seo: 'Search engine optimization: the process of improving a website’s ranking in search results.',
    },
  },
  footer: {
    eyebrow: 'Contact',
    title: 'Have a product idea or a serious interface to build?',
    description:
      'I am open to full-stack product work, founder-style prototypes, and modern web applications where the user experience matters.',
    contactMe: 'Contact me',
    navigation: 'Navigation',
    social: 'Social',
    copyright: '© Designed & developed by Ivan.',
  },
};

export default en;
