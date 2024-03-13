import React, { useState } from "react";
import eventJson from "./eventdata.json";
import "./events.css";
import { RxDoubleArrowUp } from "react-icons/rx";
import { Fade } from "react-awesome-reveal";

const EventContainer = () => {
  const [showEventDetails, setShowEventDetails] = useState({});

  const handleKnowMoreClick = (index) => {
    // Toggle the state for the specific event box to show/hide event details
    setShowEventDetails((prevDetails) => ({
      ...prevDetails,
      [index]: !prevDetails[index],
    }));
  };

  return (
    <>
      <div className="wrap-domain" id="events">
        <div>
          <div className="domainHeading">EVENTS</div>
        </div>
        <div className="eventBoxes">
          <Fade direction="bottom" duration={2000}>
            {eventJson.map((event, index) => (
              <div className="eventBox" key={index}>
                <div className="event1">
                  <img
                    className="eventLogo"
                    src={event.img}
                    alt="EventLogo"
                  />
                  <div className="eventCont">
                    <h5 className="eventName">{event.eventName}</h5>
                    <p className="eventDesc">{event.eventDescription}</p>
                    <div className="eventButtons">
                      {!showEventDetails[index] && (
                        <button
                          className="eventbt Know"
                          onClick={() => handleKnowMoreClick(index)}
                        >
                          Know More
                        </button>
                      )}
                      {event.cname === "Onground" ? (
                        <button className="eventbt Reg">On-ground Registration</button>
                      ) : (
                        <a href={event.gform} target="_blank" rel="noreferrer">
                          <button className="eventbt Reg">Register</button>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                {showEventDetails[index] && (
                  <div className="event2">
                    <div className="eventd1">
                      <div className="eventdetails edet">
                        <h5 className="eventHead">Date & Time</h5>
                        <p className="eventDe">
                          {event.eventDetails.dateAndTime}
                        </p>
                      </div>
                      {/* <div className="eventdetails edet">
                        <h5 className="eventHead">Prize Pool</h5>
                        <p className="eventDe">
                          {event.eventDetails.prizePool}
                        </p>
                      </div> */}
                      <div className="eventdetails edet">
                        <h5 className="eventHead">Entry Fee</h5>
                        <p className="eventDe">{event.eventDetails.entryFee}</p>
                      </div>
                      <div className="eventdetails edet">
                        <h5 className="eventHead">Team Size</h5>
                        <p className="eventDe">{event.eventDetails.teamSize}</p>
                      </div>
                    </div>
                    <div className="eventd2">
                      <div className="descr">
                        {event.eventRounds.map((round, roundIndex) => (
                          <div key={roundIndex}>
                            <h5 className="eventHead">{round.roundName}</h5>
                            <p className="eventDesc">
                              {round.roundDescription}
                            </p>
                          </div>
                        ))}
                        <div className="eventdeFooter">
                          <div className="eventdefooter">
                            <h5 className="eventHead">Event Coordinators</h5>
                            {event.eventCoordinators.map(
                              (coordinator, coordinatorIndex) => (
                                <p key={coordinatorIndex} className="eventDesc">
                                  {coordinator.name} - {coordinator.phone}
                                </p>
                              ),
                            )}
                          </div>
                          <RxDoubleArrowUp
                            onClick={() => handleKnowMoreClick(index)}
                            className="arrow"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </Fade>
        </div>
      </div>
    </>
  );
};

export default EventContainer;

// import { useState } from "react";
// import "./events.css";

// const Domain = () => {
//   const [showEventDetails, setShowEventDetails] = useState(false);
//   const handleKnowMoreClick = () => {
//     // Toggle the state to show/hide event details
//     setShowEventDetails(!showEventDetails);
//   };
//   return (
//     <>
//       <div className="wrap-domain" id="domain">
//         <div>
//           <div className="domainHeading">EVENTS</div>
//         </div>
//         <div className="eventBoxes">
//           <div className="eventBox">
//             <div className="event1">
//               <img
//                 className="eventLogo"
//                 src="./assets/actualhack.jpeg"
//                 alt="EventLogo"
//               />
//               <div className="eventCont">
//                 <h5 className="eventHeading">Tech Fued</h5>
//                 <p className="eventDesc">
//                   Tech Feud is a 3-round Technical Quiz which is based on the
//                   popular TV show “Family Feud” but with technical questions.Two
//                   teams would compete against each other with techinal
//                   questions, the team to press the buzzer in front of them
//                   first, would answer the asked question first .
//                 </p>
//                 <div className="eventButtons">
//                   <button
//                     className="eventbt Know"
//                     onClick={handleKnowMoreClick}
//                   >
//                     Know More
//                   </button>
//                   <button className="eventbt Reg">Register</button>
//                 </div>
//               </div>
//             </div>
//             {showEventDetails && (
//               <div className="event2">
//                 <div className="eventd1">
//                   <div className="eventdetails edet">
//                     <h5 className="eventHead">Date & Time</h5>
//                     <p className="eventDe">2 April 12-6pm</p>
//                   </div>
//                   <div className="eventdetails edet">
//                     <h5 className="eventHead">Prize Pool</h5>
//                     <p className="eventDe">5000Rs</p>
//                   </div>
//                   <div className="eventdetails edet">
//                     <h5 className="eventHead">Entry Fee</h5>
//                     <p className="eventDe">60Rs</p>
//                   </div>
//                   <div className="eventdetails edet">
//                     <h5 className="eventHead">Team Size</h5>
//                     <p className="eventDe">1-4</p>
//                   </div>
//                 </div>
//                 <div className="eventd2">
//                   <div className="descr">
//                     <h5 className="eventHead">Round 1</h5>
//                     <p className="eventDesc">
//                       Participants engage with raw data. Their task involves
//                       conducting Exploratory Data Analysis (EDA) to uncover
//                       meaningful insights. Following this analysis, participants
//                       are required to make a PowerPoint presentation to
//                       effectively convey their findings and conclusions.
//                     </p>
//                     <h5 className="eventHead">Round 2</h5>
//                     <p className="eventDesc">
//                       Participants engage with raw data. Their task involves
//                       conducting Exploratory Data Analysis (EDA) to uncover
//                       meaningful insights. Following this analysis, participants
//                       are required to make a PowerPoint presentation to
//                       effectively convey their findings and conclusions.
//                     </p>
//                     <h5 className="eventHead">Event Coordinators</h5>
//                     <p className="eventDesc">
//                       Suyash Dashputre - 9922026188 <br /> Suyash Dashputre -
//                       9922026188
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//           <div className="eventBox">
//             <div className="event1">
//               <img
//                 className="eventLogo"
//                 src="./assets/actualhack.jpeg"
//                 alt="EventLogo"
//               />
//               <div className="eventCont">
//                 <h5 className="eventHeading">Tech Fued</h5>
//                 <p className="eventDesc">
//                   Tech Feud is a 3-round Technical Quiz which is based on the
//                   popular TV show “Family Feud” but with technical questions.Two
//                   teams would compete against each other with techinal
//                   questions, the team to press the buzzer in front of them
//                   first, would answer the asked question first .
//                 </p>
//                 <div className="eventButtons">
//                   <button
//                     className="eventbt Know"
//                     onClick={handleKnowMoreClick}
//                   >
//                     Know More
//                   </button>
//                   <button className="eventbt Reg">Register</button>
//                 </div>
//               </div>
//             </div>
//             {showEventDetails && (
//               <div className="event2">
//                 <div className="eventd1">
//                   <div className="eventdetails edet">
//                     <h5 className="eventHead">Date & Time</h5>
//                     <p className="eventDe">2 April 12-6pm</p>
//                   </div>
//                   <div className="eventdetails edet">
//                     <h5 className="eventHead">Prize Pool</h5>
//                     <p className="eventDe">5000Rs</p>
//                   </div>
//                   <div className="eventdetails edet">
//                     <h5 className="eventHead">Entry Fee</h5>
//                     <p className="eventDe">60Rs</p>
//                   </div>
//                   <div className="eventdetails edet">
//                     <h5 className="eventHead">Team Size</h5>
//                     <p className="eventDe">1-4</p>
//                   </div>
//                 </div>
//                 <div className="eventd2">
//                   <div className="descr">
//                     <h5 className="eventHead">Round 1</h5>
//                     <p className="eventDesc">
//                       Participants engage with raw data. Their task involves
//                       conducting Exploratory Data Analysis (EDA) to uncover
//                       meaningful insights. Following this analysis, participants
//                       are required to make a PowerPoint presentation to
//                       effectively convey their findings and conclusions.
//                     </p>
//                     <h5 className="eventHead">Round 2</h5>
//                     <p className="eventDesc">
//                       Participants engage with raw data. Their task involves
//                       conducting Exploratory Data Analysis (EDA) to uncover
//                       meaningful insights. Following this analysis, participants
//                       are required to make a PowerPoint presentation to
//                       effectively convey their findings and conclusions.
//                     </p>
//                     <h5 className="eventHead">Event Coordinators</h5>
//                     <p className="eventDesc">
//                       Suyash Dashputre - 9922026188 <br /> Suyash Dashputre -
//                       9922026188
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Domain;
