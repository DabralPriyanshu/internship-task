import React from "react";
import ImageContainer from "./components/Molecules/ImageContainer";
import Features from "./components/Molecules/Features";
import Footer from "./components/Footer";
import Hero from "./components/Molecules/Hero";
import InfoSection from "./components/Molecules/InfoSection";

// App Container This is the main entry point  I have used a black background and min-height to ensure a consistent dark theme.

function App() {
  return (
    <div className="min-h-screen bg-black font-sans" id="home">
      {/* Hero section is at the top as the main landing organism */}
      <Hero />

      {/* main content of website */}
      <main>
        {/* * Features section for  explaining services  */}
        <Features />

        {/* Information content section */}
        <InfoSection />

        {/* This section contains images */}
        <ImageContainer />
      </main>

      {/* footer of website */}
      <Footer />
    </div>
  );
}

export default App;
