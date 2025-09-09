import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Calendar, Clock, Search, ArrowRight, User } from 'lucide-react';
import { useState } from 'react';

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Posts' },
    { id: 'ai', label: 'AI & ML' },
    { id: 'web', label: 'Web Development' },
    { id: 'research', label: 'Research' },
    { id: 'tutorials', label: 'Tutorials' },
    { id: 'insights', label: 'Industry Insights' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Web Development",
      excerpt: "Exploring how artificial intelligence is revolutionizing the way we build and interact with web applications, from automated code generation to intelligent user experiences.",
      content: "Full blog post content would go here...",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop&crop=center",
      category: "ai",
      tags: ["AI", "Web Development", "Future Tech"],
      author: "Pranto",
      date: "2024-01-15",
      readTime: "8 min read",
      featured: true
    },
    {
      id: 2,
      title: "Building Scalable Machine Learning Pipelines",
      excerpt: "A comprehensive guide to designing and implementing robust ML pipelines that can handle production workloads and scale with your business needs.",
      content: "Full blog post content would go here...",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=500&h=300&fit=crop&crop=center",
      category: "research",
      tags: ["Machine Learning", "MLOps", "Scalability"],
      author: "Pranto",
      date: "2024-01-10",
      readTime: "12 min read",
      featured: true
    },
    {
      id: 3,
      title: "React Best Practices for 2024",
      excerpt: "Stay up-to-date with the latest React patterns, hooks, and performance optimization techniques that every developer should know.",
      content: "Full blog post content would go here...",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=300&fit=crop&crop=center",
      category: "web",
      tags: ["React", "JavaScript", "Best Practices"],
      author: "Pranto",
      date: "2024-01-05",
      readTime: "6 min read",
      featured: false
    },
    {
      id: 4,
      title: "Computer Vision in Healthcare: A Research Perspective",
      excerpt: "Examining the latest breakthroughs in medical image analysis and how computer vision is transforming diagnostic accuracy in healthcare.",
      content: "Full blog post content would go here...",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop&crop=center",
      category: "research",
      tags: ["Computer Vision", "Healthcare", "Research"],
      author: "Pranto",
      date: "2023-12-28",
      readTime: "10 min read",
      featured: false
    },
    {
      id: 5,
      title: "Getting Started with TensorFlow 2.0",
      excerpt: "A beginner-friendly tutorial covering the fundamentals of TensorFlow 2.0, from basic concepts to building your first neural network.",
      content: "Full blog post content would go here...",
      image: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=500&h=300&fit=crop&crop=center",
      category: "tutorials",
      tags: ["TensorFlow", "Deep Learning", "Tutorial"],
      author: "Pranto",
      date: "2023-12-20",
      readTime: "15 min read",
      featured: false
    },
    {
      id: 6,
      title: "The Rise of Edge AI: Opportunities and Challenges",
      excerpt: "Analyzing the growing trend of edge computing in AI applications and what it means for the future of intelligent systems.",
      content: "Full blog post content would go here...",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=300&fit=crop&crop=center",
      category: "insights",
      tags: ["Edge AI", "IoT", "Industry Trends"],
      author: "Pranto",
      date: "2023-12-15",
      readTime: "9 min read",
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#F5FAE1] via-[#EEE6CA] to-[#E5BEB5]">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#896C6C] mb-4">
            Blog & Insights
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Sharing knowledge about AI, machine learning, web development, and the latest in technology
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 border-[#896C6C] focus:ring-[#896C6C]"
            />
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#896C6C] mb-4">
              Featured Articles
            </h2>
            <p className="text-xl text-slate-600">
              Must-read posts on the latest trends and insights
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group cursor-pointer">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#896C6C]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Badge className="absolute top-4 left-4 bg-[#896C6C] text-white">
                    Featured
                  </Badge>
                </div>

                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-2">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-semibold text-[#896C6C] group-hover:text-[#896C6C]/80 transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 text-base">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="outline"
                        className="text-xs border-[#E5BEB5] text-[#896C6C]"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="ghost" className="text-[#896C6C] hover:text-[#896C6C]/80 p-0">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-20 px-6 bg-[#F5FAE1]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#896C6C] mb-4">
              All Articles
            </h2>
            <p className="text-xl text-slate-600">
              Explore articles by category or search for specific topics
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category.id)}
                className={activeCategory === category.id
                  ? "bg-[#896C6C] hover:bg-[#896C6C]/90 text-white"
                  : "border-[#896C6C] text-[#896C6C] hover:bg-[#E5BEB5]"
                }
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group cursor-pointer bg-white">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#896C6C]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardHeader>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                    <Calendar className="h-3 w-3" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <span>•</span>
                    <Clock className="h-3 w-3" />
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl font-semibold text-[#896C6C] group-hover:text-[#896C6C]/80 transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 2).map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="outline"
                        className="text-xs border-[#E5BEB5] text-[#896C6C]"
                      >
                        {tag}
                      </Badge>
                    ))}
                    {post.tags.length > 2 && (
                      <Badge variant="outline" className="text-xs border-[#E5BEB5] text-[#896C6C]">
                        +{post.tags.length - 2}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-slate-600">
                No articles found matching your search criteria.
              </p>
              <Button
                variant="outline"
                className="mt-4 border-[#896C6C] text-[#896C6C] hover:bg-[#E5BEB5]"
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('all');
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#896C6C] to-[#E5BEB5] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get the latest articles and insights delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
            />
            <Button variant="secondary" className="bg-white text-[#896C6C] hover:bg-white/90">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
