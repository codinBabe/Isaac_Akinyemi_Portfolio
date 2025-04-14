import React from "react";
import { CloseIcon } from "../utils/icons/NavIcons";

const VideoModal = ({
  isOpen,
  onClose,
  videoSrc,
  title,
  loading,
  setLoading,
}) => {
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
          {loading ? (
            <div className="w-full h-full flex items-center justify-center">
              <div
                className="w-10 h-10 border-2 border-tintblue1 rounded-full
              border-tintblue1-1 animate-spin"
              ></div>
            </div>
          ) : (
            <iframe
              src={videoSrc}
              title={title}
              className="w-full h-full"
              allow="autoplay; fullscreen"
              onLoad={() => setLoading(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
