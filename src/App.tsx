import React from "react";
import Navbar from "./components/Navbar/Navbar/Navbar";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import { Provider } from "react-redux";
import { store } from "./store/store";
import ReactGA from "react-ga";

function App() {
  const TRACKING_ID = process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID;
  if (TRACKING_ID) {
    ReactGA.initialize(TRACKING_ID);
  }

  return (
    <Provider store={store}>
      <Navbar />
      <Header />
      <Body />
      <Footer />
    </Provider>
  );
}

export default App;
