import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar/Navbar";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import { Provider } from "react-redux";
import { store } from "./store/store";
import ReactGA from "react-ga";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID);

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
