import { motion, AnimatePresence } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GoBack from "../utils/GoBack";

const MainLayout = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <div className="border-b border-b-tintblue1 fixed top-0 lg:left-[20%] w-full lg:w-3/5 z-20 py-3 px-5 bg-tintblue5">
          <GoBack />
        </div>
        <motion.main
          className="flex-grow container mx-auto p-4"
          key={location.pathname}
          initial={{ opacity: 0, x: "100vw" }}
          animate={{ opacity: 1, x: 0 }}
          variants={{ exit: { x: "-100vw" } }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default MainLayout;
