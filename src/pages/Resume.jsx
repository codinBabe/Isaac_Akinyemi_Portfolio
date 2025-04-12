import AnchorTag from "../components/AnchorTag";
import AnimatedContainer from "../utils/AnimatedContainer";
import { AnimatedSubTitle } from "../utils/AnimatedTitle";
import GoBack from "../utils/GoBack";

const Resume = () => {
  return (
    <>
      <section
        className="border-b border-b-tintblue1 lg:hidden 
                    fixed top-0 left-0 w-full z-20 
                     p-3 bg-tintblue5"
      >
        <GoBack />
      </section>
      <section className="pt-8 lg:pt-6">
        <button
          className="font-medium text-lg underline my-5"
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1x9eMKmJzq1pTgbUSQqW_SNlc_PV0Sa2Z/view?usp=sharing",
              "_blank"
            )
          }
        >
          Download PDF Resume
        </button>
        <div>
          <AnimatedSubTitle
            text={"Summary"}
            classname={"font-grotesque text-2xl"}
          />
          <AnimatedContainer>
            <p className="-mt-4 text-base">
              A Product (UX) Designer passionate about users and how they
              experience products, services, processes, and systems. I have
              worked on digital products (<b>Websites,</b> <b>Web Apps,</b> and{" "}
              <b>Mobile Apps</b>) across FinTech, PropTech, EduTech, Service
              Business, and E-commerce. I am looking to help product teams,
              businesses, brands, and startups refine and improve their user
              experience.
            </p>
          </AnimatedContainer>
        </div>
      </section>
      <section>
        <div>
          <AnimatedSubTitle
            text={"Work Experience"}
            classname={"font-grotesque text-2xl mb-5"}
          />
          <div>
            <AnimatedSubTitle
              text={"Product (UX) Designer/Business Analyst"}
              classname={"font-intertight font-medium text-lg"}
            />
            <p className="text-sm my-1 font-intertight">
              Ecobank Transnational Incorporated{" "}
              <AnchorTag
                text={"(ecobank.com)"}
                link={"https://ecobank.com/ng/personal-banking"}
                classname={"text-primaryblue underline"}
              />{" "}
              | Lagos, Nigeria.
            </p>
            <p className="text-sm font-intertight">
              Feb 2023 - Present | Full time and Hybrid.
            </p>
          </div>
          <AnimatedContainer>
            <p className="text-base -mt-3">
              Ecobank Transnational Incorporated (ETI) is the parent company of
              the Ecobank Group, the leading independent pan-African banking
              group. Serving about <b>28</b> million customers in the consumer,
              commercial and corporate banking sectors across <b>33</b> African
              countries.
            </p>
            <ul className="list-disc pl-6 mt-3 text-base">
              <li>
                Initiated the team's adoption of Figma, thereby reducing design
                and development time by <b>50%</b> in <b>8</b> months.
              </li>
              <li>
                Enhanced the development of features and products by <b>60%</b>{" "}
                by implementing a consistent experience with the company’s
                design system.
              </li>
              <li>
                Enabled admins to communicate ads and campaigns to over{" "}
                <b>28</b> million customers by designing the ads feature for the
                admin portal of Ecobank Mobile 5.0.
              </li>
              <li>
                Improved and redesigned the entire experience of the agency
                banking mobile app to include more features like 3rd party
                account opening, issue resolution, and two-factor authentication
                for agents.
              </li>
              <li>
                Worked as a business analyst (providing functional requirements
                document and process flows) on the Gamification project to
                increase the volume and value of daily transactions by gamifying
                it.
              </li>
            </ul>
            <p className="mt-2 text-base">
              <b>Projects:</b> MySME App, Agency Banking, Mobile 5.0 Admin
              Portal, RapidTransfer App, and Compliance Portal II.
            </p>
          </AnimatedContainer>
        </div>
      </section>
      <section>
        <div>
          <AnimatedSubTitle
            text={"Product Designer"}
            classname={"font-intertight font-medium text-lg -mt-5"}
          />
          <AnimatedContainer>
            <p className="text-sm -mt-5">Qiesto | Lagos, Nigeria.</p>
            <p className="text-sm mb-2">
              Oct 2022 - Nov 2023 | Contract and Remote.
            </p>
          </AnimatedContainer>
        </div>
        <AnimatedContainer>
          <p className="text-base -mt-3">
            Pathfound{" "}
            <AnchorTag
              text={"(pathfound.io)"}
              link={""}
              classname={"text-primaryblue underline"}
            />{" "}
            , the product I designed for, helps K-12 (5-18 years old) find
            career clarity and make career decisions informed by data
            (interests, skills, and personality) over time.
          </p>
          <ul className="list-disc pl-6 mt-3 text-base">
            <li>
              Contributed to the startup launch in <b>5</b> schools and
              onboarded over {""}
              <b>420</b> students.
            </li>
            <li>
              Improved the student onboarding flow after <b>3+</b> rounds of
              iterations and feedback by reducing cognitive load and onboarding
              time by <b>70%</b>.
            </li>
            <li>
              Collaborated with the stakeholders and product manager to design
              the screens for schools
            </li>
            <li>
              (School admin, Educator, and Super-educator) that led to a
              conversion ratio of <b>80%</b> during pitch decks.
            </li>
          </ul>
        </AnimatedContainer>
      </section>
      <section>
        <div>
          <AnimatedSubTitle
            text={"UX Designer"}
            classname={"font-intertight font-medium text-lg -mt-5"}
          />
          <AnimatedContainer>
            <p className="text-sm -mt-5">
              NandS Tech{" "}
              <AnchorTag
                text={"(nands.io)"}
                link={""}
                classname={"text-primaryblue underline"}
              />{" "}
              | Lagos, Nigeria.
            </p>
            <p className="text-sm mb-2">
              Oct 2022 - Nov 2023 | Freelance and Remote.
            </p>
          </AnimatedContainer>
        </div>
        <AnimatedContainer>
          <p className="text-base -mt-3">
            N&S Tech seeks to provide solutions to high-impact problems with
            technology; putting together highly talented teams quickly, to work
            as part of a remote, high-functioning, distributed team.
          </p>
          <ul className="list-disc pl-6 mt-3 text-base">
            <li>
              Increased Deso Realtor’s website visits by <b>40%</b> by
              redesigning it, giving it strong visuals, and making it responsive
              across different screen sizes.
            </li>
            <li>
              Collaborated with the CEO to build a mobile app for EJ gift cards
              using the progressive web application.
            </li>
            <li>
              Contributed to the design of an in-house product{" "}
              <AnchorTag
                text={"(workstedi.com)"}
                link={"https://www.workstedi.com/"}
                classname={"text-primaryblue underline"}
              />{" "}
              currently in its beta launch stage.
            </li>
          </ul>
        </AnimatedContainer>
      </section>
      <section>
        <div>
          <AnimatedSubTitle
            text={"Other projects"}
            classname={"font-grotesque text-2xl"}
          />
          <div className="flex items-center justify-between mt-2">
            <AnimatedSubTitle
              text={"GPA portal"}
              classname={"font-medium font-intertight text-lg"}
            />
            <p className="font-intertight text-sm">May 2024</p>
          </div>
          <AnimatedContainer>
            <p className="-mt-4 text-base">
              A central portal for my church that allows technical admin,
              general overseer, zonal coordinators, national church council
              members, and pastors to see data like members' information,
              financials, reports, user activities, user groups, and so on.
              Designated church members are the ones uploading the data.
            </p>
          </AnimatedContainer>
        </div>
        <div>
          <div className="flex items-center justify-between -mt-2">
            <AnimatedSubTitle
              text={"Coza bus coordination app"}
              classname={"font-medium font-intertight text-lg"}
            />
            <p className="font-intertight text-sm">May 2024</p>
          </div>
          <AnimatedContainer>
            <p className="-mt-4 text-base">
              A mobile app that allows members of the Coza church to book space
              in the bus for Sunday service. The users are the admins (viewing
              and actioning), the bus captains, and the church members.
            </p>
          </AnimatedContainer>
        </div>
      </section>
      <section>
        <div>
          <AnimatedSubTitle
            text={"Skills"}
            classname={"font-grotesque text-2xl"}
          />
          <AnimatedSubTitle
            text={"Soft skills"}
            classname={"font-medium font-intertight text-lg"}
          />
          <AnimatedContainer>
            <p className="-mt-4 text-base">
              Active and Quick Learning, Interpersonal Skills, Teamwork, Team
              Player, Knowledge Acquisition and Deployment, Collaboration,
              Effective Communication, Problem-solving, and Empathy.
            </p>
          </AnimatedContainer>
        </div>

        <AnimatedSubTitle
          text={"Design skills"}
          classname={"font-medium font-intertight text-lg -mt-2"}
        />

        <AnimatedContainer>
          <p className="-mt-4 text-base">
            User Experience (UX) Design, User Interface (UI) Design, Responsive
            Web Design, User Research, Information Architecture, Wireframing,
            Usability Study, Prototyping, and Heuristics Evaluation.
          </p>
        </AnimatedContainer>
      </section>
      <section>
        <div>
          <AnimatedSubTitle
            text={"Education"}
            classname={"font-grotesque text-2xl"}
          />
          <AnimatedSubTitle
            text={"B.sc. Mechanical Engineering"}
            classname={"font-intertight font-medium text-lg"}
          />
          <AnimatedContainer>
            <p className="text-sm -mt-5 mb-1">
              University of Lagos (<b>4.55/5.00</b> CGPA) | Lagos, Nigeria.
            </p>
            <p className="text-sm mb-2">Dec 2015 - Sep 2021</p>
          </AnimatedContainer>
        </div>
      </section>
      <section>
        <div>
          <AnimatedSubTitle
            text={"Certification"}
            classname={"font-grotesque text-2xl"}
          />
          <AnimatedSubTitle
            text={"Google UX Design Professional Certification"}
            classname={"font-intertight font-medium text-lg"}
          />
          <AnimatedContainer>
            <p className="text-sm -mt-5 mb-1">
              Google x Coursera of Lagos <b>(95.5%)</b>
            </p>
            <p className="text-sm mb-2">Oct 2021 - Aug 2022</p>
          </AnimatedContainer>
        </div>
      </section>
    </>
  );
};

export default Resume;
