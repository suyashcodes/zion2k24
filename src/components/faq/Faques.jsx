// FAQSection.js
import React, { useState, useEffect } from "react";
import "./faques.css"; // Import your CSS file
import { Fade } from "react-awesome-reveal";
const FAQSection = () => {
  const faqData = [
    {
      question: "What if I don't know how to code?",
      answer:
        "No worries, interest in learning and working with technology is much more important than your current experience level.",
    },
    {
      question: "How much will it cost?",
      answer:
        "Registration completely free, but we are charging only 200Rs for hospitality and meals.",
    },
    {
      question: "What if I don't know how to code?",
      answer:
        "No worries, interest in learning and working with technology is much more important than your current experience level.",
    },
    {
      question: "How much will it cost?",
      answer:
        "Registration completely free, but we are charging only 200Rs for hospitality and meals.",
    },
    {
      question: "What if I don't know how to code?",
      answer:
        "No worries, interest in learning and working with technology is much more important than your current experience level.",
    },
    {
      question: "How much will it cost?",
      answer:
        "Registration completely free, but we are charging only 200Rs for hospitality and meals.",
    },
    {
      question: "What if I don't know how to code?",
      answer:
        "No worries, interest in learning and working with technology is much more important than your current experience level.",
    },
    {
      question: "How much will it cost?",
      answer:
        "Registration completely free, but we are charging only 200Rs for hospitality and meals.",
    },
    {
      question: "What if I don't know how to code?",
      answer:
        "No worries, interest in learning and working with technology is much more important than your current experience level.",
    },
    {
      question: "How much will it cost?",
      answer:
        "Registration completely free, but we are charging only 200Rs for hospitality and meals.",
    },
    {
      question: "What if I don't know how to code?",
      answer:
        "No worries, interest in learning and working with technology is much more important than your current experience level.",
    },
    {
      question: "How much will it cost?",
      answer:
        "Registration completely free, but we are charging only 200Rs for hospitality and meals.",
    },
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
    <Fade duration={5000}>
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
    </Fade>
  );
};

export default FAQSection;
