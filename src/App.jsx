// src/App.jsx
import Layout from "./components/layout/Layout";
import HeroSection from "./components/hero/HeroSection";
import Cardcontent from "./components/content/Cardcontent";
import Cardcontents from "./components/content/Cardcontent1";
import StatsCard from "./components/content/StatsCard";
import FeatureCard from "./components/features/FeatureCard";
import FeatureCards from "./components/features/FeatureCard1";
import FaqSection from "./components/faq/FAQItem";
import Review from "./components/faq/Review";

const App = () => {
  return (
    <Layout>
      <section id="home">
        <HeroSection />
      </section>
      <Cardcontent />
      <StatsCard />
      <section id="products">
        <Cardcontents />
      </section>
      <section id="features">
        <FeatureCard />
        <FeatureCards />
      </section>
      <section id="faq">
        <FaqSection />
      </section>
      <Review />
      <section id="contact" />
    </Layout>
  );
};

export default App;
