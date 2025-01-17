import React from "react";
import Landing from "./Landing";
import Info from "./Info";
import TechSection from "./Technology";
import FAQSection from "./FAQ";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="w-full overflow-hidden">
      <Landing />
      <Info />
      <TechSection />
      <FAQSection/>
      <Footer/>
    </div>
  );
};

export default Home;
