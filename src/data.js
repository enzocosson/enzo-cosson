export const avatar = "/images/photo-de-profile.PNG";

export const profile = {
  name: "Enzo Cosson",
  role: "Développeur fullstack, créateur de SaaS",
  location: "Paris et périphérie",
  email: "enzolemercier@gmail.com",
  phone: "+33 6 51 84 58 69",
  status: "Développeur fullstack — en recherche de CDI",
  intro:
    "Développeur fullstack fraîchement diplômé d'un Master en développement full stack, avec 4 ans d'alternance consécutifs dont les 2 dernières années chez Capgemini en mission chez FDJ UNITED. À côté, je crée des applications web en autonomie, notamment DeepEdge, un SaaS analytics pour options traders ultra complet comptant plus de 900 utilisateurs inscrits : frontend React, backend Node.js/Express et Python, gestion de paiement Stripe, WebSockets temps réel, base de données NoSQL/SQL et déploiement sur VPS cloud.",
  about:
    "Développeur fullstack fraîchement diplômé d'un Master en développement full stack, avec 4 ans d'alternance consécutifs dont les 2 dernières années chez Capgemini en mission chez FDJ UNITED. En parallèle, je crée des applications web en autonomie, notamment DeepEdge, un SaaS analytics pour options traders ultra complet : frontend React/Redux, backend Node.js/Express et Python, gestion de paiement Stripe, WebSockets temps réel, base de données NoSQL/SQL et déploiement sur VPS cloud. Mon SaaS compte plus de 900 utilisateurs inscrits et près de 60 000 lignes de code. Passionné par le design, la data viz et la performance, je cherche à contribuer sur des projets complexes et ambitieux.",
};

export const projects = [
  {
    id: "deepedge",
    title: "DeepEdge",
    tags: "SaaS Fullstack, Trading d'option",
    year: "2025",
    description:
      "Terminal de trading SaaS développé de A à Z : landing, authentification, abonnements Stripe, visualisation avancée des données options, journal de trading et connecteurs vers des outils tiers. Plus de 900 utilisateurs inscrits et près de 60 000 lignes de code.",
    technologies: [
      "React 19",
      "Node.js",
      "Express",
      "MongoDB",
      "WebSocket",
      "Python",
      "Stripe",
      "Tailwind",
      "Three.js",
    ],
    link: "https://deepedge.fr",
    image: "/images/creations/deepedge-couverture.png",
  },
  {
    id: "fdj-united",
    title: "FDJ UNITED — Capgemini",
    tags: "Fullstack, React",
    year: "2024 - 2026",
    description:
      "Contrat d'apprentissage chez Capgemini en mission chez FDJ UNITED, dans le cadre de mon Master Développement Full Stack (diplôme obtenu). Développement de l'interface « Compte Joueur » de la FDJ en React.js : nouvelles fonctionnalités, corrections de bugs, refactoring, optimisation du code et contributions back-end au sein d'une équipe agile.",
    technologies: ["React.js", "Redux", "Figma", "Directus", "GitLab", "Jira"],
    image: "/images/fdj-website.png",
  },
  {
    id: "the-hidden-society",
    title: "The Hidden Society",
    tags: "Creative Development, Landing Page",
    year: "2024",
    description:
      "Landing page immersive à fort caractère visuel, conçue pour promouvoir des services autour du trading. Expérience en creative development : transitions marquantes, typographies affirmées et animations travaillées pour capter l'attention et guider vers la formation aux concepts de trading.",
    technologies: ["React.js", "GSAP", "Three.js", "Sass"],
    link: "https://thehiddensociety.vercel.app/",
    image: "/images/creations/the-hidden-society/ths.png",
  },
  {
    id: "drugoptimal",
    title: "DrugOptimal",
    tags: "Front End, IA, e-santé",
    year: "2023",
    description:
      "Premier soutien de l'infirmier face à l'erreur médicamenteuse. Application React permettant de lutter contre les incompatibilités physico-chimiques et de fournir des recommandations d'utilisation des médicaments. Le produit intègre des modèles d'IA pour générer des possibilités d'administration et éviter les interactions dangereuses.",
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "IA / LLM",
    ],
    image: "/images/new-drugoptimal-website.png",
  },
  {
    id: "cottages",
    title: "Les Cottages du Belvédère",
    tags: "Front End, 3D",
    year: "2024",
    description:
      "Environnement 3D immersif et réaliste reproduisant le cadre du cottage du Belvédère. L'utilisateur peut cliquer sur les cottages pour obtenir des informations détaillées, explorer l'intérieur via des scans 3D et être redirigé vers le site de réservation.",
    technologies: [
      "React Js",
      "Three Js",
      "React Three Fiber",
      "Sass",
      "Blender",
      "gsap",
    ],
    image: "/images/creations/cottages.webp",
  },
  {
    id: "typster",
    title: "Typster",
    tags: "Front End, Interactive",
    year: "2023",
    description:
      "Application interactive pour améliorer la vitesse de frappe au clavier. Interface intuitive avec suivi des progrès, statistiques détaillées et classement en ligne.",
    technologies: [
      "React Js",
      "Three Js",
      "Sass",
      "Blender",
      "gsap",
      "Voiceflow",
      "Vercel",
    ],
    image: "/images/creations/typster.webp",
  },
  {
    id: "ferrari",
    title: "Ferrari",
    tags: "Front End, 3D",
    year: "2024",
    description:
      "Vitrine interactive pour la marque Ferrari. Découverte des modèles dans un environnement 3D captivant avec animations dynamiques du modèle 3D pilotées par GSAP.",
    technologies: [
      "React Js",
      "Three Js",
      "React Three Fiber",
      "Sass",
      "Blender",
      "gsap",
    ],
    image: "/images/creations/ferrari.webp",
  },
  {
    id: "flexbank",
    title: "Flexbank",
    tags: "Front End, Animation",
    year: "2024",
    description:
      "Animation dynamique d'une carte bancaire au scroll en combinant GSAP et Three.js. React Three Fiber apporte des éléments 3D interactifs tandis que GSAP gère les transitions avec précision.",
    technologies: [
      "React Js",
      "Three Js",
      "React Three Fiber",
      "Sass",
      "Blender",
      "gsap",
    ],
    image: "/images/creations/flexbank.webp",
  },
  {
    id: "netflix",
    title: "Netflix",
    tags: "Front End & Back End",
    year: "2024",
    description:
      "Reconstitution universitaire d'un site de streaming complet. Navigation dans une base de données de films, découverte de contenus et gestion des préférences de visionnage.",
    technologies: ["Vue Js", "Symfony", "API Platform", "Sass", "Docker"],
    image: "/images/creations/netflix.webp",
  },
];

