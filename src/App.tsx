import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar/Navbar";
import CalisthenicsSection from "./components/Section/CalisthenicsSection/CalisthenicsSection";
import Grid from "./components/Grid/Grid";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <CalisthenicsSection />
    </>
  );
}

export default App;
