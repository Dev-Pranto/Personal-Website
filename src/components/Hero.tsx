import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#F5FAE1] via-[#EEE6CA] to-[#E5BEB5] px-6 text-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] opacity-20" />

      <div className="relative z-10 max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        {/* Main heading */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#896C6C] to-slate-700 bg-clip-text text-transparent leading-tight">
            SK Hamim Ishthiaque Pranto
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#896C6C]">
            AI Engineer
          </h2>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-slate-700 max-w-2xl mx-auto leading-relaxed">
          Passionate AI Engineer specializing in machine learning, deep learning, and intelligent systems.
          I transform complex data into actionable insights and build AI solutions that make a difference.
        </p>

        {/* Social links */}
        <div className="flex items-center justify-center gap-4 animate-in fade-in delay-300 duration-700">
          <Button
            variant="outline"
            size="icon"
            className="hover:scale-110 transition-transform border-[#896C6C] text-[#896C6C] hover:bg-[#E5BEB5]"
            onClick={() => window.open('https://github.com/Dev-Pranto', '_blank')}
          >
            <Github className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="hover:scale-110 transition-transform border-[#896C6C] text-[#896C6C] hover:bg-[#E5BEB5]"
            onClick={() => window.open('https://www.linkedin.com/in/softdevpranto/', '_blank')}
          >
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="hover:scale-110 transition-transform border-[#896C6C] text-[#896C6C] hover:bg-[#E5BEB5]"
            onClick={() => window.open('mailto:hamimishthiaque@gmail.com', '_blank')}
          >
            <Mail className="h-5 w-5" />
          </Button>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in delay-500 duration-700">
          <Button
            size="lg"
            className="bg-[#896C6C] hover:bg-[#896C6C]/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => scrollToSection('projects')}
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-[#896C6C] text-[#896C6C] hover:bg-[#E5BEB5] transition-colors"
            onClick={() => scrollToSection('contact')}
          >
            Get In Touch
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollToSection('about')}
            className="rounded-full text-[#896C6C] hover:bg-[#E5BEB5]"
          >
            <ArrowDown className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
