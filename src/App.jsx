import React from "react";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar1";
// import Timer from "./components/timer/Timer";
import Video from "./components/background/Video";
import Domain from "./components/domain/Domain";
import Sponsors from "./components/sponsors/Sponsors";
import Faques from "./components/faq/Faques";
import Aboutevent from "./components/aboutevent/Aboutevent";
import Schedule from "./components/schedule/Schedule";
import Prizes from "./components/prizes/Prizes";
import Eventteam from "./components/eventteam/Eventteam";
import Contact from "./components/contact/Contact";
import Events from "./components/events/Events";
import Footer from "./components/footer/Footer";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Video />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<Aboutevent />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/domain" element={<Domain />} />
        <Route path="/prizes" element={<Prizes />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/team" element={<Eventteam />} />
        <Route path="/faq" element={<Faques />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
{/*       <Aboutevent />
      <Eventteam />
      <Events />
      <Faques />
      <Footer/> */}
      {/* <Domain />
      <Prizes />
      <Sponsors />
      <Faques />
      <Contact /> */}
    </Router>
  );
};

export default App;
