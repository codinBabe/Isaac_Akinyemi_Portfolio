import { motion } from "framer-motion";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "./Button";
import { CloseIcon, MenuIcon } from "../utils/icons/NavIcons";
import { NavLink } from "./NavLink";
import Contact from "./Contact";

const Header = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="relative container mx-auto">
      <nav className="bg-greywhite100 border rounded-t-[20px] pb-6 px-5">
        {isModalOpen && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex flex-col justify-center gap-10 p-4 mt-2 border-b-[0.5px] border-greyblack500"
          >
            <NavLink to="/works" location={location}>
              Works
            </NavLink>
            <NavLink to="/about" location={location}>
              About
            </NavLink>
            <NavLink to="/resume" location={location} classname={"mb-2"}>
              Resume
            </NavLink>
          </motion.div>
        )}
        <div className="flex items-center justify-between mt-5">
          {isModalOpen ? (
            <>
              <Button
                text="Contact Isaac"
                defaultbtn={true}
                onClick={() => setIsContactOpen(true)}
              />
              <button
                onClick={() => setIsModalOpen(false)}
                className="flex items-center gap-2"
              >
                <CloseIcon />
                <span>CLOSE</span>
              </button>
            </>
          ) : (
            <>
              {location.pathname && (
                <p className="capitalize bg-tintblue3 py-1 px-2 text-primaryblue font-medium">
                  {location.pathname.split("/")}
                </p>
              )}
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center justify-center gap-2"
              >
                <MenuIcon />
                <span>MENU</span>
              </button>
            </>
          )}
        </div>
      </nav>
      {isContactOpen && (
        <Contact isOpen={isContactOpen} setIsOpen={setIsContactOpen} />
      )}
    </header>
  );
};

export default Header;
