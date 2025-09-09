import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, FileText, Filter } from 'lucide-react';
import { useState } from 'react';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'ai', label: 'AI & ML' },
    { id: 'research', label: 'Research' },
    { id: 'mobile', label: 'Mobile' }
  ];

  const projects = [
    {
      id: 1,
      title: "E-Commerce AI Platform",
      description: "Full-stack e-commerce platform with AI-powered product recommendations, intelligent search, and automated customer service chatbot.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop&crop=center",
      technologies: ["React", "Node.js", "Python", "TensorFlow", "PostgreSQL", "Docker"],
      category: "web",
      liveUrl: "#",
      githubUrl: "https://github.com/Dev-Pranto",
      featured: true
    },
    {
      id: 2,
      title: "Computer Vision Research",
      description: "Published research on advanced computer vision techniques for medical image analysis. Achieved 95% accuracy in diagnostic predictions.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop&crop=center",
      technologies: ["Python", "PyTorch", "OpenCV", "CUDA", "Research"],
      category: "research",
      liveUrl: "#",
      githubUrl: "https://github.com/Dev-Pranto",
      isResearch: true,
      featured: true
    },
    {
      id: 3,
      title: "Natural Language Processing Suite",
      description: "Comprehensive NLP toolkit for sentiment analysis, text classification, and language translation with custom transformer models.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop&crop=center",
      technologies: ["Python", "Transformers", "BERT", "FastAPI", "Docker"],
      category: "ai",
      liveUrl: "#",
      githubUrl: "https://github.com/Dev-Pranto"
    },
    {
      id: 4,
      title: "Real-time Analytics Dashboard",
      description: "Interactive dashboard for real-time data visualization and business intelligence with predictive analytics capabilities.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop&crop=center",
      technologies: ["React", "D3.js", "Python", "FastAPI", "WebSocket", "MongoDB"],
      category: "web",
      liveUrl: "#",
      githubUrl: "https://github.com/Dev-Pranto"
    },
    {
      id: 5,
      title: "Mobile AI Assistant",
      description: "Cross-platform mobile application with voice recognition, natural language understanding, and personalized AI recommendations.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop&crop=center",
      technologies: ["React Native", "Python", "TensorFlow Lite", "Firebase"],
      category: "mobile",
      liveUrl: "#",
      githubUrl: "https://github.com/Dev-Pranto"
    },
    {
      id: 6,
      title: "Deep Learning Framework",
      description: "Custom deep learning framework optimized for edge computing with novel architecture designs. Published in top-tier conference.",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=500&h=300&fit=crop&crop=center",
      technologies: ["Python", "C++", "CUDA", "PyTorch", "Research"],
      category: "research",
      liveUrl: "#",
      githubUrl: "https://github.com/Dev-Pranto",
      isResearch: true
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#F5FAE1] via-[#EEE6CA] to-[#E5BEB5]">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#896C6C] mb-4">
            My Portfolio
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A showcase of my work in AI, machine learning, and full-stack development
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#896C6C] mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-slate-600">
              Highlighted work that showcases my expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#896C6C]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Badge className="absolute top-4 left-4 bg-[#896C6C] text-white">
                    Featured
                  </Badge>
                </div>

                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-[#896C6C]">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs border-[#E5BEB5] text-[#896C6C]"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="flex gap-2">
                  {project.isResearch ? (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-[#896C6C] text-[#896C6C] hover:bg-[#E5BEB5]"
                      onClick={() => window.open('#', '_blank')}
                    >
                      <FileText className="h-4 w-4 mr-2" />
                      Research Paper
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-[#896C6C] text-[#896C6C] hover:bg-[#E5BEB5]"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-[#896C6C] text-[#896C6C] hover:bg-[#E5BEB5]"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-20 px-6 bg-[#F5FAE1]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#896C6C] mb-4">
              All Projects
            </h2>
            <p className="text-xl text-slate-600">
              Explore my complete portfolio across different categories
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Filter className="h-5 w-5 text-[#896C6C] mt-2" />
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(filter.id)}
                className={activeFilter === filter.id
                  ? "bg-[#896C6C] hover:bg-[#896C6C]/90 text-white"
                  : "border-[#896C6C] text-[#896C6C] hover:bg-[#E5BEB5]"
                }
              >
                {filter.label}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group bg-white">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#896C6C]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-[#896C6C]">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs border-[#E5BEB5] text-[#896C6C]"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs border-[#E5BEB5] text-[#896C6C]">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>

                <CardFooter className="flex gap-2">
                  {project.isResearch ? (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-[#896C6C] text-[#896C6C] hover:bg-[#E5BEB5]"
                      onClick={() => window.open('#', '_blank')}
                    >
                      <FileText className="h-4 w-4 mr-2" />
                      Paper
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-[#896C6C] text-[#896C6C] hover:bg-[#E5BEB5]"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-[#896C6C] text-[#896C6C] hover:bg-[#E5BEB5]"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
