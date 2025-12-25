const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Sample FAQ and Reviews data
let faqData = [
  {
    question: "What is SaveMom 1000-Day Care Program?",
    answer:
      "The SaveMom 1000-Day Care Program is an AI-driven maternal and infant healthcare initiative that monitors health risks from pregnancy.",
  },
  {
    question: "How does the AI baby cry analysis work?",
    answer:
      "It records a baby’s cry and uses AI to analyze pitch, frequency, and pattern to detect needs or distress. The system provides real-time alerts to caregivers for faster response.",
  },
  {
    question: "How Savemom reduces infant mortality?",
    answer:
      "Savemom monitors vital health data, tracks risks, and alerts healthcare providers early. It ensures timely interventions, improving maternal and infant outcomes.",
  },
  {
    question: "How can I access old version?",
    answer:
      "Older versions are available via the app’s version history or archive section. You can download or switch to previous releases from the settings menu.",
  },
];

let allReviews = [
  {
    logo: "/review1.png",
    text:
      "Vuexy is hands down the most useful front end Bootstrap theme I've ever used. I can't wait to use it again for my next project.",
    userImg: "/reviews1.png",
    name: "Cecilia Payne",
    role: "CEO of Airbnb",
  },
  {
    logo: "/review2.png",
    text:
      "I've never used a theme as versatile and flexible as Vuexy. It's my go to for building dashboard sites on almost any project.",
    userImg: "/reviews2.png",
    name: "Eugenia Moore",
    role: "Founder of Hubspot",
  },
  {
    logo: "/review3.png",
    text:
      "This template is really clean & well documented. The docs are really easy to understand.",
    userImg: "/reviews3.png",
    name: "Curtis Fletcher",
    role: "Design Lead at Dribbble",
  },
  {
    logo: "/review1.png",
    text: "Amazing UI and clean code structure. Highly recommended!",
    userImg: "/reviews1.png",
    name: "John Carter",
    role: "Product Manager",
  },
  {
    logo: "/review2.png",
    text: "Saved us weeks of development time.",
    userImg: "/reviews2.png",
    name: "Emma Watson",
    role: "UX Architect",
  },
];

// ---------------- API ROUTES -------------------

// GET all FAQs
app.get("/api/faqs", (req, res) => res.json(faqData));

// GET all Reviews
app.get("/api/reviews", (req, res) => res.json(allReviews));

// CREATE new FAQ
app.post("/api/faqs", (req, res) => {
  const { question, answer } = req.body;
  faqData.push({ question, answer });
  res.json({ message: "FAQ created successfully" });
});

// CREATE new Review
app.post("/api/reviews", (req, res) => {
  const { logo, text, userImg, name, role } = req.body;
  allReviews.push({ logo, text, userImg, name, role });
  res.json({ message: "Review created successfully" });
});

// UPDATE existing FAQ by index
app.put("/api/faqs/:index", (req, res) => {
  const index = parseInt(req.params.index);
  const { question, answer } = req.body;
  if (faqData[index]) {
    faqData[index] = { question, answer };
    res.json({ message: "FAQ updated successfully", faq: faqData[index] });
  } else {
    res.status(404).json({ message: "FAQ not found" });
  }
});

// UPDATE existing Review by index
app.put("/api/reviews/:index", (req, res) => {
  const index = parseInt(req.params.index);
  const { logo, text, userImg, name, role } = req.body;
  if (allReviews[index]) {
    allReviews[index] = { logo, text, userImg, name, role };
    res.json({ message: "Review updated successfully", review: allReviews[index] });
  } else {
    res.status(404).json({ message: "Review not found" });
  }
});

// DELETE FAQ by index
app.delete("/api/faqs/:index", (req, res) => {
  const index = parseInt(req.params.index);
  if (faqData[index]) {
    faqData.splice(index, 1);
    res.json({ message: "FAQ deleted successfully" });
  } else {
    res.status(404).json({ message: "FAQ not found" });
  }
});

// DELETE Review by index
app.delete("/api/reviews/:index", (req, res) => {
  const index = parseInt(req.params.index);
  if (allReviews[index]) {
    allReviews.splice(index, 1);
    res.json({ message: "Review deleted successfully" });
  } else {
    res.status(404).json({ message: "Review not found" });
  }
});

// ---------------- Start Server -------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
