import Card from "../common/Card";
import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import card3 from "../../assets/card3.png";
import card4 from "../../assets/card4.png";
import card5 from "../../assets/card5.png";
import "../../styles/card.css";

const Cardcontents = () => {
  return (
    <section className="apps-section">
    <h2 className="section-title">Our Mobile Apps</h2>
    <p className="section-subtitle">
      Lorem ipsum dolor sit amet consectetur adipiscing elit mattis sit
      phasellus mollis sit aliquam sit nullam.
    </p>
    <section className="card-center card-grid five-card-layout">
      <Card
        image={card1}
        heading="AlloBaby"
        paragraph="AlloBaby is an innovative maternal and child care platform designed to support expectant mothers and their partners throughout pregnancy and early childcare. It offers continuous pregnancy monitoring by tracking vital signs."
        bgGradient="linear-gradient(180deg, rgba(254, 99, 110, 0.25) 0%, rgba(255, 99, 108, 0.05) 100%)"
        textColor="#FF626D"
      />

      <Card
        image={card2}
        heading="AlloDoc"
        paragraph="AlloDoc enables doctors to provide seamless maternal care through virtual consultations and real-time monitoring. Its AI-powered dashboard offers instant access to patient data, risk alerts, and streamlined scheduling for efficient teleconsultations."
        bgGradient="linear-gradient(180deg, rgba(99, 188, 254, 0.25) 0%, rgba(99, 188, 254, 0.05) 100%)"
        textColor="#4BC3C6"
      />

      <Card
        image={card3}
        heading="AlloLab"
        paragraph="AlloLab enhances maternal care with AI-powered diagnostics, providing real-time access to lab reports, test results, and patient data. Its intelligent dashboard streamlines workflows, enabling doctors to make informed decisions."
        bgGradient="linear-gradient(180deg, rgba(139, 99, 254, 0.25) 0%, rgba(139, 99, 254, 0.05) 100%)"
        textColor="#8B63FE"
      />

      <Card
        image={card4}
        heading="AlloGate"
        paragraph="AlloGate ensures secure and seamless access to healthcare systems, enabling hospitals, clinics, and doctors to manage patient data efficiently. With advanced authentication, encrypted data sharing, and AI-powered access control."
        bgGradient="linear-gradient(180deg, rgba(99, 254, 174, 0.25) 0%, rgba(99, 254, 174, 0.05) 100%)"
        textColor="#2AACB0"
      />

      <Card
        image={card5}
        heading="Savemom"
        paragraph="Savemom nurse app is a smart care app that helps nurses manage pregnant mothers and newborns with ease. From Aadhaar-based onboarding to pregnancy monitoring, lab results, reminders, and baby tracking."
        bgGradient="linear-gradient(180deg, rgba(254, 184, 99, 0.25) 0%, rgba(254, 184, 99, 0.05) 100%)"
        textColor="#F9A23B"
      />
    </section>
    </section>
  );
};

export default Cardcontents;
