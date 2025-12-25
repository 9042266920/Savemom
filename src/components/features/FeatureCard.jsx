import Card from "../common/Card";
import feature1 from "../../assets/feature1.png";
import feature2 from "../../assets/feature2.png";
import feature3 from "../../assets/feature3.png";
import feature4 from "../../assets/feature4.png";
import feature5 from "../../assets/feature5.png";
import feature6 from "../../assets/feature6.png";
import design from "../../assets/design.png";
import "../../styles/card.css";
const FeatureCard = () => {
  return (
<section className="apps-section" >
  <button className="feature-button">Product Features</button>
  <h2 className="section-title">Savemom Virtual Maternal Healthcare Solution</h2>

  {/* Design separator */}
  <img src={design} alt="separator" className="feature-separator" />

  <p className="section-subtitle">
    Virtual maternal care with wearables and AI. Monitor health, predict risks, and connect with doctors—especially for rural communities.
  </p>

  <section className="card-center card-grid three-card-layout">
    <Card image={feature1} heading="Allobot" paragraph="Code structure that all developers will easily understand and fall in love with." />
    <Card image={feature2} heading="Smart Wearable Devices" paragraph="Free updates for the next 12 months, including new demos and features." />
    <Card image={feature3} heading="Mobile App Integration" paragraph="Start your project quickly without having to remove unnecessary features." />
    <Card image={feature4} heading="Real-Time Health Monitoring" paragraph="Just change the endpoint and see your own data loaded within seconds." />
    <Card image={feature5} heading="Doctor and Hospital Connectivity" paragraph="An easy-to-follow doc with lots of references and code examples." />
    <Card image={feature6} heading="Community Health Support" paragraph="An easy-to-follow doc with lots of references and code examples." />
  </section>
</section>

  );
};

export default FeatureCard;
