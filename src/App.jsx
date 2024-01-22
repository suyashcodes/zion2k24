import React from "react";
import Navbar from "./components/navbar/Navbar";
import Timer from "./components/timer/Timer";
import Video from "./components/background/Video";
import Domain from "./components/domain/Domain";
import Sponsors from "./components/sponsors/Sponsors";
import Faques from "./components/faq/Faques";
import Aboutevent from "./components/aboutevent/Aboutevent";

const App = () => {
  return (
    <>
      <Video />
      <Navbar />
      <Timer />
      <Aboutevent />
      <Domain />
      <Sponsors />
      <Faques />
    </>
  );
};

export default App;
