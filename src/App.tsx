import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Award, 
  Mail, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Github, 
  Menu, 
  X, 
  ChevronRight, 
  GraduationCap, 
  Briefcase, 
  Globe, 
  ExternalLink,
  Search,
  ArrowRight
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Journey', href: '#journey' },
    { name: 'Publications', href: '#publications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className={`text-2xl font-serif font-bold tracking-tight transition-colors ${isScrolled ? 'text-primary' : 'text-white'}`}>
          Dr. Jewel Rana
        </a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-medium transition-colors hover:text-secondary ${isScrolled ? 'text-gray-700' : 'text-white/90'}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${isScrolled ? 'bg-primary text-white hover:bg-primary/90' : 'bg-white text-primary hover:bg-white/90'}`}
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className={isScrolled ? 'text-primary' : 'text-white'} /> : <Menu className={isScrolled ? 'text-primary' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-lg p-6 md:hidden flex flex-col space-y-4"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium text-gray-800 hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-primary">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920" 
          alt="Professional Background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-semibold mb-6 tracking-wider uppercase">
            Researcher • Academic • Professional
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
            Advancing Knowledge for a <span className="text-secondary italic">Better Future</span>.
          </h1>
          <p className="text-xl text-white/80 mb-10 leading-relaxed max-w-xl">
            Dr. Jewel Rana is a dedicated professional specializing in cutting-edge research and academic excellence, bridging the gap between theory and real-world impact.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#about" className="px-8 py-4 bg-secondary text-primary font-bold rounded-lg hover:bg-secondary/90 transition-all flex items-center gap-2">
              Learn More <ArrowRight size={18} />
            </a>
            <a href="#publications" className="px-8 py-4 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 backdrop-blur-sm transition-all border border-white/20">
              View Publications
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white/50 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
                alt="Dr. Jewel Rana" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-secondary p-8 rounded-2xl shadow-xl hidden lg:block">
              <div className="text-primary font-serif text-4xl font-bold">15+</div>
              <div className="text-primary/80 text-sm font-medium uppercase tracking-wider">Years of Experience</div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-8">
              Dedicated to Academic & Professional Excellence
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                Dr. Jewel Rana is a distinguished academic and researcher with a passion for exploring complex systems and delivering innovative solutions. With a career spanning over a decade, he has consistently contributed to his field through rigorous research, teaching, and professional consultancy.
              </p>
              <p>
                His work is characterized by a commitment to excellence and a drive to solve real-world problems through evidence-based approaches. Whether in the classroom or the laboratory, Dr. Rana strives to inspire the next generation of professionals.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-lg text-secondary">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Ph.D. Graduate</h4>
                    <p className="text-sm">Top-tier University</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-lg text-secondary">
                    <Award size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Award Winner</h4>
                    <p className="text-sm">Research Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Expertise = () => {
  const skills = [
    {
      title: "Strategic Research",
      desc: "Developing comprehensive research frameworks to address complex industrial and academic challenges.",
      icon: <Search className="w-8 h-8" />
    },
    {
      title: "Academic Leadership",
      desc: "Guiding departments and research groups towards excellence in teaching and innovation.",
      icon: <Award className="w-8 h-8" />
    },
    {
      title: "Data Analysis",
      desc: "Utilizing advanced statistical methods to derive meaningful insights from complex datasets.",
      icon: <BookOpen className="w-8 h-8" />
    },
    {
      title: "Global Collaboration",
      desc: "Partnering with international institutions to foster cross-border knowledge exchange.",
      icon: <Globe className="w-8 h-8" />
    }
  ];

  return (
    <section id="expertise" className="py-24 bg-accent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">Core Expertise</h2>
          <p className="text-gray-600 text-lg">
            A diverse skill set built on years of rigorous academic training and professional practice.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all group border border-gray-100"
            >
              <div className="text-secondary mb-6 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">{skill.title}</h3>
              <p className="text-gray-600 leading-relaxed">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Journey = () => {
  const milestones = [
    {
      year: "2020 - Present",
      role: "Research Fellow",
      company: "Global Innovation Institute",
      desc: "Leading multi-disciplinary research projects focused on sustainable development and technology integration."
    },
    {
      year: "2015 - 2020",
      role: "Associate Professor",
      company: "National University",
      desc: "Developed curriculum for advanced graduate courses and mentored over 50 Ph.D. and Master's students."
    },
    {
      year: "2012 - 2015",
      role: "Postdoctoral Researcher",
      company: "Tech Research Lab",
      desc: "Conducted pioneering research in systems optimization, resulting in three major patents."
    },
    {
      year: "2008 - 2012",
      role: "Ph.D. Researcher",
      company: "University of Excellence",
      desc: "Completed doctoral studies with a focus on innovative methodologies in the field."
    }
  ];

  return (
    <section id="journey" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1">
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-8 sticky top-32">
              Professional <br /> <span className="text-secondary italic">Journey</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              A timeline of dedication, growth, and significant contributions to the field of research and academia.
            </p>
            <div className="p-6 bg-primary rounded-2xl text-white">
              <h4 className="font-bold mb-2">Looking for Collaboration?</h4>
              <p className="text-white/70 text-sm mb-4">Dr. Rana is always open to discussing new research opportunities and professional partnerships.</p>
              <a href="#contact" className="text-secondary font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Contact Now <ChevronRight size={16} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-12">
            {milestones.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-8 group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-secondary group-hover:scale-150 transition-transform"></div>
                  <div className="flex-1 w-px bg-gray-200 my-2"></div>
                </div>
                <div className="pb-8">
                  <span className="text-secondary font-bold text-sm tracking-widest uppercase">{item.year}</span>
                  <h3 className="text-2xl font-bold text-primary mt-2 mb-1">{item.role}</h3>
                  <p className="text-primary/60 font-medium mb-4">{item.company}</p>
                  <p className="text-gray-600 leading-relaxed max-w-xl">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Publications = () => {
  const papers = [
    {
      title: "Innovative Approaches to Sustainable Systems Design",
      journal: "International Journal of Systems Science",
      year: "2023",
      link: "#"
    },
    {
      title: "The Impact of Digital Transformation on Academic Research",
      journal: "Journal of Educational Technology",
      year: "2022",
      link: "#"
    },
    {
      title: "Optimizing Large-Scale Data Structures for Real-Time Analysis",
      journal: "Data Engineering Quarterly",
      year: "2021",
      link: "#"
    },
    {
      title: "A Comprehensive Review of Modern Research Methodologies",
      journal: "Academic Review Letters",
      year: "2020",
      link: "#"
    }
  ];

  return (
    <section id="publications" className="py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Selected Publications</h2>
            <p className="text-white/70 text-lg">
              A curated list of peer-reviewed journals and conference papers contributing to the global body of knowledge.
            </p>
          </div>
          <a href="#" className="px-6 py-3 bg-white text-primary font-bold rounded-lg hover:bg-secondary transition-all">
            View All Research
          </a>
        </div>

        <div className="grid gap-6">
          {papers.map((paper, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ x: 10 }}
              className="p-8 bg-white/5 rounded-2xl border border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:bg-white/10 transition-all cursor-pointer"
            >
              <div>
                <h3 className="text-xl font-bold mb-2">{paper.title}</h3>
                <p className="text-white/60 flex items-center gap-2">
                  <BookOpen size={16} /> {paper.journal} • {paper.year}
                </p>
              </div>
              <div className="p-3 rounded-full bg-white/10 text-secondary">
                <ExternalLink size={20} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-accent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 lg:p-20 bg-primary text-white">
              <h2 className="text-4xl md:text-5xl font-serif mb-8">Get in Touch</h2>
              <p className="text-white/70 text-lg mb-12 leading-relaxed">
                Whether you have a question about research, academic collaboration, or professional consultancy, feel free to reach out.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-secondary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm uppercase tracking-widest">Email</p>
                    <p className="text-lg font-medium">contact@drjewelrana.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-secondary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm uppercase tracking-widest">Office</p>
                    <p className="text-lg font-medium">Academic Block A, City University</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 pt-16 border-t border-white/10">
                <p className="text-white/50 text-sm uppercase tracking-widest mb-6">Follow Me</p>
                <div className="flex gap-4">
                  {[Linkedin, Twitter, Github, Globe].map((Icon, idx) => (
                    <a key={idx} href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-12 lg:p-20">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary">Subject</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" placeholder="Research Collaboration" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary">Message</label>
                  <textarea rows={6} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all resize-none" placeholder="Your message here..."></textarea>
                </div>
                <button className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-primary font-serif text-xl font-bold">Dr. Jewel Rana</div>
        <div className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Dr. Jewel Rana. All rights reserved.
        </div>
        <div className="flex gap-8">
          <a href="#" className="text-sm text-gray-500 hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="text-sm text-gray-500 hover:text-primary transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-secondary/30 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Journey />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
