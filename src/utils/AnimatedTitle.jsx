import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "./icons/Arrows";

const AnimatedTitle = ({ classname, text, isopen, setIsOpen }) => {
  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 50,
        damping: 10,
      },
    },
  };
  return (
    <motion.div
      className={`flex items-center gap-3 my-5 ${classname}`}
      variants={titleVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.button
        className="bg-tintblue2 rounded-full w-10 h-10 flex items-center justify-center"
        onClick={() => setIsOpen(!isopen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isopen ? <ArrowDown /> : <ArrowRight />}
      </motion.button>
      <h2 className="font-intertight font-medium text-lg">{text}</h2>
    </motion.div>
  );
};

export const AnimatedSubTitle = ({ classname, text }) => {
  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 50,
        damping: 10,
      },
    },
  };
  return (
    <motion.h3
      className={classname}
      variants={titleVariants}
      initial="hidden"
      animate="visible"
    >
      {text}
    </motion.h3>
  );
};

export default AnimatedTitle;
