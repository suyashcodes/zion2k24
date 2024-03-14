import "./eventteam.css";
import { BsWhatsapp, BsLinkedin } from "react-icons/bs";
import { AiFillMail, AiFillLinkedin } from "react-icons/ai";
import { Fade } from "react-awesome-reveal";
const EventTeam = () => {
  return (
    <div className="eventteam" id="team">
      <div className="eventteam-title">Event Team</div>
      <div className="eventteam-title-pos">Event Heads</div>
      <div className="eventteam-container">
          {/* <Fade direction="top" duration={2000} triggerOnce="true"> */}
        <div className="eventteam-card">
            <img
              className="eventteam-img"
              src="./assets/personicon.png"
              alt="Team Member 1"
            />
            <h2 className="eventteam-name">Pratik Kakade</h2>
            {/* <p className="eventteam-position">Event Head</p> */}
            <div className="eventteam-social">
              <a
                className="whatsapp-anchor"
                href="https://www.linkedin.com/in/codersuyash/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillMail className="socialImg" />
              </a>
              <a
                className="whatsapp-anchor"
                href="https://www.linkedin.com/in/codersuyash/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin className="socialImg" />
              </a>
            </div>
        </div>
          {/* </Fade> */}
      </div>
    </div>
  );
};

export default EventTeam;
