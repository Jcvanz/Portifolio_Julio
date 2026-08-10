import React, { useState, useEffect } from 'react';
import { Star, Users, Code2, Loader2 } from 'lucide-react';
import { personalInfo, githubStatsData } from '../data/portfolioData';

const GithubIcon = ({ className = "w-7 h-7" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

export const GithubMatrix = () => {
  const [imgError, setImgError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    repositories: githubStatsData?.repositories || 0,
    stars: githubStatsData?.stars || 0,
    followers: githubStatsData?.followers || 0,
    topLanguage: githubStatsData?.topLanguage || '--',
    languages: githubStatsData?.languages || []
  });

  const username = personalInfo.github ? personalInfo.github.split('/').filter(Boolean).pop() : 'Jcvanz';

  useEffect(() => {
    let isMounted = true;

    const fetchGithubData = async () => {
      try {
        setLoading(true);
        // Busca os dados na API do GitHub
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
        ]);

        if (!userRes.ok || !reposRes.ok) {
          throw new Error('Falha ao consultar API do GitHub');
        }

        const userData = await userRes.json();
        const reposData = await reposRes.json();

        if (!isMounted) return;

        let totalStars = 0;
        let languageCounts = {};
        let totalReposWithLang = 0;

        if (Array.isArray(reposData)) {
          reposData.forEach((repo) => {
            totalStars += repo.stargazers_count || 0;
            if (repo.language) {
              languageCounts[repo.language] = (languageCounts[repo.language] || 0) + 1;
              totalReposWithLang++;
            }
          });
        }

        // Ordena as linguagens por frequência
        const sortedLangs = Object.keys(languageCounts)
          .map((lang) => ({
            name: lang,
            count: languageCounts[lang],
            percentage: totalReposWithLang > 0 ? parseFloat(((languageCounts[lang] / totalReposWithLang) * 100).toFixed(1)) : 0
          }))
          .sort((a, b) => b.count - a.count);

        const knownColors = {
          TypeScript: '#3178c6',
          JavaScript: '#f7df1e',
          PHP: '#4f5d95',
          Blade: '#f4645f',
          HTML: '#e34c26',
          CSS: '#563d7c',
          Python: '#3572A5',
          Docker: '#2496ed',
          Shell: '#89e051'
        };
        const defaultPalette = ['#22d3ee', '#3b82f6', '#4ade80', '#facc15', '#c084fc'];

        const top5Langs = sortedLangs.slice(0, 5).map((l, idx) => ({
          ...l,
          color: knownColors[l.name] || defaultPalette[idx % defaultPalette.length]
        }));

        setStats({
          repositories: userData.public_repos ?? 0,
          stars: totalStars,
          followers: userData.followers ?? 0,
          topLanguage: sortedLangs[0]?.name || '--',
          languages: top5Langs
        });
      } catch (err) {
        console.error('Erro ao conectar com API do GitHub:', err);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchGithubData();

    return () => {
      isMounted = false;
    };
  }, [username]);

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 relative z-10">
      
      <div className="flex items-center gap-3 mb-10">
        <GithubIcon className="w-7 h-7 text-white" />
        <h3 className="text-white text-xl md:text-2xl font-mono uppercase tracking-widest">
          GitHub <span className="text-cyan-400 font-bold">Matrix</span>
        </h3>
        <div className="h-px bg-gradient-to-r from-gray-500/50 to-transparent flex-1 ml-4"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Repositórios */}
        <div className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm flex flex-col justify-center items-center text-center">
          <div className="text-gray-400 font-mono text-xs uppercase tracking-widest mb-2 flex items-center gap-1.5">
            <GithubIcon className="w-4 h-4 text-cyan-400" /> Repositórios
          </div>
          <div className="text-4xl font-bold text-white flex items-center">
            {loading ? <Loader2 className="animate-spin text-cyan-400 w-8 h-8" /> : stats.repositories}
          </div>
        </div>

        {/* Estrelas */}
        <div className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-yellow-400/50 transition-all duration-300 backdrop-blur-sm flex flex-col justify-center items-center text-center">
          <div className="text-yellow-500/80 font-mono text-xs uppercase tracking-widest mb-2 flex items-center gap-1.5">
            <Star size={14} className="text-yellow-400" /> Estrelas
          </div>
          <div className="text-4xl font-bold text-yellow-400 flex items-center">
            {loading ? <Loader2 className="animate-spin text-yellow-400 w-8 h-8" /> : stats.stars}
          </div>
        </div>

        {/* Seguidores */}
        <div className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-400/50 transition-all duration-300 backdrop-blur-sm flex flex-col justify-center items-center text-center">
          <div className="text-blue-400/80 font-mono text-xs uppercase tracking-widest mb-2 flex items-center gap-1.5">
            <Users size={14} className="text-blue-400" /> Seguidores
          </div>
          <div className="text-4xl font-bold text-blue-400 flex items-center">
            {loading ? <Loader2 className="animate-spin text-blue-400 w-8 h-8" /> : stats.followers}
          </div>
        </div>

        {/* Top Linguagem */}
        <div className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-green-400/50 transition-all duration-300 backdrop-blur-sm flex flex-col justify-center items-center text-center">
          <div className="text-green-400/80 font-mono text-xs uppercase tracking-widest mb-2 flex items-center gap-1.5">
            <Code2 size={14} className="text-green-400" /> Top Linguagem
          </div>
          <div className="text-2xl font-bold text-green-400 mt-1 flex items-center">
            {loading ? <Loader2 className="animate-spin text-green-400 w-6 h-6" /> : stats.topLanguage}
          </div>
        </div>

      </div>

      {/* Detalhamento de Linguagens + Card de Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        
        {/* Barras de Progresso por Linguagem */}
        <div className="group relative p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm">
          <div className="font-mono text-xs uppercase tracking-widest mb-6 text-cyan-400 flex items-center gap-2">
            <Code2 size={16} />
            Linguagens por Repositório
          </div>
          
          {loading ? (
            <div className="space-y-4 animate-pulse">
              <div className="h-3 bg-white/10 rounded w-3/4"></div>
              <div className="h-3 bg-white/10 rounded w-full"></div>
              <div className="h-3 bg-white/10 rounded w-5/6"></div>
            </div>
          ) : stats.languages.length > 0 ? (
            <div className="space-y-4">
              {stats.languages.map((lang, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-gray-300">{lang.name}</span>
                    <span className="text-gray-400">{lang.percentage}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{
                        width: `${lang.percentage}%`,
                        backgroundColor: lang.color
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-xs text-gray-500 font-mono">Nenhuma linguagem detectada.</div>
          )}
        </div>

        {/* GitHub Card */}
        <div className="group relative p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-400/50 transition-all duration-300 backdrop-blur-sm flex flex-col items-center justify-center min-h-[220px]">
          {imgError ? (
            <div className="flex flex-col items-center justify-center text-center space-y-3">
              <GithubIcon className="w-10 h-10 text-gray-500/50" />
              <div className="text-sm font-mono text-gray-400">Stats indisponíveis no momento</div>
              <div className="text-xs text-gray-500 max-w-xs">Acompanhe as atualizações de repositórios diretamente no perfil oficial do GitHub.</div>
            </div>
          ) : (
            <img
              src={`https://gh-readme-stats.vercel.app/api?username=${username}&hide_title=true&show_icons=true&theme=vision-friendly-dark&hide_border=true&bg_color=00000000&text_color=9ca3af&title_color=3b82f6&icon_color=22d3ee`}
              alt="GitHub Stats"
              className="w-full drop-shadow-[0_0_15px_rgba(59,130,246,0.1)] transition-transform duration-500 group-hover:scale-105"
              onError={() => setImgError(true)}
            />
          )}
        </div>

      </div>
    </section>
  );
};
