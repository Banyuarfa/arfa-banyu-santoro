import { motion } from "framer-motion";
import { useRef, useState } from "react";

const MagneticButton = ({ children }) => {
  const ref = useRef(null);
  const [ position, setPosition ] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };
  const { x, y } = position;
  return (
    <motion.div
      onmouse
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={ref}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="relative inline-block px-6 py-3 rounded-lg bg-blue-500 text-white font-semibold cursor-pointer transition-transform"
    >
      
      {children}
    </motion.div>
  );
};

export default MagneticButton;
