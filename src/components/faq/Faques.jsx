// FAQSection.js
import React, { useState, useEffect } from "react";
import "./faques.css"; // Import your CSS file
import { Fade } from "react-awesome-reveal";
const FAQSection = () => {
  const faqData = [
    {
      question: "What is ZION?",
      answer:
        "Zion is an annual technical festival organized by Dr. D.Y. Patil Institute of Technology, Pimpri, Pune, that aims to provide a platform for students to showcase their technical skills and creativity.",
    },
    {
      question: "What is the edition of ZION?",
      answer:
        "After 17 successful editions, it is the 18 edition of ZION Tech Fest.",
    },
    {
      question: "How to Reach?",
      answer:
        "Nearest Metro Station: Sant Tukaram nagar, Nearest Bus Stop: YCM, Nearest Bus Station: Vallabhnagar Bus Station, Nearest Airport: Viman Nagar",
    },
    {
      question: "How much will it cost?",
      answer:
        "The registration of each event varies from 60 to 250 INR.",
    },
    {
      question: "What if I don't know how to code?",
      answer:
        "No worries, there is a wide range of events that will be taking place in ZION Tech Fest.",
    },
    {
      question: "What is the total prize pool of ZION?",
      answer:
        "The total prize pool of ZION is 125K INR.",
    },
    // {
    //   question: "What if I don't know how to code?",
    //   answer:
    //     "No worries, interest in learning and working with technology is much more important than your current experience level.",
    // },
    // {
    //   question: "How much will it cost?",
    //   answer:
    //     "Registration completely free, but we are charging only 200Rs for hospitality and meals.",
    // },
    // {
    //   question: "What if I don't know how to code?",
    //   answer:
    //     "No worries, interest in learning and working with technology is much more important than your current experience level.",
    // },
    // {
    //   question: "How much will it cost?",
    //   answer:
    //     "Registration completely free, but we are charging only 200Rs for hospitality and meals.",
    // },
    // {
    //   question: "What if I don't know how to code?",
    //   answer:
    //     "No worries, interest in learning and working with technology is much more important than your current experience level.",
    // },
    // {
    //   question: "How much will it cost?",
    //   answer:
    //     "Registration completely free, but we are charging only 200Rs for hospitality and meals.",
    // },
    // Add more dummy questions and answers as needed
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleQuestionClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    const closeOpenQuestion = () => {
      if (openIndex !== null) {
        setOpenIndex(null);
      }
    };

    document.body.addEventListener("click", closeOpenQuestion);

    return () => {
      document.body.removeEventListener("click", closeOpenQuestion);
    };
  }, [openIndex]);

  const stopPropagation = (e) => {
    // Stop propagation to prevent the click event from closing the open question
    e.stopPropagation();
  };

  return (
    // <Fade duration={2000} triggerOnce="true">
      <div className="faq-section" id="faq">
        <div className="domain-heading">FAQ's</div>
        <div className="faq-list">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? "open" : ""}`}
              onClick={(e) => stopPropagation(e)}
            >
              <div
                className="question"
                onClick={() => handleQuestionClick(index)}
              >
                {faq.question}
              </div>
              {openIndex === index && (
                <div className="answer">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    // </Fade>
  );
};

export default FAQSection;
