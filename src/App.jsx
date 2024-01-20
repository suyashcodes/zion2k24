import React from "react";
import Navbar from "./components/navbar/Navbar";
import Timer from "./components/timer/Timer";
import Video from "./components/background/Video";

const App=()=>{
    return(
        <>
            <Video/>
            <Navbar/>
            <Timer/>
        </>
    );
}

export default App