import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const AnimatedContainer = ({ children }) => {
  const [ref, inView] = useInView();
  const animation = useAnimation();

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

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    } else {
      animation.start("hidden");
    }
  }, [animation, inView]);

  return (
    <motion.div
      className="font-intertight text-lg leading-[26.1px] mx-auto my-6"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={animation}
    >
      {children}
    </motion.div>
  );
};
export default AnimatedContainer;
