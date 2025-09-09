import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, MapPin, Phone, Github, Linkedin, FileText } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hamimishthiaque@gmail.com",
      href: "mailto:hamimishthiaque@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "Available upon request",
      href: "#"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Available for remote work",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Dev-Pranto",
      color: "hover:text-[#896C6C]"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/softdevpranto/",
      color: "hover:text-[#896C6C]"
    },
    {
      icon: FileText,
      label: "Research",
      href: "#",
      color: "hover:text-[#896C6C]"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-[#F5FAE1] via-[#EEE6CA] to-[#E5BEB5]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#896C6C] mb-4">
            Let's Collaborate
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            I'm always interested in AI research opportunities, innovative projects, and collaborations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-[#896C6C] mb-6">
              Get In Touch
            </h3>

            {contactInfo.map((info, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#896C6C] to-[#E5BEB5] rounded-lg flex items-center justify-center">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-600">
                        {info.label}
                      </p>
                      <a
                        href={info.href}
                        className="text-lg font-semibold text-[#896C6C] hover:text-[#896C6C]/80 transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-semibold text-[#896C6C]">
                Ready to Innovate?
              </h3>
              <p className="text-slate-600">
                Whether you have an AI project, research collaboration, or just want to
                discuss the latest in machine learning, I'd love to connect.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="flex-1 bg-[#896C6C] hover:bg-[#896C6C]/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => window.open('mailto:hamimishthiaque@gmail.com', '_blank')}
              >
                <Mail className="h-5 w-5 mr-2" />
                Send Email
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="flex-1 border-[#896C6C] text-[#896C6C] hover:bg-[#E5BEB5]"
                onClick={() => window.open('https://www.linkedin.com/in/softdevpranto/', '_blank')}
              >
                <Linkedin className="h-5 w-5 mr-2" />
                LinkedIn
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 pt-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className={`w-12 h-12 rounded-full transition-all duration-300 hover:scale-110 ${social.color} hover:bg-[#E5BEB5]`}
                  onClick={() => window.open(social.href, '_blank')}
                >
                  <social.icon className="h-6 w-6" />
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pt-8 border-t border-[#E5BEB5]">
          <p className="text-slate-600">
            © 2024 SK Hamim Ishthiaque Pranto. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
}
