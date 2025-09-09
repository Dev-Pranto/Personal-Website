import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Services', path: '/services' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' }
  ];

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-lg'
        : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="font-bold text-2xl text-[#896C6C] hover:text-[#896C6C]/80 transition-colors">
            SP
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`text-[#896C6C] hover:text-[#896C6C]/80 hover:bg-[#E5BEB5] transition-colors ${
                    isActivePath(item.path) ? 'bg-[#E5BEB5] font-semibold' : ''
                  }`}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              className="text-[#896C6C]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-[#E5BEB5]">
            <div className="flex flex-col space-y-2 pt-4">
              {navItems.map((item) => (
                <Link key={item.path} to={item.path} onClick={() => setIsMobileMenuOpen(false)}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`w-full justify-start text-[#896C6C] hover:text-[#896C6C]/80 hover:bg-[#E5BEB5] transition-colors ${
                      isActivePath(item.path) ? 'bg-[#E5BEB5] font-semibold' : ''
                    }`}
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
