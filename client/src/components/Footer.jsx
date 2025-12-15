import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, href: 'mailto:hello@example.com', label: 'Email' },
  ];

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 bg-dark-300/50 border-t border-white/5">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-accent-purple/5 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <motion.a
              href="#home"
              whileHover={{ scale: 1.05 }}
              className="inline-block text-2xl font-bold font-mono gradient-text mb-4"
            >
              &lt;Dev/&gt;
            </motion.a>
            <p className="text-gray-400 text-sm leading-relaxed">
              A passionate developer creating beautiful, functional, and 
              user-friendly digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <nav className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ x: 5 }}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-white/5 rounded-xl text-gray-400 hover:text-white hover:bg-gradient-to-br hover:from-accent-purple/20 hover:to-accent-pink/20 transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm flex items-center gap-1">
            © {currentYear} Made with 
            <Heart size={14} className="text-accent-pink fill-accent-pink" /> 
            by Your Name
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-gradient-to-r from-accent-purple to-accent-pink rounded-xl text-white shadow-lg shadow-accent-purple/25"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
