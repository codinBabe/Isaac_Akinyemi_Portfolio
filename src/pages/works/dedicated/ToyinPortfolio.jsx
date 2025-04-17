import {
  RelatedProjects,
  toyinProjects,
} from "../../../components/RelatedProject";
import TheEnd from "../../../components/TheEnd";
import SectionLayout from "../../../layouts/SectionLayout";
import GoBack from "../../../utils/GoBack";
import { Image, ToyinImages } from "../../../utils/ImagesImport";

const ToyinPortfolio = () => {
  return (
    <>
      <SectionLayout className={"border-b-2 border-b-tintblue1"}>
        <GoBack />
      </SectionLayout>
      <SectionLayout className={"font-intertight text-lg"}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-sm">REAL PROJECT - Website design</p>
            <h2 className="font-grotesque text-[32px] leading-[36.8px] lg:text-5xl">
              Toyin OREDEIN <span className="text-sectoyin">Portfolio </span>
              Design
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

            <Image src={ToyinImages.toyinThumbnail} alt="Hymns App" />
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <h2 className="font-grotesque text-2xl mb-2">Project goal</h2>
              <p>
                In my quest to give back to the community, I decided to help{" "}
                <b>4</b> developers with the design of their portfolios.
              </p>
            </div>

            <div>
              <h2 className="font-grotesque text-2xl mb-2">
                My design process
              </h2>
              <div className="flex flex-wrap items-center lg:justify-between gap-4">
                <div className="flex items-start gap-2">
                  <b>#1</b>
                  <p>Understand</p>
                </div>
                <div className="flex items-start gap-2">
                  <b>#2</b>
                  <p>Analyse</p>
                </div>
                <div className="flex items-start gap-2">
                  <b>#3</b>
                  <p>Design</p>
                </div>
                <div className="flex items-start gap-2">
                  <b>#4</b>
                  <p>Test</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-grotesque text-2xl mb-2">User Research</h2>
              <p>
                I started the design process by requesting the Resume and
                LinkedIn profile of the Developer, followed by a clarity session
                to get answers to the following questions.
              </p>
              <div className="bg-tintblue2 p-4 mt-4">
                <ol className="list-decimal list-outside space-y-1 pl-6 text-base">
                  <li>Tell me about your career journey.</li>
                  <li>Tell me about your career journey.</li>
                  <li>
                    What type of developer will you call yourself? Calm or
                    rugged, loud or introverted,
                  </li>
                  <li>What is your stack?</li>
                  <li>
                    Do you take a lot of pictures and participate in trending
                    kinds of stuff like the ai pictures?
                  </li>
                  <li>Do you have any live projects?</li>
                  <li>
                    Do you have particular brands, businesses, organizations, or
                    teams you have worked for?
                  </li>
                  <li>
                    What time did you feel the happiest in your career? happiest
                    or fulfilled.
                  </li>
                  <li> What was the lowest moment too?</li>
                  <li>Do you currently have a role? </li>
                  <li>What is your job history like?</li>
                  <li>Have you contributed to open-source projects before?</li>
                  <li>
                    What will you say is the most unique thing that separates
                    you from others?
                  </li>
                  <li>Do you have any other skills apart from what you do?</li>
                  <li> What do you enjoy doing the most?</li>
                  <li>What do you enjoy the most about what you do?</li>
                  <li>What are your hobbies?</li>
                  <li>
                    Do you do anything else apart from what you currently do?
                  </li>
                  <li>
                    Is there anything else that you would like me to know?
                  </li>

                  <li>
                    Do you have a tagline or mantra that guides you and the
                    decisions you make? like quotes?
                  </li>
                </ol>
              </div>
            </div>

            <div>
              <h2 className="font-grotesque text-2xl mb-2">
                Research findings
              </h2>
              <p>
                The following were the insights generated from the user research
                (clarity session) that I had with the developer.
              </p>
              <div className="mt-4">
                <ol className="list-decimal list-outside space-y-1 pl-6 text-base">
                  <li>A nursing mother of a 2-year-old girl.</li>
                  <li>A baker.</li>
                  <li>
                    Was inspired by a friend to learn software engineering.
                  </li>
                  <li>
                    <b>Nickname</b>: Techie Baker.
                  </li>
                  <li>Adaptable and resilient.</li>
                  <li>
                    Engages in several boot camps and apprenticeship programs.
                  </li>
                  <li>Self-taught.</li>
                  <li>Doesn’t know much about her personality.</li>
                </ol>
              </div>
            </div>

            <div>
              <h2 className="font-grotesque text-2xl mb-2">
                Iterations on the hero screen
              </h2>
              <div className="mt-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                  <Image
                    src={ToyinImages.iterationHero1}
                    alt="hero1"
                    className="w-full"
                  />
                  <Image
                    src={ToyinImages.iterationHero3}
                    alt="hero2"
                    className="w-full"
                  />
                  <Image
                    src={ToyinImages.iterationHero2}
                    alt="hero3"
                    className="w-full"
                  />
                  <Image
                    src={ToyinImages.iterationHero4}
                    alt="hero4"
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-grotesque text-2xl mb-2">Homepage</h2>
              <div className="bg-tintblue4 border-2 border-tintblue1 p-4 rounded-xl mt-4">
                <div className="flex flex-col lg:flex-row flex-wrap gap-5 lg:hidden">
                  <Image src={ToyinImages.home1} alt="hero" />
                  <Image src={ToyinImages.home2} alt="hero" />
                  <div className="flex items-start justify-between">
                    <Image src={ToyinImages.mobileHome1} alt="hero" />
                    <Image src={ToyinImages.mobileHome2} alt="hero" />
                  </div>
                </div>
                <div className="hidden lg:flex flex-col gap-5">
                  <div className="flex items-start gap-x-5">
                    <Image
                      src={ToyinImages.home1}
                      alt="hero"
                      className="w-4/5"
                    />
                    <Image
                      src={ToyinImages.mobileHome1}
                      alt="hero"
                      className="w-1/5"
                    />
                  </div>
                  <div className="flex items-start gap-x-5">
                    <Image
                      src={ToyinImages.home2}
                      alt="hero"
                      className="w-4/5"
                    />
                    <Image
                      src={ToyinImages.mobileHome2}
                      alt="hero"
                      className="w-1/5"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-grotesque text-2xl mb-2">Works</h2>
              <div className="bg-tintblue4 border-2 border-tintblue1 p-4 rounded-xl mt-4">
                <div className="flex flex-col flex-wrap gap-8 lg:hidden">
                  <Image src={ToyinImages.works} alt="hero" />
                  <Image src={ToyinImages.mobileWork} alt="hero" />
                </div>
                <div className="hidden lg:flex items-start gap-x-5">
                  <Image src={ToyinImages.works} alt="hero" className="w-4/5" />
                  <Image
                    src={ToyinImages.mobileWork}
                    alt="hero"
                    className="w-1/5"
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-grotesque text-2xl mb-2">About</h2>
              <div className="bg-tintblue4 border-2 border-tintblue1 p-4 rounded-xl mt-4">
                <div className="flex flex-col gap-5 lg:hidden">
                  <Image src={ToyinImages.about1} alt="hero" />
                  <Image src={ToyinImages.about2} alt="hero" />
                  <div className="flex items-start justify-between">
                    <Image src={ToyinImages.mobileAbout1} alt="hero" />
                    <Image src={ToyinImages.mobileAbout2} alt="hero" />
                  </div>
                </div>
                <div className="hidden lg:flex flex-col gap-5">
                  <div className="flex items-start gap-x-5">
                    <Image
                      src={ToyinImages.about1}
                      alt="hero"
                      className="w-4/5"
                    />
                    <Image
                      src={ToyinImages.mobileAbout1}
                      alt="hero"
                      className="w-1/5"
                    />
                  </div>
                  <div className="flex items-start gap-x-5">
                    <Image
                      src={ToyinImages.about2}
                      alt="hero"
                      className="w-4/5"
                    />
                    <Image
                      src={ToyinImages.mobileAbout2}
                      alt="hero"
                      className="w-1/5"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-grotesque text-2xl mb-2">Resume</h2>
              <div className="bg-tintblue4 border-2 border-tintblue1 p-4 rounded-xl mt-4">
                <div className="flex flex-col gap-8 lg:hidden">
                  <Image src={ToyinImages.resume} alt="hero" />
                  <Image src={ToyinImages.mobileResume} alt="hero" />
                </div>

                <div className="hidden lg:flex items-start gap-x-5">
                  <Image
                    src={ToyinImages.resume}
                    alt="hero"
                    className="w-4/5"
                  />
                  <Image
                    src={ToyinImages.mobileResume}
                    alt="hero"
                    className="w-1/5"
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-grotesque text-2xl mb-2">Other visuals</h2>
              <div className="bg-tintblue4 border-2 border-tintblue1 p-4 rounded-xl mt-4">
                <div className="flex flex-col flex-wrap gap-8 lg:hidden">
                  <Image src={ToyinImages.others1} alt="hero" />
                  <Image src={ToyinImages.others2} alt="hero" />
                  <Image src={ToyinImages.others4} alt="hero" />
                  <Image src={ToyinImages.others3} alt="hero" />
                </div>

                <div className="hidden lg:flex items-start justify-center gap-8">
                  <Image src={ToyinImages.others1} alt="hero" />

                  <Image src={ToyinImages.others2} alt="hero" />
                  <div className="flex flex-col gap-y-5">
                    <Image src={ToyinImages.others4} alt="hero" />

                    <Image src={ToyinImages.others3} alt="hero" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <TheEnd />
        <RelatedProjects projects={toyinProjects} />
      </SectionLayout>
    </>
  );
};

export default ToyinPortfolio;
