import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Skills() {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "NLP", "Computer Vision", "Deep Learning"]
    },
    {
      title: "Frontend Development",
      skills: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Vue.js", "Next.js"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "Docker", "AWS", "Google Cloud", "Jupyter", "VS Code", "Linux", "MongoDB"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-[#F5FAE1]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#896C6C] mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Technologies and tools I use to build intelligent solutions and applications
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-semibold text-[#896C6C] text-center">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="px-3 py-1 text-sm font-medium bg-[#EEE6CA] text-[#896C6C] hover:bg-[#E5BEB5] transition-colors cursor-default border border-[#E5BEB5]"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
