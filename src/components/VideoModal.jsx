import React from "react";
import { CloseIcon } from "../utils/icons/NavIcons";

const VideoModal = ({ isOpen, onClose, videoSrc, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-greywhite100 rounded-2xl p-5 max-w-lg w-full">
        <div className="flex justify-between items-center mb-4 border-b-[0.5px] border-greyblack600">
          <h2 className="text-lg font-grotesque mb-2">{title}</h2>
          <button onClick={onClose} className="mb-2">
            <CloseIcon />
          </button>
        </div>
        <div className="w-80 h-52 rounded-xl overflow-hidden">
          <iframe
            src={videoSrc}
            title={title}
            className="w-full h-full"
            allow="autoplay; fullscreen"
          />
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