export const services = [
  "Développement fullstack React / Vue / Node.js",
  "Développement back-end Node.js / Python",
  "Architecture SaaS & API REST",
  "Intégration 3D WebGL / Three.js",
  "Design UI & animations GSAP",
  "Déploiement cloud & DevOps",
];

export const tools = [
  { name: "React", role: "Frontend UI", icon: "react" },
  { name: "TypeScript", role: "Langage typé", icon: "typescript" },
  { name: "JavaScript", role: "Langage web", icon: "javascript" },
  { name: "HTML5", role: "Structure web", icon: "html" },
  { name: "CSS3", role: "Style web", icon: "css" },
  { name: "Sass", role: "CSS avancé", icon: "sass" },
  { name: "Tailwind CSS", role: "Framework CSS", icon: "tailwind" },
  { name: "Redux", role: "State management", icon: "redux" },
  { name: "Next.js", role: "Framework React", icon: "nextjs" },
  { name: "Three.js", role: "3D WebGL", icon: "threejs" },
  { name: "Node.js", role: "Backend JS", icon: "nodejs" },
  { name: "Express", role: "API Node.js", icon: "express" },
  { name: "Python", role: "Scripts & data", icon: "python" },
  { name: "MongoDB", role: "Base NoSQL", icon: "mongodb" },
  { name: "WebSocket", role: "Temps réel", icon: "websocket" },
  { name: "Docker", role: "Containérisation", icon: "docker" },
  { name: "Git", role: "Versioning", icon: "git" },
  { name: "GitHub", role: "Repo & CI/CD", icon: "github" },
  { name: "GitLab", role: "Repo & CI/CD", icon: "gitlab" },
  { name: "Jira", role: "Gestion de projet", icon: "jira" },
  { name: "Stripe", role: "Paiements", icon: "stripe" },
  { name: "Directus", role: "Headless CMS", icon: "directus" },
  { name: "Vercel", role: "Déploiement", icon: "vercel" },
  { name: "Figma", role: "Design UI/UX", icon: "figma" },
  { name: "Photoshop", role: "Retouche photo", icon: "photoshop" },
  { name: "Illustrator", role: "Graphisme vectoriel", icon: "illustrator" },
  { name: "Blender", role: "Modélisation 3D", icon: "blender" },
  { name: "Canva", role: "Design rapide", icon: "canva" },
  { name: "VS Code", role: "Éditeur de code", icon: "vscode" },
  { name: "Claude Code", role: "Assistant IA", icon: "claude" },
  { name: "Voiceflow", role: "Chatbots / IA", icon: "voiceflow" },
  { name: "WordPress", role: "CMS", icon: "wordpress" },
  { name: "Webflow", role: "No-code web", icon: "webflow" },
];

