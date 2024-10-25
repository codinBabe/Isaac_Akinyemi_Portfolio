import { motion } from "framer-motion";
import { useState } from "react";
import IsaacImg from "../assets/isaac_pic.png";
import AnchorTag from "./AnchorTag";

const Aside = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const divVariant = {
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
    <aside>
      {isModalOpen ? (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="bg-tintblue5 p-4"
        >
          <div className="">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="font-grotesque text-2xl">Isaac AKINYEMI</h1>
                <p className="text-sm font-medium text-greyblack300">
                  Digital Product (UX) Designer
                </p>
              </div>
              <img src={IsaacImg} alt="Isaac AKINYEMI" />
            </div>
            <div className="mt-5 text-[15px]">
              <ul>
                <li>
                  Passionate about how users experience products, services,
                  processes, and systems.
                </li>
                <li>
                  Worked in FinTech, eCommerce, PropTech, and EduTech
                  industries.
                </li>
                <li>
                  Currently bridging the gap between business goals and user
                  needs at{" "}
                  <AnchorTag
                    classname={"text-primaryblue underline font-medium"}
                    text={"Ecobank Transnational Incorporated"}
                    link={"https://ecobank.com/ng/personal-banking"}
                  />
                  .
                </li>
                <li>
                  Eliciting requirements from business stakeholders and
                  communicating it using necessary methods and processes to the
                  technology stakeholders.
                </li>
                <li>
                  Designed an SME App that did more than NGN 1.25 billion
                  transaction value within 4 months of launch, and currently
                  doing more than NGN 10 billion monthly.
                </li>
              </ul>
              <ul>
                <li>
                  Advocating for self-awareness and interpersonal skills{" "}
                  <AnchorTag
                    classname={"text-primaryblue underline font-medium"}
                    text={"here"}
                    link={"https://dareytemy.substack.com/"}
                  />
                  .
                </li>
                <li>My friends say I value friendship.</li>
                <li>Lover of music and Bollywood movies.</li>
              </ul>
              <div className="flex items-center gap-4 flex-wrap">
                <AnchorTag
                  classname={"text-primaryblue underline font-medium"}
                  text={"Email"}
                  link={"mailto:dareytemy@gmail.com"}
                />
                <AnchorTag
                  classname={"text-primaryblue underline font-medium"}
                  text={"Linkedin"}
                  link={"www.linkedin.com/in/isaac-akinyemi"}
                />
                <AnchorTag
                  classname={"text-primaryblue underline font-medium"}
                  text={"Twitter"}
                  link={"https://twitter.com/dareytemy"}
                />
                <AnchorTag
                  classname={"text-primaryblue underline font-medium"}
                  text={"Medium"}
                  link={"https://dareytemy.medium.com/"}
                />
                <AnchorTag
                  classname={"text-primaryblue underline font-medium"}
                  text={"Substack"}
                  link={"https://dareytemy.substack.com/"}
                />
              </div>
            </div>
            <button
              onClick={() => setIsModalOpen(false)}
              className="text-primaryblue text-sm font-semibold underline"
            >
              See less
            </button>
          </div>
        </motion.div>
      ) : (
        <motion.div
          variants={divVariant}
          initial="hidden"
          animate="visible"
          className="p-4"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-grotesque text-2xl">Isaac AKINYEMI</h1>
              <p className="text-sm font-medium text-greyblack300">
                Digital Product (UX) Designer
              </p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-primaryblue text-sm font-semibold underline"
            >
              See more
            </button>
          </div>
        </motion.div>
      )}
    </aside>
  );
};

export default Aside;
