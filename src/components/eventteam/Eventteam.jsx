import "./eventteam.css";
import { BsWhatsapp, BsLinkedin } from "react-icons/bs";
import { Fade } from "react-awesome-reveal";
const EventTeam = () => {
  return (
    <div className="eventteam" id="team">
      <div className="eventteam-title">Event Team</div>
      <div className="eventteam-container">
        <div className="eventteam-card">
          <Fade direction="top" duration={2000}>
            <img
              className="eventteam-img"
              src="./assets/Suyash4.png"
              alt="Team Member 1"
            />
            <h2 className="eventteam-name">Suyash Dashputre</h2>
            <p className="eventteam-position">Techncal Lead</p>
            <div className="eventteam-social">
              <a
                className="whatsapp-anchor"
                href="https://wa.me/+919922026188"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <img
                className="socialImg"
                src={"./assets/whatsapp.png"}
                alt="Whatsapp Icons"
              /> */}
                <BsWhatsapp className="socialImg" />
              </a>
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
