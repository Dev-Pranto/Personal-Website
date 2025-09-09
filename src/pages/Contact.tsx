import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MapPin, Phone, Github, Linkedin, FileText, Send, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You would typically send this data to your backend
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hamimishthiaque@gmail.com",
      href: "mailto:hamimishthiaque@gmail.com",
      description: "Send me an email anytime"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "Available upon request",
      href: "#",
      description: "Let's schedule a call"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Remote Work Available",
      href: "#",
      description: "Working with clients worldwide"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Dev-Pranto",
      description: "Check out my code",
      color: "hover:text-gray-900"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/softdevpranto/",
      description: "Connect professionally",
      color: "hover:text-blue-600"
    },
    {
      icon: FileText,
      label: "Research Papers",
      href: "#",
      description: "View my publications",
      color: "hover:text-[#896C6C]"
    }
  ];

  const projectTypes = [
    {
      icon: MessageCircle,
      title: "AI Consultation",
      description: "Strategic AI planning and implementation advice"
    },
    {
      icon: FileText,
      title: "Research Collaboration",
      description: "Academic research projects and paper collaborations"
    },
    {
      icon: Mail,
      title: "Full-Stack Development",
      description: "Complete web application development projects"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#F5FAE1] via-[#EEE6CA] to-[#E5BEB5]">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#896C6C] mb-4">
            Let's Work Together
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to bring your AI ideas to life? I'm here to help with your next project,
            research collaboration, or technical consultation.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-[#896C6C]">
                  Send Me a Message
                </CardTitle>
                <CardDescription className="text-lg text-slate-600">
                  Fill out the form below and I'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-[#896C6C] font-medium">
                        Your Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="border-[#E5BEB5] focus:ring-[#896C6C] focus:border-[#896C6C]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-[#896C6C] font-medium">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="border-[#E5BEB5] focus:ring-[#896C6C] focus:border-[#896C6C]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-[#896C6C] font-medium">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Project Discussion"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="border-[#E5BEB5] focus:ring-[#896C6C] focus:border-[#896C6C]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-[#896C6C] font-medium">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project, timeline, and requirements..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="border-[#E5BEB5] focus:ring-[#896C6C] focus:border-[#896C6C]"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#896C6C] hover:bg-[#896C6C]/90 text-white"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-[#896C6C] mb-6">
                Get In Touch
              </h2>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#896C6C] to-[#E5BEB5] rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-[#896C6C] mb-1">
                            {info.label}
                          </h3>
                          <a
                            href={info.href}
                            className="text-lg font-medium text-slate-700 hover:text-[#896C6C] transition-colors block"
                          >
                            {info.value}
                          </a>
                          <p className="text-sm text-slate-600 mt-1">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold text-[#896C6C] mb-6">
                Connect With Me
              </h3>
              <div className="grid gap-4">
                {socialLinks.map((social, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                    <CardContent className="p-4">
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4"
                      >
                        <div className="w-10 h-10 bg-gradient-to-br from-[#896C6C] to-[#E5BEB5] rounded-lg flex items-center justify-center">
                          <social.icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#896C6C]">
                            {social.label}
                          </h4>
                          <p className="text-sm text-slate-600">
                            {social.description}
                          </p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Types Section */}
      <section className="py-20 px-6 bg-[#F5FAE1]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#896C6C] mb-4">
              How Can I Help?
            </h2>
            <p className="text-xl text-slate-600">
              I'm available for various types of projects and collaborations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projectTypes.map((type, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center bg-white">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#896C6C] to-[#E5BEB5] rounded-2xl flex items-center justify-center">
                    <type.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#896C6C] mb-2">
                    {type.title}
                  </h3>
                  <p className="text-slate-600">
                    {type.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#896C6C] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-600">
              Quick answers to common questions about working together
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What's your typical project timeline?",
                answer: "Project timelines vary based on complexity. Simple web applications typically take 2-4 weeks, while complex AI solutions can take 6-12 weeks. I'll provide a detailed timeline during our initial consultation."
              },
              {
                question: "Do you work with international clients?",
                answer: "Yes! I work with clients worldwide and am comfortable with remote collaboration. I'm flexible with time zones and use modern communication tools to ensure smooth project management."
              },
              {
                question: "What's included in your AI consulting services?",
                answer: "My AI consulting includes strategy development, technical architecture design, implementation guidance, and ongoing support. I help identify the right AI solutions for your specific business needs."
              },
              {
                question: "Can you help with research collaborations?",
                answer: "Absolutely! I'm always interested in research collaborations, especially in AI and machine learning. I have experience with academic publications and can contribute to both theoretical and applied research projects."
              }
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-[#896C6C] mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-slate-600">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
