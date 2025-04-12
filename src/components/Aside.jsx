import { motion } from "framer-motion";
import { useState } from "react";
import IsaacImg from "../assets/isaac_pic.png";
import AnchorTag from "./AnchorTag";
import WorkFooter from "./WorkFooter";

const Aside = ({ isWorksPage }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalVariants = {
    hidden: { y: "100vh", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };
  const lgVariants = {
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
    <>
      {isModalOpen && isWorksPage && (
        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="fixed inset-0 w-full h-full bg-tintblue5 z-50 p-8 lg:hidden"
        >
          <div>
            <div className="flex items-center justify-between -ml-4">
              <div>
                <h1 className="font-grotesque text-2xl">Isaac AKINYEMI</h1>
                <p className="text-sm font-medium text-greyblack300">
                  Digital Product (UX) Designer
                </p>
              </div>
              <img src={IsaacImg} alt="Isaac AKINYEMI" />
            </div>
            <div className="mt-4 text-[13px] leading-5">
              <ul className="info-list list-disc">
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
                  Designed an SME App that did more than <b>NGN 1.25 billion</b>{" "}
                  transaction value within <b>4 months</b> of launch, and
                  currently doing more than <b>NGN 10 billion</b> monthly.
                </li>
                <li>
                  Advocating for self-awareness and interpersonal skills{" "}
                  <AnchorTag
                    text={"here"}
                    link={"https://dareytemy.substack.com/"}
                    classname={"text-primaryblue underline font-medium"}
                  />
                  .
                </li>
                <li>My friends say I value friendship.</li>
                <li>Lover of music and Bollywood movies.</li>
              </ul>
              <div className="flex items-center gap-4 flex-wrap mt-4">
                <AnchorTag
                  classname={"text-primaryblue underline font-medium"}
                  text={"Email"}
                  link={"mailto:dareytemy@gmail.com"}
                />
                <AnchorTag
                  classname={"text-primaryblue underline font-medium"}
                  text={"Linkedin"}
                  link={"https://www.linkedin.com/in/isaac-akinyemi"}
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
              className="text-primaryblue text-base font-semibold underline mt-4"
            >
              See less
            </button>
          </div>
        </motion.div>
      )}
      {!isModalOpen && (
        <div className="bg-tintblue3 fixed lg:static left-0 top-0 z-10 w-full lg:h-full">
          {isWorksPage && (
            <div className="flex items-center justify-between p-4 lg:hidden">
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
          )}
          <div className="hidden lg:block p-12">
            <motion.div
              variants={lgVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="flex flex-col">
                <img
                  src={IsaacImg}
                  alt="Isaac AKINYEMI"
                  className="w-14 h-14"
                />
                <div>
                  <h1 className="font-grotesque text-2xl">Isaac AKINYEMI</h1>
                  <p className="text-sm font-medium text-greyblack300">
                    Digital Product (UX) Designer
                  </p>
                </div>
              </div>
              <div className="text-[15px] leading-5 p-4">
                <ul className="info-list list-disc">
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
                    communicating it using necessary methods and processes to
                    the technology stakeholders.
                  </li>
                  <li>
                    Designed an SME App that did more than{" "}
                    <b>NGN 1.25 billion</b> transaction value within{" "}
                    <b>4 months</b> of launch, and currently doing more than{" "}
                    <b>NGN 10 billion</b> monthly.
                  </li>
                  <li>
                    Advocating for self-awareness and interpersonal skills{" "}
                    <AnchorTag
                      text={"here"}
                      link={"https://dareytemy.substack.com/"}
                      classname={"text-primaryblue underline font-medium"}
                    />
                    .
                  </li>
                  <li>My friends say I value friendship.</li>
                  <li>Lover of music and Bollywood movies.</li>
                </ul>
                <div className="flex items-center gap-4 flex-wrap mt-4">
                  <AnchorTag
                    classname={"text-primaryblue underline font-medium"}
                    text={"Email"}
                    link={"mailto:dareytemy@gmail.com"}
                  />
                  <AnchorTag
                    classname={"text-primaryblue underline font-medium"}
                    text={"Linkedin"}
                    link={"https://www.linkedin.com/in/isaac-akinyemi"}
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
            </motion.div>
            <div className="mt-10 -ml-12">
              <WorkFooter />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Aside;
