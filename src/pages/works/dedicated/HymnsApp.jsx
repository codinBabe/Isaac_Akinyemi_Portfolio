import AnchorTag from "../../../components/AnchorTag";
import TheEnd from "../../../components/TheEnd";
import SectionLayout from "../../../layouts/SectionLayout";
import GoBack from "../../../utils/GoBack";
import { HymnsImages } from "../../../utils/ImagesImport";
import {
  hymnsProjects,
  RelatedProjects,
} from "../../../components/RelatedProject";

const HymnsApp = () => {
  return (
    <>
      <SectionLayout className={"border-b-2 border-b-tintblue1"}>
        <GoBack />
      </SectionLayout>
      <SectionLayout className={"font-intertight border-b-2 border-tintblue1"}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-sm mt-6">PERSONAL PROJECT - Mobile app design</p>
            <h2 className="font-grotesque text-[32px] leading-[36.8px] lg:text-5xl">
              Designing a <span className="text-secgpa1">hymns app</span> to
              foster digital <span className="text-secgpa2">devotion</span> and{" "}
              <span className="text-secgpa2">faith</span>
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

            <img src={HymnsImages.hymns1} alt="Hymns App" />
          </div>

          <div>
            <h4 className="text-sm">THE REAL ISSUE - PROBLEM STATEMENT</h4>
            <p className="mt-2 text-2xl">
              I went to a church vigil on a Friday in 2020, and it was time to
              sing a hymn.{" "}
              <span className="bg-secyellowgreen">
                I observed that most people did not sing along
              </span>{" "}
              because they didn't have the hymnbook,{" "}
              <span className="bg-seccoralpink">
                as the number of copies printed was limited.
              </span>
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-grotesque mt-8">
              The process - My role
            </h3>
            <p>
              As a solo product designer on the project, I approached the
              problem using the <b>design thinking problem-solving</b>{" "}
              technique. I started with generative user research and analysis of
              the research findings to draw insights before ideating solutions
              and testing early concepts with the church members.
            </p>
          </div>
          <div>
            <h4 className="text-sm mt-8">PROJECT GOALS</h4>
            <h3 className="text-2xl font-grotesque mb-2">
              Intended goals to achieve
            </h3>
            <ol className="list-decimal list-inside text-lg">
              <li>
                Easy access to hymnal songs and lyrics whenever it is time to
                sing one.
              </li>
              <li>Improve the retention of hymnal songs.</li>
              <li>
                Enhance digital devotion and togetherness during church
                services.
              </li>
            </ol>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="bg-tintblue4 p-5 mb-4 relative">
              <p>
                How might we enable easy and efficient access to hymnal songs
                whenever it is time to sing them in service or during personal
                devotion?
              </p>
              <div className="w-7 h-7 rounded-full bg-primaryblue p-2 font-semibold flex items-center justify-center text-white absolute right-0 top-0">
                1
              </div>
            </div>
            <div className="bg-tintblue4 p-5 mb-4 relative">
              <p>
                How might we allow easy learning and retention of hymnal songs?
              </p>
              <div className="w-7 h-7 rounded-full bg-primaryblue p-2 font-semibold flex items-center justify-center text-white absolute right-0 top-0">
                2
              </div>
            </div>
            <div className="bg-tintblue4 p-5 mb-4 relative">
              <p>
                How might we encourage regular usage of the solution, ensuring
                it becomes an integral part of the church’s worship routine?
              </p>
              <div className="w-7 h-7 rounded-full bg-primaryblue p-2 font-semibold flex items-center justify-center text-white absolute right-0 top-0">
                3
              </div>
            </div>
            <div className="bg-tintblue4 p-5 mb-4 relative">
              <p>
                How might we personalize the experience of the solution for the
                church community?
              </p>
              <div className="w-7 h-7 rounded-full bg-primaryblue p-2 font-semibold flex items-center justify-center text-white absolute right-0 top-0">
                4
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>
      <SectionLayout
        className={"border-b-2 border-tintblue1 mt-4 font-intertight"}
      >
        <div className="flex flex-col gap-8">
          <div>
            {" "}
            <h3 className="font-grotesque text-2xl">
              Who is the solution for?
            </h3>
            <p className="text-lg mt-2">
              The primary users are the members of the church community,
              individuals with varying technological proficiencies, age groups,
              and musical preferences. The app was designed with tech-savvy
              individuals and those less familiar with digital platforms in mind
              (inclusivity and accessibility).
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-tintblue4 w-40 h-40 rounded-full flex flex-col items-center justify-center">
              <p className="font-bold text-[40px] leading-10">4k+</p>
              <p>People</p>
            </div>
            <div className="bg-tintblue4 w-40 h-40 rounded-full flex flex-col items-center justify-center">
              <p className="font-bold text-[40px] leading-10">2.1k+</p>
              <p>0 - 40 years old</p>
            </div>
            <div className="bg-tintblue4 w-40 h-40 rounded-full flex flex-col items-center justify-center">
              <p className="font-bold text-[40px] leading-10">1.9k+</p>
              <p>41 years above</p>
            </div>
            <div className="bg-tintblue4 w-40 h-40 rounded-full flex flex-col items-center justify-center">
              <p className="font-bold text-[40px] leading-10">25+</p>
              <p>Church branches</p>
            </div>
          </div>
          <div className="mx-auto bg-[#D9D9D9] w-full h-80 rounded-3xl my-8 p-4 flex items-center justify-center">
            <p className="text-xl">
              Video of: the prototype, people testing the app, you navigating
              the app on Figma mobile app.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-grotesque">The solution overview</h3>
            <p className="text-lg mt-2">
              A mobile app with features such as categorisation of hymnal songs,
              a search feature, audio accompaniments, save as favourite, and the
              daily rhema section.
            </p>
            <p className="text-sm italic">
              The daily rhema is a daily devotional book providing daily
              readings, reflections, and prayers to guide one’s spiritual
              journey.
            </p>
            <h3 className="text-2xl font-grotesque mt-8">Result</h3>
            <p className="text-lg mt-2 mb-8">
              <b>75%</b> of the moderated usability study participants thought
              the app was live and wanted to install it on their mobile devices
              immediately.
            </p>
          </div>
        </div>
      </SectionLayout>
      <SectionLayout
        className={"font-intertight mt-6 border-b-2 border-tintblue1"}
      >
        <h3 className="font-grotesque text-2xl">Starting the design process</h3>
        <p className="text-lg my-2">
          User interview was employed to understand the church community's needs
          and preferences regarding accessibility to hymnal songs.
        </p>
        <AnchorTag
          text={"Generative research plan"}
          link={
            "https://docs.google.com/document/d/1qJnYCzNLEqdLxQ7Jf7VZjZo6OYjvO0ib26jF__0nEKs/edit?tab=t.0#heading=h.kdxr5ylwtwxs"
          }
          classname={"text-primaryblue underline font-medium"}
        />
        <div className="mt-8 grid grid-cols-2 gap-2">
          <div className="bg-tintblue4 w-40 h-40 rounded-full flex flex-col items-center justify-center">
            <p className="font-bold text-[40px] leading-10">4</p>
            <p>Participants</p>
          </div>
          <div className="bg-tintblue4 w-40 h-40 rounded-full flex flex-col items-center justify-center">
            <p className="font-bold text-[40px] leading-10">6</p>
            <p>Base questions</p>
          </div>
        </div>
        <div className="mt-8">
          <h4 className="text-sm">WHAT THEY SAID</h4>
          <span className="text-[4rem] text-tintblue1 font-bold italic">“</span>
          <p className="text-xl font-medium -mt-10">
            As a guitarist, I struggle to quickly acquaint myself with the tone,
            rhythm, and solfa notes of hymn songs whenever it is time to sing
            one.
          </p>
          <p className="bg-seccoralpink w-20 mt-2 mb-8">OLA KHAN</p>
          <span className="text-[4rem] text-tintblue1 font-bold italic">“</span>
          <p className="text-xl font-medium -mt-10">
            I have tried different hymns app, and most of them don’t have the
            hymns in our hymnbook.
          </p>
          <p className="bg-secpalepurple w-20 mt-2 mb-8">DAMILOLA</p>
          <span className="text-[4rem] text-tintblue1 font-bold italic">“</span>
          <p className="text-xl font-medium -mt-10">
            Whenever I want to read the Daily Rhema, I would call one of the
            Pastors (a song minister) to help me with the tone and rhythm of the
            hymn of the day so that I can sing it while reading the Daily Rhema.
          </p>
          <p className="bg-secpalepurple w-40 mt-2">REVEREND JESUDAISI</p>
        </div>
        <div className="mt-8">
          <h3 className="font-grotesque text-2xl ">Users and their goals</h3>
          <p className="text-lg mt-2">
            I identified <b>2</b> user groups.
          </p>
          <ol className="list-decimal list-inside text-lg pl-2">
            <li>Users without the hymnbook.</li>
            <li>Users with the hymnbook.</li>
          </ol>
        </div>
        <div className="mt-8">
          <h3 className="font-grotesque text-2xl ">
            Persona 1 - Abraham Ajasa
          </h3>
          <div className="bg-tintblue4 p-4 mt-2 rounded-[10px]">
            <p className="font-medium mb-2">Users who don’t own a hymnbook</p>
            <h4 className="font-semibold my-2">PSYCHOGRAPHICS</h4>
            <ol className="list-decimal list-inside text-lg pl-2">
              <li>Loves social media.</li>
              <li>Is very practical.</li>
              <li>80% internet and social media savvy.</li>
              <li>An overthinker.</li>
            </ol>
            <h3 className="font-medium mb-2 mt-8">BIO</h3>
            <p>
              Abraham is a graduate of marketing and an instrumentalist. He is
              passionate about music, military, and swimming. He plans his day
              ahead of time and loves WhatsApp and TikTok.
            </p>
            <h3 className="font-medium mb-2 mt-8">WANT(S)</h3>
            <p>To easily learn and retain hymnal songs.</p>
            <h3 className="font-medium mb-2 mt-8">FRUSTRATIONS</h3>
            <ol className="list-decimal list-inside text-lg pl-2">
              <li>Learning hymnal songs minutes before it is sung.</li>
              <li>
                Absence of time signature and key signature on the hymnbook.
              </li>
            </ol>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="font-grotesque text-2xl ">
            Persona 2 - Prosper Shuperu
          </h3>
          <div className="bg-tintblue4 p-4 mt-2 rounded-[10px]">
            <p className="font-medium mb-2">Users who own a hymnbook</p>
            <h4 className="font-semibold my-2">PSYCHOGRAPHICS</h4>
            <ol className="list-decimal list-inside text-lg pl-2">
              <li>Values friendships and relationships.</li>
              <li>Analytical thinker.</li>
              <li>Lover of politics and football.</li>
              <li>90% social media and 95% internet savvy.</li>
            </ol>
            <h3 className="font-medium mb-2 mt-8">BIO</h3>
            <p>
              Prosper is a law graduate with an interest in football and real
              estate. She spends most of her time at work, watching football,
              playing virtual games and surfing the internet.
            </p>
            <h3 className="font-medium mb-2 mt-8">WANT(S)</h3>
            <p>Access to data 24/7 and access to the hymnbook.</p>
            <h3 className="font-medium mb-2 mt-8">FRUSTRATIONS</h3>
            <ol className="list-decimal list-inside text-lg pl-2">
              <li>Expensive and unstable internet.</li>
              <li>Unavailability of the hymn book.</li>
            </ol>
          </div>
        </div>
        <div className="mt-10">
          <h3 className="font-grotesque text-2xl mb-4">Empathy map</h3>
          <div className="bg-tintblue4 p-4 mt-2 rounded-[10px]">
            <p className="font-grotesque mb-2 text-xl">😎 Prosper says</p>
            <ol className="list-decimal list-inside text-lg pl-2">
              <li>I want 24/7 access to data and power.</li>
              <li>I usually have a hectic day.</li>
              <li>
                I find it difficult to retain the musical notes of hymn songs
                for future use.
              </li>
            </ol>
          </div>
          <div className="bg-tintblue4 p-4 mt-5 rounded-[10px]">
            <p className="font-grotesque mb-2 text-xl">🤔 Prosper thinks</p>
            <ol className="list-decimal list-inside text-lg pl-2">
              <li>There are still a few physical copies left for sale.</li>
              <li>The church members are not willing to buy the hymnbook.</li>
            </ol>
          </div>
          <div className="flex items-center justify-center">
            <img src={HymnsImages.prosper} alt="Prosper Shuperu" />
          </div>
          <div className="bg-tintblue4 p-4 rounded-[10px]">
            <p className="font-grotesque mb-2 text-xl"> 🧐 Prosper does</p>
            <ol className="list-decimal list-inside text-lg pl-2">
              <li>Answers questions calmly.</li>
              <li>Keeps eye contact.</li>
              <li>Support answers with salient points.</li>
            </ol>
          </div>
          <div className="bg-tintblue4 p-4 mt-5 rounded-[10px]">
            <p className="font-grotesque mb-2 text-xl">🤐 Prosper feels</p>
            <ol className="list-decimal list-inside text-lg pl-2">
              <li>Calm.</li>
              <li>Intrigued.</li>
              <li>Exicted</li>
            </ol>
          </div>
        </div>
        <div className="my-8">
          <h3 className="font-grotesque text-2xl">Generated insights</h3>
          <div className="text-lg">
            <div className="flex items-start gap-4 mt-2">
              <b>#1</b>
              <p>Users want to have easy access to hymnal songs.</p>
            </div>
            <div className="flex items-start gap-4 mt-2">
              <b>#2</b>
              <p>
                Users find it difficult to retain and remember the tone and
                musical notes of hymn songs.
              </p>
            </div>
            <div className="flex items-start gap-4 mt-2">
              <b>#3</b>
              <p>
                Users need a way to easily retain and remember the melody of
                hymn songs.
              </p>
            </div>
          </div>
        </div>
      </SectionLayout>
      <SectionLayout
        className={"border-b-2 border-tintblue1 font-intertight mt-6"}
      >
        <div className="mb-8">
          <h3 className="font-grotesque text-2xl mb-3">
            Features and sub-features
          </h3>
          <div className="text-lg">
            <div className="flex items-start gap-4 mt-2">
              <b>#1</b>
              <p>Hymns classification</p>
            </div>
            <div className="flex items-start gap-4 mt-2">
              <b>#2</b>
              <p>Recently viewed hymns - history</p>
            </div>
            <div className="flex items-start gap-4 mt-2">
              <b>#3</b>
              <p>List of favourite hymns</p>
            </div>
            <div className="flex items-start gap-4 mt-2">
              <b>#4</b>
              <p>Increasing text size</p>
            </div>
            <div className="flex items-start gap-4 mt-2">
              <b>#5</b>
              <p>Language switch (English and Yoruba)</p>
            </div>
            <div className="flex items-start gap-4 mt-2">
              <b>#6</b>
              <p>Audio accompaniments</p>
            </div>
            <div className="flex items-start gap-4 mt-2">
              <b>#7</b>
              <p>Key signature of hymnal songs</p>
            </div>
            <div className="flex items-start gap-4 mt-2">
              <b>#8</b>
              <p>Daily rhema section</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-grotesque text-2xl mb-2">User-flow</h3>
          <p className="text-lg">
            The user-flow diagram doesn’t fit on mobile devices. Kindly activate
            the desktop site/view on your mobile device web browser or view this
            website on a desktop.
          </p>
        </div>
        <div className="mt-8">
          <h3 className="font-grotesque text-2xl mb-2">Sketches</h3>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 bg-tintblue4 px-4 py-8 rounded-[24px]">
            <img src={HymnsImages.wireframe1} alt="Sketches" />
            <img src={HymnsImages.wireframe2} alt="Sketches" />
            <img src={HymnsImages.wireframe3} alt="Sketches" />
            <img src={HymnsImages.wireframe4} alt="Sketches" />
            <img src={HymnsImages.wireframe5} alt="Sketches" />
            <img src={HymnsImages.wireframe6} alt="Sketches" />
          </div>
        </div>
        <div className="my-8">
          <h3 className="font-grotesque text-2xl mb-2">Digital wireframes</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 bg-tintblue4 px-4 py-8 rounded-[24px]">
            <div>
              <p className="font-medium mb-2">SPLASH SCREEN</p>
              <img src={HymnsImages.splash} alt="Splash" />
            </div>
            <div>
              <p className="font-medium mb-2">WELCOME SCREEN</p>
              <img src={HymnsImages.welcome} alt="welcome" />
            </div>
            <div>
              <p className="font-medium mb-2">HOME SCREEN</p>
              <img src={HymnsImages.home} alt="home" />
              <div className="mt-2 lg:hidden">
                <p>==&gt; Cards for daily rhema and hymn of the day.</p>
                <p>==&gt; Recently viewed hymns.</p>
                <p>==&gt; Categorisation of hymns.</p>
              </div>
            </div>
            <div>
              <p className="font-medium mb-2">HYMNS CATEGORIES</p>
              <img src={HymnsImages.hymns} alt="welcome" />
            </div>
            <div>
              <p className="font-medium mb-2">SETTINGS</p>
              <img src={HymnsImages.settings} alt="settings" />
            </div>
            <div>
              <p className="font-medium mb-2">A HYMN SONG</p>
              <img src={HymnsImages.hymnssong} alt="hymns-song" />
              <div className="mt-2 lg:hidden">
                <p>==&gt; Language switch.</p>
                <p>==&gt; Actions for hymn songs.</p>
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>
      <SectionLayout
        className={"border-b-2 border-tintblue1 font-intertight mt-6"}
      >
        <div className="">
          <h3 className="font-grotesque text-2xl">Usability testing</h3>
          <p className="text-lg mt-2">
            To evaluate the ease of use and navigation of the solution, I relied
            on metrics in conjunction with 4 moderated usability studies. These
            allowed me to gain a deeper understanding by combining qualitative
            and quantitative information.
          </p>
          <ul className="list-disc list-inside text-lg mt-2 mb-4 pl-2">
            <li>
              <b>2</b> church members above <b>40</b> years of age.
            </li>
            <li>
              <b>2</b> church members between the ages of <b>18</b> and{" "}
              <b>40</b>.
            </li>
            <li>
              <b>9</b> unmoderated usability participants.
            </li>
          </ul>
          <AnchorTag
            text={"Usability study plan"}
            classname={"text-primaryblue underline font-medium"}
            link={
              "https://docs.google.com/document/d/10WAMOK0617ziRam7PR-toPglD9uU1Lmty07rFP55ACE/edit?tab=t.0#heading=h.kdxr5ylwtwxs"
            }
          />
        </div>
        <div className="mt-8">
          <h4 className="text-sm">USABILITY STUDY RESULT 1</h4>
          <h3 className="font-grotesque text-2xl">Moderated usability</h3>
          <div className="text-lg mt-2 mb-4">
            <div className="flex items-start gap-4">
              <b>✔</b>
              <p>
                <b>3/4</b> of the participants thought the prototype had been
                built and wanted to install it on the fly.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <b>💥</b>
              <p>
                <b>2/4</b> were able to use the bookmark feature.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <b>✔</b>
              <p>
                <b>3/4</b> suggested that the play button be bigger.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <b>✔</b>
              <p>
                <b>3/4</b> successfully changed the language and increase the
                text size.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <b>✔</b>
              <p>
                <b>3/4</b> were able to increase the text size.
              </p>
            </div>
          </div>
          <AnchorTag
            text={"Moderated study notetaking"}
            classname={"text-primaryblue underline font-medium"}
            link={
              "https://docs.google.com/spreadsheets/d/1N4LAnZ4EUJTHX1ldb3AfGH31FuJTH5rd/edit?gid=1428714972#gid=1428714972"
            }
          />
        </div>
        <div className="mt-8">
          <h4 className="text-sm">USABILITY STUDY RESULT 2</h4>
          <h3 className="font-grotesque text-2xl">Unmoderated usability</h3>
          <p>
            A list of{" "}
            <AnchorTag
              text={"tasks"}
              classname={"text-primaryblue underline font-medium"}
              link={
                "https://docs.google.com/document/d/1-3MpeZAbhjhsZP9HSNqWFHPZ34i4zcVcgrfQ62gxcUY/edit?tab=t.0"
              }
            />{" "}
            was drafted based on the key flows and features of the mobile app,
            and 2 sections of a questionnaire were used for the unmoderated
            testing. One was for the main features of the app, and the second
            was for the System Usability Scale (SUS).
          </p>
          <div className="mt-8 grid grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-tintblue4 w-40 h-40 p-4 flex flex-col items-center justify-center gap-1 rounded-full">
              <p className="text-[59px] font-semibold">9</p>
              <p>Participants</p>
            </div>
            <div className="bg-tintblue4 w-40 h-40 p-4 flex flex-col items-center justify-center gap-1 rounded-full">
              <p className="text-[59px] font-semibold">11</p>
              <p>Base questions</p>
            </div>
            <div className="bg-tintblue4 w-40 h-40 p-4 flex flex-col items-center justify-center gap-1 rounded-full">
              <p className="text-[59px] font-semibold">10</p>
              <p>SUS questions</p>
            </div>
          </div>
          <div className="text-lg mt-4">
            <div className="flex items-start gap-4">
              <b>✔</b>
              <p>
                <b>6/9</b> of the participants found the app easy to launch.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <b>✔</b>
              <p>
                <b>8/9</b> of the participants found it easy to navigate through
                the app.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <b>✔</b>
              <p>
                <b>9/9</b> of the participants found it easy to view the daily
                rhema.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <b>✔</b>
              <p>
                <b>7/9</b> of the participants found it easy to view the hymns
                of the day.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <b>✔</b>
              <p>
                <b>7/9</b> of the participants found it easy to open a hymn
                song.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <b>✔</b>
              <p>
                <b>7/9</b> of the participants found it easy to increase the
                text size of a hymn song.
              </p>
            </div>
            <p className="mt-2">
              Some iterations made were based on the “additional
              feedback/comment” of the questionnaire.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="mt-8">
              <div>
                <h2 className="text-sm">DESIGN ITERATION</h2>
                <h3 className="font-grotesque text-2xl mb-4">Before #1</h3>
              </div>
              <div>
                <img
                  src={HymnsImages.designIteration1}
                  alt="design iteration"
                />
              </div>
              <p className="font-medium mt-4">
                ==&gt; The language switch is not clear enough for users to
                action.
              </p>
            </div>
            <div className="font-medium mt-8">
              <h3 className="font-grotesque text-2xl mb-4">After #1</h3>
              <div>
                <img
                  src={HymnsImages.designIteration2}
                  alt="design iteration"
                />
              </div>
              <p className="font-medium mt-4">
                ==&gt; The language switch was removed, and indicators were
                added.
              </p>
            </div>
            <div className="mt-8">
              <h3 className="font-grotesque text-2xl mb-4">Before #2</h3>
              <div>
                <img
                  src={HymnsImages.designIteration3}
                  alt="design iteration"
                />
              </div>
              <p className="font-medium mt-4">==&gt; All hymn songs.</p>
            </div>
            <div className="mt-8">
              <h3 className="font-grotesque text-2xl mb-4">After #2</h3>
              <div>
                <img
                  src={HymnsImages.designIteration4}
                  alt="design iteration"
                />
              </div>
              <p className="font-medium mt-4">
                ==&gt; Use of accordions for each category. The hymn songs are
                more than 1,000.
              </p>
              <p className="font-medium mt-2">
                ==&gt; Use of a collapse all action.
              </p>
            </div>
            <div className="mt-8">
              <h3 className="font-grotesque text-2xl mb-4">Before #3</h3>
              <div>
                <img
                  src={HymnsImages.designIteration5}
                  alt="design iteration"
                />
              </div>
              <p className="font-medium mt-4">
                ==&gt; Use of segmented buttons.
              </p>
            </div>
            <div className="mt-8">
              <h3 className="font-grotesque text-2xl mb-4">After #3</h3>
              <div>
                <img
                  src={HymnsImages.designIteration6}
                  alt="design iteration"
                />
              </div>
              <p className="font-medium mt-4 mb-6">
                ==&gt; Use of standard controls for each settings option.
              </p>
            </div>
          </div>
        </div>
      </SectionLayout>
      <SectionLayout
        className={"border-b-2 border-tintblue1 font-intertight mt-6"}
      >
        <div className="flex flex-col gap-8 text-lg">
          <div className="flex flex-col gap-2">
            <div>
              <h3 className="font-grotesque text-2xl mb-2">Visual language</h3>
              <p className="text-lg">
                The visual elements used in the mockups were based on the
                church's visual and brand identity i.e. Logo.
              </p>
            </div>
            <img src={HymnsImages.visual} alt="Visual language" />
          </div>

          <div className="flex flex-col gap-2">
            <div>
              <h3 className="font-grotesque text-2xl mb-2">
                Typography - Inter Display
              </h3>
              <p className="text-lg">
                Inter is a variable font family carefully crafted & designed for
                computer screens. Inter features a tall x-height to aid in the
                readability of mixed-case and lower-case text.
              </p>
            </div>
            <img src={HymnsImages.typo} alt="typography" />
          </div>

          <div>
            <div>
              <h3 className="font-grotesque text-2xl mb-2">Design assets</h3>
              <p className="text-lg">
                I adopted Google’s open-source design system (
                <AnchorTag
                  text={"Material Design"}
                  classname={"text-primaryblue underline font-medium"}
                  link={"https://material.io/design"}
                />
                ) because it considers accessibility and inclusiveness.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row lg:flex-wrap justify-center gap-4 mt-6 bg-tintblue4 py-6 px-4 rounded-[24px]">
              <img src={HymnsImages.button} alt="typography" />
              <img src={HymnsImages.appbar} alt="typography" />
              <img src={HymnsImages.navbar} alt="typography" />
              <img src={HymnsImages.pushnotification} alt="typography" />
            </div>
          </div>

          <div>
            <h3 className="font-grotesque text-2xl">Key mockups</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div>
                <h4 className="text-sm uppercase font-medium mb-4">
                  home screen
                </h4>
                <img src={HymnsImages.mockup1} alt="mockup" />
              </div>
              <div>
                <h4 className="text-sm uppercase font-medium mb-4">
                  hymns categories
                </h4>
                <img src={HymnsImages.mockup2} alt="mockup" />
              </div>
              <div>
                <h4 className="text-sm uppercase font-medium mb-4">
                  all hymns
                </h4>
                <img src={HymnsImages.mockup3} alt="mockup" />
              </div>
              <div>
                <h4 className="text-sm uppercase font-medium mb-4">
                  a hymn screen
                </h4>
                <img src={HymnsImages.mockup4} alt="mockup" />
              </div>
              <div>
                <h4 className="text-sm uppercase font-medium mb-4">
                  more options
                </h4>
                <img src={HymnsImages.mockup4} alt="mockup" />
              </div>
              <div>
                <h4 className="text-sm uppercase font-medium mb-4">
                  playing a hymns song
                </h4>
                <img src={HymnsImages.mockup5} alt="mockup" />
              </div>
              <div>
                <h4 className="text-sm uppercase font-medium mb-4">
                  search feature
                </h4>
                <img src={HymnsImages.mockup6} alt="mockup" />
              </div>
              <div>
                <h4 className="text-sm uppercase font-medium mb-4">
                  daily rhema
                </h4>
                <img src={HymnsImages.mockup7} alt="mockup" />
              </div>
              <div>
                <h4 className="text-sm uppercase font-medium mb-4">settings</h4>
                <img src={HymnsImages.mockup8} alt="mockup" />
              </div>
            </div>
          </div>

          <div className="bg-tintblue4 p-5 rounded-[4px]">
            <h3 className="font-grotesque text-2xl">
              Technical considerations
            </h3>
            <p className="my-2">
              One of the issues might be getting images to use for the cards.
              Using a pool of images and repeating images should work.
            </p>
            <p>
              Also, the Daily Rhema is only available in English for now, so
              there is no translation available for it. The languages used in
              all branches of the church and in combined services are English
              and Yoruba.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="font-grotesque text-2xl">
              Accessibility and inclusiveness
            </h3>
            <div className="flex flex-col gap-6 mt-4">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex items-start gap-4">
                  <b>✔</b>
                  <p>
                    Use of labels on navigator to make
                    <br className="hidden lg:block" /> navigation easier
                  </p>
                </div>
                <img
                  src={HymnsImages.accessibility}
                  alt="accessibility"
                  className="flex-grow"
                />
              </div>

              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex items-start gap-4 mb-4">
                  <b>✔</b>
                  <p>
                    Colour contrast - button
                    <br />
                    <AnchorTag
                      text={"Color contrast checker"}
                      link={""}
                      classname={
                        "text-sm text-primaryblue underline font-medium"
                      }
                    />
                  </p>
                </div>
                <img
                  src={HymnsImages.colorcontrast}
                  alt="color-contrast"
                  className="flex-grow"
                />
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>
      <SectionLayout className={"font-intertight text-lg mt-6"}>
        <div>
          <h3 className="font-grotesque text-2xl">Learnings</h3>
          <div>
            <div className="flex items-start gap-4 mt-2">
              <b>#1</b>
              <p>
                Read and learnt a lot from studying the documentation of
                Google’s open-source design system (material design).
              </p>
            </div>
            <div className="flex items-start gap-4 mt-2">
              <b>#2</b>
              <p>
                Designing a solution for the aged ones and conducting usability
                studies taught me not to neglect even the tiniest details.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="font-grotesque text-2xl">
            Measuring the success of this project
          </h3>
          <div>
            <div className="flex items-start gap-4 mt-2">
              <b>#1</b>
              <p>Eagerness of the church council to build the app.</p>
            </div>
            <div className="flex items-start gap-4 mt-2">
              <b>#2</b>
              <p>Number of active users over time.</p>
            </div>
            <div className="flex items-start gap-4 mt-2">
              <b>#3</b>
              <p>Frequent usage of the app.</p>
            </div>
            <div className="flex items-start gap-4 mt-2">
              <b>#4</b>
              <p>
                Use of features like copying hymns, audio accompaniment, and
                daily rhema.
              </p>
            </div>
          </div>
        </div>
        <TheEnd />
        <RelatedProjects projects={hymnsProjects} />
      </SectionLayout>
    </>
  );
};
export default HymnsApp;
