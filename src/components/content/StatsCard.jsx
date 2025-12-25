import Card from "../common/Card";
import stats1 from "../../assets/stats1.png";
import stats2 from "../../assets/stats2.png";
import stats3 from "../../assets/stats3.png";
import stats4 from "../../assets/stats4.png";
import "../../styles/card.css";
const StatsCard = () => {
  return (
    <section className="apps-section">
      <h2 className="section-title">Proven Results in Maternal Care</h2>
      <p className="section-subtitle">
        Lorem ipsum dolor sit amet consectetur adipiscing elit mattis sit
        phasellus mollis sit aliquam sit nullam.
      </p>

      <section className="card-center card-grid four-card-layout">

        <Card image={stats1} heading="36,400,000" paragraph="Successful Deliveries" />
        <Card image={stats2} heading="36,00,000" paragraph="Women Onboarded" />
        <Card image={stats3} heading="5+" paragraph="State govt. Partnerships" />
        <Card image={stats4} heading="7320" paragraph="High risk pregnancies identified" />
      </section>
    </section>
  );
};

export default StatsCard;
