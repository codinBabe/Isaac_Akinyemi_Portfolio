import { Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const WorkLayout = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.main
        className="container mx-auto"
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeInOut" }}
      >
        <p className="text-sm">Click on any card to read the case study</p>
        <Outlet />
      </motion.main>
    </AnimatePresence>
  );
};

export default WorkLayout;
