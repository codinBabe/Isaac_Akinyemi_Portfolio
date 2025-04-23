import React from "react";
import SectionLayout from "../../../layouts/SectionLayout";
import GoBack from "../../../utils/GoBack";
import {
  ComradeContentImages,
  ComradeMobileImages,
} from "../../../utils/ImagesImport";
import ImageSlider from "../../../components/ImageSlider";
import AnchorTag from "../../../components/AnchorTag";
import TheEnd from "../../../components/TheEnd";
import {
  comradeProjects,
  RelatedProjects,
} from "../../../components/RelatedProject";

const ComradeProject = () => {
  return (
    <>
      <SectionLayout
        className={"font-intertight border-b border-b-tintblue1 mt-16"}
      >
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-sm mt-6">REAL PROJECT - Website design</p>
            <h2 className="font-grotesque text-3xl lg:text-5xl">
              <span className="text-seccomrade">Comrade.ng</span>: Coming
              together for a better Nigeria
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
          </div>
          <div>
            <p className="text-sm">THE PROBLEM</p>
            <h2 className="font-grotesque text-2xl my-1">
              Voter apathy among the Nigerian youths
            </h2>
            <p className="text-lg">
              Voter apathy occurs when eligible voters decide not to vote in an
              election because they think that their participation will not make
              a difference.
            </p>
          </div>

          <div>
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
              <b>1</b> project manager, <b>1</b> brand designer, <b>4</b>{" "}
              content developers, <b>1</b> community manager, and <b>2</b>{" "}
              social media managers
            </p>
          </div>
          <div>
            <p className="text-sm mb-1">SECONDARY RESEARCH</p>
            <p className="text-xl mb-2">
              In 2019, over <b>₦124 billion</b> was wasted due to the low
              turnout of voters in Nigeria. In 2015, over <b>₦66 billion</b>,
              and in 2011, over <b>₦64 billion</b>. This was due to the excess
              voting materials left after the elections in those years.
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

          <div>
            <h2 className="font-grotesque text-2xl mb-4">
              Why is this important?
            </h2>
            <div className="flex flex-col lg:flex-row gap-4">
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

          <div className="flex flex-col justify-center font-intertight text-center mb-6">
            <img src={ComradeContentImages.comradecontent1} alt="" />
            <p className="text-sm font-medium mt-2">
              ELECTION IN PROGRESS - NIGERIA
            </p>
          </div>
        </div>
      </SectionLayout>
      <SectionLayout className={"font-intertight border-b border-b-tintblue1"}>
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="font-grotesque text-2xl my-4">Project goals</h2>
            <div className="flex items-start gap-4">
              <b>#1</b>
              <p>
                Increase the participation of the Nigerian youths in the{" "}
                <b>2023</b> general elections.
              </p>
            </div>
            <div className="flex items-start gap-4 my-3">
              <b>#2</b>
              <p>
                Spread voter education across various communities in Nigeria.
              </p>
            </div>
            <div className="flex items-start gap-4 my-3">
              <b>#3</b>
              <p>
                Help voters make informed decisions through better access to
                information.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <b>#4</b>
              <p>Drive community involvement in the election process.</p>
            </div>
          </div>

          <div>
            <h2 className="font-grotesque text-2xl my-5">What did we do?</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
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
                  Provided posters and fliers about voter education on the
                  website for easy print and distribution.
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

          <div className="flex flex-col justify-center mb-6 text-center font-intertight ">
            <img
              src={ComradeContentImages.comrademobile6}
              alt="comrade-image-6"
            />
            <p className="font-medium text-sm mt-2">
              SOME OF THE THINGS WE DID
            </p>
          </div>

          <div>
            <h2 className="font-grotesque text-2xl my-5">
              Impacts and Outcomes
            </h2>
            <div className="flex flex-col lg:flex-row gap-4">
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
        </div>
      </SectionLayout>
      <SectionLayout className={"font-intertight border-b border-b-tintblue1"}>
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-sm mt-4 mb-1">GENERATIVE USER RESEARCH</p>
            <h2 className="font-grotesque text-2xl mb-4">
              Getting information and talking to people
            </h2>
            <div className="flex items-start gap-4">
              <b>#1</b>
              <div>
                <p className="text-lg">
                  Majority of the project team members were undergoing the NYSC
                  program.
                </p>
                <p className="italic mt-2">
                  The NYSC (National Youth Service Corps) is a 1-year compulsory
                  program for university graduates in Nigeria.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 my-3">
              <b>#2</b>
              <div>
                <p className="text-lg">
                  We leveraged the NYSC program to organise{" "}
                  <b>2 focus groups</b> and one-on-one conversations <b>(3)</b>{" "}
                  during weekly CDS to discuss with youths who are eligible to
                  vote about the low turnout of voters during the election and
                  understand their attitude towards the election process.
                </p>
                <p className="text-sm italic my-2">
                  CDS - community development service, is done weekly during the
                  NYSC program.
                </p>
                <p className="text-sm italic mb-4">
                  The one-on-one research was done by myself, while some other
                  team members joined in for the focus group sessions.
                </p>
                <AnchorTag
                  classname={"text-primaryblue underline font-medium"}
                  text={"Generative research plan"}
                  link={
                    "https://docs.google.com/document/d/1QYIjyXjnFikDui-k-O_HP9kOOKt2nIFoizUlqlzalHs/edit?pli=1&tab=t.0#heading=h.kdxr5ylwtwxs"
                  }
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center lg:flex-row gap-4">
            <img
              src={ComradeContentImages.comradecontent2}
              alt="group picture with comrade design team"
            />
            <img
              src={ComradeContentImages.comradecontent3}
              alt="group picture with comrade design team"
            />
          </div>

          <div>
            <div>
              <p className="text-sm mt-2">WHAT THEY SAID</p>
              <span className="text-[4rem] text-tintblue1 font-bold italic">
                “
              </span>
              <p className="text-lg font-medium -mt-10 mb-2">
                I never saw a reason to participate in the election as we
                already knew the winner. All I want is to do my business, make
                money, and leave this shithole. But then I remembered my friends
                and family and decided to do as little as I could by getting
                involved.
              </p>
              <p className="bg-seccoralpink w-[6.5rem]">OYINDAMOLA</p>
            </div>
            <div className="">
              <span className="text-[4rem] text-tintblue1 font-black italic">
                “
              </span>
              <p className="text-lg font-medium mb-2 -mt-10">
                I believe in the power and judgement of the Nigerian people to
                elect credible and competent candidates when given access to the
                right information.
              </p>
              <p className="bg-secpalepurple w-[6.5rem]">YUSUF SODIQ</p>
            </div>
          </div>

          <div>
            <div>
              <p className="text-sm">GENERATIVE USER RESEARCH RESULTS</p>
              <h2 className="font-grotesque text-2xl">
                Generation of insights
              </h2>
              <p className="text-lg">
                Insights were generated after listening to the recordings of the
                user interview sessions and collating data from the user
                research participants.
              </p>
            </div>
            <div className="flex flex-col gap-4 mb-4">
              <img
                src={ComradeContentImages.comradeuserresearch1}
                alt="user research content"
              />
              <img
                src={ComradeContentImages.comradeuserresearch2}
                alt="user research content"
              />
              <img
                src={ComradeContentImages.comradeuserresearch3}
                alt="user research content"
              />
              <img
                src={ComradeContentImages.comradeuserresearch4}
                alt="user research content"
              />
              <img
                src={ComradeContentImages.comradeuserresearch5}
                alt="user research content"
              />
              <img
                src={ComradeContentImages.comradeuserresearch6}
                alt="user research content"
              />
            </div>
            <AnchorTag
              classname={"text-primaryblue underline font-medium"}
              text={"Affinity mapping"}
              link={
                "https://www.figma.com/board/gq45iofiS0oDfUG37MvyCq/Affinity-Map---comrade.ng?node-id=0-1&p=f&t=3ABGSJOItMpTz2Qt-0"
              }
            />
          </div>

          <div>
            <h2 className="font-grotesque text-2xl mb-1">Further research</h2>
            <div>
              <p>
                To validate and invalidate our assumptions and findings, we
                conducted surveys to acquire quantitative data from youths who
                are living in Nigeria. Over <b>54%</b> of the survey
                participants didn’t vote in previous elections, and more than{" "}
                <b>65%</b> of them are over <b>24 years</b>
                of age.
              </p>
              <p className="text-sm mt-1 italic">
                The criteria to vote is to be 18 years or older and have a
                voter’s card. Elections happen every 4 years.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row justify-center gap-4 my-4">
              <img
                src={ComradeContentImages.comradesurveyreport1}
                alt="survey report images"
              />
              <img
                src={ComradeContentImages.comradesurveyreport2}
                alt="survey report images"
              />
            </div>
            <AnchorTag
              classname={"text-primaryblue underline font-medium"}
              text={"See survey report"}
              link={
                "https://docs.google.com/document/d/17PM9xNa4iuag4Lf_GmL6h7ySrJ0eITGUq7vpP0sVoYg/edit?tab=t.0"
              }
            />
          </div>

          <div>
            <h2 className="font-grotesque text-2xl">Research takeaways</h2>
            <div className="mt-4 flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <b>#1</b>
                <p>
                  The youths are willing to participate in the election process,
                  but they need a reason to, and be sure that the election will
                  be credible.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <b>#2</b>
                <p>
                  A higher percentage of youths who have participated in the
                  election process before have made uninformed decisions and
                  lack adequate voter education.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <b>#3</b>
                <p>
                  The youths are ready to vote in the upcoming 2023 elections as
                  the election body in Nigeria introduced a device used to
                  upload and transmit election results in real-time.
                </p>
              </div>
              <div className="flex items-start gap-4 mb-5">
                <b>#4</b>
                <p>
                  The youths can drive the change and impact they want, just
                  like they did during the{" "}
                  <AnchorTag
                    classname={"text-primaryblue underline font-medium"}
                    text={"End-SARS"}
                    link={"https://en.wikipedia.org/wiki/End_SARS"}
                  />{" "}
                  campaign.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>
      <SectionLayout
        className={"font-intertight mt-4 border-b-2 border-b-tintblue1"}
      >
        <h2 className="font-grotesque text-2xl">Constraints</h2>
        <div className="mt-4 flex flex-col gap-4">
          <div className="flex items-start gap-4">
            <b>#1</b>
            <p>
              We had a time constraint of 7 months and a lot of things to do,
              from branding to engaging youths on social media, designing and
              building the website, and drafting and submitting letters for
              sponsorships and partnerships.
            </p>
          </div>
          <div className="flex items-start gap-4">
            <b>#2</b>
            <p>
              Funding. We sponsored a higher percentage of the project’s cost
              when we started.
            </p>
          </div>
          <div className="flex items-start gap-4">
            <b>#3</b>
            <p>
              Project members not undergoing the NYSC program had to use the
              WhatsApp group and online conferencing tools to get information,
              communicate, and contribute.
            </p>
          </div>
          <div className="flex items-start gap-4 mb-5">
            <b>#4</b>
            <p>
              We had no digital marketer (SEO) and animator on the team to help
              create engaging video contents.
            </p>
          </div>
        </div>
      </SectionLayout>
      <SectionLayout
        className={"font-intertight mt-4 border-b-2 border-b-tintblue1"}
      >
        <p className="text-sm">BRAND IDENTITY</p>
        <h2 className="font-grotesque text-2xl mb-1">
          Giving the project an identity
        </h2>
        <p>
          The branding of the project was done by the brand identity designer.
        </p>
        <div className="flex flex-col lg:flex-row justify-center flex-wrap gap-4 mt-4">
          <div>
            <img
              src={ComradeContentImages.comradebrandindentity1}
              alt="brand identity images"
            />
          </div>
          <div>
            <img
              src={ComradeContentImages.comradebrandindentity2}
              alt="brand identity images"
            />
          </div>
          <div>
            <img
              src={ComradeContentImages.comradebrandindentity3}
              alt="brand identity images"
            />
          </div>
        </div>
        <div className="mt-8">
          <h2 className="font-grotesque text-2xl mb-1">Typography</h2>
          <div className="flex flex-col lg:flex-row justify-center gap-4 mt-4">
            <img
              src={ComradeContentImages.comradetypography1}
              alt="typography images"
            />
            <img
              src={ComradeContentImages.comradetypography2}
              alt="typography images"
            />
          </div>
        </div>
        <div className="mt-8 mb-5">
          <h2 className="font-grotesque text-2xl mb-1">Color</h2>
          <div className="flex flex-col lg:flex-row justify-center gap-4 mt-4">
            <img src={ComradeContentImages.comradecolor1} alt="color images" />
            <img src={ComradeContentImages.comradecolor2} alt="color images" />
          </div>
        </div>
      </SectionLayout>
      <SectionLayout
        className={"font-intertight mt-6 border-b-2 border-b-tintblue1"}
      >
        <h2 className="font-grotesque text-2xl">Prioritisation</h2>
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="bg-tintblue4 p-5 mt-4 relative">
            <h3 className="font-grotesque text-xl">Before</h3>
            <div className="flex flex-col gap-4 mt-4 text-lg">
              <div className="flex items-start gap-1">
                <p>1.</p>
                <p>
                  Get your PVC section on the website.
                  <br />
                  <span className="italic text-base">
                    {" "}
                    - PVC (permanent voters’ card) card issued to eligible
                    voters.
                  </span>
                </p>
              </div>
              <div className="flex items-start gap-1">
                <p>2.</p>
                <p>
                  PVC registration centers upon selecting the state and local
                  government of residence.
                </p>
              </div>
              <div className="flex items-start gap-1">
                <p>3.</p>
                <p>Know your voting ward section on the website.</p>
              </div>
              <div className="flex items-start gap-1">
                <p>4.</p>
                <p>
                  An interactive forum where people can start a topic or a
                  conversation, like, comment, and share.
                </p>
              </div>
              <div className="flex items-start gap-1">
                <p>5.</p>
                <p>Blog and articles.</p>
              </div>
            </div>
          </div>
          <div className="bg-tintblue4 p-5 mt-4">
            <h3 className="font-grotesque text-xl">After</h3>
            <div className="flex flex-col gap-4 mt-4 text-lg">
              <div className="flex items-start gap-1">
                <p>1.</p>
                <p>Voter education on the website.</p>
              </div>
              <div className="flex items-start gap-1">
                <p>2.</p>
                <p>
                  Resources on the website (posters and fliers were made
                  available for download and printing).
                </p>
              </div>
              <div className="flex items-start gap-1">
                <p>3.</p>
                <p>Voter seminar - a physical event.</p>
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>
      <SectionLayout
        className={
          "font-intertight mt-6 flex flex-col gap-8 border-b-2 border-b-tintblue1"
        }
      >
        <div>
          <h3 className="font-grotesque text-[22px] leading-5 mb-6">
            Before #1
          </h3>
          <img src={ComradeContentImages.prioritisation1} alt="Design flow" />
          <div className="mt-2">
            <p className="text-lg font-medium">Get your PVC section</p>
            <p className="text-sm">
              Registration for voter’s cards had ended before we launched the
              website, so we had to remove the section from the website.{" "}
              <b>PVC</b> - Permanent voters’ card
            </p>
          </div>
        </div>
        <div>
          <h3 className="font-grotesque text-[22px] leading-5 mb-6">
            After #1
          </h3>
          <img src={ComradeContentImages.prioritisation2} alt="Design flow" />
          <div className="mt-2">
            <p className="text-lg font-medium">Resources section</p>
            <p className="text-sm">
              Our website visitors can download posters and fliers in different
              resolutions and share them in their community.
            </p>
          </div>
        </div>
        <div>
          <h3 className="font-grotesque text-[22px] leading-5 mb-6">
            Before #2
          </h3>
          <img src={ComradeContentImages.prioritisation3} alt="Design flow" />
          <div className="mt-2">
            <p className="text-lg font-medium">Know your voting ward</p>
            <p className="text-sm">
              The API (application programming interface) for this was not
              readily available. We had to exclude this section from the
              website.
            </p>
          </div>
        </div>
        <div>
          <h3 className="font-grotesque text-[22px] leading-5 mb-6">
            After #2
          </h3>
          <img src={ComradeContentImages.prioritisation4} alt="Design flow" />
          <div className="mt-2">
            <p className="text-lg font-medium">Voter education</p>
            <p className="text-sm">
              We provided a list of concise articles on educating eligible
              voters about the upcoming elections.
            </p>
          </div>
        </div>
        <div>
          <h3 className="font-grotesque text-[22px] leading-5 mb-6">
            Before #3
          </h3>
          <img src={ComradeContentImages.prioritisation5} alt="Design flow" />
          <div className="mt-2">
            <p className="text-lg font-medium">Forum</p>
            <p className="text-sm">
              We had limited time and resources to fully implement this feature
              as some developers got busy with work and personal lives.
            </p>
          </div>
        </div>
        <div className="mb-8">
          <h3 className="font-grotesque text-[22px] leading-5 mb-6">
            After #3
          </h3>
          <img src={ComradeContentImages.prioritisation6} alt="Design flow" />
          <div className="mt-2">
            <p className="text-lg font-medium mb-1">Articles</p>
            <p className="text-sm">
              We provided articles about happenings in the community and current
              affairs like the JAPA{" "}
              <em>(a word used to describe leaving Nigeria)</em> movement.
            </p>
          </div>
        </div>
      </SectionLayout>
      <SectionLayout
        className={"font-intertight mt-6 border-b-2 border-b-tintblue1"}
      >
        <h2 className="font-grotesque text-2xl mb-4">
          Design for easy information-finding
        </h2>
        <img
          src={ComradeContentImages.easydesignsteps}
          alt="easy design steps"
        />
        <div className="bg-tintblue4 p-5 mt-8 relative">
          <h2 className="font-medium text-lg">Homepage</h2>
          <div className="mt-4 flex flex-col gap-4">
            <img src={ComradeContentImages.homepage1} alt="homepage UI" />
            <img src={ComradeContentImages.homepage2} alt="homepage UI" />
            <img src={ComradeContentImages.homepage3} alt="homepage UI" />
            <img src={ComradeContentImages.homepage4} alt="homepage UI" />
          </div>
        </div>
        <div className="bg-tintblue4 p-5 mt-8 relative">
          <h2 className="font-medium text-lg">Resources</h2>
          <div className="mt-4 flex flex-col gap-4">
            <img src={ComradeContentImages.homepage5} alt="homepage UI" />
          </div>
        </div>
        <div className="bg-tintblue4 p-5 relative">
          <h2 className="font-medium text-lg">Voter education</h2>
          <div className="mt-4 flex flex-col gap-4">
            <img src={ComradeContentImages.homepage6} alt="homepage UI" />
          </div>
        </div>
        <div className="bg-tintblue4 p-5 relative">
          <h2 className="font-medium text-lg">Articles</h2>
          <div className="mt-4 flex flex-col gap-4">
            <img src={ComradeContentImages.homepage7} alt="homepage UI" />
          </div>
        </div>
        <div className="mt-8 relative">
          <h2 className="font-grotesque text-2xl mb-1">
            Launching the website
          </h2>
          <p>
            We worked on materials (fliers and videos) and organised Twitter
            spaces in anticipation of launching the website.
          </p>
          <div className="flex justify-center bg-tintblue4 p-5 my-5">
            <img src={ComradeContentImages.launch} alt="homepage UI" />
          </div>
        </div>
      </SectionLayout>
      <SectionLayout
        className={"font-intertight mt-6 border-b-2 border-b-tintblue1"}
      >
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="font-grotesque text-2xl mb-2">Post launch</h2>
            <p>
              Upon launching the website, we had a retrospective meeting and
              decided to organise a voter seminar at one of the top universities
              in Nigeria weeks before the elections. The government had ordered
              all schools to close down to increase the participation of youths
              in the election exercise. The university we used is in the{" "}
              <b>2nd</b> most populous state in Nigeria and one of the top
              universities in Nigeria.
            </p>
            <div className="my-4 flex flex-wrap items-center gap-4">
              <p className="bg-tintblue4 p-2 text-lg font-medium">
                Panel Session
              </p>
              <p className="bg-tintblue4 p-2 text-lg font-medium">
                Host engagements
              </p>
              <p className="bg-tintblue4 p-2 text-lg font-medium">
                Keynote speeches
              </p>
              <p className="bg-tintblue4 p-2 text-lg font-medium">
                Audience Q&A
              </p>
              <p className="bg-tintblue4 p-2 text-lg font-medium">Games</p>
              <p className="bg-tintblue4 p-2 text-lg font-medium">
                Song performance
              </p>
              <AnchorTag
                classname={"text-primaryblue underline font-medium"}
                text={"Voter seminar report"}
                link={
                  "https://drive.google.com/file/d/15vDkTxpyXKcxTTW_LGr1U6BFQsl4KdB6/view"
                }
              />
            </div>
          </div>

          <div>
            <div className="flex flex-col justify-center text-center font-intertight mb-6">
              <img
                src={ComradeContentImages.volunteer}
                alt="Volunteers group pics"
              />
              <p className="font-medium text-sm mt-2">
                VOTER SEMINAR - THE VOLUNTEERS
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-tintblue4 w-40 h-40 rounded-full flex flex-col items-center justify-center">
                <p className="font-bold text-[40px] leading-10">610+</p>
                <p>Ateendes</p>
              </div>
              <div className="bg-tintblue4 w-40 h-40 rounded-full flex flex-col items-center justify-center">
                <p className="font-bold text-[40px] leading-10">35+</p>
                <p>Volunteers</p>
              </div>
              <div className="bg-tintblue4 w-40 h-40 rounded-full flex flex-col items-center justify-center">
                <p className="font-bold text-[40px] leading-10">3+</p>
                <p>Sponsors</p>
              </div>
              <div className="bg-tintblue4 w-40 h-40 rounded-full flex flex-col items-center justify-center">
                <p className="font-bold text-[40px] leading-10">24+</p>
                <p>Souvenirs won</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="font-grotesque text-2xl mb-2">More impacts</h2>
            <p>
              Federal (public) universities in Nigeria increased the price of
              their tuition fees in 2023. Some did over <b>300%</b>, while
              others did between <b>100%</b> and <b>200%</b>. We contacted the
              Obama Foundation via the Obama Leadership Network and submitted a
              project proposal to support self-funded students who are
              struggling financially due to the fee hikes and risk of dropping
              out.
            </p>
            <p className="mt-4">
              The project proposal was approved and waiting for a final vetting
              process before funds are disbursed.
            </p>
            <p className="italic text-sm">As at January 2024</p>
          </div>
        </div>
      </SectionLayout>
      <SectionLayout className={"font-intertight mt-6"}>
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="font-grotesque text-2xl mb-4">Top learnings</h2>
            <div className="flex items-start gap-4">
              <b>#1</b>
              <p>
                How teamwork can accelerate the achievement of goals. I also
                learnt that one should be open-minded and always ready to act
                based on the users’ immediate needs.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <b>#2</b>
              As a UX Designer, you bring more than your UX design skills to the
              team.
            </div>
          </div>
          <div>
            <h2 className="font-grotesque text-2xl mb-4">What’s next?</h2>
            <p>
              Drive community development via a leadership development and
              mentorship program for our top 5 community members.
            </p>
          </div>
          <div>
            <h2 className="font-grotesque text-2xl mb-4">Image credits</h2>
            <p>
              google.com, comrade project members meet-ups, and youth voter
              seminar.
            </p>
          </div>
        </div>
        <TheEnd />
        <RelatedProjects projects={comradeProjects} />
      </SectionLayout>
    </>
  );
};

export default ComradeProject;
