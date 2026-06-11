import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';

interface NavigationProps {
  onNavigate?: (section: string) => void;
}

export default function Navigation({ onNavigate }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Inicio', id: 'hero' },
    { label: 'Projetos', id: 'projetos' },
    { label: 'Habilidades', id: 'habilidades' },
    { label: 'Sobre', id: 'sobre' },
    { label: 'Contato', id: 'contato' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate?.(id);
    setIsOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:fixed md:left-0 md:top-0 md:h-screen md:w-64 md:border-r md:border-border md:bg-background/95 md:backdrop-blur-sm md:p-8 md:flex md:flex-col md:z-50">
        <div className="mb-12">
          <h1 className="text-2xl font-bold text-accent mb-2">ALISON</h1>
          <p className="text-sm text-muted-foreground">Desenvolvedor de Jogos & Apps</p>
        </div>

        <ul className="space-y-6 flex-1">
          {navItems.map(item => (
            <li key={item.id}>
              <button 
                onClick={() => handleNavClick(item.id)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="space-y-4 border-t border-border pt-6">
          <a href="https://github.com/alisondossantos21-cmyk" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors">
            <Github size={16} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/alison-marques-b656b62b4/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors">
            <Linkedin size={16} /> LinkedIn
          </a>
          <a href="mailto:alisondossantos21@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors">
            <Mail size={16} /> Email
          </a>
        </div>
      </nav>

      {/* Mobile Navigation Header */}
      <div className="fixed md:hidden top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border p-4 flex items-center justify-between">
        <h1 className="text-lg font-bold text-accent">ALISON</h1>
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="fixed md:hidden top-16 left-0 right-0 bottom-0 z-40 bg-background border-b border-border">
          <div className="p-6 space-y-4 flex flex-col h-full">
            <nav className="space-y-4 flex-1">
              {navItems.map(item => (
                <button 
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="space-y-3 border-t border-border pt-6">
              <a href="https://github.com/alisondossantos21-cmyk" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors py-2">
                <Github size={16} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/alison-marques-b656b62b4/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors py-2">
                <Linkedin size={16} /> LinkedIn
              </a>
              <a href="mailto:alisondossantos21@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors py-2">
                <Mail size={16} /> Email
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
