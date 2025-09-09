import { Card, CardContent } from '@/components/ui/card';
import { Brain, Code, BookOpen } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Brain,
      title: "AI & ML Expertise",
      description: "Deep learning, neural networks, and intelligent system design"
    },
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Python, frontend technologies, and scalable web applications"
    },
    {
      icon: BookOpen,
      title: "Research & Publications",
      description: "Published researcher with 3 conference papers"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#896C6C] mb-4">
            About Me
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            AI Engineer with a passion for research, innovation, and building intelligent solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-slate-700 leading-relaxed">
              As an AI Engineer, I specialize in developing cutting-edge artificial intelligence
              solutions and machine learning models. My expertise spans from deep learning
              architectures to full-stack web development, allowing me to build complete
              AI-powered applications.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              I'm passionate about research and have published 3 conference papers in the field
              of AI and machine learning. I believe in the power of AI to solve real-world
              problems and am constantly exploring new ways to push the boundaries of what's possible.
            </p>
          </div>

          <div className="relative">
            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-[#896C6C] to-[#E5BEB5] rounded-2xl shadow-2xl flex items-center justify-center">
              <div className="text-white text-4xl font-bold">SP</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:border-[#E5BEB5]">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#896C6C] to-[#E5BEB5] rounded-2xl flex items-center justify-center">
                  <highlight.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#896C6C] mb-2">
                  {highlight.title}
                </h3>
                <p className="text-slate-600">
                  {highlight.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
