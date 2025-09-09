import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, FileText } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Full Website Project",
      description: "A comprehensive web application with modern design, responsive layout, and advanced functionality. Built using cutting-edge technologies and best practices.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop&crop=center",
      technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "https://github.com/Dev-Pranto"
    },
    {
      title: "AI Research Projects",
      description: "Multiple research projects in artificial intelligence and machine learning, resulting in 3 published conference papers with novel contributions to the field.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop&crop=center",
      technologies: ["Python", "TensorFlow", "PyTorch", "Jupyter", "Research"],
      liveUrl: "#",
      githubUrl: "https://github.com/Dev-Pranto",
      isResearch: true
    },
    {
      title: "Machine Learning Applications",
      description: "Collection of small but impactful ML projects including computer vision, natural language processing, and predictive modeling applications.",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=500&h=300&fit=crop&crop=center",
      technologies: ["Python", "Scikit-learn", "OpenCV", "NLP", "Data Analysis"],
      liveUrl: "#",
      githubUrl: "https://github.com/Dev-Pranto"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#896C6C] mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A showcase of my work in AI, machine learning, and full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group">
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
                    Papers
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
  );
}
