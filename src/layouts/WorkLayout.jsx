import Aside from "../components/Aside";
import { Outlet, useLocation } from "react-router-dom";
import WorkNav from "../components/WorkNav";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import WorkFooter from "../components/WorkFooter";

const WorkLayout = () => {
  const location = useLocation();
  return (
    <>
      <Header />
      <Aside />
      <WorkNav />
      <AnimatePresence mode="wait">
        <motion.main
          className="flex-grow container mx-auto mt-[135px] p-5"
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
      <WorkFooter />
    </>
  );
};

export default WorkLayout;
