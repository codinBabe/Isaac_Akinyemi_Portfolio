import {
  desoProjects,
  RelatedProjects,
} from "../../../components/RelatedProject";
import TheEnd from "../../../components/TheEnd";
import SectionLayout from "../../../layouts/SectionLayout";
import { desoImages, Image } from "../../../utils/ImagesImport";

const DesoRealtor = () => {
  return (
    <>
      <SectionLayout className={"mt-16"}>
        <p className="text-sm mt-6">REAL PROJECT - Website design</p>
        <h2 className="font-grotesque text-3xl lg:text-5xl">
          <span className="text-secrealtor">Deso Realtor</span> Website
        </h2>
        <div className="flex flex-wrap items-start gap-2 text-sm mt-2 mb-6">
          <p className="bg-tintblue2 rounded-full py-[2px] px-2 whitespace-nowrap">
            PropTech
          </p>
          <p className="bg-tintblue2 rounded-full py-[2px] px-2 whitespace-nowrap">
            UX Design
          </p>
          <p className="bg-tintblue2 rounded-full py-[2px] px-2 whitespace-nowrap">
            UI Design
          </p>
        </div>
        <div className="w-full h-[480px] bg-[#D4D4D4] border rounded-lg mb-6 p-2">
          <iframe
            src="https://drive.google.com/file/d/1j7GtpSVtGQ1YoIOGebG1xSk1RHRVIyLa/preview"
            width="100%"
            height="100%"
            allow="autoplay"
            className="rounded-lg"
          ></iframe>
        </div>

        <div className="mt-10 flex flex-col gap-8 lg:gap-12">
          <div>
            <h2 className="font-grotesque text-2xl mb-2">Project goal</h2>
            Redesign of the Deso Realtor’s website, giving it stronger visuals
            and making it responsive across various platforms.
          </div>

          <div>
            <h2 className="font-grotesque text-2xl mb-2">My design process</h2>
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
              I engaged in stakeholder workshops and desk research of other
              competitors to understand the need.
            </p>
            <div className="bg-tintblue2 p-4 mt-4">
              <ol className="list-decimal list-outside space-y-1 pl-6 text-base">
                <li>How sales are currently done.</li>
                <li>Audit of direct and indirect competitors’ websites.</li>
                <li>The image and personality of the company.</li>
                <li>The company’s unique selling point.</li>
                <li>The company’s core values.</li>
                <li>The vision and mission of the company.</li>
                <li>Why the owner started the company.</li>
                <li> The long-term goals and projections for the company.</li>
              </ol>
            </div>
          </div>

          <div>
            <h2 className="font-grotesque text-2xl mb-2">Research findings</h2>
            <p>
              The following were the insights generated from the user research:
            </p>
            <div className="mt-4">
              <ol className="list-decimal list-outside space-y-1 pl-6 text-base">
                <li>The company operates in Dubai (UAE).</li>
                <li>
                  The company thrives on the integrity and trust of its previous
                  customers.
                </li>
                <li>Values excellence, transparency, and innovation.</li>
              </ol>
            </div>
          </div>

          <div>
            <h2 className="font-grotesque text-2xl mb-2">Homepage</h2>
            <div className="bg-tintblue4 border-2 border-tintblue1 p-4 rounded-xl mt-4">
              <div className="lg:hidden">
                <div className="flex flex-col gap-5">
                  <Image src={desoImages.homeDesktop1} alt="hero" />
                  <Image src={desoImages.homeDesktop2} alt="hero" />
                  <Image src={desoImages.homeDesktop3} alt="hero" />
                  <Image src={desoImages.homeDesktop4} alt="hero" />
                </div>
                <div className="flex items-center flex-wrap gap-5 mt-6">
                  <Image src={desoImages.homeMobile3} alt="hero" />
                  <Image src={desoImages.homeMobile2} alt="hero" />
                  <Image src={desoImages.homeMobile1} alt="hero" />
                </div>
              </div>
              <div className="hidden lg:flex flex-col">
                <div className="flex items-start gap-x-5">
                  <Image
                    src={desoImages.homeDesktop1}
                    alt="hero"
                    className="w-4/5"
                  />
                  <Image
                    src={desoImages.homeMobile3}
                    alt="hero"
                    className="w-1/5"
                  />
                </div>
                <div className="flex items-start gap-x-5">
                  <div className="w-4/5 flex flex-col gap-y-4 -mt-96">
                    <Image
                      src={desoImages.homeDesktop2}
                      alt="hero"
                      className="w-full"
                    />
                    <Image
                      src={desoImages.homeDesktop3}
                      alt="hero"
                      className="w-full"
                    />
                  </div>
                  <Image
                    src={desoImages.homeMobile2}
                    alt="hero"
                    className="w-1/5"
                  />
                </div>

                <div className="flex items-start gap-x-5">
                  <Image
                    src={desoImages.homeDesktop4}
                    alt="hero"
                    className="w-4/5"
                  />
                  <Image
                    src={desoImages.homeMobile1}
                    alt="hero"
                    className="w-1/5 -mt-44"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-grotesque text-2xl mb-2">Rent</h2>
            <div className="bg-tintblue4 border-2 border-tintblue1 p-4 rounded-xl mt-4">
              <div className="flex flex-col gap-5 lg:hidden">
                <Image src={desoImages.rentDesktop} alt="hero" />
                <Image src={desoImages.rentMobile} alt="hero" />
              </div>
              <div className="hidden lg:flex items-start gap-5">
                <Image
                  src={desoImages.rentDesktop}
                  alt="hero"
                  className="w-4/5"
                />
                <Image
                  src={desoImages.rentMobile}
                  alt="hero"
                  className="w-1/5"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-grotesque text-2xl mb-2">Search Result</h2>
            <div className="bg-tintblue4 border-2 border-tintblue1 p-4 rounded-xl mt-4">
              <div className="flex flex-col gap-5 lg:hidden">
                <Image src={desoImages.searchDesktop} alt="hero" />
                <Image src={desoImages.searchMobile} alt="hero" />
              </div>

              <div className="hidden lg:flex items-start gap-5">
                <Image
                  src={desoImages.searchDesktop}
                  alt="hero"
                  className="w-4/5"
                />
                <Image
                  src={desoImages.searchMobile}
                  alt="hero"
                  className="w-1/5"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-grotesque text-2xl mb-2">A property page</h2>
            <div className="bg-tintblue4 border-2 border-tintblue1 p-4 rounded-xl mt-4">
              <div className="flex flex-col gap-5 lg:hidden">
                <Image src={desoImages.propertyDesktop} alt="hero" />
                <Image src={desoImages.propertyMobile} alt="hero" />
              </div>

              <div className="hidden lg:flex items-start gap-5">
                <Image
                  src={desoImages.propertyDesktop}
                  alt="hero"
                  className="w-4/5"
                />
                <Image
                  src={desoImages.propertyMobile}
                  alt="hero"
                  className="w-1/5"
                />
              </div>
            </div>
          </div>
        </div>
        <TheEnd />
        <RelatedProjects projects={desoProjects} />
      </SectionLayout>
    </>
  );
};

export default DesoRealtor;
