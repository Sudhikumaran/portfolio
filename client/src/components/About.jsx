import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Rocket, Lightbulb, Heart, Coffee, Globe } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const highlights = [
    { icon: Code2, label: 'Clean Code', color: 'text-accent-purple' },
    { icon: Rocket, label: 'Fast Delivery', color: 'text-accent-pink' },
    { icon: Lightbulb, label: 'Creative Ideas', color: 'text-accent-cyan' },
    { icon: Heart, label: 'Passion Driven', color: 'text-accent-emerald' },
  ];

  const funFacts = [
    { icon: Coffee, value: '1000+', label: 'Cups of Coffee' },
    { icon: Code2, value: '100k+', label: 'Lines of Code' },
    { icon: Globe, value: '20+', label: 'Countries Reached' },
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-accent-purple/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent-pink/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-accent-purple font-mono text-sm tracking-wider">// ABOUT ME</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              <span className="text-white">Who </span>
              <span className="gradient-text">Am I?</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image/Visual */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
                {/* Animated blob background */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-purple via-accent-pink to-accent-cyan opacity-80 blob animate-morph" />
                
                {/* Profile image placeholder */}
                <div className="absolute inset-4 rounded-3xl overflow-hidden bg-dark-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-4">👨‍💻</div>
                    <p className="text-gray-400 text-sm font-mono">Your Photo Here</p>
                  </div>
                </div>

                {/* Floating badges */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 glass px-4 py-2 rounded-xl"
                >
                  <span className="text-accent-purple font-bold">5+ Years</span>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  className="absolute -bottom-4 -left-4 glass px-4 py-2 rounded-xl"
                >
                  <span className="text-accent-pink font-bold">50+ Projects</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-white">
                A passionate developer crafting digital excellence
              </h3>

              <p className="text-gray-400 leading-relaxed">
                I'm a full-stack developer with a passion for creating beautiful, functional, 
                and user-friendly websites and applications. With over 5 years of experience 
                in the field, I've had the privilege of working with startups and established 
                companies alike.
              </p>

              <p className="text-gray-400 leading-relaxed">
                My journey in tech started with curiosity and has evolved into a career 
                dedicated to pushing the boundaries of what's possible on the web. I believe 
                in writing clean, maintainable code and creating experiences that users love.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {highlights.map((item) => (
                  <motion.div
                    key={item.label}
                    whileHover={{ scale: 1.05, x: 5 }}
                    className="flex items-center gap-3 group"
                  >
                    <div className={`p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors ${item.color}`}>
                      <item.icon size={20} />
                    </div>
                    <span className="text-gray-300 font-medium">{item.label}</span>
                  </motion.div>
                ))}
              </div>

              {/* Fun Facts */}
              <div className="flex gap-8 pt-6 border-t border-white/10">
                {funFacts.map((fact) => (
                  <div key={fact.label} className="text-center">
                    <fact.icon size={20} className="mx-auto mb-2 text-accent-purple" />
                    <p className="text-2xl font-bold gradient-text">{fact.value}</p>
                    <p className="text-gray-500 text-xs">{fact.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
