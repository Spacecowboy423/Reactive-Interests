import React from "react";
import Tooltip from "./components/Tooltip.js";
import Accordion from "./components/Accordion";
import Carousel from "./components/Carousel";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Testimonial from "./components/Testimonial.js"
import "./App.css";
<link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet"></link>

// Text for accordion
const accordionData = [
  {
    title: "Hand Crafted Builds",
    content:
      "Every Sisyphus is meticulously assembled by hand. From production to shipping, our art furniture is crafted with the highest care and rigorously tested for enduring performance.",
  },
  {
    title: "How It Works",
    content:
      "It works by magnetically pulling a steel ball through sand using a robot (the “Sisbot”). The tracks the ball leaves in the sand field create captivating, intricate, and endlessly changing patterns under a tempered glass table top.",
  },
  {
    title: "Outreach",
    content: "Over 10,000 Sisyphus tables now elevate homes, offices, hospitals, education centers, and more worldwide.",
  },
];

// Images for Carousel and text for Tooltip
const carouselData = [
  {
    image: "./images/SIS-Top-Product-Page-Detail.png",
    title: "Mid-Century Modern Xyla Coffee Table",
    description: "Luxury blend of timeless design and captivating art.",
  },
  {
    image: "./images/SIS-Top.png",
    title: "Mid-Century Modern Xyla Coffee Table",
    description: "Luxury blend of timeless design and captivating art.",
  },
  {
    image: "./images/SIS-Side.png",
    title: "Mid-Century Modern Xyla Coffee Table",
    description: "Luxury blend of timeless design and captivating art.",
  },
  {
    image: "./images/My Table Top.jpg",
    title: "Krause Construction Coffee Table",
    description: "Beautifully handcrafted, one of a kind, Sisyphus Table.",
  },
  {
    image: "./images/My Table Top Side.jpg",
    title: "Krause Construction Coffee Table",
    description: "Beautifully handcrafted, one of a kind, Sisyphus Table.",
  },
  {
    image: "./images/My Table Side.jpg",
    title: "Krause Construction Coffee Table",
    description: "Beautifully handcrafted, one of a kind, Sisyphus Table.",
  },
];

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header
        backgroundPic="SIS-Background.png"
        fontFamily="'Great Vibes', cursive"
      />
      <main className="flex-grow p-4 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <Tooltip content={<h3>Michael Krause, The Artist</h3>}>
            <img
              src="/images/Profile Pic.jpg"
              alt="Michael at Newfields"
              className="w-120 h-auto shadow-2xl rounded-lg mt-8"
            />
          </Tooltip>
          <section className="md:w-1/3">
            <h2 className="text-2xl font-semibold mb-4">About Us</h2>
            {accordionData.map((item, index) => (
              <Accordion
                key={index}
                title={item.title}
                content={item.content}
              />
            ))}
          </section>
          <section className="md:w-2/3">
            <h2 className="text-2xl font-semibold mb-4">Tables</h2>
            <Carousel items={carouselData} />
          </section>
        </div>
        <Testimonial />
      </main>
      <Footer
        FooterStyling = "bg-gray-800 text-white p-4 text-center"
        Disclaimer = "2025 Krause Construction. All rights reserved."
        LinkedIn = "https://www.linkedin.com/in/krause423/"
        LinkedInColor = "text-blue-400"
        GitHub = "https://github.com/Spacecowboy423?tab=repositories"
        GitHubColor = "text-pink-400"
      />
    </div>
  );
}

export default App;