import "../../styles/hero.css";

import google from "../../assets/symbol4.png";
import who from "../../assets/symbol2.png";
import hero1 from "../../assets/hero1.png";
import hero2 from "../../assets/hero2.png";
import hero3 from "../../assets/hero3.png";
import hero4 from "../../assets/hero4.png";

const HeroSection = () => {
  return (
    <section className="hero" >
      <div className="hero-container">

        {/* Floating Images */}
        <img src={hero1} alt="hero1" className="hero-card hero1" />
        <img src={hero2} alt="hero2" className="hero-card hero2" />
        <img src={hero3} alt="hero3" className="hero-card hero3" />
        <img src={hero4} alt="hero4" className="hero-card hero4" />

        {/* Content */}
        <div className="hero-content">
          <h1>
            Savemom: The AI Platform Elevating <br />
            Your Maternal Care Standard.
          </h1>

          <p>
            Go beyond basic care. Deliver a premium, data-driven 1000-day
            experience that boosts <br></br>patient satisfaction, attracts high-value
            clientele, and secures your unit's reputation
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">Login</button>
            <button className="btn-outline">
              Know More <span>→</span>
            </button>
          </div>

          <div className="recognized">
            <span>Recognized By:</span>
            <div className="logos">
              <img src={google} alt="Google" />
              <img src={who} alt="WHO" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
