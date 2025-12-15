import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-dark-400 flex items-center justify-center z-50">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/10 via-transparent to-accent-pink/10" />
      
      {/* Animated loader */}
      <div className="relative">
        {/* Outer ring */}
        <motion.div
          className="w-32 h-32 rounded-full border-4 border-transparent"
          style={{
            borderTopColor: '#a855f7',
            borderRightColor: '#ec4899',
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
        
        {/* Inner ring */}
        <motion.div
          className="absolute inset-4 rounded-full border-4 border-transparent"
          style={{
            borderBottomColor: '#06b6d4',
            borderLeftColor: '#10b981',
          }}
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
        />
        
        {/* Center logo */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <span className="text-3xl font-bold gradient-text font-mono">&lt;/&gt;</span>
        </motion.div>
      </div>
      
      {/* Loading text */}
      <motion.div
        className="absolute bottom-20 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <motion.p
          className="text-gray-400 font-mono text-sm"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Loading awesome stuff...
        </motion.p>
      </motion.div>
      
      {/* Progress bar */}
      <motion.div
        className="absolute bottom-10 w-48 h-1 bg-dark-200 rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-accent-purple via-accent-pink to-accent-cyan"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />
      </motion.div>
    </div>
  );
};

export default Loader;
