import { motion } from "framer-motion";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
import Contact from "./Contact";

const HeaderLarge = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const location = useLocation();
  const isWorksPage = location.pathname.startsWith("/works");

  return (
    <header className="relative container mx-auto">
      <nav className="hidden lg:block bg-tintblue5 w-full fixed top-0 z-10 px-5">
        <div className="px-5 mt-7 border-b-[0.5px] border-greyblack600">
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={`flex items-center space-x-96 ${
              isWorksPage ? "mb-14" : "mb-0"
            }`}
          >
            <div className="flex items-center space-x-20">
              <Link
                to="/works"
                className={`${
                  location.pathname.includes("/works")
                    ? "bg-primaryblue text-white"
                    : ""
                }`}
              >
                Works
              </Link>
              <Link
                to="/about"
                className={`${
                  location.pathname === "/about"
                    ? "bg-primaryblue text-white"
                    : ""
                }`}
              >
                About Isaac
              </Link>
              <Link
                to="/resume"
                className={`${
                  location.pathname === "/resume"
                    ? "bg-primaryblue text-white"
                    : ""
                }`}
              >
                Resume
              </Link>
            </div>
            <div className="mb-4">
              <Button
                text="Contact Isaac"
                defaultbtn={true}
                onClick={() => setIsContactOpen(true)}
              />
            </div>
          </motion.div>
        </div>
      </nav>
      {isContactOpen && (
        <Contact isOpen={isContactOpen} setIsOpen={setIsContactOpen} />
      )}
    </header>
  );
};

export default HeaderLarge;
