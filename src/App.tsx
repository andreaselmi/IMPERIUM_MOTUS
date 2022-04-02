import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar/Navbar";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import ScheduleSlot, {
  scheduleSlotTime,
} from "./components/ScheduleSlot/ScheduleSlot";

function App() {
  return (
    <>
      <h1>Test per Enrico</h1>
      <Navbar />
      <Header />
      <Body />
      <Footer />
    </>
  );
}

export default App;
