import "./eventteam.css";
import { BsWhatsapp, BsLinkedin } from "react-icons/bs";
import { Fade } from "react-awesome-reveal";
const EventTeam = () => {
  return (
    <div className="eventteam" id="team">
      <div className="eventteam-title">Event Team</div>
      <div className="eventteam-container">
          {/* <Fade direction="top" duration={2000} triggerOnce="true"> */}
        <div className="eventteam-card">
            <img
              className="eventteam-img"
              src="./assets/personicon.png"
              alt="Team Member 1"
            />
            <h2 className="eventteam-name">Pratik Kakade</h2>
            <p className="eventteam-position">Event Head</p>
            <div className="eventteam-social">
              <a
                className="whatsapp-anchor"
                href="https://www.linkedin.com/in/codersuyash/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin className="socialImg" />
              </a>
            </div>
        </div>
          {/* </Fade> */}
        <div className="eventteam-card">
          <Fade direction="top" duration={2000}>
            <img
              className="eventteam-img"
              src="./assets/personicon.png"
              alt="Team Member 1"
            />
            <h2 className="eventteam-name">Atharva Athanikar</h2>
            <p className="eventteam-position">Event Head</p>
            <div className="eventteam-social">
              <a
                className="whatsapp-anchor"
                href="https://www.linkedin.com/in/codersuyash/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin className="socialImg" />
              </a>
            </div>
          </Fade>
        </div>
        <div className="eventteam-card">
          <Fade direction="top" duration={2000}>
            <img
              className="eventteam-img"
              src="./assets/Suyash4.png"
              alt="Team Member 1"
            />
            <h2 className="eventteam-name">Suyash Dashputre</h2>
            <p className="eventteam-position">Technical Head</p>
            <div className="eventteam-social">
              <a
                className="whatsapp-anchor"
                href="https://www.linkedin.com/in/codersuyash/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin className="socialImg" />
              </a>
            </div>
          </Fade>
        </div>
        <div className="eventteam-card">
          <Fade direction="top" duration={2000}>
            <img
              className="eventteam-img"
              src="./assets/personicon.png"
              alt="Team Member 1"
            />
            <h2 className="eventteam-name">Avishkar Dhanorkar</h2>
            <p className="eventteam-position">Technical Head</p>
            <div className="eventteam-social">
              <a
                className="whatsapp-anchor"
                href="https://www.linkedin.com/in/avidhanorkar23/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin className="socialImg" />
              </a>
            </div>
          </Fade>
        </div>
        <div className="eventteam-card">
          <Fade direction="top" duration={2000}>
            <img
              className="eventteam-img"
              src="./assets/personicon.png"
              alt="Team Member 1"
            />
            <h2 className="eventteam-name">Paras Wadkar</h2>
            <p className="eventteam-position">Technical Head</p>
            <div className="eventteam-social">
              <a
                className="whatsapp-anchor"
                href="https://www.linkedin.com/in/codersuyash/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin className="socialImg" />
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default EventTeam;
