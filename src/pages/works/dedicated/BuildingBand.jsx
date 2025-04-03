import AnchorTag from "../../../components/AnchorTag";
import {
  buildingProjects,
  RelatedProjects,
} from "../../../components/RelatedProject";
import TheEnd from "../../../components/TheEnd";
import SectionLayout from "../../../layouts/SectionLayout";
import GoBack from "../../../utils/GoBack";
import { BuildingBandImages } from "../../../utils/ImagesImport";

const BuildingBand = () => {
  return (
    <>
      <SectionLayout className={"border-b-2 border-b-tintblue1"}>
        <GoBack />
      </SectionLayout>
      <SectionLayout>
        <p className="text-sm mt-6">REAL PROJECT - Website design</p>
        <h2 className="font-grotesque text-3xl text-secbuilding">
          Building Band
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
        <div className="w-full h-56 bg-[#D4D4D4] border rounded-lg mb-6 flex items-center justify-center">
          Add a video of the live website here
        </div>

        <div className="mt-10 flex flex-col gap-8">
          <div>
            <h2 className="font-grotesque text-2xl mb-2">Project goal</h2>
            To design a waitlist landing page for AEC (Architectural,
            Engineering, and Construction) professionals within the Nigerian
            landscape.
          </div>

          <div>
            <h2 className="font-grotesque text-2xl mb-2">My design process</h2>
            <div className="flex flex-wrap items-center gap-4">
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
          <div className="bg-tintblue2 p-4 mt-4">
            <h2 className="font-grotesque text-2xl mb-2">User Research</h2>
            <p>
              We engaged AEC professionals in Nigeria using surveys and user
              interviews.
            </p>
            <AnchorTag
              text={"User research plan"}
              link={
                "https://docs.google.com/document/d/1yIPbvVbCcXF3XOnzQLJbB4J9hg1coDupjLQUJ4n6dHY/edit?tab=t.0#heading=h.kdxr5ylwtwxs"
              }
              classname={"text-secbuilding underline font-semibold"}
            />
          </div>

          <div>
            <h2 className="font-grotesque text-2xl mb-2">Research findings</h2>
            <p>
              The following were the insights generated from the user research
              and surveys.
            </p>
            <div className="mt-4">
              <ol className="list-decimal list-outside space-y-1 pl-6 text-base">
                <li>
                  More than <b>50%</b> frequently collaborate with their team
                  members for a successful construction project.
                </li>
                <li>
                  More than <b>44%</b> use more than <b>12</b> hours to review
                  and markup construction documents.
                </li>
                <li>
                  More than <b>67%</b> volunteered to be interviewed further.
                </li>
              </ol>
              <p className="italic text-sm mt-4">
                <b>P.S.</b>: The user interview didn’t hold due to clashing
                availability.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-grotesque text-2xl mb-2">Homepage</h2>
            <div className="bg-tintblue4 border-2 border-tintblue1 p-4 rounded-xl mt-4">
              <div className="flex flex-col gap-5">
                <img src={BuildingBandImages.buildingHomeDesktop1} alt="hero" />
                <img src={BuildingBandImages.buildingHomeDesktop2} alt="hero" />
              </div>
              <div className="flex items-center flex-wrap gap-5 mt-6">
                <img src={BuildingBandImages.buildingHomeMobile1} alt="hero" />
                <img src={BuildingBandImages.buildingHomeMobile2} alt="hero" />
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>
      <TheEnd />
      <RelatedProjects projects={buildingProjects} />
    </>
  );
};

export default BuildingBand;
