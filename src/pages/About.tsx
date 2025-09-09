import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Code, BookOpen, Download, Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  const skills = [
    { name: 'Python', level: 95 },
    { name: 'Machine Learning', level: 90 },
    { name: 'Deep Learning', level: 85 },
    { name: 'React', level: 88 },
    { name: 'TypeScript', level: 82 },
    { name: 'TensorFlow', level: 87 },
    { name: 'PyTorch', level: 83 },
    { name: 'Computer Vision', level: 80 }
  ];

  const timeline = [
    {
      year: '2024',
      title: 'AI Engineer',
      company: 'Current Role',
      description: 'Leading AI research projects and developing intelligent systems',
      type: 'work'
    },
    {
      year: '2023',
      title: 'Published Research Papers',
      company: 'Academic Conferences',
      description: 'Published 3 conference papers in AI and machine learning',
      type: 'achievement'
    },
    {
      year: '2022',
      title: 'Full Stack Developer',
      company: 'Freelance Projects',
      description: 'Developed multiple web applications and AI-powered solutions',
      type: 'work'
    },
    {
      year: '2021',
      title: 'Computer Science Degree',
      company: 'University',
      description: 'Specialized in Artificial Intelligence and Software Engineering',
      type: 'education'
    }
  ];

  const highlights = [
    {
      icon: Brain,
      title: "AI Research",
      description: "Published researcher with expertise in machine learning algorithms and neural networks"
    },
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Building scalable web applications with modern technologies and best practices"
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description: "Always exploring new technologies and contributing to the AI community"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#F5FAE1] via-[#EEE6CA] to-[#E5BEB5]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-[#896C6C] mb-4">
              About Me
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              AI Engineer passionate about creating intelligent solutions and pushing the boundaries of technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl font-semibold text-[#896C6C]">
                  SK Hamim Ishthiaque Pranto
                </h2>
                <div className="flex items-center gap-4 text-slate-600">
                  <MapPin className="h-5 w-5" />
                  <span>Available for remote work</span>
                </div>
              </div>

              <p className="text-lg text-slate-700 leading-relaxed">
                I'm an AI Engineer with a passion for developing cutting-edge artificial intelligence
                solutions and machine learning models. My journey combines deep technical expertise
                with a research-oriented mindset, having published 3 conference papers in the field.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed">
                Beyond AI research, I'm a full-stack developer who enjoys building complete
                applications that bridge the gap between complex AI algorithms and user-friendly
                interfaces. I believe in the power of technology to solve real-world problems.
              </p>

              <div className="flex gap-4">
                <Button
                  className="bg-[#896C6C] hover:bg-[#896C6C]/90 text-white"
                  onClick={() => window.open('#', '_blank')}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
                <Link to="/contact">
                  <Button variant="outline" className="border-[#896C6C] text-[#896C6C] hover:bg-[#E5BEB5]">
                    Get In Touch
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-[#896C6C] to-[#E5BEB5] rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-white text-6xl font-bold">SP</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
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

      {/* Skills Section */}
      <section className="py-20 px-6 bg-[#F5FAE1]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#896C6C] mb-4">
              Skills & Expertise
            </h2>
            <p className="text-xl text-slate-600">
              Technologies and tools I use to build intelligent solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-[#896C6C]">{skill.name}</span>
                  <span className="text-sm text-slate-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-[#EEE6CA] rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-[#896C6C] to-[#E5BEB5] h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#896C6C] mb-4">
              My Journey
            </h2>
            <p className="text-xl text-slate-600">
              Education, experience, and key milestones
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className={`w-4 h-4 rounded-full ${
                    item.type === 'work' ? 'bg-[#896C6C]' :
                    item.type === 'achievement' ? 'bg-[#E5BEB5]' : 'bg-[#EEE6CA]'
                  } group-hover:scale-125 transition-transform duration-300`} />
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 h-16 bg-[#EEE6CA] mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <div className="flex items-center gap-4 mb-2">
                    <Badge variant="outline" className="border-[#896C6C] text-[#896C6C]">
                      {item.year}
                    </Badge>
                    <Badge variant="secondary" className={`${
                      item.type === 'work' ? 'bg-[#896C6C] text-white' :
                      item.type === 'achievement' ? 'bg-[#E5BEB5] text-[#896C6C]' : 'bg-[#EEE6CA] text-[#896C6C]'
                    }`}>
                      {item.type}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold text-[#896C6C] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 font-medium mb-2">
                    {item.company}
                  </p>
                  <p className="text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
