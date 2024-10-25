import { motion } from "framer-motion";

const SectionLayout = ({ children }) => {
  const sectionVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  return (
    <motion.section
      className="mx-auto p-4"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.section>
  );
};

export default SectionLayout;
