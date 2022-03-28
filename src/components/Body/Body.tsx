import React from "react";
import CalisthenicsSection from "../Sections/CalisthenicsSection/CalisthenicsSection";
import CoachSection from "../Sections/CoachSection/CoachSection";
import Schedules from "../Sections/Schedules/Schedules";
import MapSection from "../Sections/MapSection/MapSection";

const Body = () => {
  return (
    <div>
      <CalisthenicsSection />
      <CoachSection />
      <Schedules />
      <MapSection />
    </div>
  );
};

export default Body;
