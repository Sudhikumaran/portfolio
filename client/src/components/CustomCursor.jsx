import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Hide custom cursor on touch devices
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  
  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window);
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="pointer-events-none fixed z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        <div 
          className={`w-10 h-10 rounded-full border-2 transition-colors duration-300 ${
            isHovering 
              ? 'border-accent-pink bg-accent-pink/20' 
              : 'border-accent-purple'
          }`}
        />
      </motion.div>

      {/* Cursor dot */}
      <motion.div
        className="pointer-events-none fixed z-[10000]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{
          type: 'spring',
          stiffness: 1000,
          damping: 35,
          mass: 0.1,
        }}
      >
        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-accent-purple to-accent-pink" />
      </motion.div>
    </>
  );
};

export default CustomCursor;
