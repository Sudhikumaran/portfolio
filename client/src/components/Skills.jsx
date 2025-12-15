import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'tools', name: 'Tools' },
  ];

  const skills = [
    // Frontend
    { name: 'React', category: 'frontend', level: 90, color: '#61DAFB' },
    { name: 'Tailwind CSS', category: 'frontend', level: 88, color: '#06B6D4' },
    { name: 'JavaScript', category: 'frontend', level: 85, color: '#F7DF1E' },

    // Backend
    { name: 'Node.js', category: 'backend', level: 85, color: '#339933' },
    { name: 'Express', category: 'backend', level: 85, color: '#ffffff' },
    { name: 'MongoDB', category: 'backend', level: 82, color: '#47A248' },
    { name: 'PostgreSQL', category: 'backend', level: 80, color: '#4169E1' },
    { name: 'REST API', category: 'backend', level: 88, color: '#FF6B6B' },
    { name: 'Python', category: 'backend', level: 75, color: '#3776AB' },

    // Tools
    { name: 'Git', category: 'tools', level: 85, color: '#F05032' },
    { name: 'GitHub', category: 'tools', level: 88, color: '#ffffff' },
    { name: 'Postman', category: 'tools', level: 85, color: '#FF6C37' },
    { name: 'AWS', category: 'tools', level: 70, color: '#FF9900' },
    { name: 'VS Code', category: 'tools', level: 92, color: '#007ACC' },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent-cyan font-mono text-sm tracking-wider">// MY SKILLS</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            <span className="text-white">Tech </span>
            <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-accent-purple to-accent-pink text-white shadow-lg shadow-accent-purple/25'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              layout
              className="group relative p-6 rounded-2xl bg-dark-200/50 border border-white/5 hover:border-accent-purple/30 transition-all duration-300 hover-lift"
            >
              {/* Glow effect */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ 
                  background: `radial-gradient(circle at center, ${skill.color}10, transparent)` 
                }}
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                  <span 
                    className="text-sm font-mono font-bold"
                    style={{ color: skill.color }}
                  >
                    {skill.level}%
                  </span>
                </div>

                {/* Progress bar */}
                <div className="h-2 bg-dark-300 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
                    className="h-full rounded-full"
                    style={{ 
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}aa)` 
                    }}
                  />
                </div>

                {/* Category badge */}
                <span className="inline-block mt-3 px-3 py-1 text-xs font-medium text-gray-500 bg-white/5 rounded-full capitalize">
                  {skill.category}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 text-sm">
            And constantly learning more...{' '}
            <span className="text-accent-purple">∞</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
