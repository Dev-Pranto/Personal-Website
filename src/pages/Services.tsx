import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Code, Search, Database, Zap, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      icon: Brain,
      title: "AI & Machine Learning Solutions",
      description: "Custom AI models, machine learning algorithms, and intelligent automation systems tailored to your business needs.",
      features: ["Custom ML Models", "Neural Networks", "Computer Vision", "NLP Solutions", "Predictive Analytics"],
      color: "from-[#896C6C] to-[#E5BEB5]"
    },
    {
      icon: Code,
      title: "Full Stack Web Development",
      description: "Modern, responsive web applications built with cutting-edge technologies and best practices.",
      features: ["React/Next.js Apps", "API Development", "Database Design", "Cloud Deployment", "Performance Optimization"],
      color: "from-[#E5BEB5] to-[#EEE6CA]"
    },
    {
      icon: Search,
      title: "Data Science & Analytics",
      description: "Transform your data into actionable insights with advanced analytics and visualization solutions.",
      features: ["Data Analysis", "Statistical Modeling", "Data Visualization", "Business Intelligence", "Report Automation"],
      color: "from-[#EEE6CA] to-[#F5FAE1]"
    },
    {
      icon: Database,
      title: "AI Integration & Consulting",
      description: "Strategic AI consulting and seamless integration of AI solutions into existing business processes.",
      features: ["AI Strategy", "System Integration", "Performance Optimization", "Training & Support", "Maintenance"],
      color: "from-[#F5FAE1] to-[#896C6C]"
    }
  ];

  const whyChooseMe = [
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising on quality"
    },
    {
      icon: Users,
      title: "Clear Communication",
      description: "Regular updates and transparent project management"
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Rigorous testing and code review processes"
    },
    {
      icon: Brain,
      title: "Research-Backed",
      description: "Solutions based on latest research and best practices"
    }
  ];

  const packages = [
    {
      name: "Starter",
      price: "Contact for pricing",
      description: "Perfect for small projects and MVPs",
      features: [
        "Basic AI model development",
        "Simple web application",
        "2 weeks delivery",
        "Email support",
        "1 revision round"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "Contact for pricing",
      description: "Ideal for medium-scale business solutions",
      features: [
        "Advanced AI/ML solutions",
        "Full-stack web application",
        "4-6 weeks delivery",
        "Priority support",
        "3 revision rounds",
        "Documentation included"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Contact for pricing",
      description: "Comprehensive solutions for large organizations",
      features: [
        "Custom AI architecture",
        "Scalable web platform",
        "8-12 weeks delivery",
        "24/7 support",
        "Unlimited revisions",
        "Training & maintenance",
        "Source code included"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#F5FAE1] via-[#EEE6CA] to-[#E5BEB5]">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#896C6C] mb-4">
            My Services
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Transforming ideas into intelligent solutions through AI, machine learning, and modern web development
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-[#896C6C] hover:bg-[#896C6C]/90 text-white">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#896C6C] mb-4">
              What I Offer
            </h2>
            <p className="text-xl text-slate-600">
              Comprehensive solutions for your AI and development needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group">
                <div className={`h-2 bg-gradient-to-r ${service.color}`} />
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center`}>
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-semibold text-[#896C6C]">
                      {service.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-slate-600 text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-[#896C6C]" />
                        <span className="text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-20 px-6 bg-[#F5FAE1]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#896C6C] mb-4">
              Why Work With Me?
            </h2>
            <p className="text-xl text-slate-600">
              What sets me apart in AI and development projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseMe.map((reason, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center bg-white">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#896C6C] to-[#E5BEB5] rounded-2xl flex items-center justify-center">
                    <reason.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#896C6C] mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-slate-600">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#896C6C] mb-4">
              Service Packages
            </h2>
            <p className="text-xl text-slate-600">
              Flexible options to match your project needs and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative ${
                pkg.popular ? 'ring-2 ring-[#896C6C] scale-105' : ''
              }`}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#896C6C] text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-semibold text-[#896C6C] mb-2">
                    {pkg.name}
                  </CardTitle>
                  <div className="text-3xl font-bold text-slate-700 mb-2">
                    {pkg.price}
                  </div>
                  <CardDescription className="text-slate-600">
                    {pkg.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-[#896C6C] flex-shrink-0" />
                        <span className="text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/contact">
                    <Button
                      className={`w-full mt-6 ${
                        pkg.popular
                          ? 'bg-[#896C6C] hover:bg-[#896C6C]/90 text-white'
                          : 'border-[#896C6C] text-[#896C6C] hover:bg-[#E5BEB5]'
                      }`}
                      variant={pkg.popular ? 'default' : 'outline'}
                    >
                      Get Started
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#896C6C] to-[#E5BEB5] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how I can help bring your AI and development ideas to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-[#896C6C] hover:bg-white/90">
                Get In Touch
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                View My Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
