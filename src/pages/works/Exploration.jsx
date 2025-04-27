import React from "react";
import { useOutletContext } from "react-router-dom";
import { Image, WorkImages } from "../../utils/ImagesImport";

function Exploration() {
  const { setIsModalOpen, setCurrentVideo, setCurrentTitle, setLoading } =
    useOutletContext();
  const explorationProjects = [
    {
      image: WorkImages.picmconsult,
      title: "PICM Consultancy - Website",
      link: "https://drive.google.com/file/d/1r_73EYOk-aiDXZABQmVdb3exnIxXvGvA/preview",
    },
    {
      image: WorkImages.ybdigitals,
      title: "YB Digitals - Website",
      link: "https://drive.google.com/file/d/1JjFgYO4eGGKgFHnfDww9Ry0oUMqPBmu4/preview",
    },
    {
      image: WorkImages.bymastics,
      title: "Bymastics - Web App",
      link: "https://drive.google.com/file/d/1yCX_gKRiqbgd5krdPUb-KOG2HVqTC7ZA/preview",
    },
  ];

  const handleOpenModal = (videoSrc, videoTitle) => {
    setCurrentVideo(videoSrc);
    setCurrentTitle(videoTitle);
    setIsModalOpen(true);
    setLoading(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-2">
        {explorationProjects.map((project, index) => (
          <div
            key={index}
            onClick={() => handleOpenModal(project.link, project.title)}
          >
            <Image src={project.image} alt={project.title} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Exploration;
