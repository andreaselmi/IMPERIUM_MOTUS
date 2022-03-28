import React from "react";
import CalisthenicsSection from "../Sections/CalisthenicsSection/CalisthenicsSection";
import CoachSection from "../Sections/CoachSection/CoachSection";
import Schedules from "../Sections/Schedules/Schedules";
import MapSection from "../Sections/MapSection/MapSection";

const Body = () => {
  return (
    <body>
      <CalisthenicsSection />
      <CoachSection />
      <Schedules />
      <MapSection />
    </body>
  );
};

export default Body;
