import React, { useState, useEffect } from "react";
import "./timer.css";

const Timer = () => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const registrationDeadline = new Date("2024-04-02T10:00:00");

    const calculateTimeRemaining = () => {
      const currentTime = new Date();
      const timeDifference = registrationDeadline - currentTime;

      if (timeDifference > 0) {
        const remainingDays = Math.floor(
          timeDifference / (1000 * 60 * 60 * 24),
        );
        const remainingHours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const remainingMinutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60),
        );
        const remainingSeconds = Math.floor(
          (timeDifference % (1000 * 60)) / 1000,
        );

        setTimeRemaining({
          days: remainingDays,
          hours: remainingHours,
          minutes: remainingMinutes,
          seconds: remainingSeconds,
        });
      } else {
      }
    };

    const intervalId = setInterval(calculateTimeRemaining, 500);

    return () => clearInterval(intervalId);
  }, []);

  // const handleProblemButtonClick = () => {
  //   setShowProblems(true);
  //   setShowSubmission(false); // Hide Submission component when showing Problems
  //   document.querySelector(".startingSlogan").style.display = "none";
  //   document.querySelector(".o1").style.top = "100px";
  //   document.querySelector(".o2").style.top = "100px";
  //   document.querySelector(".o3").style.top = "100px";
  // };

  // const handleSubmissionButtonClick = () => {
  //   setShowSubmission(true);
  //   setShowProblems(false); // Hide Problems component when showing Submission
  //   document.querySelector(".startingSlogan").style.display = "none";
  // };

  return (
    <div className="wrap-timer" id="home">
      <div className="headingCont">
        <img className="a1" src="assets/zionatimer3.png" alt="" />
        <img className="eventlogo " src="assets/zionfinal.png" alt="" />
        <img className="eventlogo " src="assets/zionfinal.png" alt="" />
        <img className="eventlogo " src="assets/zionfinal.png" alt="" />
        <img className="eventbeside" src="assets/zionatimer2.png" alt="" />
        {/* <img className="eventlogo " src="assets/zionfinal.png" alt="" />
        <img className="eventlogo " src="assets/zionfinal.png" alt="" /> */}
      </div>
      {/* <h1 className="slogan">PUNE'S BIGGEST TECH CLASH</h1> */}

      <span className="startingSlogan">
        Zion Zion is an annual technical festival organized by Dr. D.Y. Patil
        Institute of Technology, Pimpri, Pune, that aims to provide a platform
        for students to showcase their technical skills and creativity.{" "}
      </span>

      {/* <h1 className="slogan">PUNE'S BIGGEST TECH CLASH</h1> */}

      <div className="timerContainer">
        <div className="timerCont">
          <h2 className="timerTime">{timeRemaining.days}</h2>
          <h6 className="timerHead">DAYS</h6>
        </div>
        <div className="timerCont">
          <h2 className="timerTime">{timeRemaining.hours}</h2>
          <h6 className="timerHead">HOURS</h6>
        </div>
        <div className="timerCont">
          <h2 className="timerTime">{timeRemaining.minutes}</h2>
          <h6 className="timerHead">MINUTES</h6>
        </div>
        <div className="timerCont">
          <h2 className="timerTime">{timeRemaining.seconds}</h2>
          <h6 className="timerHead">SECONDS</h6>
        </div>
      </div>
      <div class="wrapper">
        <div class="box">
          <a href="#domain">
            <p>Explore Events</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Timer;
