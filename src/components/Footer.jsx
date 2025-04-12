import { motion } from "framer-motion";
import AnchorTag from "./AnchorTag";
import { AnimatedSubTitle } from "../utils/AnimatedTitle";
import AnimatedContainer from "../utils/AnimatedContainer";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  const hideFooter =
    location.pathname === "/about" || location.pathname === "/resume";

  const midWidth =
    location.pathname !== "/about" && location.pathname !== "/resume";

  const footerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <footer
      className={`w-full mx-auto p-5 ${
        midWidth ? "lg:w-3/5" : "lg:px-12"
      } -mt-12`}
    >
      <div className="border-t-2 border-t-tintblue1 mb-12 lg:mb-2">
        <div className="mt-8">
          <AnimatedSubTitle
            text={"Contact Isaac"}
            classname={"font-grotesque text-[22px] leading-[24.2px]"}
          />
          <AnimatedContainer>
            <div className="flex flex-col lg:flex-row gap-4 -mt-3">
              <AnchorTag
                classname={"underline text-base font-intertight"}
                text={"dareytemy@gmail.com"}
                link={"mailto:dareytemy@gmail.com"}
              />
              <AnchorTag
                classname={"underline text-base font-intertight"}
                text={"linkedin.com/isaac-akinyemi"}
                link={"https://www.linkedin.com/in/isaac-akinyemi"}
              />
              <AnchorTag
                classname={"underline text-base font-intertight"}
                text={"twitter.com/dareytemy"}
                link={"https://twitter.com/dareytemy"}
              />
            </div>
          </AnimatedContainer>
        </div>
        <div>
          <AnimatedSubTitle
            text={"Quick links"}
            classname={"font-grotesque text-[22px] leading-[24.2px]"}
          />
          <AnimatedContainer>
            <div className="flex gap-4 -mt-3">
              <Link to="/works" className="underline text-base font-intertight">
                All works
              </Link>
              <Link to="/about" className="underline text-base font-intertight">
                About
              </Link>
              <Link
                to="/resume"
                className="underline text-base font-intertight"
              >
                Resume
              </Link>
            </div>
          </AnimatedContainer>
        </div>
        <motion.div
          className={`flex items-center gap-4 ${
            hideFooter ? "hidden" : "block"
          }`}
          variants={footerVariants}
          initial="hidden"
          animate="visible"
        >
          <p className="text-sm">
            Designed by{" "}
            <AnchorTag
              classname={"font-semibold underline"}
              text={"Isaac"}
              link={"https://twitter.com/dareytemy"}
            />
            , built by{" "}
            <AnchorTag
              classname={"font-semibold underline"}
              text={"Oluwatoyin"}
              link={"https://techiebaker.vercel.app/"}
            />{" "}
            (techie baker)
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
