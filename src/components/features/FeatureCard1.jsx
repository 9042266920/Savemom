import symbol1 from "../../assets/symbol1.png";
import symbol2 from "../../assets/symbol2.png";
import symbol3 from "../../assets/symbol3.png";
import symbol4 from "../../assets/symbol4.png";
import symbol5 from "../../assets/symbol5.png";
import symbol6 from "../../assets/symbol6.png";
import Marquee from "react-fast-marquee";
import "../../styles/card.css";

const FeatureCards = () => {
  const logos = [symbol1, symbol2, symbol3, symbol4, symbol5, symbol6];

  return (
    <section className="apps-section">
      <h2 className="section-title">Featured By</h2>

      <div className="sponsor-marquee">
        <Marquee
          speed={50}
          gradient={true}
          gradientColor={[255, 255, 255]}
          pauseOnHover={true}
        >
          {logos.map((logo, index) => (
            <div className="sponsor-logo" key={index}>
              <img src={logo} alt="Sponsor logo" />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default FeatureCards;
