import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Mail, MapPin, Phone, CheckCircle, Loader2 } from 'lucide-react';
import { api } from '../utils/api';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await api.contact(formData);

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sudhikumaran2005@gmail.com',
      href: 'mailto:sudhikumaran2005@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Coimbatore, India',
      href: '#',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8056355735',
      href: 'tel:+918056355735',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent-purple/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent-pink/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent-purple font-mono text-sm tracking-wider">// GET IN TOUCH</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            <span className="text-white">Let's </span>
            <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto"
        >
          {/* Left - Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Let's talk about your project
              </h3>
              <p className="text-gray-400 leading-relaxed">
                I'm always excited to take on new challenges and collaborate on 
                innovative projects. Whether you have a specific idea or just want 
                to explore possibilities, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-dark-200/50 border border-white/5 hover:border-accent-purple/30 transition-all group"
                >
                  <div className="p-3 rounded-lg bg-gradient-to-br from-accent-purple/20 to-accent-pink/20 text-accent-purple group-hover:text-white transition-colors">
                    <info.icon size={24} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">{info.label}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Availability */}
            <div className="p-6 rounded-2xl border-gradient">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-3 h-3 bg-accent-emerald rounded-full animate-pulse" />
                <span className="text-accent-emerald font-medium">Currently Available</span>
              </div>
              <p className="text-gray-400 text-sm">
                I'm open to freelance projects and full-time opportunities. 
                Let's build something great together!
              </p>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 rounded-xl bg-dark-200/50 border border-white/10 text-white placeholder-gray-500 focus:border-accent-purple focus:ring-1 focus:ring-accent-purple outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 rounded-xl bg-dark-200/50 border border-white/10 text-white placeholder-gray-500 focus:border-accent-purple focus:ring-1 focus:ring-accent-purple outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              {/* Message Input */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-4 rounded-xl bg-dark-200/50 border border-white/10 text-white placeholder-gray-500 focus:border-accent-purple focus:ring-1 focus:ring-accent-purple outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all ${
                  status === 'success'
                    ? 'bg-accent-emerald'
                    : 'bg-gradient-to-r from-accent-purple to-accent-pink shadow-lg shadow-accent-purple/25 hover:shadow-accent-purple/40'
                }`}
              >
                {status === 'loading' && (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Sending...
                  </>
                )}
                {status === 'success' && (
                  <>
                    <CheckCircle size={20} />
                    Message Sent!
                  </>
                )}
                {status === 'idle' && (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
                {status === 'error' && 'Try Again'}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
