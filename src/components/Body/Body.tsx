import React from "react";
import OurCoursesSection from "../Sections/OurCoursesSection/OurCoursesSection";
import CoachSection from "../Sections/CoachSection/CoachSection";
import Schedules from "../Sections/Schedules/Schedules";
import MapSection from "../Sections/MapSection/MapSection";

const Body = () => {
  return (
    <div>
      <OurCoursesSection />
      <CoachSection />
      <Schedules />
      <MapSection />
    </div>
  );
};

export default Body;
