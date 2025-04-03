import { motion } from "framer-motion";

const BouncingDots = () => {
  const dotVariants = {
    bounce: {
      y: [0, -10, 0],
      transition: {
        duration: 0.6,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="flex justify-center items-center h-screen space-x-2">
      <motion.div
        className="w-4 h-4 bg-tintblue1 rounded-full"
        variants={dotVariants}
        animate="bounce"
      />
      <motion.div
        className="w-4 h-4 bg-tintblue1 rounded-full"
        variants={dotVariants}
        animate="bounce"
        transition={{ delay: 0.1 }}
      />
      <motion.div
        className="w-4 h-4 bg-tintblue1 rounded-full"
        variants={dotVariants}
        animate="bounce"
        transition={{ delay: 0.2 }}
      />
    </div>
  );
};

export default BouncingDots;
