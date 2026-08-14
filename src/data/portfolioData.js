export const personalInfo = {
  name: "Julio Cesar",
  welcomeTitle: "Bem-vindo ao meu portfólio",
  profession: "Full Stack Developer",
  summary: "Construindo soluções digitais inovadoras e experiência web incríveis. Transformando ideias em código limpo e escalável.",
  city: "Blumenau",
  state: "SC",
  email: "j.vanz1108@gmail.com",
  phone: "47992449745",
  linkedin: "https://www.linkedin.com/in/juliocesarvanz/",
  github: "https://github.com/Jcvanz",
  cvUrl: "/Curriculo_Julio_Cesar.pdf",
  cvName: "Curriculo_Julio_Cesar.pdf",
  systemStatus: ["Javascript", "Typescript", "PHP", "Laravel", "ReactJS", "NextJS", "NodeJS"],
  aboutText: [
    "Desenvolvedor Fullstack com +2 anos de experiência e graduando em Ciência da Computação na FURB. Focado na criação de aplicações web escaláveis, eficientes e de alta performance.",
    "Especialista no ecossistema PHP/Laravel e no front-end moderno com React, Next.js e TypeScript. Possuo ampla vivência em E-commerce, desenvolvimento de APIs complexas e integração com plataformas como Shopify, Tray e Nuvemshop.",
    "Com histórico prévio no Direito e setor público, aplico uma forte capacidade analítica para interpretar regras de negócio complexas e transformá-las em software robusto.",
  ],
  softSkills: [
    "Resolução de Problemas",
    "Pensamento Analítico",
    "Foco em Performance",
    "Trabalho em Equipe",
    "Clean Code"
  ]
};

export const coreStacks = [
  { id: 1, name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { id: 2, name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { id: 3, name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
  { id: 4, name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { id: 5, name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { id: 6, name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { id: 7, name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { id: 8, name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { id: 9, name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { id: 10, name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { id: 11, name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { id: 12, name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { id: 13, name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" }
];

export const skillsRadarData = {
  labels: ['Backend', 'Frontend', 'DevOps & Cloud', 'Banco de Dados', 'Arquitetura', 'Soft Skills'],
  values: [60, 85, 55, 55, 70, 70]
};

export const experiencesData = [
  {
    id: 1,
    empresa: "Wehsoft Sistemas",
    cargo: "Desenvolvedor Full Stack",
    periodo: "Abr 2024 - Atual",
    local: "Blumenau, SC (Remoto)",
    tipo: "Tempo Integral",
    tecnologias: ["Laravel", "PHP", "React", "JavaScript", "Node.js", "Tailwind CSS", "MySQL", "E-commerce platforms"],
    descricao: "Desenvolvimento de aplicações web fullstack utilizando React, Next.js, TypeScript e PHP/Laravel, atuando na criação de interfaces administrativas, páginas de produto e integrações entre sistemas.\nConstrução e otimização de lojas virtuais em Shopify, Tray e Nuvemshop, implementando componentes customizados, carrosséis, vitrines e melhorias focadas em performance e conversão.\nIntegração de APIs REST para automações e sincronização de dados, além de manutenção e evolução de sistemas em produção."
  },
  {
    id: 2,
    empresa: "Foro da Comarca de São José do Ouro",
    cargo: "Estagiário Direito",
    periodo: "Fev 2022 - Out 2022",
    local: "São José do Ouro, RS",
    tipo: "Meio Período",
    tecnologias: [],
    descricao: "Redação e revisão de sentenças cíveis, desenvolvendo raciocínio analítico, atenção a detalhes e precisão na comunicação escrita.\nAtuação colaborativa com equipe multidisciplinar de servidores e estagiários, contribuindo para a organização de fluxos de trabalho e cumprimento de prazos em ambiente de alta demanda."
  },
  {
    id: 3,
    empresa: "Prefeitura de São José do Ouro",
    cargo: "Estagiário Administração",
    periodo: "Jan 2021 - Dez 2021",
    local: "São José do Ouro, RS",
    tipo: "Meio Período",
    tecnologias: [],
    descricao: "Responsável pelo lançamento e controle de notas fiscais, garantindo precisão e organização nos registros administrativos do setor.\nAtendimento ao público e suporte operacional em múltiplos setores, desenvolvendo comunicação clara e capacidade de adaptação a demandas variadas.\nAssumia a responsabilidade pelo setor durante ausência da servidora titular, demonstrando confiança da equipe e capacidade de gestão independente desde o início da carreira."
  },
  
];

export const githubStatsData = {
  repositories: 28,
  stars: 45,
  followers: 24,
  topLanguage: "TypeScript",
  languages: [
    { name: "TypeScript", percentage: 45, color: "#3178c6" },
    { name: "JavaScript", percentage: 30, color: "#f7df1e" },
    { name: "HTML/CSS", percentage: 15, color: "#22d3ee" },
    { name: "Outros", percentage: 10, color: "#a855f7" }
  ]
};

export const projectsData = [
  {
    id: 1,
    title: "Zero Tools",
    description: "ZeroTools é mais que um site, é uma caixa de ferramentas com 14 utilitários essenciais (como removedor de fundo com IA, compressores de imagens/PDF e gerador de QR Code) que executa 100% no navegador do usuário. Projetado com uma filosofia zero-backend, garante privacidade total dos arquivos processando tudo via WebAssembly e Web APIs nativas.",
    image: "/fotos/zeroTools.png",
    tags: ["React", "TypeScript", "Deploy - Vercel", "Vite"],
    link: "https://www.myzerotools.online/"
  },
  {
    id: 2,
    title: "Task Sync - Entra21",
    description: "Desenvolvido como TCC no curso de React Native do programa Entra21 por uma equipe de 3 desenvolvedores, o Task Sync é um aplicativo focado na organização e delegação de tarefas em equipe. A solução nasceu da nossa vivência prática sobre a importância da clareza de papéis, priorizando uma prototipagem funcional e recursos essenciais para simplificar a gestão e produtividade de times.",
    image: "/fotos/taskSync.png",
    tags: ["React Native", "JavaScript", "Firebase", "Expo"],
    link: "https://github.com/Jcvanz/Entra21-TCC"
  },
];
