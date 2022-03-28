import React from "react";
import CalisthenicsSection from "../Sections/CalisthenicsSection/CalisthenicsSection";
import CoachSection from "../Sections/CoachSection/CoachSection";
import Schedules from "../Sections/Schedules/Schedules";

const Body = () => {
  return (
    <body>
      <CalisthenicsSection />
      <CoachSection />
      <Schedules />
    </body>
  );
};

export default Body;
