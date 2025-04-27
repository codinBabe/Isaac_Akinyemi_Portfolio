import { useState } from "react";
import AnimatedContainer from "../utils/AnimatedContainer";
import AnimatedTitle, { AnimatedSubTitle } from "../utils/AnimatedTitle";
import AnchorTag from "../components/AnchorTag";
import { AboutImages, Image } from "../utils/ImagesImport";
import GoBack from "../utils/GoBack";

const About = () => {
  const [openSections, setOpenSections] = useState({
    journey: false,
    personality: false,
    whoisisaac: false,
    services: false,
    feedback: false,
    miscellaneous: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <>
      <section
        className="border-b border-b-tintblue1 lg:hidden 
                    fixed top-0 left-0 w-full z-20 
                     p-3 bg-tintblue5"
      >
        <GoBack />
      </section>
      <section className="pt-14 lg:pt-10 border-b border-b-tintblue1">
        <h1 className="text-2xl lg:text-3xl font-grotesque">
          Who is Isaac AKINYEMI?
        </h1>
        <div>
          <AnimatedTitle
            isopen={openSections.journey}
            setIsOpen={() => toggleSection("journey")}
            text={"Isaac’s design journey"}
          />
          {openSections.journey && (
            <>
              <AnimatedContainer>
                <p>
                  For someone whose most used social media platform is WhatsApp
                  and whose favourite feature is WhatsApp status, I was viewing
                  the statuses of those on my contact list sometime in December{" "}
                  <b>2023</b> when I got the inspiration for my next article{" "}
                  <AnchorTag
                    classname={"text-primaryblue underline font-bold"}
                    text={"(read it here)"}
                    link={
                      "https://open.substack.com/pub/dareytemy/p/on-finding-purpose?r=9oyiu&utm_campaign=post&utm_medium=web"
                    }
                  />
                  . See the picture below.
                </p>
              </AnimatedContainer>
              <AnimatedContainer>
                <Image
                  src={AboutImages.slice(0, 1)}
                  alt="Jean da La Fonaine Quote Img"
                />
              </AnimatedContainer>
              <AnimatedContainer>
                <p>
                  During my penultimate semester at the university <b>(2019)</b>
                  , a communication gap existed between me and my project
                  supervisor, which led to me failing a <b>3-unit course</b> and
                  spending an extra year at the university. I remember vividly
                  that I didn’t inform my parents and had to raise money via
                  crowdfunding for my school fees.
                  <br />
                  <em className="text-sm">
                    Do not worry about paying me back; you helped me make a 2nd
                    class upper (3.5/5.00 - 4.49/5.00) even though I started
                    with a 3rd class (2.50/5.00 - 2.59/5.00) in the university.
                  </em>
                </p>
                <p className="text-sm">- One of the lenders (Ayomide Dada)</p>
              </AnimatedContainer>
              <AnimatedContainer>
                <p>
                  COVID-19 and lockdown happened, and I was unable to finish my
                  university program in <b>2020</b>. It was in my quest to make
                  money online that I stumbled upon mobile graphic design and
                  creating text animation for ads. <br />
                  <em className="text-sm">
                    I made over NGN 50,000 teaching mobile graphic design and
                    text animation. I collaborated with a friend, and we
                    organised more classes together. This inspired me to do
                    more.
                  </em>
                </p>
              </AnimatedContainer>
              <AnimatedContainer>
                <p>
                  I took the <b>Shaw Academy</b> free graphic design course, got
                  employed to work for a laundry company in Lagos, Nigeria, and
                  registered to join a design school where I was introduced to
                  Adobe Illustrator (Ai) and Adobe Photoshop (Ps) as the
                  industry standard tools. It was in the <b>design school</b>{" "}
                  that I also got introduced to product design.
                </p>
              </AnimatedContainer>
              <div>
                <AnimatedSubTitle
                  text={"EARLY DESIGNS"}
                  classname={"font-intertight font-medium text-lg"}
                />
                <AnimatedContainer>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <Image
                      src={AboutImages.at(1)}
                      alt="Early designs 1"
                      className="w-full"
                    />
                    <Image
                      src={AboutImages.at(2)}
                      alt="Early designs 2"
                      className="w-full"
                    />
                    <Image
                      src={AboutImages.at(3)}
                      alt="Early designs 3"
                      className="w-full"
                    />
                    <Image
                      src={AboutImages.at(4)}
                      alt="Early designs 4"
                      className="w-full"
                    />
                    <Image
                      src={AboutImages.at(5)}
                      alt="Early designs 5"
                      className="w-full lg:col-span-2"
                    />
                    <Image
                      src={AboutImages.at(6)}
                      alt="Early designs 6"
                      className="w-full"
                    />

                    <Image
                      src={AboutImages.at(7)}
                      alt="Early designs 7"
                      className="w-full"
                    />
                    <Image
                      src={AboutImages.at(8)}
                      alt="Early designs 8"
                      className="w-full lg:col-span-2"
                    />
                  </div>
                </AnimatedContainer>
              </div>

              <AnimatedContainer>
                <p>
                  In <b>February</b> 2021, I pivoted to product design and was
                  engaged in several boot camps (remote and in-person) before I
                  worked on my first case study, which landed me a remote role
                  in <b>June</b>
                  2021.
                </p>
              </AnimatedContainer>
              <div>
                <AnimatedSubTitle
                  text={"Other cannon events"}
                  classname={"font-intertight font-semibold text-2xl mb-2"}
                />
                <AnimatedContainer>
                  <ol className="list-decimal pl-5 text-base">
                    <li>
                      Wrote university entry exam <b>(UTME) </b>twice,
                    </li>
                    <li>
                      Studied at a Polytechnic before gaining admission to the
                      University,
                    </li>
                    <li>
                      Deferred the compulsory graduate program <b>(NYSC)</b> for
                      Nigerian graduates.
                    </li>
                  </ol>
                </AnimatedContainer>
              </div>
            </>
          )}
        </div>
      </section>
      <section className="border-b border-b-tintblue1">
        <div className="mt-6">
          <AnimatedTitle
            text={"Isaac’s personality"}
            isopen={openSections.personality}
            setIsOpen={() => toggleSection("personality")}
          />
          {openSections.personality && (
            <>
              <AnimatedContainer>
                <p className="text-xl font-medium">
                  Being an introvert, I advocate for and believe in the power of
                  self-awareness and interpersonal skills. I believe that
                  knowing oneself will help live a better and fulfilled life.
                </p>
              </AnimatedContainer>
              <div>
                <AnimatedSubTitle
                  text={"Personality"}
                  classname={"text-2xl font-semibold mb-2"}
                />
                <AnimatedContainer>
                  <ol className="list-decimal pl-5 text-base">
                    <li>
                      My MBTI Personality type is the rare <b>INFJ-A</b>{" "}
                      (Assertive Advocate)
                    </li>
                    <li>
                      I am a big fan of the following:
                      <ol className="list-alpha pl-6">
                        <li>Effective communication,</li>
                        <li>Active listening,</li>
                        <li>Introspection,</li>
                        <li>Retrospection,</li>
                        <li>Self-reflection,</li>
                        <li>Personal development,</li>
                        <li>Emotional intelligence,</li>
                        <li>Empathy,</li>
                        <li>Transparency, and</li>
                        <li>Accountability.</li>
                      </ol>
                    </li>
                    <li>I am a lover of wisdom.</li>
                  </ol>
                </AnimatedContainer>
              </div>
              <AnimatedContainer>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Image
                    src={AboutImages.slice(9, 10)}
                    alt="Isaac Akinyemi pic1"
                    className="w-full"
                  />

                  <Image
                    src={AboutImages.slice(10, 11)}
                    alt="Isaac Akinyemi pic2"
                    className="w-full"
                  />
                </div>
              </AnimatedContainer>
              <div>
                <AnimatedSubTitle
                  text={
                    "I love knowledge, and people getting it the “right” way"
                  }
                  classname={"text-xl font-semibold mb-2"}
                />
                <AnimatedContainer>
                  <ol className="list-decimal pl-5">
                    <li>Knowledge about oneself,</li>
                    <li>Formal education,</li>
                    <li>Financial literacy,</li>
                    <li>Religious teachings, and</li>
                    <li>Social interaction.</li>
                  </ol>
                </AnimatedContainer>
              </div>
              <AnimatedContainer>
                <p>
                  One of my favourite quotes is,{" "}
                  <b className="font-medium">
                    "Mastery lies in fully grasping the fundamentals,"
                  </b>{" "}
                  and this has been my approach to learning.
                </p>
              </AnimatedContainer>
              <div>
                <AnimatedSubTitle
                  text={"Other favourite quotes"}
                  classname={"text-2xl font-semibold"}
                />
                <AnimatedContainer>
                  <ol className="list-decimal pl-5">
                    <li>
                      You need the right people in your life, not the best
                      people.
                    </li>
                    <li>You can do anything if you put your mind to it.</li>
                    <li>
                      “Why” you do something is more important than “What” you
                      do.
                    </li>
                    <li>
                      It is possible to do great things from a small place.
                    </li>
                    <li>
                      Do the best you can until you know better. When you know
                      better, do better.
                    </li>
                  </ol>
                </AnimatedContainer>
              </div>
            </>
          )}
        </div>
      </section>
      <section className="border-b border-b-tintblue1">
        <div>
          <AnimatedTitle
            text={"Who is Isaac"}
            isopen={openSections.whoisisaac}
            setIsOpen={() => toggleSection("whoisisaac")}
          />
          {openSections.whoisisaac && (
            <>
              <div>
                <AnimatedSubTitle
                  text={"So, who is Isaac AKINYEMI?"}
                  classname={"font-semibold text-2xl mb-2"}
                />
                <AnimatedContainer>
                  <p className="text-base">
                    Isaac is a digital product (UX) designer who is passionate
                    about how people experience products, services, processes,
                    and systems. His attention to processes and how to improve
                    them has been his driving force.
                  </p>
                </AnimatedContainer>
                <AnimatedContainer>
                  <p className="text-base">
                    He believes that technology is but an enabling tool to
                    solving well-defined problems, and not the solution itself.
                    Not all problems require a screen.
                  </p>
                </AnimatedContainer>
                <AnimatedContainer>
                  <p className="text-base">
                    Isaac currently works with{" "}
                    <b>eProcess International S.A.</b> as a business analyst and
                    product designer. eProcess is the FinTech company providing
                    software and application support services within and outside
                    the Ecobank Group landscape since 2016. ETI (Ecobank
                    Transnational Incorporation), the parent company of the
                    Ecobank Group is the leading independent pan-African banking
                    group providing financial services and solutions in more
                    than <b>33</b> countries, serving about <b>28 </b>million
                    customers in consumer, commercial, and corporate banking.
                  </p>
                </AnimatedContainer>
                <AnimatedContainer>
                  <p className="text-base">
                    In his first <b>8</b> months at eProcess, Isaac drove the
                    adoption of Figma (a design tool) thereby reducing design
                    and development time by <b>50%</b>, and also saving the
                    company over <b>$2,000</b> annually on the choice of design
                    tool.
                  </p>
                </AnimatedContainer>
                <AnimatedContainer>
                  <p className="text-base">
                    Outside of design, he listens to Asa's and BrymO's music
                    because of the lyrical depth and production, and they help
                    him appreciate his tribe (Yoruba). He loves Bollywood and
                    Indian songs. He advocates for self-awareness and
                    interpersonal skills by writing on{" "}
                    <AnchorTag
                      text={"Substack."}
                      link={"https://open.substack.com/pub/dareytemy"}
                      classname={"underline text-primaryblue"}
                    />{" "}
                    He enjoys engaging in one-on-one or short group open
                    conversations online and in person because I'm learning to
                    be open-minded, which is why I use the WhatsApp status
                    feature.
                  </p>
                </AnimatedContainer>
                <AnimatedContainer>
                  <Image
                    src={AboutImages.slice(11, 12)}
                    alt="Isaac Akinyemi pic3"
                  />
                </AnimatedContainer>
                <div className="lg:hidden">
                  <AnimatedContainer>
                    <Image
                      src={AboutImages.slice(12, 13)}
                      alt="Isaac Akinyemi pic4"
                    />
                  </AnimatedContainer>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
      <section className="border-b border-b-tintblue1">
        <>
          <div>
            <AnimatedTitle
              text={"Services and design process"}
              isopen={openSections.services}
              setIsOpen={() => toggleSection("services")}
            />
            {openSections.services && (
              <>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div>
                    <AnimatedSubTitle
                      text={"What I can do for you"}
                      classname={"text-2xl font-semibold mb-2"}
                    />
                    <AnimatedContainer>
                      <ol className="list-decimal pl-5">
                        <li>User Experience (UX) Design,</li>
                        <li>User Interface (UI) Design,</li>
                        <li>Digital Product Design, </li>
                        <li>Product Development, and </li>
                        <li>Business Analysis.</li>
                      </ol>
                    </AnimatedContainer>
                  </div>
                  <div>
                    <AnimatedSubTitle
                      text={"Industries I have serviced"}
                      classname={"text-2xl font-semibold mb-2"}
                    />
                    <AnimatedContainer>
                      <ol className="list-decimal pl-5">
                        <li>FinTech,</li>
                        <li>EduTech,</li>
                        <li>E-commerce, </li>
                        <li>Service business, and </li>
                        <li>PropTech.</li>
                      </ol>
                    </AnimatedContainer>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div>
                    <AnimatedSubTitle
                      text={"Where I can render my expertise"}
                      classname={"text-2xl font-semibold mb-2"}
                    />
                    <AnimatedContainer>
                      <ol className="list-decimal pl-5">
                        <li>Startups,</li>
                        <li>Design Agencies,</li>
                        <li>Product Teams, </li>
                        <li>Small Organisations, and</li>
                        <li>Large Organisations.</li>
                      </ol>
                    </AnimatedContainer>
                  </div>
                  <div>
                    <AnimatedSubTitle
                      text={"Companies I have worked for"}
                      classname={"text-2xl font-semibold mb-2"}
                    />
                    <AnimatedContainer>
                      <div className="flex items-center justify-between -mt-2">
                        <img src={AboutImages.slice(32, 33)} alt="Companies" />
                        <img src={AboutImages.slice(33, 34)} alt="Companies" />
                        <img src={AboutImages.slice(34, 35)} alt="Companies" />
                      </div>
                    </AnimatedContainer>
                  </div>
                </div>
                <div>
                  <AnimatedSubTitle
                    text={"My design process"}
                    classname={"text-2xl font-semibold mb-2"}
                  />
                  <AnimatedContainer>
                    <ul className="flex items-center lg:justify-between flex-wrap gap-2 -mt-4">
                      <li>
                        <b className="mr-2">#1</b> Understand
                      </li>
                      <li>
                        <b className="mr-2">#2</b> Analyse
                      </li>
                      <li>
                        <b className="mr-2">#3</b> Design
                      </li>
                      <li>
                        <b className="mr-2">#4</b> Test
                      </li>
                    </ul>
                  </AnimatedContainer>
                </div>
              </>
            )}
          </div>
        </>
      </section>
      <section className="border-b border-b-tintblue1">
        <div>
          <AnimatedTitle
            text={"Feedback and reviews"}
            isopen={openSections.feedback}
            setIsOpen={() => toggleSection("feedback")}
          />
          {openSections.feedback && (
            <>
              <div>
                <AnimatedSubTitle
                  text={"What my Managers say"}
                  classname={"text-2xl font-semibold mb-2"}
                />
                <AnimatedContainer>
                  <p className="text-base">
                    An employer once told me that she invited me to collaborate
                    with her on a project because of how I carefully select a
                    typeface, iterate on layout, and manage design components
                    and assets.
                  </p>
                </AnimatedContainer>
              </div>
              <div>
                <h2 className="font-medium text-lg font-intertight">
                  Fortune EKEZIE
                </h2>
                <p className="text-base font-intertight -mb-3">
                  Current manager - Ecobank Transnational Incorporated
                </p>
                <AnimatedContainer>
                  <Image
                    src={AboutImages.at(13)}
                    alt="reviews1"
                    className="w-[80%]"
                  />
                </AnimatedContainer>
              </div>
              <div>
                <h2 className="font-medium text-lg font-intertight">
                  Ibrahim SUNMOLA
                </h2>
                <p className="text-base font-intertight -mb-3">
                  Ex-manager - Ecobank Transnational Incorporated
                </p>
                <AnimatedContainer>
                  <Image
                    src={AboutImages.slice(14, 15)}
                    alt="reviews2"
                    className="w-[80%]"
                  />
                </AnimatedContainer>
              </div>
              <div>
                <h2 className="font-medium text-lg font-intertight">
                  Anastestia ONYEKABA
                </h2>
                <p className="text-base font-intertight -mb-3">
                  Ex-manager - NandS Tech
                </p>
                <AnimatedContainer>
                  <Image
                    src={AboutImages.at(15)}
                    alt="reviews2"
                    className="w-[80%]"
                  />
                </AnimatedContainer>
              </div>
              <div>
                <AnimatedSubTitle
                  text={"What my colleagues say"}
                  classname={"text-2xl font-semibold mb-2"}
                />
                <AnimatedContainer>
                  <h2 className="font-medium text-lg font-intertight">
                    Olapegba Olaifa
                  </h2>
                  <p className="text-base font-intertight -mb-3">
                    UX Design Lead, NandS Tech.
                  </p>
                </AnimatedContainer>
                <AnimatedContainer>
                  <Image
                    src={AboutImages.at(16)}
                    alt="review3"
                    className="w-[80%]"
                  />
                </AnimatedContainer>
              </div>
              <div>
                <AnimatedSubTitle
                  text={"What my friends say"}
                  classname={"text-2xl font-semibold mb-2"}
                />
                <div>
                  <AnimatedContainer>
                    <h2 className="font-medium text-lg font-intertight">
                      Gift ABAH
                    </h2>
                    <p className="text-base font-intertight -mb-3">
                      Product (UX) Designer | Tech + Healthcare
                    </p>
                  </AnimatedContainer>
                  <AnimatedContainer>
                    <Image
                      src={AboutImages.at(17)}
                      alt="review4"
                      className="w-[80%]"
                    />
                  </AnimatedContainer>
                  <AnimatedContainer>
                    <Image
                      src={AboutImages.at(18)}
                      alt="review5"
                      className="-mt-4 w-[80%]"
                    />
                  </AnimatedContainer>
                </div>
                <div>
                  <AnimatedContainer>
                    <h2 className="font-medium text-lg font-intertight">
                      Alex ENIOLA
                    </h2>
                    <p className="text-base font-intertight -mb-3">
                      UX Designer, Epidermis
                    </p>
                  </AnimatedContainer>
                  <AnimatedContainer>
                    <Image
                      src={AboutImages.at(19)}
                      alt="review6"
                      className="w-[80%]"
                    />
                  </AnimatedContainer>
                  <AnimatedContainer>
                    <Image
                      src={AboutImages.at(20)}
                      alt="review7"
                      className="-mt-4 w-[80%]"
                    />
                  </AnimatedContainer>
                </div>
                <div>
                  <AnimatedContainer>
                    <h2 className="font-medium text-lg font-intertight">
                      Temitope OGUNDIPE
                    </h2>
                    <p className="text-base font-intertight -mb-3">
                      Product Designer, ALAT by WEMA
                    </p>
                  </AnimatedContainer>
                  <AnimatedContainer>
                    <Image
                      src={AboutImages.at(21)}
                      alt="review8"
                      className="w-[80%]"
                    />
                  </AnimatedContainer>
                  <AnimatedContainer>
                    <Image
                      src={AboutImages.at(22)}
                      alt="review9"
                      className="-mt-4 w-[80%]"
                    />
                  </AnimatedContainer>
                  <AnimatedContainer>
                    <Image
                      src={AboutImages.at(23)}
                      alt="review10"
                      className="-mt-4 w-[80%]"
                    />
                  </AnimatedContainer>
                </div>
                <div>
                  <AnimatedContainer>
                    <h2 className="font-medium text-lg font-intertight">
                      Oyinkansola OSHOKOYA
                    </h2>
                    <p className="text-base font-intertight -mb-3">
                      Product Designer, abode.ng
                    </p>
                  </AnimatedContainer>
                  <AnimatedContainer>
                    <Image
                      src={AboutImages.at(24)}
                      alt="review11"
                      className="w-[80%]"
                    />
                  </AnimatedContainer>
                  <AnimatedContainer>
                    <Image
                      src={AboutImages.at(25)}
                      alt="review12"
                      className="-mt-4 w-[80%]"
                    />
                  </AnimatedContainer>
                  <AnimatedContainer>
                    <Image
                      src={AboutImages.at(26)}
                      alt="review14"
                      className="-mt-4 w-[80%]"
                    />
                  </AnimatedContainer>
                  <AnimatedContainer>
                    <Image
                      src={AboutImages.at(27)}
                      alt="review15"
                      className="-mt-4 w-[80%]"
                    />
                  </AnimatedContainer>
                  <AnimatedContainer>
                    <Image
                      src={AboutImages.at(28)}
                      alt="review16"
                      className="-mt-4 w-[80%]"
                    />
                  </AnimatedContainer>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
      <section>
        <div>
          <AnimatedTitle
            text={"Miscellaneous"}
            isopen={openSections.miscellaneous}
            setIsOpen={() => toggleSection("miscellaneous")}
          />
          {openSections.miscellaneous && (
            <>
              <div>
                <AnimatedSubTitle
                  text={"Anything else?"}
                  classname={"text-2xl font-semibold mb-2"}
                />
                <AnimatedContainer>
                  <ol className="list-decimal pl-5 text-base">
                    <li>I love building relationships and capacity.</li>
                    <li>I engage in open conversations.</li>
                    <li>
                      I treat people the same regardless of their gender or
                      social status.
                    </li>
                    <li>A big fan of becoming a better person.</li>
                    <li>
                      I consider myself an overthinker, but in a good way
                      because I always want to find out and know why people do
                      what they do, and why I do what I do or feel how I feel.
                    </li>
                    <li>
                      I am a big fan of co-mentoring (peer mentoring). I won’t
                      be where I am today without my co-mentors.
                    </li>
                  </ol>
                </AnimatedContainer>
              </div>
              <AnimatedContainer>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <Image
                    src={AboutImages.at(29)}
                    alt="Isaac Akinyemi pic5"
                    className="w-full lg:col-span-2"
                  />

                  <Image
                    src={AboutImages.at(30)}
                    alt="Isaac Akinyemi pic6"
                    className="w-full"
                  />

                  <Image
                    src={AboutImages.at(31)}
                    alt="Isaac Akinyemi pic7"
                    className="w-full"
                  />
                </div>
              </AnimatedContainer>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default About;
