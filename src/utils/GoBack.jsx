import React, { useState } from "react";
import { GoBackArrow } from "./icons/Arrows";
import Button from "../components/Button";
import Contact from "../components/Contact";

const GoBack = () => {
  const [ismodalOpen, setModalOpen] = useState(false);
  return (
    <div className="flex items-center justify-between mb-2">
      <button
        className="flex items-center gap-3 text-sm"
        onClick={() => window.history.back()}
      >
        <GoBackArrow />
        Go back
      </button>
      <Button
        onClick={() => setModalOpen(true)}
        text={"Contact Isaac"}
        defaultbtn={true}
      />
      {ismodalOpen && <Contact isOpen={ismodalOpen} setIsOpen={setModalOpen} />}
    </div>
  );
};

export default GoBack;
