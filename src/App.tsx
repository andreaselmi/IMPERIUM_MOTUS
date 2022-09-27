import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar/Navbar";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import { Provider } from "react-redux";
import { store } from "./store/store";
import ReactGA from "react-ga";
ReactGA.initialize("UA-242604338-1");

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

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
