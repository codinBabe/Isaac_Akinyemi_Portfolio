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

  const pathParts = location.pathname.split("/").filter(Boolean);
  let pageTitle = "";
  if (pathParts[0] === "works") {
    pageTitle = "Works";
  } else {
    pageTitle = pathParts[0]?.replace(/-/g, " ") || "Home";
  }

  return (
    <header className="relative container mx-auto">
      <nav className="lg:hidden bg-greywhite100 border rounded-t-[20px] w-full pb-2 px-4 fixed bottom-0 left-1/2 transform -translate-x-1/2 z-50">
        {isModalOpen && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex flex-col justify-center gap-10 p-4 mt-2 border-b-[0.5px] border-greyblack500"
          >
            <NavLink
              to="/works"
              location={location}
              onClick={() => setIsModalOpen(false)}
            >
              Works
            </NavLink>
            <NavLink
              to="/about"
              location={location}
              onClick={() => setIsModalOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/resume"
              location={location}
              classname={"mb-2"}
              onClick={() => setIsModalOpen(false)}
            >
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
                  {pageTitle}
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
