import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Github, Linkedin, Mail, Award, Users, Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const stats = [
    { icon: Award, label: 'Research Papers', value: '3+' },
    { icon: Users, label: 'Projects Completed', value: '15+' },
    { icon: Coffee, label: 'Years Experience', value: '5+' }
  ];

  const highlights = [
    {
      title: 'Portfolio',
      description: 'Explore my latest AI projects and research work',
      link: '/portfolio',
      color: 'from-[#896C6C] to-[#E5BEB5]'
    },
    {
      title: 'About Me',
      description: 'Learn about my journey in AI and development',
      link: '/about',
      color: 'from-[#E5BEB5] to-[#EEE6CA]'
    },
    {
      title: 'Services',
      description: 'See how I can help with your AI projects',
      link: '/services',
      color: 'from-[#EEE6CA] to-[#F5FAE1]'
    }
  ];

  const footerLinks = [
    { label: 'About', path: '/about' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Services', path: '/services' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' }
  ];

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/Dev-Pranto',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/softdevpranto/',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:hamimishthiaque@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#F5FAE1] via-[#EEE6CA] to-[#E5BEB5] px-6 text-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] opacity-20" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-[#896C6C] to-[#E5BEB5] rounded-full shadow-2xl flex items-center justify-center mb-8">
            <span className="text-white text-4xl font-bold">SP</span>
          </div>

          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-light text-slate-600 mb-2">
              Hi, I'm
            </h1>
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#896C6C] to-slate-700 bg-clip-text text-transparent leading-tight">
              Pranto
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-[#896C6C]">
              AI Engineer & Developer
            </h3>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-slate-700 max-w-2xl mx-auto leading-relaxed">
            I create intelligent solutions through AI, machine learning, and modern web development.
            Passionate about research and building technology that makes a difference.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in delay-500 duration-700">
            <Link to="/portfolio">
              <Button
                size="lg"
                className="bg-[#896C6C] hover:bg-[#896C6C]/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-[#896C6C] text-[#896C6C] hover:bg-[#E5BEB5] transition-colors"
              >
                Hire Me
              </Button>
            </Link>
          </div>

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
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#896C6C] to-[#E5BEB5] rounded-2xl flex items-center justify-center">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-[#896C6C] mb-2">{stat.value}</div>
                  <div className="text-slate-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Preview */}
      <section className="py-20 px-6 bg-[#F5FAE1]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#896C6C] mb-4">
              Explore My Work
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover my journey, projects, and how we can work together
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <Link key={index} to={highlight.link}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group cursor-pointer">
                  <div className={`h-32 bg-gradient-to-br ${highlight.color} relative`}>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-[#896C6C] mb-2 group-hover:text-[#896C6C]/80 transition-colors">
                      {highlight.title}
                    </h3>
                    <p className="text-slate-600">
                      {highlight.description}
                    </p>
                    <div className="mt-4 flex items-center text-[#896C6C] group-hover:translate-x-2 transition-transform duration-300">
                      <span className="text-sm font-medium">Learn more</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-12 px-6 bg-white border-t border-[#E5BEB5]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#896C6C] to-[#E5BEB5] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">SP</span>
                </div>
                <div>
                  <h3 className="font-bold text-[#896C6C] text-lg">Pranto</h3>
                  <p className="text-sm text-slate-600">AI Engineer</p>
                </div>
              </div>
              <p className="text-slate-600 text-sm">
                Creating intelligent solutions through AI, machine learning, and modern web development.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-[#896C6C] mb-4">Quick Links</h4>
              <div className="space-y-2">
                {footerLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.path}
                    className="block text-slate-600 hover:text-[#896C6C] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold text-[#896C6C] mb-4">Connect With Me</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    className="w-10 h-10 border-[#E5BEB5] text-[#896C6C] hover:bg-[#E5BEB5] hover:scale-110 transition-all duration-300"
                    onClick={() => window.open(social.href, '_blank')}
                    title={social.label}
                  >
                    <social.icon className="h-4 w-4" />
                  </Button>
                ))}
              </div>
              <div className="mt-4">
                <p className="text-slate-600 text-sm">
                  <a
                    href="mailto:hamimishthiaque@gmail.com"
                    className="hover:text-[#896C6C] transition-colors"
                  >
                    hamimishthiaque@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-[#E5BEB5] flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-600 text-sm">
              © 2024 SK Hamim Ishthiaque Pranto. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/contact" className="text-slate-600 hover:text-[#896C6C] transition-colors">
                Privacy Policy
              </Link>
              <Link to="/contact" className="text-slate-600 hover:text-[#896C6C] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
