import Aside from "../components/Aside";
import { Outlet, useLocation } from "react-router-dom";
import WorkNav from "../components/WorkNav";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import WorkFooter from "../components/WorkFooter";

const WorkLayoutLarge = () => {
  const location = useLocation();
  return (
    <>
      <Header />
      <div className="lg:flex">
        <aside className="lg:w-1/4">
          <Aside />
        </aside>
        <div className="lg:w-3/4">
          <WorkNav />
          <AnimatePresence mode="wait">
            <motion.main
              className="container mx-auto mt-[135px] p-5"
              key={location.pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ ease: "easeInOut" }}
            >
              <p className="text-sm">
                Click on any card to read the case study
              </p>
              <Outlet />
            </motion.main>
          </AnimatePresence>
        </div>
      </div>
      <WorkFooter />
    </>
  );
};

export default WorkLayoutLarge;
