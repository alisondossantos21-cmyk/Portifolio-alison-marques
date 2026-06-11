import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ExternalLink, Gamepad2, Loader2 } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { useContactForm } from '@/hooks/useContactForm';

const projects = [
  {
    id: 1,
    title: 'Slime Slasher',
    description: 'Jogo de acao baseado em tap com personagens de limo.',
    tags: ['TypeScript', 'JavaScript', 'HTML', 'CSS'],
    type: 'Jogo',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.base69f802b755d35fe5071ef4a4.app',
    githubUrl: 'https://github.com/alisondossantos21-cmyk/slime-slasher-tap',
  },
  {
    id: 2,
    title: 'One Button',
    description: 'Jogo minimalista com mecanica de um unico botao.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    type: 'Jogo',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.base69e212a59ccd7c4a23cce77d.app',
    githubUrl: 'https://github.com/alisondossantos21-cmyk/one-button-boss-fight',
  },
  {
    id: 3,
    title: 'Swipe Judge',
    description: 'Jogo baseado em swipes para tomar decisoes rapidas.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    type: 'Jogo',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.base69e252b62bd33d22de631219.app',
    githubUrl: 'https://github.com/alisondossantos21-cmyk/swipe-judge',
  },
];

const skills = [
  { category: 'Linguagens', items: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3'] },
  { category: 'Desenvolvimento', items: ['React', 'Vite', 'Game Design', 'UI/UX'] },
  { category: 'Mobile', items: ['Android', 'Cross-Platform', 'Responsive', 'Performance'] },
  { category: 'Ferramentas', items: ['Git', 'GitHub', 'Figma', 'VS Code'] },
];

const stats = [
  { number: '6+', label: 'Projetos Publicados' },
  { number: '100%', label: 'Dedicacao' },
  { number: 'Infinito', label: 'Aprendizado' },
];

export default function Home() {
  const { formData, isLoading, handleFormChange, handleFormSubmit } = useContactForm();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="md:ml-64 pt-16 md:pt-0 min-h-screen">
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663575215029/WuFVR8Dd4EVUnuyYkFrRF4/hero-background-hF4WxY99BSkT6wc8Fwau6y.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 text-center px-8 max-w-4xl">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-white">Ola, sou <span className="text-accent">Alison Marques</span></h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4">Desenvolvedor de Software, Apps e Jogos com especialidade em JavaScript & TypeScript</p>
            <p className="text-base sm:text-lg text-gray-400 mb-12">Baseado em Porto, Portugal • Criando experiencias digitais inovadoras</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-3 text-lg">Ver Meus Projetos</Button>
              <Button variant="outline" className="border-accent text-accent hover:bg-accent/10 px-8 py-3 text-lg">Entrar em Contato</Button>
            </div>
          </div>
        </section>

        <section id="projetos" className="py-20 px-4 sm:px-8 md:px-16 lg:px-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-accent">MEUS PROJETOS</h2>
            <p className="text-gray-400 mb-16 text-base sm:text-lg">Uma selecao dos meus trabalhos mais recentes em desenvolvimento de jogos, aplicativos e web.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map(project => (
                <Card key={project.id} className="bg-card border-border hover:border-accent transition-all duration-300 overflow-hidden group">
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Gamepad2 size={18} className="text-accent" />
                      <span className="text-sm text-accent font-medium">{project.type}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">{tag}</span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <a href={project.playStoreUrl} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground hover:bg-accent/90 px-4 py-2 rounded text-sm font-medium transition-colors">Play Store <ExternalLink size={14} /></a>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 border border-accent text-accent hover:bg-accent/10 px-4 py-2 rounded text-sm font-medium transition-colors">GitHub <ExternalLink size={14} /></a>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="habilidades" className="py-20 px-4 sm:px-8 md:px-16 lg:px-24 relative overflow-hidden" style={{ backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663575215029/WuFVR8Dd4EVUnuyYkFrRF4/skills-section-bg-74gruHLNL6zjZMVRXCQm6B.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="relative z-10 max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-accent">HABILIDADES & EXPERTISE</h2>
            <p className="text-gray-300 mb-16 text-base sm:text-lg">Especializei-me em criar experiencias digitais de alta qualidade, com foco em performance, acessibilidade e design intuitivo.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skillGroup, idx) => (
                <div key={idx} className="bg-background/50 backdrop-blur-sm border border-border p-6 rounded hover:border-accent transition-colors">
                  <h3 className="text-lg font-bold text-accent mb-4">{skillGroup.category}</h3>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill, i) => (
                      <li key={i} className="text-gray-300 text-sm flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent rounded-full"></span>{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="sobre" className="py-20 px-4 sm:px-8 md:px-16 lg:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>Sou um desenvolvedor apaixonado por criar experiencias digitais inovadoras. Com especialidade em JavaScript e TypeScript, trabalho na interseccao entre design e tecnologia para construir aplicacoes que sao nao apenas funcionais, mas tambem intuitivas e agradaveis de usar.</p>
              <p>Minha jornada comecou com a paixao por jogos e desenvolvimento de software. Desde entao, publiquei varios projetos na Google Play Store e mantive uma presenca ativa no GitHub, contribuindo para a comunidade de desenvolvimento.</p>
              <p>Baseado em Porto, Portugal, estou sempre buscando novos desafios e oportunidades para crescer como desenvolvedor. Acredito em codigo limpo, design centrado no usuario e aprendizado continuo.</p>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-16">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-16 p-8 bg-secondary border border-border rounded">
              <h3 className="text-xl font-bold text-accent mb-6">O que me motiva:</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3"><span className="text-accent mt-1">▸</span><span>Criar produtos que resolvem problemas reais</span></li>
                <li className="flex items-start gap-3"><span className="text-accent mt-1">▸</span><span>Aprender novas tecnologias e tecnicas</span></li>
                <li className="flex items-start gap-3"><span className="text-accent mt-1">▸</span><span>Colaborar com equipes talentosas</span></li>
                <li className="flex items-start gap-3"><span className="text-accent mt-1">▸</span><span>Contribuir para a comunidade open-source</span></li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contato" className="py-20 px-4 sm:px-8 md:px-16 lg:px-24 bg-secondary">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-accent">VAMOS CONVERSAR</h2>
            <p className="text-gray-400 mb-12 text-lg">Estou sempre aberto a novas oportunidades, colaboracoes e conversas interessantes. Entre em contato!</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-xl font-bold text-accent mb-6">Informacoes de Contato</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Email</p>
                    <a href="mailto:alisondossantos21@gmail.com" className="text-foreground hover:text-accent transition-colors">alisondossantos21@gmail.com</a>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Localizacao</p>
                    <p className="text-foreground">Porto, Portugal</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">GitHub</p>
                    <a href="https://github.com/alisondossantos21-cmyk" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent transition-colors">@alisondossantos21-cmyk</a>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">LinkedIn</p>
                    <a href="https://www.linkedin.com/in/alison-marques-b656b62b4/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent transition-colors">Alison Marques</a>
                  </div>
                </div>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Nome</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleFormChange} placeholder="Seu nome" required className="w-full bg-background border border-border rounded px-4 py-2 text-foreground placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleFormChange} placeholder="seu.email@exemplo.com" required className="w-full bg-background border border-border rounded px-4 py-2 text-foreground placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Mensagem</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleFormChange} placeholder="Sua mensagem..." rows={4} required className="w-full bg-background border border-border rounded px-4 py-2 text-foreground placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent resize-none" />
                </div>
                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 py-3 text-lg font-medium disabled:opacity-50"
                >
                  {isLoading ? (
                    <>
                      <Loader2 size={18} className="mr-2 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    'Enviar Mensagem'
                  )}
                </Button>
              </form>
            </div>
          </div>
        </section>

        <footer className="bg-background border-t border-border py-8 px-8 md:px-16 lg:px-24">
          <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
            <p>© 2026 Alison Marques. Todos os direitos reservados.</p>
            <p className="mt-2">Desenvolvido com paixao e criatividade</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
