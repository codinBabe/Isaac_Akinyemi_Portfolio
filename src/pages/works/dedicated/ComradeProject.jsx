import React from "react";
import SectionLayout from "../../../layouts/SectionLayout";
import GoBack from "../../../utils/GoBack";
import {
  ComradeContentImages,
  ComradeMobileImages,
} from "../../../utils/ImagesImport";
import ImageSlider from "../../../components/ImageSlider";
import AnchorTag from "../../../components/AnchorTag";

const ComradeProject = () => {
  return (
    <>
      <SectionLayout className={"border-b border-b-tintblue1"}>
        <GoBack />
      </SectionLayout>
      <SectionLayout>
        <p className="text-sm mt-6">REAL PROJECT - Website design</p>
        <h2 className="font-grotesque text-3xl">
          <span className="text-seccomrade">Comrade.ng</span>: Coming together
          for a better Nigeria
        </h2>
        <div className="flex flex-wrap items-start gap-2 text-sm mt-2 mb-6">
          <p className="bg-tintblue2 rounded-full py-[2px] px-2 whitespace-nowrap">
            User Research
          </p>
          <p className="bg-tintblue2 rounded-full py-[2px] px-2 whitespace-nowrap">
            UX Design
          </p>
          <p className="bg-tintblue2 rounded-full py-[2px] px-2 whitespace-nowrap">
            UI Design
          </p>
        </div>
        <ImageSlider
          images={Object.values(ComradeMobileImages)}
          text={"THE WEBSITE DESIGN"}
        />
      </SectionLayout>
      <SectionLayout className={"font-intertight"}>
        <div>
          <p className="text-sm">THE PROBLEM</p>
          <h2 className="font-grotesque text-2xl my-1">
            Voter apathy among the Nigerian youths
          </h2>
          <p className="text-lg">
            Voter apathy occurs when eligible voters decide not to vote in an
            election because they think that their participation will not make a
            difference.
          </p>
        </div>
        <div className="mt-6">
          <p className="text-sm mb-1">MY ROLE - COLLABORATORS</p>
          <p className="text-2xl">
            I worked on the early concept of comrade.ng with <b>2</b> UX
            designers and other project team members.{" "}
            <span className="bg-secyellowgreen">
              The main aim of the project is to reduce voter apathy among
              Nigerian youths
            </span>{" "}
            in the 2023 general elections. I was involved in the{" "}
            <span className="bg-secpalepurple">
              {" "}
              end-to-end design process, including user research, information
              architecture, and UI design.
            </span>
          </p>
          <p className="text-lg mt-3">
            <b>3</b> UX (user experience) designers, <b>5</b> developers,{" "}
            <b>1</b> project manager, <b>1</b> brand designer, <b>4</b> content
            developers, <b>1</b> community manager, and <b>2</b> social media
            managers
          </p>
        </div>
      </SectionLayout>
      <SectionLayout>
        <div className="font-intertight mt-4">
          <p className="text-sm mb-1">SECONDARY RESEARCH</p>
          <p className="text-xl mb-2">
            In 2019, over <b>₦124 billion</b> was wasted due to the low turnout
            of voters in Nigeria. In 2015, over <b>₦66 billion</b>, and in 2011,
            over <b>₦64 billion</b>. This was due to the excess voting materials
            left after the elections in those years.
          </p>
          <AnchorTag
            classname={"text-primaryblue underline font-medium"}
            text={"Source"}
            link={
              "https://dataphyte.com/latest-reports/governance/nigeria-wasted-over-n255-billion-due-to-low-voter-turnout-in-the-last-3-general-elections/"
            }
          />
        </div>
        <div>
          <div className="text-base mt-8">
            <div className="bg-tintblue3 font-medium flex items-center justify-between p-3">
              <p>YEAR</p>
              <p>AMOUNT INVESTED</p>
              <p>WASTED</p>
            </div>
            <div className="flex items-center justify-between p-3">
              <p>2019</p>
              <p>188.93</p>
              <p>65.9%</p>
            </div>
            <div className="flex items-center justify-between p-3 bg-tintblue4">
              <p>2015</p>
              <p>116.40</p>
              <p>57.2%</p>
            </div>
            <div className="flex items-center justify-between p-3">
              <p>2011</p>
              <p>139.19</p>
              <p>46.3%</p>
            </div>
          </div>
        </div>
      </SectionLayout>
      <SectionLayout className={"font-intertight"}>
        <div>
          <h2 className="font-grotesque text-2xl mb-4">
            Why is this important?
          </h2>
          <div>
            <div className="bg-tintblue4 p-5 mb-4 relative">
              <p>
                Not participating in the elections encourages manipulation and
                vote rigging, thereby reducing the credibility of the results.
              </p>
              <div className="w-7 h-7 rounded-full bg-primaryblue p-2 font-semibold flex items-center justify-center text-white absolute right-0 top-0">
                1
              </div>
            </div>
            <div className="bg-tintblue4 p-5 mb-4 relative">
              <p>
                Over <b>70%</b> of Nigerians are under <b>30 years</b> of age.
                Active involvement of the youths will reduce the amount lost
                during elections.
              </p>
              <div className="w-7 h-7 rounded-full bg-primaryblue p-2 font-semibold flex items-center justify-center text-white absolute right-0 top-0">
                2
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>
      <SectionLayout className={"border-b-2 border-b-tintblue1"}>
        <img src={ComradeContentImages.comradecontent1} alt="" />
        <p className="text-center font-intertight font-medium text-sm mt-2 mb-6">
          ELECTION IN PROGRESS - NIGERIA
        </p>
      </SectionLayout>
      <SectionLayout className={"font-intertight"}>
        <div>
          <h2 className="font-grotesque text-2xl my-4">Project goals</h2>
          <div className="flex justify-center gap-4">
            <b>#1</b>
            <p>
              Increase the participation of the Nigerian youths in the{" "}
              <b>2023</b> general elections.
            </p>
          </div>
          <div className="flex justify-center gap-4 my-3">
            <b>#2</b>
            <p>Spread voter education across various communities in Nigeria.</p>
          </div>
          <div className="flex justify-center gap-4 my-3">
            <b>#3</b>
            <p>
              Help voters make informed decisions through better access to
              information.
            </p>
          </div>
          <div className="flex justify-center gap-4">
            <b>#4</b>
            <p>Drive community involvement in the election process.</p>
          </div>
        </div>
        <div>
          <h2 className="font-grotesque text-2xl my-5">What did we do?</h2>
          <div>
            <div className="bg-tintblue4 p-5 mb-4 relative">
              <p>
                Designed and built a website for providing information and
                educating voters about the election process.
              </p>
              <div className="w-7 h-7 rounded-full bg-primaryblue p-2 font-semibold flex items-center justify-center text-white absolute right-0 top-0">
                1
              </div>
            </div>
            <div className="bg-tintblue4 p-5 mb-4 relative">
              <p>
                Brought together a community of over <b>230</b> youths who
                believed in our mission and were enthusiastic for a change.
              </p>
              <div className="w-7 h-7 rounded-full bg-primaryblue p-2 font-semibold flex items-center justify-center text-white absolute right-0 top-0">
                2
              </div>
            </div>
            <div className="bg-tintblue4 p-5 mb-4 relative">
              <p>
                Provided posters and fliers about voter education on the website
                for easy print and distribution.
              </p>
              <div className="w-7 h-7 rounded-full bg-primaryblue p-2 font-semibold flex items-center justify-center text-white absolute right-0 top-0">
                3
              </div>
            </div>
            <div className="bg-tintblue4 p-5 mb-4 relative">
              <p>
                Organised a voter seminar at one of the top universities in
                Nigeria with over <b>350</b> physical and <b>260</b> online
                attendees.
              </p>
              <div className="w-7 h-7 rounded-full bg-primaryblue p-2 font-semibold flex items-center justify-center text-white absolute right-0 top-0">
                4
              </div>
            </div>
            <div className="bg-tintblue4 p-5 mb-4 relative">
              <p>
                Mobilised over <b>₦3,000,000</b> and formed valuable
                partnerships for the youth voters’ seminar.
              </p>
              <div className="w-7 h-7 rounded-full bg-primaryblue p-2 font-semibold flex items-center justify-center text-white absolute right-0 top-0">
                5
              </div>
            </div>
          </div>
        </div>
        <AnchorTag
          classname={"text-primaryblue underline font-medium"}
          text={"Voter seminar report"}
          link={
            "https://drive.google.com/file/d/15vDkTxpyXKcxTTW_LGr1U6BFQsl4KdB6/view"
          }
        />
      </SectionLayout>
      <SectionLayout className={"border-b-2 border-b-tintblue1"}>
        <div className="mt-5">
          <img
            src={ComradeContentImages.comrademobile6}
            alt="comrade-image-6"
          />
          <p className="text-center font-intertight font-medium text-sm mt-2 mb-6">
            SOME OF THE THINGS WE DID
          </p>
        </div>
        <div>
          <h2 className="font-grotesque text-2xl my-5">Impacts and Outcomes</h2>
          <div>
            <div className="bg-tintblue4 p-5 mb-4 relative">
              <p>
                The youths accounted for up to <b>40%</b> of the total
                registered voters in the 2023 general elections in Nigeria.
              </p>
              <div className="w-7 h-7 rounded-full bg-primaryblue p-2 font-semibold flex items-center justify-center text-white absolute right-0 top-0">
                1
              </div>
            </div>
            <div className="bg-tintblue4 p-5 mb-4 relative">
              <p>
                An increase in the turnout of voters in Lagos, and some other
                parts of Nigeria.
              </p>
              <div className="w-7 h-7 rounded-full bg-primaryblue p-2 font-semibold flex items-center justify-center text-white absolute right-0 top-0">
                2
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>
      <SectionLayout className={"font-intertight"}>
        <div>
          <p className="text-sm">GENERATIVE USER RESEARCH</p>
          <h2 className="font-grotesque text-2xl my-4">
            Getting information and talking to people
          </h2>
          <div className="flex justify-center gap-4">
            <b>#1</b>
            <p>
              Majority of the project team members were undergoing the NYSC
              program.{" "}
              <em>
                The NYSC (National Youth Service Corps) is a 1-year compulsory
                program for university graduates in Nigeria.
              </em>
            </p>
          </div>
          <div className="flex justify-center gap-4 my-3">
            <b>#2</b>
            <div>
              <p>
                We leveraged the NYSC program to organise <b>2 focus groups</b>{" "}
                and one-on-one conversations <b>(3)</b> during weekly CDS to
                discuss with youths who are eligible to vote about the low
                turnout of voters during the election and understand their
                attitude towards the election process.
              </p>
              <em className="text-sm">
                CDS - community development service, is done weekly during the
                NYSC program.
              </em>{" "}
              <br />
              <em className="text-sm">
                The one-on-one research was done by myself, while some other
                team members joined in for the focus group sessions.
              </em>
            </div>
          </div>
        </div>
        <AnchorTag
          classname={"text-primaryblue underline font-medium"}
          text={"Generative research plan"}
          link={
            "https://docs.google.com/document/d/1QYIjyXjnFikDui-k-O_HP9kOOKt2nIFoizUlqlzalHs/edit?pli=1&tab=t.0#heading=h.kdxr5ylwtwxs"
          }
        />
      </SectionLayout>
      <SectionLayout>
        <div>
          <img src={ComradeContentImages.comrademobile7} alt="" />
        </div>
      </SectionLayout>
    </>
  );
};

export default ComradeProject;
