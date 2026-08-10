<div align="center">

# 🚀 Portfolio Full Stack — Julio Cesar Vanz

  <p align="center">
    <strong>Portfólio interativo e moderno construído com React 19, Vite, Tailwind CSS v4 e Chart.js.</strong>
  </p>

  <p align="center">
    <a href="https://github.com/Jcvanz/Portifolio_Julio">
      <img src="https://img.shields.io/github/stars/Jcvanz/Portifolio_Julio?style=for-the-badge&logo=github&color=06b6d4" alt="Stars">
    </a>
    <a href="https://github.com/Jcvanz/Portifolio_Julio">
      <img src="https://img.shields.io/github/forks/Jcvanz/Portifolio_Julio?style=for-the-badge&logo=github&color=3b82f6" alt="Forks">
    </a>
    <a href="https://vercel.com">
      <img src="https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel">
    </a>
    <a href="https://react.dev">
      <img src="https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React">
    </a>
    <a href="https://vite.dev">
      <img src="https://img.shields.io/badge/Vite-8.2-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
    </a>
  </p>

</div>

---

## 📖 Sobre o Projeto

Este repositório contém a aplicação web do portfólio profissional de **Julio Cesar Vanz**, Desenvolvedor Full Stack com sólida vivência em **React, TypeScript, Node.js e PHP/Laravel**.

A interface foi projetada com uma estética **Cyberpunk / Modern Dark Mode**, utilizando efeitos de *glassmorphism*, animações dinâmicas de partículas via HTML5 Canvas, gráficos interativos de radar para visualização de competências técnicas e integração com o **Vercel Analytics** para métricas de acessos em tempo real.

---

## ✨ Principais Funcionalidades

- **🌌 Background Interativo de Partículas:** Animação gráfica em tempo real desenvolvida com HTML5 Canvas (`ParticleCanvas.jsx`).
- **📊 Radar de Habilidades:** Visualização gráfica com `Chart.js` e `react-chartjs-2` destacando o nível de proficiência em Backend, Frontend, DevOps, Banco de Dados, Arquitetura e Soft Skills.
- **⚡ Tech Stack Badges:** Apresentação dinâmica das tecnologias de domínio (React, Node.js, Laravel, PHP, TypeScript, PostgreSQL, Docker, etc.).
- **💼 Seção de Experiências & Projetos:** Vitrine de cases com modal interativo de detalhes (`ProjectModal.jsx`).
- **📊 GitHub Activity Matrix:** Visualização de estatísticas do perfil do GitHub.
- **📈 Observabilidade e Métricas:** Telemetria nativa com `@vercel/analytics`.
- **📱 100% Responsivo:** Layout adaptativo para mobile, tablet e desktop desenvolvido com Tailwind CSS v4.

---

## 🛠️ Tecnologias Utilizadas

### Core & Frameworks
- **[React 19](https://react.dev/)** — Biblioteca principal para construção da interface de usuário.
- **[Vite 8](https://vite.dev/)** — Build tool ultrarrápido com Hot Module Replacement (HMR).
- **[Tailwind CSS v4](https://tailwindcss.com/)** — Framework de estilização com suporte nativo ao Vite (`@tailwindcss/vite`).

### Bibliotecas & Utilitários
- **[Chart.js](https://www.chartjs.org/) & [react-chartjs-2](https://react-chartjs-2.js.org/)** — Renderização de gráficos interativos de alta performance.
- **[Lucide React](https://lucide.dev/)** — Conjunto de ícones vetoriais modernos.
- **[Oxlint](https://oxc.rs/)** — Linter JavaScript/TypeScript de altíssima velocidade.
- **[@vercel/analytics](https://vercel.com/docs/analytics)** — Monitoramento e telemetria de tráfego.

---

## 📂 Estrutura do Projeto

```bash
portfolio/
├── public/                 # Imagens, arquivos estáticos e PDF do currículo
├── src/
│   ├── assets/             # Recursos visuais (ícones, logos)
│   ├── components/         # Componentes React modularizados
│   │   ├── AboutRadar.jsx      # Gráfico de radar com Chart.js
│   │   ├── Contact.jsx         # Formulário e informações de contato
│   │   ├── CoreStacks.jsx      # Grid de tecnologias principais
│   │   ├── Experience.jsx     # Timeline de experiências profissionais
│   │   ├── Footer.jsx          # Rodapé com redes e copyright
│   │   ├── GithubMatrix.jsx    # Seção com estatísticas do GitHub
│   │   ├── Header.jsx          # Navegação e barra superior
│   │   ├── Hero.jsx            # Apresentação inicial / Call to Action
│   │   ├── ParticleCanvas.jsx  # Animação Canvas interativa de fundo
│   │   ├── ProjectModal.jsx    # Modal de detalhes de projetos
│   │   └── Projects.jsx        # Grid de projetos em destaque
│   ├── data/
│   │   └── portfolioData.js    # Fonte única de dados da aplicação
│   ├── App.css             # Estilos globais adicionais
│   ├── App.jsx             # Estrutura principal da aplicação e Analytics
│   ├── index.css           # Configuração do Tailwind CSS
│   └── main.jsx            # Ponto de entrada do React DOM
├── .gitignore
├── index.html
├── package.json
├── README.md
├── vercel.json             # Configurações de deploy e SPA Rewrites da Vercel
└── vite.config.js          # Configurações do Vite
```

---

## ⚡ Como Rodar o Projeto Localmente

### Pré-requisitos
- **[Node.js](https://nodejs.org/)** (v18 ou superior)
- **[npm](https://www.npmjs.com/)** ou **yarn** / **pnpm**

### Passo a passo

1. **Clone o repositório:**
   ```bash
   git clone git@github.com-pessoal:Jcvanz/Portifolio_Julio.git
   ```
2. **Navegue até a pasta do projeto:**
   ```bash
   cd portfolio
   ```
3. **Instale as dependências:**
   ```bash
   npm install
   ```
4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
5. Acesse a URL indicada no terminal (ex: `http://localhost:5173`).

---

## 🌐 Deploy na Vercel

O projeto está otimizado para deploy automático na **[Vercel](https://vercel.com)** através do arquivo `vercel.json` na raiz do repositório:

```json
{
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Passos para Deploy

1. Conecte sua conta do GitHub à Vercel.
2. Importe o repositório `Jcvanz/Portifolio_Julio`.
3. A Vercel detectará automaticamente as configurações do Vite (`npm run build` & pasta `dist`).
4. Clique em **Deploy**.

---

## 📬 Contato

- **Desenvolvedor:** Julio Cesar Vanz
- **Localização:** Blumenau, SC - Brasil
- **LinkedIn:** [linkedin.com/in/juliocesarvanz](https://www.linkedin.com/in/juliocesarvanz/)
- **GitHub:** [github.com/Jcvanz](https://github.com/Jcvanz)
- **E-mail:** [j.vanz1108@gmail.com](mailto:j.vanz1108@gmail.com)

---

<div align="center">
  <sub>Desenvolvido com 💙 por <a href="https://github.com/Jcvanz">Julio Cesar Vanz</a></sub>
</div>
