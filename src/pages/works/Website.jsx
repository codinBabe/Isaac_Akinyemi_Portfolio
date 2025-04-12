import React from "react";
import WorkLink from "../../components/WorkLink";
import { WorkImages } from "../../utils/ImagesImport";

function Website() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
      <WorkLink
        to={"/toyin's-portfolio"}
        src={WorkImages.toyinoredein}
        title={"REAL PROJECT - Website design"}
        description={"Toyin OREDEIN Portfolio Design"}
        tag1={"User Research"}
        tag2={"UX Design"}
        tag3={"UI Design"}
      />
      <WorkLink
        to={"/deso-realtor"}
        src={WorkImages.deso}
        title={"REAL PROJECT - Website design"}
        description={"Deso Realtor Website"}
        tag1={"User Research"}
        tag2={"UX Design"}
        tag3={"UI Design"}
      />
      <WorkLink
        to={"/building-band"}
        src={WorkImages.buildingband}
        title={"REAL PROJECT - Website design"}
        description={"Building Band"}
        tag1={"User Research"}
        tag2={"UX Design"}
        tag3={"UI Design"}
      />
    </div>
  );
}

export default Website;
