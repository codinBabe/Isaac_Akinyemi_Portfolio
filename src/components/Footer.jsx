import { motion } from "framer-motion";
import AnchorTag from "./AnchorTag";

const Footer = () => {
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
    <footer className="container mx-auto p-4">
      <motion.div
        className="flex items-center justify-center gap-4"
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
            link={"https://twitter.com/techiebaker"}
          />{" "}
          (techie baker)
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
