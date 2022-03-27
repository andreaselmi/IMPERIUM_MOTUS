import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar/Navbar";
import CalisthenicsSection from "./components/Sections/CalisthenicsSection/CalisthenicsSection";
import CoachSection from "./components/Sections/CoachSection/CoachSection";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <CalisthenicsSection />
      <CoachSection />
    </>
  );
}

export default App;
