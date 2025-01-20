import AnchorTag from "../../../components/AnchorTag";
import {
  RelatedProjects,
  tickventProjects,
} from "../../../components/RelatedProject";
import TheEnd from "../../../components/TheEnd";
import SectionLayout from "../../../layouts/SectionLayout";
import GoBack from "../../../utils/GoBack";
import { StarIcon } from "../../../utils/icons/NavIcons";
import { TickVentImages } from "../../../utils/ImagesImport";

const TickEvent = () => {
  return (
    <>
      <SectionLayout className={"border-b-2 border-b-tintblue1"}>
        <GoBack />
      </SectionLayout>
      <SectionLayout className={"border-b-2 border-b-tintblue1"}>
        <div className="mt-6">
          <p className="text-sm">PERSONAL PROJECT - Mobile app design</p>
          <h2 className="font-grotesque text-[32px] leading-[36.8px]">
            <span className="text-sectickevent">Accessing</span> and{" "}
            <span className="text-sectickevent">booking</span> events: Tech,
            concerts, movies, and music
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
          <div className="mt-10">
            <img src={TickVentImages.thumbnail1} alt="Hymns App" />
          </div>
        </div>
        <div className="mt-10 font-intertight">
          <p className="text-lg">
            Alex, a pharmacology student at the medical college (University of
            Lagos) loves Johnny Drille (an artiste) and always wants to attend
            his live concerts. A few years back, Johnny Drille pulled up
            unannounced and gave students a feel of what his concerts looked
            like by performing live. Alex promised himself not to miss Johnny
            Drille’s upcoming concert, only for him to think it was the day
            after the concert's stipulated date, so he missed it. Here you have
            it, a frustrated Alex.
          </p>
        </div>
        <div className="mt-6 font-intertight text-lg">
          <h2 className="font-grotesque text-2xl mb-2">Problem statement</h2>
          <p>
            Students and tech talents are busy with academics and work they
            therefore rarely keep tabs on events around them, concerts of their
            favourite artistes, and recent movies.
          </p>
        </div>
        <div className="mt-6 font-intertight text-lg">
          <h2 className="font-grotesque text-2xl mb-2">
            The process - My role
          </h2>
          <p>
            As a solo product designer on the project, I approached the problem
            using the <b>design thinking problem-solving</b> technique. I
            started with user research and analysis of the research findings to
            draw insights before ideating solutions via competitive audit and
            testing the early concepts with the end users.
          </p>
        </div>
        <div className="mt-6 font-intertight text-lg">
          <h2 className="font-grotesque text-2xl mb-2">Project goals</h2>
          <ol className="list-decimal list-inside mt-2 pl-1">
            <li>Increase the discoverability of events for tech talents.</li>
            <li>
              Reduce the process of getting tickets for paid and free events for
              tech talents.
            </li>
            <li>Improve the social life of tech talents.</li>
          </ol>
        </div>
        <div className="bg-tintblue4 px-6 py-3 rounded-[4px] mt-6 font-intertight text-lg">
          <div className="flex items-start justify-between">
            <h2 className="font-grotesque text-2xl mb-2">Business goals</h2>
            <button>
              <StarIcon />
            </button>
          </div>
          <ol className="list-decimal list-outside mt-2 pl-6">
            <li>
              Customers should be able to access events within <b>2 minutes</b>{" "}
              of launching the app.
            </li>
            <li>
              Events displayed in customers' feeds should be tailored to their
              location.
            </li>
            <li>Customers should be able to book ticket(s) for others.</li>
          </ol>
        </div>
        <div className="mt-6 font-intertight text-lg">
          <h2 className="font-grotesque text-2xl mb-2">The product</h2>
          <p>
            Tickvent is coined from the words <b>“ticket”</b> and{" "}
            <b>“events”</b> and is a product that brings together paid and free
            events in one place. Events like musical concerts, conferences,
            movies, music, and tech meet-ups are curated here. It allows the
            booking of more than one ticket, the selection of ticket grades if
            they are available, and also assigning email addresses to the
            tickets.
          </p>
        </div>
        <div className="mt-6 font-intertight text-lg mb-8">
          <h2 className="font-grotesque text-2xl mb-2">Impact and outcomes</h2>
          <ol className="list-decimal list-inside mt-2 pl-1">
            <li>Easy access to diverse events in users’ locations.</li>
            <li>
              Reduction in the time and effort needed to book and manage
              tickets.
            </li>
            <li>Seamless interface and effective navigation.</li>
          </ol>
        </div>
      </SectionLayout>
      <SectionLayout className={"border-b-2 border-b-tintblue1"}>
        <div className="flex flex-col gap-8 font-intertight text-lg">
          <div className="mt-6">
            <p className="text-sm">KICK-OFF</p>
            <h2 className="font-grotesque text-2xl mb-2">Knowing the users</h2>
            <p>
              Upon identification of the target audience (<b>students</b> and
              <b>working-class youth</b>), qualitative user research was used to
              identify their needs and pain points. The user research also
              validated and invalidated prior assumptions. The following
              questions were asked:
            </p>
            <ol className="list-decimal list-outside pl-6 mt-4 mb-2">
              <li>
                Do students and youths prefer going to musical concerts, or
                would they rather watch the replay?
              </li>
              <li>
                For students and young people who prefer to go watch the
                concert, how accessible is the ticket?
              </li>
              <li>
                How do people keep track of events around them without
                forgetting the date and details of the event?
              </li>
            </ol>
            <AnchorTag
              text={"Generative research plan"}
              link={
                "https://docs.google.com/document/d/13G3VVELNFENuXoer0KYzjSrDthU-YgOmXXRZ08Wo7k8/edit?tab=t.0#heading=h.kdxr5ylwtwxs"
              }
              classname={"underline text-primaryblue text-base font-bold"}
            />
          </div>
          <div>
            <div className="flex items-center gap-4">
              <div className="w-40 h-40 flex flex-col items-center justify-center bg-tintblue2 rounded-full">
                <b className="text-[40px]">3</b>
                <p>Participants</p>
              </div>
              <div className="w-40 h-40 flex flex-col items-center justify-center bg-tintblue2 rounded-full">
                <b className="text-[40px]">6</b>
                <p>Base questions</p>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-sm">PAIN POINTS</p>
            <h2 className="font-grotesque text-2xl mb-2">
              User research summary
            </h2>
            <p>
              An empathy map and user personas were used to synthesise the
              results from the research.
            </p>
            <div className="flex flex-col gap-6 mt-4">
              <div className="relative bg-tintblue4 p-4">
                <p>
                  Students and working-class youths miss a lot of events because
                  they don't get a reminder before the day of the Events.
                </p>
                <div className="w-7 h-7 rounded-full bg-primaryblue text-white text-base flex items-center justify-center absolute -top-2 -right-2">
                  1
                </div>
              </div>
              <div className="relative bg-tintblue4 p-4">
                <p>
                  The payment channels for the tickets are not all that
                  flexible, and users go back and forth.
                </p>
                <div className="w-7 h-7 rounded-full bg-primaryblue text-white text-base flex items-center justify-center absolute -top-2 -right-2">
                  2
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-grotesque text-2xl">Empathy map</h2>
            <div className="flex flex-col items-center gap-6">
              <div className="bg-tintblue4 p-4 mt-6">
                <p className="font-grotesque mb-2">😎 Pea says</p>
                <ol className="list-decimal list-outside pl-6">
                  <li>I have a hard time booking tickets for events.</li>
                  <li>I want to book tickets for my friends.</li>
                  <li>A fast ticket booking experience is the goal.</li>
                </ol>
              </div>
              <div className="bg-tintblue4 p-4">
                <p className="font-grotesque mb-2">🤔 Pea thinks</p>
                <ol className="list-decimal list-outside pl-6">
                  <li>
                    Tickets of different grades cannot be booked together.
                  </li>
                  <li>Reduced booking time is more preferred.</li>
                </ol>
              </div>
              <div className="-my-6">
                <img src={TickVentImages.pea} alt="pea image" />
              </div>
              <div className="bg-tintblue4 p-4">
                <p className="font-grotesque mb-2">🧐 Pea does</p>
                <ol className="list-decimal list-outside pl-6">
                  <li>Tried booking tickets with 2 platforms.</li>
                  <li>Kept eye contact.</li>
                </ol>
              </div>
              <div className="w-full bg-tintblue4 p-4">
                <p className="font-grotesque mb-2">🤐 Pea feels</p>
                <ol className="list-decimal list-outside pl-6">
                  <li>Calm.</li>
                  <li>Inquisitive.</li>
                  <li>Comfortable.</li>
                </ol>
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-grotesque text-xl">
              Persona 1 - Alexandra Dami
            </h2>
            <div className="bg-tintblue4 rounded-[10px] p-4 mt-4">
              <div className="flex flex-col gap-6">
                <div>
                  <p className="mb-4">Users who don’t own a hymnbook</p>
                  <h3 className="font-bold text-base">BIO</h3>
                  <p>
                    Alex is a 21-year-old student of pharmacology at the College
                    of Medicine in Lagos, Nigeria. He must attend classes,
                    seminars, and practicals and read to get good
                    grades. He loves good music and finds time to attend musical
                    concerts and award events for artistes. He recently missed
                    the concert of his favourite artiste (Johnny Drille) and
                    felt sad about it. He is looking for a solution so he
                    doesn’t miss his favourite artiste concert again. He doesn’t
                    mind paying a token for this.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-base">GOAL(S)</h3>
                  <ol className="list-decimal list-outside pl-6 mt-1">
                    <li>
                      Early awareness about concerts, comedy shows, and award
                      events around him.
                    </li>
                    <li>
                      To easily book tickets online for concerts and shows.
                    </li>
                    <li>
                      To manage academics and be informed about these events.
                    </li>
                  </ol>
                </div>
                <div>
                  <h3 className="font-bold text-base uppercase">
                    frustrations
                  </h3>
                  <ol className="list-decimal list-outside pl-6 mt-1">
                    <li>Misses concerts due to late awareness.</li>
                    <li>Academical work takes a large chunk of his time.</li>
                    <li>
                      Sometimes, the grade of ticket he wishes to purchase is
                      sold out.
                    </li>
                  </ol>
                </div>
                <p className="text-base">
                  “Just like information, music is powerful. Without music, the
                  world would be void”
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-grotesque text-xl">Persona 2 - Pea Kolapo</h2>
            <div className="bg-tintblue4 rounded-[10px] p-4 mt-4">
              <div className="flex flex-col gap-6">
                <div>
                  <p className="mb-4">Users who don’t own a hymnbook</p>
                  <h3 className="font-bold text-base">BIO</h3>
                  <p>
                    Pea is a graduate of Chemical Engineering working as an HR
                    Manager at P&G. She loves and buys digital arts online. Pea
                    is a lover of musical concerts and prefers live performances
                    to watching replays. She got a ticket for a concert and
                    missed it because she had thought the date was a day after
                    the event. Pea doesn’t mind travelling inter-state to watch
                    her favourite artiste perform.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-base">GOAL(S)</h3>
                  <ol className="list-decimal list-outside pl-6 mt-1">
                    <li>
                      Access to get full details concerning musical concerts in
                      Nigeria.
                    </li>
                    <li>Timely reminders of concerts for tickets purchased.</li>
                  </ol>
                </div>
                <div>
                  <h3 className="font-bold text-base uppercase">
                    frustrations
                  </h3>
                  <ol className="list-decimal list-outside pl-6 mt-1">
                    <li>No prior reminder of the event's date.</li>
                    <li>The payment modes and options are not secured.</li>
                  </ol>
                </div>
                <p className="text-base">
                  “Just like information, music is powerful. Without music, the
                  world would be void”
                </p>
              </div>
            </div>
          </div>
          <div className="mb-8">
            <h2 className="font-grotesque text-2xl mb-4">User journey map</h2>
            <div className="mb-2">
              <img src={TickVentImages.userJourney} alt="user-journey" />
            </div>
            <AnchorTag
              text={"Competitive audit"}
              link={
                "https://docs.google.com/presentation/d/1dkimjRO8hrXp0GrT1ZckSC0UxqnDAD6X/edit#slide=id.p1"
              }
              classname={"underline text-primaryblue text-base font-bold"}
            />
          </div>
        </div>
      </SectionLayout>
      <SectionLayout className={"border-b-2 border-b-tintblue1"}>
        <div className="flex flex-col gap-8 font-intertight text-lg">
          <div className="mt-6">
            <p className="text-sm">IDEATION</p>
            <h2 className="font-grotesque text-2xl mb-4">Competitive audit</h2>
            <div>
              <img
                src={TickVentImages.competitiveAudit}
                alt="competitive audit"
              />
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <AnchorTag
                text={"View competitive audit"}
                link={
                  "https://docs.google.com/spreadsheets/d/1Q9-rYdb6vCYeewn1DPy_LV3_NM3jHBCyecT2isq6-Rk/edit?gid=404271381#gid=404271381"
                }
                classname={"underline text-primaryblue text-base font-bold"}
              />
              <AnchorTag
                text={"Competitive audit report"}
                link={
                  "https://docs.google.com/document/d/1p1ZaOpUvzlx3DyF5WS48c7LB8rbBcEWL/edit#heading=h.gjdgxs"
                }
                classname={"underline text-primaryblue text-base font-bold"}
              />
            </div>
          </div>
          <div>
            <h2 className="font-grotesque text-2xl mb-2">Sequence diagram</h2>
            <p>
              The interaction between individual systems involved in the booking
              of a ticket for an event.
            </p>
            <div className="my-4">
              <img
                src={TickVentImages.sequenceDiagram}
                alt="sequence-diagram"
              />
            </div>
            <AnchorTag
              text={"See sequence diagram"}
              link={
                "https://drive.google.com/file/d/1XTFOhxsMcWC9labwxA_hbLusoA8AVekZ/view"
              }
              classname={"underline text-primaryblue text-base font-bold"}
            />
          </div>
          <div>
            <p className="text-sm">STARTING THE DESIGN</p>
            <h2 className="font-grotesque text-2xl mb-2">Sketches</h2>

            <div className="bg-tintblue4 px-5 py-8 grid grid-cols-2 gap-4 rounded-[32px]">
              <div>
                <img src={TickVentImages.tickSketch2} alt="sketch1" />
              </div>
              <div>
                <img src={TickVentImages.tickSketch1} alt="sketch2" />
              </div>
              <div>
                <img src={TickVentImages.tickSketch5} alt="sketch3" />
              </div>
              <div>
                <img src={TickVentImages.tickSketch6} alt="sketch4" />
              </div>
              <div>
                <img src={TickVentImages.tickSketch4} alt="sketch5" />
              </div>
              <div>
                <img src={TickVentImages.tickSketch3} alt="sketch6" />
              </div>
              <div>
                <img src={TickVentImages.tickSketch7} alt="sketch7" />
              </div>
            </div>
          </div>
          <div className="mb-8">
            <h2 className="font-grotesque text-2xl mb-4">Digital wireframes</h2>

            <div className="bg-tintblue4 px-6 py-8 grid md:grid-cols-2 gap-7 rounded-[32px]">
              <div>
                <p className="text-sm font-medium mb-4">ONBOARDING</p>
                <div>
                  <img src={TickVentImages.tickOnboarding} alt="onboarding" />
                </div>
              </div>
              <div>
                <p className="text-sm font-medium mb-4">ONBOARDING</p>
                <div>
                  <img src={TickVentImages.tickOnboarding1} alt="onboarding1" />
                </div>
              </div>
              <div>
                <p className="text-sm font-medium mb-4">HOME SCREEN</p>
                <div>
                  <img src={TickVentImages.tickHome} alt="onboarding1" />
                </div>
                <div className="mt-4">
                  <p>==&gt; Most relevant events personalised for users.</p>
                  <p>==&gt; Recommended events.</p>
                  <p>==&gt; Upcoming events.</p>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium mb-4">EVENT PAGE</p>
                <div>
                  <img src={TickVentImages.tickEvent} alt="onboarding1" />
                </div>
                <p className="mt-4">==&gt; Event details.</p>
              </div>
              <div>
                <p className="text-sm font-medium mb-4">EVENT PAGE</p>
                <div>
                  <img src={TickVentImages.tickEvent1} alt="onboarding1" />
                </div>
              </div>
              <div>
                <p className="text-sm font-medium mb-4">EVENT BOOKING</p>
                <div>
                  <img src={TickVentImages.eventBooking} alt="onboarding1" />
                </div>
              </div>
              <div>
                <p className="text-sm font-medium mb-4">TICKET PAGE</p>
                <div>
                  <img src={TickVentImages.ticketPage} alt="onboarding1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>
      <SectionLayout className={"border-b-2 border-b-tintblue1"}>
        <div className="flex flex-col gap-8 font-intertight text-lg mt-4">
          <div>
            <h2 className="font-grotesque text-2xl mb-2">
              Testing early concepts
            </h2>
            <p>
              Unmoderated usability test was used to evaluate the early concept
              and key flows of the mobile app. The test was done with <b>4</b>{" "}
              participants. Links to the prototype, the{" "}
              <AnchorTag
                text={"prompts"}
                link={
                  "https://docs.google.com/document/d/1NdiVnjZ_bQovUxqU1H30ylvTdC013Jq7whOSEM97s8Y/edit?tab=t.0"
                }
                classname={"underline text-primaryblue text-base font-bold"}
              />
              , and a Google form for feedback and system usability scale (SUS)
              were shared.
            </p>
            <AnchorTag
              text={"Usability study plan"}
              link={
                "https://docs.google.com/document/d/1sSybQ2cW9myy7jl-BYH1f5cFBZJWzBUj/edit"
              }
              classname={"underline text-primaryblue text-base font-bold"}
            />
          </div>

          <div>
            <h2 className="font-grotesque text-2xl mb-2">
              Unmoderated usability result
            </h2>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-2">
                <p>✔</p>
                <p>Users want to see paid and free events around them.</p>
              </div>
              <div className="flex items-start gap-2">
                <p>💥</p>
                <p>Users want to see categories of events.</p>
              </div>
              <div className="flex items-start gap-2">
                <p>💥</p>
                <p>
                  Users want to assign email addresses to different ticket
                  grades.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <p>✔</p>
                <p>Users want more customization for the payment process.</p>
              </div>
            </div>
            <p className="mt-2">
              Some iterations made were based on the “additional
              feedback/comment” of the questionnaire.
            </p>
          </div>

          <div>
            <h2 className="font-grotesque text-2xl mb-4">Design iteration</h2>
            <div className="flex flex-col gap-6">
              <div className="bg-tintblue4 p-4">
                <h3 className="font-grotesque">Before usability test</h3>
                <ol className="list-decimal list-outside pl-6 mt-2 text-base">
                  <li>No categorisation section on the solution.</li>
                  <li>In-app payment method.</li>
                </ol>
              </div>
              <div className="bg-tintblue4 p-4">
                <h3 className="font-grotesque">After usability test</h3>
                <ol className="list-decimal list-outside pl-6 mt-2 text-base">
                  <li>Categorisation of events.</li>
                  <li>3rd party payment integration added.</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <p className="text-sm">DESIGN ITERATION</p>
            <div className="flex flex-col gap-6">
              <div>
                <h2 className="font-grotesque text-2xl mb-4">Before #1</h2>
                <div className="my-2">
                  <img
                    src={TickVentImages.desginIteration1}
                    alt="design iteration 1"
                  />
                </div>
                <p>==&gt; Capitalised text field label.</p>
              </div>
              <div>
                <h2 className="font-grotesque text-2xl mb-4">After #1</h2>
                <div className="my-2">
                  <img
                    src={TickVentImages.desginIteration2}
                    alt="design iteration 2"
                  />
                </div>
                <p>
                  ==&gt; Lower caps text field label for improved legibility.
                </p>
              </div>
              <div>
                <h2 className="font-grotesque text-2xl mb-4">Before #2 </h2>
                <div className="my-2">
                  <img
                    src={TickVentImages.desginIteration3}
                    alt="design iteration 3"
                  />
                </div>
                <p>==&gt; No categorisation of events.</p>
              </div>
              <div>
                <h2 className="font-grotesque text-2xl mb-4">After #2 </h2>
                <div className="my-2">
                  <img
                    src={TickVentImages.desginIteration4}
                    alt="design iteration 4"
                  />
                </div>
                <p>==&gt; Categorisation of events for easy access.</p>
              </div>
              <div>
                <h2 className="font-grotesque text-2xl mb-4">Before #3 </h2>
                <div className="my-2">
                  <img
                    src={TickVentImages.desginIteration5}
                    alt="design iteration 5"
                  />
                </div>
                <p>==&gt; In-app payment method.</p>
              </div>
              <div>
                <h2 className="font-grotesque text-2xl mb-4">After #3 </h2>
                <div className="my-2">
                  <img
                    src={TickVentImages.desginIteration6}
                    alt="design iteration 6"
                  />
                </div>
                <p>
                  ==&gt; Integration with a known payment gateway to build
                  trust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>
      <SectionLayout className={"border-b-2 border-b-tintblue1"}>
        <div className="flex flex-col gap-8 mt-8 font-intertight text-lg">
          <div>
            <h2 className="font-grotesque text-2xl mb-4">Key mockups</h2>
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-base font-medium">ONBOARDING 1</h3>
                <div className="my-2">
                  <img src={TickVentImages.keymockup1} alt="key mockup 1" />
                </div>
              </div>
              <div>
                <h3 className="text-base font-medium">ONBOARDING 2</h3>
                <div className="my-2">
                  <img src={TickVentImages.keymockup2} alt="key mockup 2" />
                </div>
              </div>
              <div>
                <h3 className="text-base font-medium">ONBOARDING 3</h3>
                <div className="my-2">
                  <img src={TickVentImages.keymockup3} alt="key mockup 3" />
                </div>
              </div>
              <div>
                <h3 className="text-base font-medium">HOME SCREEN</h3>
                <div className="my-2">
                  <img src={TickVentImages.keymockup4} alt="key mockup 4" />
                </div>
              </div>
              <div>
                <h3 className="text-base font-medium">AM EVENT CATEGORY</h3>
                <div className="my-2">
                  <img src={TickVentImages.keymockup5} alt="key mockup 5" />
                </div>
              </div>
              <div>
                <h3 className="text-base font-medium">EXPLORE EVENT</h3>
                <div className="my-2">
                  <img src={TickVentImages.keymockup6} alt="key mockup 6" />
                </div>
              </div>
              <div>
                <h3 className="text-base font-medium">NO SEARCH RESULT</h3>
                <div className="my-2">
                  <img src={TickVentImages.keymockup7} alt="key mockup 7" />
                </div>
              </div>
              <div>
                <h3 className="text-base font-medium">YOUR TICKET</h3>
                <div className="my-2">
                  <img src={TickVentImages.keymockup8} alt="key mockup 8" />
                </div>
              </div>
              <div>
                <h3 className="text-base font-medium">EVENT BOOKING</h3>
                <div className="my-2">
                  <img src={TickVentImages.keymockup9} alt="key mockup 9" />
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="font-grotesque text-2xl mb-4">
              Accessibility and inclusiveness
            </h2>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-2">
                <p>✔</p>
                <p>
                  Use of iOS standards for text sizes, button height, and
                  layout.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <p>✔</p>
                <p>
                  Labelling of the navigation bar to help recognition rather
                  than recall.
                </p>
              </div>
              <div>
                <img
                  src={TickVentImages.accessibilityimg}
                  alt="accessibility"
                />
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>
      <SectionLayout className={"font-intertight text-lg"}>
        <div className="mt-8 flex flex-col gap-8">
          <div className="bg-tintblue4 p-4 rounded-[4px]">
            <div className="flex items-center justify-between">
              <h2 className="font-grotesque text-2xl">
                Business considerations (Paid events)
              </h2>
              <p>
                <StarIcon />
              </p>
            </div>
            <ol className="list-decimal list-outside mt-2 pl-6">
              <li>
                <b>In case of a refund</b>: Customers will contact the
                organisers of the events.
              </li>
              <li>
                <b>Profit sharing</b>: For every ticket sold using the app, the
                product owner gets 3%.
              </li>
              <li>
                <b>Payment gateway</b>: The payment gateway used will be that of
                the event organiser, hence the cost is covered by the event
                organisers.
              </li>
            </ol>
          </div>

          <div>
            <h2 className="font-grotesque text-2xl mb-2">More impact</h2>
            <p>
              The Tickvent Mobile App solved the pain points of users having
              difficulties keeping up with events around them and solved the
              problems of booking and payment.
            </p>
          </div>
          <div>
            <h2 className="font-grotesque text-2xl mb-2">Learnings</h2>
            <p>
              While designing the Tickvent Mobile App, I learned that the
              initial ideas for solving problems are not the final ones.
              Usability studies and peer feedback influenced each iteration of
              the App’s designs.
            </p>
          </div>
          <div>
            <h2 className="font-grotesque text-2xl mb-2">Next steps</h2>
            <ol className="list-decimal list-outside mt-2 pl-6">
              <li>
                Conduct another round of usability studies to validate whether
                the pain points users experienced have been effectively
                addressed.
              </li>
              <li>
                Conduct more user research to determine any new areas of need.
              </li>
              <li>
                Have an optimised and secured in-app payment gateway to properly
                manage payments and profit-making.
              </li>
            </ol>
          </div>
        </div>
        <TheEnd />
        <RelatedProjects projects={tickventProjects} />
      </SectionLayout>
    </>
  );
};

export default TickEvent;
