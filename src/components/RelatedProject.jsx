import React from "react";
import { Link } from "react-router-dom";
import WorkLink from "./WorkLink";
import { WorkImages } from "../utils/ImagesImport";

export const RelatedProjects = ({ projects }) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h3 className="font-grotesque text-[22px] leading-6">
          Related projects
        </h3>
        <Link
          to="/works"
          className="text-lg font-semibold text-primaryblue font-inter underline"
        >
          See all works
        </Link>
      </div>
      <div className="-mb-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <WorkLink
            key={index}
            to={project.to}
            src={project.src}
            title={project.title}
            description={project.description}
            tag1={project.tag1}
            tag2={project.tag2}
            tag3={project.tag3}
          />
        ))}
      </div>
    </div>
  );
};

export const comradeProjects = [
  {
    to: "/ecobank-projects",
    src: WorkImages.projectcoalition,
    title: "REAL PROJECTS - Mobile Apps and Web Apps",
    description: "Project Coalition at Ecobank Transnational Incorporated",
    tag1: "Business Analysis",
    tag2: "UX Design",
    tag3: "UI Design",
  },
  {
    to: "/hymns-project",
    src: WorkImages.hymn,
    title: "PERSONAL PROJECT - Mobile app design",
    description: "Designing a hymns app to foster digital devotion and faith",
    tag1: "User Research",
    tag2: "UX Design",
    tag3: "UI Design",
  },
  {
    to: "/tickvent-project",
    src: WorkImages.eventapp,
    title: "PERSONAL PROJECT - Mobile app design",
    description:
      "Accessing and booking of events: tech, concerts, movies, music",
    tag1: "User Research",
    tag2: "UX Design",
    tag3: "UI Design",
  },
];
export const hymnsProjects = [
  {
    to: "/comrade-project",
    src: WorkImages.comrademobilethumbnail,
    title: "REAL PROJECT - Website design",
    description: "Coming together for a better Nigeria",
    tag1: "User Research",
    tag2: "UX Design",
    tag3: "UI Design",
  },
  {
    to: "/ecobank-projects",
    src: WorkImages.projectcoalition,
    title: "REAL PROJECTS - Mobile Apps and Web Apps",
    description: "Project Coalition at Ecobank Transnational Incorporated",
    tag1: "Business Analysis",
    tag2: "UX Design",
    tag3: "UI Design",
  },
  {
    to: "/tickvent-project",
    src: WorkImages.eventapp,
    title: "PERSONAL PROJECT - Mobile app design",
    description:
      "Accessing and booking of events: tech, concerts, movies, music",
    tag1: "User Research",
    tag2: "UX Design",
    tag3: "UI Design",
  },
];

export const ecobankProjects = [
  {
    to: "/comrade-project",
    src: WorkImages.comrademobilethumbnail,
    title: "REAL PROJECT - Website design",
    description: "Coming together for a better Nigeria",
    tag1: "User Research",
    tag2: "UX Design",
    tag3: "UI Design",
  },
  {
    to: "/hymns-project",
    src: WorkImages.hymn,
    title: "PERSONAL PROJECT - Mobile app design",
    description: "Designing a hymns app to foster digital devotion and faith",
    tag1: "User Research",
    tag2: "UX Design",
    tag3: "UI Design",
  },
  {
    to: "/tickvent-project",
    src: WorkImages.eventapp,
    title: "PERSONAL PROJECT - Mobile app design",
    description:
      "Accessing and booking of events: tech, concerts, movies, music",
    tag1: "User Research",
    tag2: "UX Design",
    tag3: "UI Design",
  },
];

export const tickventProjects = [
  {
    to: "/comrade-project",
    src: WorkImages.comrademobilethumbnail,
    title: "REAL PROJECT - Website design",
    description: "Coming together for a better Nigeria",
    tag1: "User Research",
    tag2: "UX Design",
    tag3: "UI Design",
  },
  {
    to: "/hymns-project",
    src: WorkImages.hymn,
    title: "PERSONAL PROJECT - Mobile app design",
    description: "Designing a hymns app to foster digital devotion and faith",
    tag1: "User Research",
    tag2: "UX Design",
    tag3: "UI Design",
  },
  {
    to: "/ecobank-projects",
    src: WorkImages.projectcoalition,
    title: "REAL PROJECTS - Mobile Apps and Web Apps",
    description: "Project Coalition at Ecobank Transnational Incorporated",
    tag1: "Business Analysis",
    tag2: "UX Design",
    tag3: "UI Design",
  },
];

export const toyinProjects = [
  {
    to: "/deso-realtor",
    src: WorkImages.deso,
    title: "REAL PROJECT - Website design",
    description: "Deso Realtor Website",
    tag1: "User Research",
    tag2: "UX Design",
    tag3: "UI Design",
  },
  {
    to: "/building-band",
    src: WorkImages.buildingband,
    title: "REAL PROJECT - Website design",
    description: "Building Band",
    tag1: "User Research",
    tag2: "UX Design",
    tag3: "UI Design",
  },
];

export const desoProjects = [
  {
    to: "/building-band",
    src: WorkImages.buildingband,
    title: "REAL PROJECT - Website design",
    description: "Building Band",
    tag1: "User Research",
    tag2: "UX Design",
    tag3: "UI Design",
  },
  {
    to: "/toyin's-portfolio",
    src: WorkImages.toyinoredein,
    title: "REAL PROJECT - Website design",
    description: "Toyin OREDEIN Portfolio Design",
    tag1: "User Research",
    tag2: "UX Design",
    tag3: "UI Design",
  },
];

export const buildingProjects = [
  {
    to: "/deso-realtor",
    src: WorkImages.deso,
    title: "REAL PROJECT - Website design",
    description: "Deso Realtor Website",
    tag1: "User Research",
    tag2: "UX Design",
    tag3: "UI Design",
  },
  {
    to: "/toyin's-portfolio",
    src: WorkImages.toyinoredein,
    title: "REAL PROJECT - Website design",
    description: "Toyin OREDEIN Portfolio Design",
    tag1: "User Research",
    tag2: "UX Design",
    tag3: "UI Design",
  },
];
