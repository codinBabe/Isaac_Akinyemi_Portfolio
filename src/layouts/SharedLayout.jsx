import { Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import Aside from "../components/Aside";
import WorkFooter from "../components/WorkFooter";
import HeaderLarge from "../components/HeaderLarge";
import Footer from "../components/Footer";
import WorkNav from "../components/WorkNav";

const SharedLayout = () => {
  const location = useLocation();
  const isWorksPage = location.pathname.startsWith("/works");

  return (
    <>
      <Header />
      <div className="lg:flex">
        <aside className="lg:w-1/3">
          <Aside isWorksPage={isWorksPage} />
        </aside>
        {isWorksPage && <WorkNav />}
        <div className="lg:w-2/3 bg-tintblue5">
          <HeaderLarge isWorksPage={isWorksPage} />
          <motion.main
            className={`container mx-auto p-5 lg:p-12 ${
              isWorksPage ? "mt-32" : "mt-8"
            }`}
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeInOut" }}
          >
            <Outlet />
          </motion.main>

          {!isWorksPage && <Footer />}
        </div>
      </div>
      <div className="lg:hidden">
        <WorkFooter />
      </div>
    </>
  );
};

export default SharedLayout;
