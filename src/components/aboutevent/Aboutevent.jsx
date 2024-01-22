import "./aboutevent.css";
// import googleMapImage from "../../../public/assets/fonts/map.png";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
const Aboutevent = () => {
  return (
    <div className="wrapper">
      <div className="eventContainer">
        <div className="eventSection">
          <h1 className="eventHeading">About Event</h1>
          <p className="eventPara">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="eventSection withLocation">
          <h1 className="eventHeading">Event Location</h1>
          <a
            className="eventLocationAnchor"
            href="https://maps.app.goo.gl/hAtE8qGvbsAwTjtF7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="eventLocationImage"
              src={"./assets/fonts/map.png"}
              alt="Google Map showing event location"
            />
          </a>
        </div>
        <div className="eventSection">
          <h1 className="eventHeading">Event Timing</h1>
          <div className="timingCont">
            <CalendarMonthIcon className="icon"/>
            <p className="timingText">10 - 11 Jan 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutevent;
