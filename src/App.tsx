import React from "react";
import Navbar from "./components/Navbar/Navbar/Navbar";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";

import pointer from "./assets/images/pointerMap.png";

import GoogleMapReact from "google-map-react";
import Map from "./components/Map/Map";

function App() {
  return (
    <>
      <div style={{ height: "100vh", width: "100%" }}>
        <Map />
      </div>

      {/*<Navbar />*/}
      {/*<Header />*/}
      {/*<Body />*/}
      {/*<Footer />*/}
    </>
  );
}

export default App;
