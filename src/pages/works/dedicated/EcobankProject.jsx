import {
  ecobankProjects,
  RelatedProjects,
} from "../../../components/RelatedProject";
import TheEnd from "../../../components/TheEnd";
import SectionLayout from "../../../layouts/SectionLayout";
import GoBack from "../../../utils/GoBack";
import { WorkImages } from "../../../utils/ImagesImport";

const EcobankProject = () => {
  return (
    <>
      <SectionLayout className={"border-b-2 border-b-tintblue1"}>
        <GoBack />
      </SectionLayout>
      <SectionLayout className={"border-b-2 border-b-tintblue1"}>
        <div className="mt-6">
          <p className="text-sm">REAL PROJECTs - Mobile Apps and Web Apps</p>
          <h2 className="font-grotesque text-[32px] leading-[36.8px]">
            Project Coalition at Ecobank Transnational Incorporated
          </h2>
          <div className="flex flex-wrap items-start gap-2 text-sm mt-2 mb-6">
            <p className="bg-tintblue2 rounded-full py-[2px] px-2 whitespace-nowrap">
              Business Analysis
            </p>
            <p className="bg-tintblue2 rounded-full py-[2px] px-2 whitespace-nowrap">
              UX Design
            </p>
            <p className="bg-tintblue2 rounded-full py-[2px] px-2 whitespace-nowrap">
              UI Design
            </p>
          </div>
          <div className="mt-10">
            <img src={WorkImages.projectcoalition} alt="Hymns App" />
          </div>
        </div>
        <div className="mt-10 font-intertight">
          <p className="text-2xl">
            My role at Ecobank International Incorporated cuts across{" "}
            <span className="bg-secyellowgreen">
              Business Analysis and UX Design.
            </span>{" "}
            It starts with{" "}
            <span className="bg-seccoralpink">
              requirement gathering and elicitation
            </span>{" "}
            from the business stakeholders, analysing the requirements,{" "}
            <span className="bg-secpalepurple">
              designing and communicating requirements
            </span>{" "}
            to the technology stakeholders,{" "}
            <span className="bg-seccoralpink">
              solution evaluation, solution validation
            </span>{" "}
            with business stakeholders, and{" "}
            <span className="bg-secyellowgreen">solution delivery</span>.
          </p>
        </div>
        <div className="mt-10 font-intertight text-lg">
          <h2 className="font-grotesque text-2xl">Technical skills I use</h2>
          <ol className="list-decimal list-inside mt-2 pl-2">
            <li>Requirement elicitation.</li>
            <li>Requirement analysis.</li>
            <li>Stakeholders workshop.</li>
            <li>Desk research.</li>
            <li>Stakeholders management.</li>
            <li>Documentation.</li>
            <li>Industry knowledge.</li>
            <li>Domain knowledge.</li>
          </ol>
        </div>
        <div className="mt-8 font-intertight text-lg">
          <h2 className="font-grotesque text-2xl">
            Interpersonal skills I use
          </h2>
          <ol className="list-decimal list-inside mt-2 pl-2">
            <li>Facilitation</li>
            <li>Collaboration.</li>
            <li>Communication.</li>
            <li>Team work.</li>
            <li>Creative problem solving.</li>
            <li>Keen observation.</li>
            <li>Proactiveness.</li>
            <li>Emotional/Social intelligence.</li>
            <li>Conversational skill.</li>
            <li>Self-motivation.</li>
          </ol>
          <p className="mt-4 mb-8">
            <b>Caveat:</b> Images were withheld because of NDA purposes.
          </p>
        </div>
      </SectionLayout>
      <SectionLayout className={"border-b-2 border-b-tintblue1"}>
        <div className="mt-6 font-intertight text-lg">
          <div>
            <h2 className="font-grotesque text-2xl mb-3">
              Project #1 - Designing a cross-border payment application across
              50 African and European Countries
            </h2>
            <p>
              Remittance is one of the financial services we offer and it allows
              for <b>cross-border</b> <b>transfer</b> of <b>financial value</b>.
              It becomes important to make it easy for customers to send money
              from their location to anywhere in Africa and Europe. We are
              present in over <b>33 African</b> and some <b>European</b>{" "}
              countries. This is the leverage we have in the rendition of
              remittance financial services.
            </p>
          </div>
          <div className="flex flex-col gap-6 mt-6">
            <div>
              <div>
                <h3 className="font-grotesque text-xl mb-1">
                  Problem Statement
                </h3>
                <p>
                  Customers find it hard to send and receive money from their
                  loved ones in the diaspora.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <div className="w-[152px] h-[30px] rounded-full flex items-center justify-center text-white text-sm p-2 bg-primaryblue">
                  Consumer banking
                </div>
                <div className="w-[152px] h-[30px] rounded-full flex items-center justify-center text-white text-sm p-2 bg-[#372678]">
                  Remittance and IMTO
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-grotesque text-xl mb-1">Team members</h3>
              <p>
                <b> 2 </b> project managers, <b>2</b> business analysts,{" "}
                <b>1</b> UX designer, <b>2</b> mobile developers, <b>2</b>{" "}
                backend engineers, <b>2</b> quality assurance engineers.
              </p>
            </div>
            <div>
              <h3 className="font-grotesque text-xl mb-1">What I did</h3>
              <p>Business analysis and UX design</p>
            </div>
            <div>
              <h3 className="font-grotesque text-2xl mb-1">My Process</h3>
              <div className="flex flex-wrap gap-3">
                <p>Requirement gathering</p>
                <p>----</p>
                <p>Desk research</p>
                <p>----</p>
                <p>Documentation</p>
                <p>----</p>
                <p>Design</p>
              </div>
            </div>
            <div>
              <h3 className="font-grotesque text-xl mb-1">Project timeline</h3>
              <p>
                <b>8</b> months
              </p>
            </div>
            <div>
              <h3 className="font-grotesque text-xl mb-1">Tools used</h3>
              <div className="flex flex-wrap gap-3">
                <p>Microsoft suite</p>
                <p>----</p>
                <p>Figma</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 font-intertight text-lg">
          <h2 className="font-grotesque text-2xl mb-1">Business Case</h2>
          <div className="flex flex-col gap-6 mt-4">
            <div>
              <h3 className="font-grotesque text-xl mb-1">Executive summary</h3>
              <p>
                <b>ART</b> - Africa Rapid Transfer is our remittance application
                used to send money within Africa and <b>RTI</b> - Rapid Transfer
                International is used to send money outside of Africa.
              </p>
              <p>
                For our customers in Paris, our remittance engine/service is
                connected to a third-party application we pay for. Building our
                remittance application will help us cut costs and also take full
                ownership of the entire system.
              </p>
            </div>
            <div>
              <h3 className="font-grotesque text-xl mb-1">Current situation</h3>
              <p>
                2 separate apps are used for remittance transactions within and
                outside Africa.
              </p>
            </div>
            <div>
              <h3 className="font-grotesque text-xl mb-1">Cost and ROI</h3>
              <p>
                Saved the cost incurred from connecting to the third-party
                application.
              </p>
            </div>
            <div>
              <h3 className="font-grotesque text-xl mb-1">
                Risk and mitigation
              </h3>
              <p>N/A</p>
            </div>
            <div>
              <h3 className="font-grotesque text-xl mb-1">
                Implementation impact
              </h3>
              <p>
                A single <b>RT</b> - Rapid Transfer app to replace the ART and
                RTI apps would be used in more than <b>50 countries</b> in
                Africa and Europe.
              </p>
            </div>
            <div className="bg-secyellowgreen p-6 text-base">
              <h3 className="font-grotesque text-xl mb-1">Feasibilty</h3>
              <ol className="list-decimal list-inside mt-2">
                <li>
                  Availability of third-party identity verification services.
                </li>
                <li>Licence to operate in African and European countries.</li>
              </ol>
            </div>
            <div className="bg-seccoralpink p-6 text-base">
              <h3 className="font-grotesque text-xl mb-1">Desirability</h3>
              <ol className="list-decimal list-inside mt-2">
                <li>Easy onboarding.</li>
                <li>Light app size.</li>
                <li>Intuitive onboarding and identity verification.</li>
                <li>Smooth KYC verification.</li>
              </ol>
            </div>
            <div className="bg-secpalepurple p-6 text-base">
              <h3 className="font-grotesque text-xl mb-1">Viability</h3>
              <ol className="list-decimal list-inside mt-2">
                <li>Availability of various payment methods.</li>
                <li>Availability of up to 6 delivery modes.</li>
                <li>Generation of account statement.</li>
                <li>Scheduling payments.</li>
              </ol>
            </div>
            <div>
              <h3 className="font-grotesque text-xl mb-1">
                Some of the features
              </h3>
              <div>
                <div className="flex items-start gap-2">
                  <b>1.</b>
                  <p>
                    <b>Admin Portal</b> - Rate setting, Ads management, Customer
                    management - activation and deactivation, Transaction
                    reporting, Audit logs and user activities, etc.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <b>2.</b>
                  <p>
                    <b>Mobile App</b> - Exchange rates, beneficiary’s
                    management, Receive payment, Wallet, etc.
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-8">
              <h3 className="font-grotesque text-xl mb-1">
                Other things I did
              </h3>
              <ol className="list-decimal list-inside mt-2 pl-1">
                <li>
                  Documentation of functional requirements for the Admin Portal.
                </li>
                <li>
                  Ensuring effective communication between the business and
                  technology stakeholders.
                </li>
                <li>Facilitation of design walkthrough sessions.</li>
                <li>
                  Facilitation of solution evaluation with business
                  stakeholders.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </SectionLayout>
      <SectionLayout className={"border-b-2 border-b-tintblue1"}>
        <div className="mt-6 font-intertight text-lg">
          <div>
            <h2 className="font-grotesque text-2xl mb-3">
              Project #2 - Bringing financial services to customers in rural
              communities across Africa
            </h2>
            <p>
              Bringing financial services like account opening, cash withdrawal,
              and cash deposit closer to customers in rural areas where we have
              little to no branches to ensure a digital economy and drive
              growth.
            </p>
          </div>
          <div className="flex flex-col gap-6 mt-6">
            <div>
              <div>
                <h3 className="font-grotesque text-xl  mb-1">
                  Problem Statement
                </h3>
                <p>
                  Customers in areas with low network bandwidth and minimum
                  access to financial services face difficulty in transferring
                  and receiving financial value.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <div className="w-[152px] h-[30px] rounded-full flex items-center justify-center text-white text-sm p-2 bg-primaryblue">
                  Consumer banking
                </div>
                <div className="w-[152px] h-[30px] rounded-full flex items-center justify-center text-white text-sm p-2 bg-[#372678]">
                  Agency banking
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-grotesque text-xl mb-1">Team members</h3>
              <p>
                <b> 1 </b> project managers, <b>1</b> business analysts,{" "}
                <b>2</b> UX designer, <b>2</b> mobile developers, <b>4</b>{" "}
                backend engineers, <b>2</b> quality assurance engineers.
              </p>
            </div>
            <div>
              <h3 className="font-grotesque text-xl mb-1">What I did</h3>
              <p>UX design - Entire app redesign.</p>
            </div>
            <div>
              <h3 className="font-grotesque text-2xl mb-1">My Process</h3>
              <div className="flex flex-wrap gap-3">
                <p>Requirement gathering</p>
                <p>----</p>
                <p>Desk research</p>
                <p>----</p>
                <p>Design</p>
              </div>
            </div>
            <div>
              <h3 className="font-grotesque text-xl mb-1">Project timeline</h3>
              <p>
                <b>9</b> months
              </p>
            </div>
            <div>
              <h3 className="font-grotesque text-xl mb-1">Tools used</h3>
              <div className="flex flex-wrap gap-3">
                <p>Microsoft suite</p>
                <p>----</p>
                <p>Figma</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 font-intertight text-lg">
          <h2 className="font-grotesque text-2xl mb-1">Business Case</h2>
          <div className="flex flex-col gap-6 mt-4">
            <div>
              <h3 className="font-grotesque text-xl mb-1">Executive summary</h3>
              <p>
                Customer acquisition and retention are part of our long-term
                goals at Ecobank, and bringing financial services closer to our
                customers is necessary to achieve this goal.
              </p>
            </div>
            <div>
              <h3 className="font-grotesque text-xl mb-1">Strategy</h3>
              <p>
                Launch and test in Nigeria and Ghana before scaling to other
                affiliates (countries).
              </p>
            </div>
            <div>
              <h3 className="font-grotesque text-xl mb-1">
                Risk and mitigation
              </h3>
              <p>
                Registration of Agents and ensuring their credibility and
                reliability.
              </p>
            </div>
            <div>
              <h3 className="font-grotesque text-xl mb-1">
                Implementation impact
              </h3>
              <p>
                The <b>Xpress Point</b> Mobile App is used across all <b>33</b>{" "}
                affiliates and as at August 2024 does over <b>$502million</b> in
                transaction and over <b>$1.2million</b> in commissions paid to
                Agents. More than <b>2,000</b> accounts have been created for
                customers using the <b>open account</b> feature.
              </p>
            </div>
            <div className="bg-secyellowgreen p-6 text-base">
              <h3 className="font-grotesque text-xl mb-1">Feasibilty</h3>
              <ol className="list-decimal list-inside mt-2">
                <li>
                  Availability of staff members to onboard and train agents.
                </li>
                <li>Licence to operate in over 33 African countries.</li>
              </ol>
            </div>
            <div className="bg-seccoralpink p-6 text-base">
              <h3 className="font-grotesque text-xl mb-1">Desirability</h3>
              <ol className="list-decimal list-inside mt-2">
                <li>Easy onboarding.</li>
                <li>Light app size.</li>
                <li>Account and device management.</li>
                <li>Integration with card readers.</li>
              </ol>
            </div>
            <div className="bg-secpalepurple p-6 text-base">
              <h3 className="font-grotesque text-xl mb-1">Viability</h3>
              <ol className="list-decimal list-inside mt-2">
                <li>Frequent training and engagement for Agents..</li>
                <li>
                  Includes features like account opening, token redemption, and
                  international cash inflow.
                </li>
                <li>Remittance transaction feature.</li>
                <li>
                  Agents have commission accounts and get paid for transactions.
                </li>
              </ol>
            </div>
            <div className="mb-8">
              <h3 className="font-grotesque text-xl mb-1">
                Some of the features
              </h3>
              <div>
                <div className="flex items-start gap-2">
                  <b>1.</b>
                  <p>
                    <b>Mobile App</b> - Cash out, QR Cash out, Cash in, etc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>
      <SectionLayout className={"border-b-2 border-b-tintblue1"}>
        <div className="mt-6 font-intertight text-lg">
          <div>
            <h2 className="font-grotesque text-2xl mb-3">
              Project #3 - Providing a one-stop domestic payment (inflow and
              outflow) for SMEs across Africa
            </h2>
            <p>
              In most countries, <b>MSMEs</b> are the bedrock, as they help
              facilitate economic growth and development, especially in
              developing countries. <b>Receiving</b> and <b>making payments</b>{" "}
              is an integral part of MSMEs as the transfer of financial value
              fosters business growth.
            </p>
          </div>
          <div className="flex flex-col gap-6 mt-6">
            <div>
              <div>
                <h3 className="font-grotesque text-xl  mb-1">
                  Problem Statement
                </h3>
                <p>
                  Business owners struggle to manage their inflows and outflows
                  using a one-stop app.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <div className="w-[152px] h-[30px] rounded-full flex items-center justify-center text-white text-sm p-2 bg-primaryblue">
                  Consumer banking
                </div>
                <div className="w-[152px] h-[30px] rounded-full flex items-center justify-center text-white text-sm p-2 bg-[#372678]">
                  Commercial banking
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-grotesque text-xl mb-1">Team members</h3>
              <p>
                <b> 2 </b> project managers, <b>2</b> business analysts,{" "}
                <b>2</b> UX designer, <b>3</b> mobile developers, <b>4</b>{" "}
                backend engineers, <b>2</b> quality assurance engineers.
              </p>
            </div>
            <div>
              <h3 className="font-grotesque text-xl mb-1">What I did</h3>
              <p>Business analysis and UX design</p>
            </div>
            <div>
              <h3 className="font-grotesque text-2xl mb-1">My Process</h3>
              <div className="flex flex-wrap gap-3">
                <p>Requirement gathering</p>
                <p>----</p>
                <p>Desk research</p>
                <p>----</p>
                <p>Documentation</p>
                <p>----</p>
                <p>Design</p>
              </div>
            </div>
            <div>
              <h3 className="font-grotesque text-xl mb-1">Project timeline</h3>
              <p>
                <b>8</b> months
              </p>
            </div>
            <div>
              <h3 className="font-grotesque text-xl mb-1">Tools used</h3>
              <div className="flex flex-wrap gap-3">
                <p>Microsoft suite</p>
                <p>----</p>
                <p>Figma</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 font-intertight text-lg">
          <h2 className="font-grotesque text-2xl mb-1">Business Case</h2>
          <div className="flex flex-col gap-6 mt-4">
            <div>
              <h3 className="font-grotesque text-xl mb-1">Executive summary</h3>
              <p>
                <b>SMEs</b> play a significant role in both developed and
                developing economies in terms of turnover, creating employment
                opportunities and serving as a poverty alleviation tool.
                According to a <b>PwC</b> survey, SMEs in Nigeria contribute{" "}
                <b>48%</b> of the national <b>GDP</b> and account for <b>96%</b>{" "}
                of businesses and <b>84%</b> of employment.
              </p>
            </div>
            <div>
              <h3 className="font-grotesque text-xl mb-1">Strategy</h3>
              <p>
                Launch and test in Nigeria before scaling to other affiliates
                (countries).
              </p>
            </div>
            <div>
              <h3 className="font-grotesque text-xl mb-1">
                Risk and mitigation
              </h3>
              <p>
                Validating the identity and business documents of customers to
                reduce anti-money laundering and sanctions from regulatory
                bodies.
              </p>
            </div>
            <div>
              <h3 className="font-grotesque text-xl mb-1">
                Implementation impact
              </h3>
              <p>
                The (Ecobank business - formerly MySME App) did more than{" "}
                <b>NGN 1.25 billion</b> in transaction value within <b>4</b>{" "}
                months of launch in Nigeria - <b>MVP1</b> and increased the
                bank’s customer base.
              </p>
              <p>
                {" "}
                Business leaders want it scaled to the group i.e.{" "}
                <b>4 more affiliates</b> (Cameroon, Côte d’Ivoire, Ghana, and
                Zimbabwe) to include payments, collections, and the business
                tools modules -<b>MVP2</b>. It is currently doing NGN 50 billion
                monthly in transaction value and over 53,000 transacting
                customers in Nigeria.
              </p>
            </div>
            <div className="bg-secyellowgreen p-6 text-base">
              <h3 className="font-grotesque text-xl mb-1">Feasibilty</h3>
              <ol className="list-decimal list-inside mt-2">
                <li>
                  Availability of third-party identity verification services.
                </li>
                <li>
                  Licence to operate in over <b>33</b> African countries.
                </li>
              </ol>
            </div>
            <div className="bg-seccoralpink p-6 text-base">
              <h3 className="font-grotesque text-xl mb-1">Desirability</h3>
              <ol className="list-decimal list-inside mt-2">
                <li>Easy onboarding.</li>
                <li>Light app size.</li>
                <li>Intuitive onboarding and identity verification.</li>
                <li>Smooth document verification.</li>
              </ol>
            </div>
            <div className="bg-secpalepurple p-6 text-base">
              <h3 className="font-grotesque text-xl mb-1">Viability</h3>
              <ol className="list-decimal list-inside mt-2">
                <li>
                  Availability of more than <b>5</b> payment channels.
                </li>
                <li>
                  Availability of more than <b>5</b> collection channels.
                </li>
                <li>
                  Business tools like storefront and loans for better business
                  performance.
                </li>
              </ol>
            </div>
            <div>
              <h3 className="font-grotesque text-xl mb-1">
                Some of the features
              </h3>
              <div>
                <div className="flex items-start gap-2">
                  <b>1.</b>
                  <p>
                    <b>Admin Portal</b> - Customer management, Transaction
                    reporting, Document review and approval, Request management,
                    etc.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <b>2.</b>
                  <p>
                    <b>Mobile App </b>- Bills payment, mPOS, etc.
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-8">
              <h3 className="font-grotesque text-xl mb-1">
                Other things I did
              </h3>
              <ol className="list-decimal list-inside mt-2 pl-1">
                <li>
                  Design and documentation of functional requirements for the
                  Admin Portal.
                </li>
                <li>
                  Design and documentation of the onboarding flow for <b>5</b>{" "}
                  more affiliates (countries).
                </li>
                <li>Facilitation of design walkthrough sessions.</li>
                <li>
                  Engaging the business stakeholders for requirement
                  elicitation.
                </li>
                <li>Provision of APIs to the technology team.</li>
              </ol>
            </div>
          </div>
        </div>
      </SectionLayout>
      <SectionLayout>
        <div className="mt-6 font-intertight text-lg">
          <div>
            <h2 className="font-grotesque text-2xl mb-3">
              Project #4 - Improving eProcess project execution and Reducing the
              internal team expense cost by over $1000
            </h2>
            <p>
              When I joined the company in <b>February 2023</b>, the primary
              interface design tool was Adobe XD. We paid for <b>2</b> licenses
              and I used one of the login details to access the Adobe Creative
              Cloud.
            </p>
          </div>
          <div className="flex flex-col gap-6 mt-6">
            <div>
              <div>
                <h3 className="font-grotesque text-xl mb-1">
                  Problem Statement
                </h3>
                <p>
                  The use of Adobe XD for the design of interfaces causes us to
                  lose time for the following reasons:
                </p>
                <ol className="list-decimal list-inside mt-2">
                  <li>Frequent crashes.</li>
                  <li>Poor UX of the interface.</li>
                  <li>No real-time update of prototype link.</li>
                  <li>Difficulty integrating with other applications.</li>
                  <li>Managing teams and libraries.</li>
                  <li>Limited number of allowable character styles.</li>
                </ol>
              </div>
            </div>
            <div>
              <h3 className="font-grotesque text-xl mb-1">Team members</h3>
              <p>
                <b>2</b> designers
              </p>
            </div>
            <div>
              <h3 className="font-grotesque text-xl mb-1">What I did</h3>
              <p>Research and documentation</p>
            </div>
            <div>
              <h3 className="font-grotesque text-2xl mb-1">My Process</h3>
              <div className="flex flex-wrap gap-3">
                <p>Observation</p>
                <p>----</p>
                <p>Desk research</p>
                <p>----</p>
                <p>Documentation</p>
                <p>----</p>
                <p>Communication of findings</p>
              </div>
            </div>
            <div>
              <h3 className="font-grotesque text-xl mb-1">Project timeline</h3>
              <p>
                <b>4</b> months
              </p>
            </div>
            <div>
              <h3 className="font-grotesque text-xl mb-1">Tools used</h3>
              <div className="flex flex-wrap gap-3">
                <p>google.com</p>
                <p>----</p>
                <p>Microsoft suite</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 font-intertight text-lg">
          <h2 className="font-grotesque text-2xl mb-1">Business Case</h2>
          <div className="flex flex-col gap-6 mt-4">
            <div>
              <h3 className="font-grotesque text-xl mb-1">Executive summary</h3>
              <p>
                We are looking to effectively and efficiently improve how we
                design and ship products. It will help us serve customers in all
                our affiliates (countries) while saving operational costs.
              </p>
            </div>
            <div>
              <h3 className="font-grotesque text-xl mb-1">Current situation</h3>
              <p>
                Spending over <b>$3,830</b> on two Adobe Creative Cloud licence.
              </p>
            </div>
            <div>
              <h3 className="font-grotesque text-xl mb-1">Cost and ROI</h3>
              <p>
                Saved over <b>$2,000</b> annually.
              </p>
            </div>
            <div>
              <h3 className="font-grotesque text-xl mb-1">
                Risk and mitigation
              </h3>
              <p>N/A</p>
            </div>
            <div>
              <h3 className="font-grotesque text-xl mb-1">
                Implementation impact
              </h3>
              <p>
                Reduction in design and development time. Easy integration with
                third-party applications and plugins. Cohesive management and
                access to the company’s design system.
              </p>
            </div>
            <div className="text-base">
              <p>
                <b>Caveat:</b> I worked as a business analyst on projects, but I
                can’t discuss them now as they are not yet live.
              </p>
            </div>
          </div>
          <TheEnd />
          <RelatedProjects projects={ecobankProjects} />
        </div>
      </SectionLayout>
    </>
  );
};

export default EcobankProject;
