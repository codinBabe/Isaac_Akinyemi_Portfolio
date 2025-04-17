import React from "react";
import { CloseIcon } from "../utils/icons/NavIcons";

const VideoModal = ({ isOpen, onClose, videoSrc, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
      <div className="bg-greywhite100 rounded-2xl p-5 max-w-lg h-[50vh] w-full">
        <div className="flex justify-between items-center mb-4 border-b-[0.5px] border-greyblack600">
          <h2 className="text-lg font-grotesque mb-2">{title}</h2>
          <button onClick={onClose} className="mb-2">
            <CloseIcon />
          </button>
        </div>
        <div className="w-full h-[38vh] rounded-xl overflow-hidden">
          <iframe
            src={videoSrc}
            title={title}
            width={"100%"}
            height={"100%"}
            allow="autoplay"
          />
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
