import { useState, useEffect } from "react";
import faqImg from "../../assets/faq.png";
import "../../styles/faq.css";

const FAQItem = () => {
  const [faqData, setFaqData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/faqs") // Replace with your backend API
      .then((res) => res.json())
      .then((data) => setFaqData(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="faq-section">
      <div className="faq-container">
        {/* Left Image */}
        <div className="faq-image">
          <img src={faqImg} alt="FAQ" />
        </div>

        {/* Right FAQ */}
        <div className="faq-box">
          <h2 className="faq-title">FAQ (How it works)</h2>

          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                {item.question}
                <span className="icon">{activeIndex === index ? "^" : ">"}</span>
              </button>

              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQItem;


/*import { useState } from "react";
import faqImg from "../../assets/faq.png";
import "../../styles/faq.css";
import { faqData } from "../../services/api.js";

const FAQItem = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">

        <div className="faq-image">
          <img src={faqImg} alt="FAQ" />
        </div>


        <div className="faq-box">
          <h2 className="faq-title">FAQ (How it works)</h2>

          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                {item.question}
                <span className="icon">
                  {activeIndex === index ? "^" : ">"}
                </span>
              </button>

              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQItem;*/