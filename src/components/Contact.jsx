import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
import { EmailSvg, LinkedinSvg, TwitterSvg } from "../utils/icons/SocialIcons";
import { CloseIcon } from "../utils/icons/NavIcons";

const Contact = ({ isOpen, setIsOpen }) => {
  const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const modal = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { delay: 0.5 },
    },
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <motion.div
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="bg-greywhite100 relative py-8 px-5 rounded-[20px]"
          >
            <div className="border-b border-b-greyblack700">
              <h1 className="font-grotesque text-xl mb-1">Contact Isaac</h1>
              <p className="text-sm mb-2">Digital Product (UX) Designer</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-5">
              <Button
                text="Email"
                svgComponents={EmailSvg}
                externalLink={"mailto:dareytemy@gmail.com"}
              />
              <Button
                text="Linkedin"
                svgComponents={LinkedinSvg}
                externalLink={"https://www.linkedin.com/in/isaac-akinyemi"}
              />
              <Button
                text="Twitter"
                svgComponents={TwitterSvg}
                externalLink={"https://twitter.com/dareytemy"}
              />
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-0 right-0 m-4"
            >
              <CloseIcon />
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Contact;