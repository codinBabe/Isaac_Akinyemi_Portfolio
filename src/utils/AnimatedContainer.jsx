import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AnimatedContainer = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.6,
        ease: "easeInOut",
      },
    },
  };
  return (
    <motion.div
      className="font-intertight text-lg leading-[26.1px] mx-auto my-6"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
};
export default AnimatedContainer;
