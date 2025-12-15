import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDown, Download, Sparkles } from 'lucide-react';
import gsap from 'gsap';

const Hero = () => {
  const heroRef = useRef(null);
  const codeBlockRef = useRef(null);

  useEffect(() => {
    // GSAP animation for floating code block
    gsap.to(codeBlockRef.current, {
      y: 20,
      duration: 2,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1,
    });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-purple/30 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-pink/20 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-cyan/10 rounded-full blur-[150px]" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern opacity-50" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-block mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-purple/10 border border-accent-purple/20 text-accent-purple text-sm font-medium">
                <Sparkles size={16} className="animate-pulse" />
                Available for work
              </span>
            </motion.div>

            {/* Greeting */}
            <motion.p variants={itemVariants} className="text-gray-400 text-lg mb-4 font-mono">
              Hello World! I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="text-white">Sudhi </span>
              <span className="gradient-text-animated">Kumaran</span>
            </motion.h1>

            {/* Animated Title */}
            <motion.div variants={itemVariants} className="text-2xl sm:text-3xl text-gray-300 mb-8 h-12">
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'UI/UX Enthusiast',
                  2000,
                  'Creative Problem Solver',
                  2000,
                  'Code Craftsman',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="font-display"
              />
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-lg max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              I build fast, scalable, and visually striking digital products. 
              Turning complex ideas into clean, intuitive user experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-accent-purple to-accent-pink rounded-xl font-semibold text-white overflow-hidden shadow-lg shadow-accent-purple/25"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  View My Work
                  <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent-pink to-accent-purple opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>

              <motion.a
                href="/resume.pdf"
                download="Sudhi_Kumaran_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 border-2 border-white/20 rounded-xl font-semibold text-white hover:border-accent-purple/50 hover:bg-accent-purple/10 transition-all flex items-center justify-center gap-2"
              >
                <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
                Download CV
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="flex gap-8 mt-12 justify-center lg:justify-start"
            >
              {[
                { number: '10+', label: 'Projects' },
                { number: '1', label: 'Internship' },
                { number: '2025', label: 'Graduate' },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <p className="text-3xl font-bold gradient-text">{stat.number}</p>
                  <p className="text-gray-500 text-sm">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Code Block */}
          <motion.div
            ref={codeBlockRef}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-accent-purple/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent-pink/20 rounded-full blur-2xl" />
              
              {/* Code block */}
              <div className="relative code-block p-6 rounded-2xl overflow-hidden">
                {/* Window controls */}
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>

                {/* Code content */}
                <pre className="text-sm leading-relaxed overflow-x-auto">
                  <code>
                    <span className="text-accent-purple">const</span>{' '}
                    <span className="text-accent-cyan">developer</span>{' '}
                    <span className="text-white">=</span>{' '}
                    <span className="text-accent-pink">{'{'}</span>
                    {'\n'}
                    {'  '}
                    <span className="text-accent-emerald">name</span>
                    <span className="text-white">:</span>{' '}
                    <span className="text-yellow-300">"Sudhi Kumaran"</span>
                    <span className="text-white">,</span>
                    {'\n'}
                    {'  '}
                    <span className="text-accent-emerald">skills</span>
                    <span className="text-white">:</span>{' '}
                    <span className="text-accent-pink">[</span>
                    {'\n'}
                    {'    '}
                    <span className="text-yellow-300">"React"</span>
                    <span className="text-white">,</span>
                    {'\n'}
                    {'    '}
                    <span className="text-yellow-300">"Node.js"</span>
                    <span className="text-white">,</span>
                    {'\n'}
                    {'    '}
                    <span className="text-yellow-300">"MongoDB"</span>
                    <span className="text-white">,</span>
                    {'\n'}
                    {'    '}
                    <span className="text-yellow-300">"PostgreSQL"</span>
                    {'\n'}
                    {'  '}
                    <span className="text-accent-pink">]</span>
                    <span className="text-white">,</span>
                    {'\n'}
                    {'  '}
                    <span className="text-accent-emerald">passion</span>
                    <span className="text-white">:</span>{' '}
                    <span className="text-yellow-300">"Building scalable products"</span>
                    <span className="text-white">,</span>
                    {'\n'}
                    {'  '}
                    <span className="text-accent-cyan">createAwesomeStuff</span>
                    <span className="text-white">:</span>{' '}
                    <span className="text-accent-purple">() =&gt;</span>{' '}
                    <span className="text-accent-pink">{'{'}</span>
                    {'\n'}
                    {'    '}
                    <span className="text-accent-purple">return</span>{' '}
                    <span className="text-yellow-300">"✨ Magic happens"</span>
                    <span className="text-white">;</span>
                    {'\n'}
                    {'  '}
                    <span className="text-accent-pink">{'}'}</span>
                    {'\n'}
                    <span className="text-accent-pink">{'}'}</span>
                    <span className="text-white">;</span>
                  </code>
                </pre>

                {/* Shimmer effect */}
                <div className="absolute inset-0 shimmer pointer-events-none" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-500 hover:text-white transition-colors"
        >
          <span className="text-xs font-mono">Scroll Down</span>
          <ArrowDown size={20} />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
