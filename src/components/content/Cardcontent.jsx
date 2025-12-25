import Card from "../common/Card";
import cart1 from "../../assets/cart1.png";
import cart2 from "../../assets/cart2.png";
import cart3 from "../../assets/cart3.png";
import cart4 from "../../assets/cart4.png";
import "../../styles/card.css";

const Cardcontent = () => {
  return (
    <section className="card-left card-grid two-card-layout">
      <Card
        image={cart1}
        heading="Increase Patient Engagement"
        paragraph="Empower mothers to actively participate in their care journey through personalized reminders, educational insights, and 24×7 digital communication channels. Savemom keeps every mother informed, engaged, and confident throughout pregnancy."
      />

      <Card
        image={cart2}
        heading="Improve Maternal Care"
        paragraph="Provide doctors and nurses with real-time data insights for proactive decision-making. From vitals monitoring to AI-driven recommendations, Savemom helps care providers deliver timely interventions that improve maternal and fetal outcomes."
      />

      <Card
        image={cart3}
        heading="Appointment Tracking"
        paragraph="Simplify appointment management with smart reminders and digital scheduling. Mothers never miss a visit, and care teams stay on track. Seamless synchronization between patients, nurses, and doctors."
      />

      <Card
        image={cart4}
        heading="Risk Detection"
        paragraph="Detect early signs of maternal and fetal risk through AI analysis of health data, wearable insights, and symptom tracking. Savemom ensures early alerts for conditions like anemia, hypertension, or gestational diabetes."
      />
    </section>
  );
};

export default Cardcontent;
