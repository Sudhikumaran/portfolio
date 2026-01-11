import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Folder, Star, GitFork } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const filters = ['all', 'fullstack', 'ai', 'web'];

  // Sudhi's real GitHub projects
  const projects = [
    {
      id: 1,
      title: 'Ripple AI',
      description: 'AI-powered content creation platform with premium tools for writing articles, generating images, and enhancing workflow.',
      image: '/ripple-ai.png',
      tags: ['JavaScript', 'AI', 'Node.js', 'React'],
      category: 'ai',
      liveUrl: 'https://quick-ai-two-mocha.vercel.app/',
      githubUrl: 'https://github.com/Sudhikumaran/ripple-ai',
      featured: true,
      stars: 4,
      forks: 1,
    },
    {
      id: 2,
      title: 'Placement Flow',
      description: 'Comprehensive placement management system to streamline recruitment processes and track student placements.',
      image: '/placement-flow.png',
      tags: ['React', 'FastAPI', 'Python', 'MongoDB'],
      category: 'fullstack',
      liveUrl: 'https://vercel.com/sudhikumarans-projects/placement-flow',
      githubUrl: 'https://github.com/Sudhikumaran/placement-flow',
      featured: true,
      stars: 7,
      forks: 2,
    },
    {
      id: 3,
      title: 'Quick Stay',
      description: 'Hotel booking application with real-time availability, secure authentication, fast search & filters.',
      image: '/quick-stay.png',
      tags: ['React', 'Node.js', 'Express', 'MongoDB'],
      category: 'fullstack',
      liveUrl: 'https://quick-stay-full-stack-r52j.vercel.app/',
      githubUrl: 'https://github.com/Sudhikumaran',
      featured: true,
      stars: 10,
      forks: 3,
    },
    {
      id: 4,
      title: 'Protena AI',
      description: 'AI-powered application built with modern web technologies for intelligent solutions.',
      image: '/protena-ai.png',
      tags: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL'],
      category: 'fullstack',
      liveUrl: 'https://protena-ai-front.vercel.app/',
      githubUrl: 'https://github.com/Sudhikumaran/Protena-ai',
      featured: true,
      stars: 5,
      forks: 2,
    },
    {
      id: 5,
      title: 'HRMS Application',
      description: 'Human Resource Management System for managing employees, attendance, and payroll efficiently.',
      image: '/hrms-app.png',
      tags: ['Flutter', 'Firebase'],
      category: 'web',
      liveUrl: 'https://hrms-application-six.vercel.app/',
      githubUrl: 'https://github.com/Sudhikumaran/Hrms-application',
      featured: true,
      stars: 8,
      forks: 3,
    },
    {
      id: 6,
      title: 'Sales Management',
      description: 'Complete sales management solution for tracking orders, inventory, and customer data.',
      image: '/sales-management.png',
      tags: ['React', 'Node.js', 'Express', 'PostgreSQL'],
      category: 'fullstack',
      liveUrl: 'https://sales-management-pi.vercel.app/',
      githubUrl: 'https://github.com/Sudhikumaran/sales-management',
      featured: false,
      stars: 6,
      forks: 2,
    },
    {
      id: 7,
      title: 'Problem Solving',
      description: 'Collection of DSA problems and solutions in Python for coding practice and interviews.',
      image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800',
      tags: ['Python', 'DSA', 'Algorithms'],
      category: 'web',
      liveUrl: '#',
      githubUrl: 'https://github.com/Sudhikumaran/Problem-Solving',
      featured: false,
      stars: 4,
      forks: 1,
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-accent-pink/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-accent-purple/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent-pink font-mono text-sm tracking-wider">// MY WORK</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            <span className="text-white">Featured </span>
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A selection of my recent work that showcases my skills and passion
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full text-sm font-medium capitalize transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-accent-purple to-accent-pink text-white shadow-lg shadow-accent-purple/25'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                variants={itemVariants}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group relative rounded-2xl overflow-hidden bg-dark-200/50 border border-white/5 hover:border-accent-purple/30 transition-all duration-500 hover-lift"
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-gradient-to-r from-accent-purple to-accent-pink rounded-full text-xs font-semibold text-white">
                    Featured
                  </div>
                )}

                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-200 via-transparent to-transparent" />

                  {/* Overlay on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                    className="absolute inset-0 bg-dark-400/80 flex items-center justify-center gap-4"
                  >
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-accent-purple rounded-full text-white"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white/10 rounded-full text-white hover:bg-white/20"
                    >
                      <Github size={20} />
                    </motion.a>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2 text-accent-purple">
                      <Folder size={18} />
                      <span className="text-xs font-mono uppercase">{project.category}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-500 text-xs">
                      <span className="flex items-center gap-1">
                        <Star size={12} /> {project.stars}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork size={12} /> {project.forks}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-purple transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium text-gray-400 bg-white/5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/Sudhikumaran"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/20 rounded-xl font-semibold text-white hover:border-accent-purple/50 hover:bg-accent-purple/10 transition-all"
          >
            <Github size={20} />
            View All on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
