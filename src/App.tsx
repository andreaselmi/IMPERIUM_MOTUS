import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar/Navbar";
import Container from "./components/Container/Container";
import CalisthenicsSection from "./components/Section/CalisthenicsSection/CalisthenicsSection";

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
