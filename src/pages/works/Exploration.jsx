import React, { useState } from "react";
import { WorkImages } from "../../utils/ImagesImport";
import VideoModal from "../../components/VideoModal";

function Exploration() {
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

  const [isModalOpen, setModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");
  const [currentTitle, setCurrentTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const handleOpenModal = (videoSrc, videoTitle) => {
    setLoading(true);
    setCurrentVideo(videoSrc);
    setCurrentTitle(videoTitle);
    setModalOpen(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setCurrentVideo("");
    setCurrentTitle("");
  };

  return (
    <>
      <div className="flex flex-col items-center gap-8 mt-2">
        {explorationProjects.map((project, index) => (
          <div
            key={index}
            onClick={() => handleOpenModal(project.link, project.title)}
          >
            <img src={project.image} alt={project.title} />
          </div>
        ))}
      </div>
      {/* while modal is loading */}
      <VideoModal
        loading={loading}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        videoSrc={currentVideo}
        title={currentTitle}
        setLoading={setLoading}
      />
    </>
  );
}

export default Exploration;
