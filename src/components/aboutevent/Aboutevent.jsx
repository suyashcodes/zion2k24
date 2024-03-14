import "./aboutevent.css";
// import googleMapImage from "../../../public/assets/fonts/map.png";

import { Fade } from "react-awesome-reveal";
const Aboutevent = () => {
  return (
    <div className="wrap-about-us" id="about">
      <div className="eventHead">
        <p className="eventHeading">About</p>
      </div>

      <div className="aboutContainer">
        <div className="about1">
      {/* <Fade direction="up" duration={2000} triggerOnce="true"> */}
          <div className="about11">
            <span className="aboutHeading">Zion</span>
            <span className="aboutContent">
              Zion is an annual technical festival organized by Dr. D.Y. Patil
              Institute of Technology, Pimpri, Pune, that aims to provide a
              platform for students to showcase their technical skills and
              creativity.
            </span>
          </div>
          <div className="about11">
            <span className="aboutHeading">DIT PIMPRI</span>
            <span className="aboutContent">
            Welcome to Dr. D. Y. Patil Institute of Technology (DIT), Pimpri, Pune. This campus is started in year 1983 and further nurtured by our visionary Chairman Hon’ble Dr. P. D. Patil with the vision “Empowerment through knowledge” “Better Education Better World”.
            </span>
          </div>
          {/* </Fade> */}
        </div>
        {/* <Fade direction="bottom" duration={2000}> */}

        <div className="aboutImg">
          <img
            className="aboutUsImage"
            src={"./assets/zionabout2.png"}
            alt="Google Map showing event location"
          />
        </div>
        {/* </Fade> */}
        <div className="about1">
        {/* <Fade direction="bottom" duration={2000}> */}
          <div className="about11">
            <span className="aboutHeading">History</span>
            <span className="aboutContent">
              
ZION, has been a celebrated tradition since 2006, showcasing a diverse array of events encompassing both technical and non-technical domains. ZION has grown into a vibrant platform for fostering creativity, innovation.
            </span>
          </div>
          <div className="about11">
            <span className="aboutHeading">Events</span>
            <span className="aboutContent">
              
At ZION's annual fest, participants can engage in a myriad of captivating events spanning various domains, offering opportunities for learning, competition, and creativity. With a diverse range of activities encompassing technical challenges, gaming experiences, and creative showcases, 
            </span>
          </div>
        {/* </Fade> */}
        </div>
      </div>
    </div>
  );
};

export default Aboutevent;