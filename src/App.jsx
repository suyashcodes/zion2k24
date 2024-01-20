import React from "react";
import Navbar from "./components/navbar/Navbar";
import Timer from "./components/timer/Timer";
import Video from "./components/background/Video";
import Domain from "./components/domain/Domain";
import Sponsors from "./components/sponsors/Sponsors";

const App=()=>{
    return(
        <>
            <Video/>
            <Navbar/>
            <Timer/>
            <Domain/>
            <Sponsors/>
        </>
    );
}

export default App