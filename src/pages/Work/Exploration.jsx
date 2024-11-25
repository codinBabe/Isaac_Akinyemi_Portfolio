import React from "react";
import WorkLink from "../../components/WorkLink";
import { WorkImages } from "../../utils/ImagesImport";

function Exploration() {
  return (
    <>
      <WorkLink src={WorkImages.picmconsult} />
      <WorkLink src={WorkImages.ybdigitals} />
      <WorkLink src={WorkImages.bymastics} />
    </>
  );
}

export default Exploration;
