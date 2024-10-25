import { motion } from "framer-motion";

const AnimatedTitle = ({ classname, text }) => {
  titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };
  return (
    <motion.h1
      className={classname}
      variants={footerVariants}
      initial="hidden"
      animate="visible"
    >
      {text}
    </motion.h1>
  );
};

export default AnimatedTitle;
