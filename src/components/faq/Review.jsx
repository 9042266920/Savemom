import { useState, useEffect } from "react";
import design from "../../assets/design.png";
import "../../styles/review.css";

const Review = () => {
  const [allReviews, setAllReviews] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5000/api/reviews") // Replace with your backend API
      .then((res) => res.json())
      .then((data) => setAllReviews(data))
      .catch((err) => console.error(err));
  }, []);

  const visibleReviews = allReviews.slice(startIndex, startIndex + 3);

  const nextSlide = () => {
    if (startIndex + 3 < allReviews.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <section className="review-section">
      <div className="review-container">
        {/* LEFT */}
        <div className="review-left">
          <span className="review-badge">Real Customers Reviews</span>
          <h2>What people say</h2>
          <img src={design} alt="separator" className="feature-separators" />
          <p>See what our customers have to say about their experience.</p>

          <div className="review-arrows">
            <button onClick={prevSlide} disabled={startIndex === 0}>‹</button>
            <button
              onClick={nextSlide}
              disabled={startIndex + 3 >= allReviews.length}
            >
              ›
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="review-grid">
          {visibleReviews.map((item, index) => (
            <div className="review-card" key={index}>
              <img src={item.logo} className="review-logo" alt="" />
              <p className="review-text">“{item.text}”</p>
              <div className="review-stars">★★★★★</div>

              <div className="review-footer">
                <img src={item.userImg} className="review-user-img" alt="" />
                <div>
                  <p className="review-name">{item.name}</p>
                  <p className="review-role">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;

/*import { useState } from "react";
import design from "../../assets/design.png";
import "../../styles/review.css";
import { allReviews } from "../../services/api.js";


const Review = () => {
  const [startIndex, setStartIndex] = useState(0);

  const visibleReviews = allReviews.slice(startIndex, startIndex + 3);

  const nextSlide = () => {
    if (startIndex + 3 < allReviews.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <section className="review-section">
      <div className="review-container">


        <div className="review-left">
          <span className="review-badge">Real Customers Reviews</span>
          <h2>What people say</h2>
          <img src={design} alt="separator" className="feature-separators" />
          <p>See what our customers have to say about their experience.</p>

          <div className="review-arrows">
            <button onClick={prevSlide} disabled={startIndex === 0}>‹</button>
            <button
              onClick={nextSlide}
              disabled={startIndex + 3 >= allReviews.length}
            >
              ›
            </button>
          </div>
        </div>

        <div className="review-grid">
          {visibleReviews.map((item, index) => (
            <div className="review-card" key={index}>
              <img src={item.logo} className="review-logo" alt="" />
              <p className="review-text">“{item.text}”</p>
              <div className="review-stars">★★★★★</div>

              <div className="review-footer">
                <img src={item.userImg} className="review-user-img" alt="" />
                <div>
                  <p className="review-name">{item.name}</p>
                  <p className="review-role">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Review;*/
