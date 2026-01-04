import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      id: 1,
      company: 'Fortumars AI Technologies & Business Solutions',
      position: 'Software Developer Intern',
      period: 'Aug 2025 - Nov 2025',
      location: 'India',
      description: 'Worked on developing and maintaining web applications using modern technologies. Collaborated with the team to build AI-powered solutions and business tools.',
      achievements: [
        'Built full-stack web applications with React & Node.js',
        'Worked with REST APIs and database integrations',
        'Contributed to AI-powered business solutions',
        'Gained hands-on experience with agile development',
      ],
      current: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-accent-emerald/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-accent-purple/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent-emerald font-mono text-sm tracking-wider">// EXPERIENCE</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            <span className="text-white">Work </span>
            <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            My professional experience and career milestones
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="relative pl-8 md:pl-0 mb-12 last:mb-0"
            >
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-purple via-accent-pink to-transparent md:-translate-x-1/2" />

              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: index * 0.2 + 0.3 }}
                className={`absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full -translate-x-1/2 border-4 ${exp.current
                    ? 'bg-accent-emerald border-accent-emerald/30 animate-pulse'
                    : 'bg-dark-400 border-accent-purple/30'
                  }`}
              />

              {/* Content */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto'}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="group p-6 rounded-2xl bg-dark-200/50 border border-white/5 hover:border-accent-purple/30 transition-all duration-300"
                >
                  {/* Current badge */}
                  {exp.current && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 mb-4 text-xs font-medium text-accent-emerald bg-accent-emerald/10 rounded-full">
                      <span className="w-2 h-2 bg-accent-emerald rounded-full animate-pulse" />
                      Currently Working
                    </span>
                  )}

                  {/* Company & Position */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-accent-purple transition-colors">
                        {exp.position}
                      </h3>
                      <p className="text-accent-pink font-medium">{exp.company}</p>
                    </div>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.1 }}
                      className="p-2 text-gray-500 hover:text-white transition-colors"
                    >
                      <ExternalLink size={18} />
                    </motion.a>
                  </div>

                  {/* Meta info */}
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} className="text-accent-purple" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} className="text-accent-pink" />
                      {exp.location}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <span className="w-1.5 h-1.5 mt-2 rounded-full bg-gradient-to-r from-accent-purple to-accent-pink flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Resume Download */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="/resume.pdf?v=2026"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-purple to-accent-pink rounded-xl font-semibold text-white shadow-lg shadow-accent-purple/25"
          >
            <Briefcase size={20} />
            Download Full Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
