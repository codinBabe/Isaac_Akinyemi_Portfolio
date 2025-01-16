import { WorkImages } from "../../utils/ImagesImport";
import WorkLink from "../../components/WorkLink";

const Casestudy = () => {
  return (
    <>
      <WorkLink
        to={"/comrade-project"}
        src={WorkImages.comrademobilethumbnail}
        title={"REAL PROJECT - Website design"}
        description={"Coming together for a better Nigeria"}
        tag1={"User Research"}
        tag2={"UX Design"}
        tag3={"UI Design"}
      />
      <WorkLink
        to={"/hymns-project"}
        src={WorkImages.hymn}
        title={"PERSONAL PROJECT - Mobile app design"}
        description={
          "Designing a hymns app to foster digital devotion and faith"
        }
        tag1={"User Research"}
        tag2={"UX Design"}
        tag3={"UI Design"}
      />
      <WorkLink
        to={"/ecobank-projects"}
        src={WorkImages.projectcoalition}
        title={"REAL PROJECTS - Mobile Apps and Web Apps"}
        description={"Project Coalition at Ecobank Transnational Incorportated"}
        tag1={"Business Analysis"}
        tag2={"UX Design"}
        tag3={"UI Design"}
      />
      <WorkLink
        to={"/tickvent-project"}
        src={WorkImages.eventapp}
        title={"PERSONAL PROJECT - Mobile app design"}
        description={
          "Accessing and booking of events: tech, concerts, movies, music"
        }
        tag1={"User Research"}
        tag2={"UX Design"}
        tag3={"UI Design"}
      />
    </>
  );
};

export default Casestudy;