export const experiences = [
  {
    id: "fdj-capgemini",
    role: "Développeur fullstack en alternance",
    company: "Capgemini — Mission FDJ UNITED",
    contract: "Apprentissage Master Développement Full Stack",
    location: "Ville de Paris",
    type: "Sur site",
    startDate: "2024-09",
    endDate: "2026-08",
    description:
      "Contrat d'apprentissage chez Capgemini en mission chez FDJ UNITED, dans le cadre de ma formation Master Développement Full Stack (diplôme obtenu). Contribution au développement de l'interface « Compte Joueur » de la FDJ en React.js : nouvelles fonctionnalités, corrections de bugs, refactoring, optimisation du code et évolutions back-end. Collaboration avec les développeurs, Product Owners et QA via un stack moderne incluant React, Redux, Figma, Directus CMS, GitLab et Jira.",
    skills: ["React.js", "Redux", "Node.js", "Figma", "Directus", "GitLab", "Jira"],
    image: "/images/capgemini.png",
  },
  {
    id: "deepedge",
    role: "Founder & CEO",
    company: "DeepEdge",
    contract: "Indépendant",
    location: "France",
    type: "Sur site",
    startDate: "2024-09",
    endDate: null,
    description:
      "SaaS analytics terminal for active options traders on indices and futures. GEX Levels, Multi-Greek analysis, Live Signals, Market Terminal, Chart Live, Options Chain, heatmaps, 3D IV Smile Surface et extension Chrome pour TradingView.",
    skills: [
      "React.js",
      "Node.js",
      "WebSocket",
      "Python",
      "Stripe",
      "MongoDB",
      "Sass",
      "Directus",
    ],
    image: "/images/deepedge.png",
    link: "https://deepedge.fr",
  },
  {
    id: "drugoptimal",
    role: "Développeur front-end / fullstack",
    company: "DrugOptimal",
    contract: "Contrat en alternance",
    location: "Ville de Paris, Île-de-France, France",
    type: "Hybride",
    startDate: "2022-10",
    endDate: "2024-09",
    description:
      "Développement d'interfaces web et mobiles pour une solution e-santé, avec un fort focus sur l'expérience utilisateur et la performance.",
    skills: ["React.js", "TypeScript", "Next.js", "Tailwind CSS"],
    image: "/images/drugoptimal.png",
  },
];

export const education = [
  {
    id: "iim",
    degree: "Master - Développeur Full Stack",
    school: "IIM Digital School",
    startDate: "2024-03",
    endDate: "2026-08",
  },
  {
    id: "iut",
    degree: "BUT, MMI",
    school: "IUT Troyes",
    startDate: "2021-09",
    endDate: "2024-07",
  },
  {
    id: "lycee-jules",
    degree: "Baccalauréat",
    school: "Lycée Jules Ferry",
    startDate: "2019-09",
    endDate: "2021-07",
  },
  {
    id: "lycee-sainte",
    degree: "Brevet des collèges",
    school: "Lycée Sainte-Thérèse Rambouillet",
    startDate: "2017-09",
    endDate: "2019-07",
  },
];

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/enzo-cosson/",
  github: "https://github.com/zeno-nq",
  instagram: "https://www.instagram.com/enzo_cosson/",
};
