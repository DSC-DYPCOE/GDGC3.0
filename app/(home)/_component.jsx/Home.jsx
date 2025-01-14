import React from "react";
import Landing from "./Landing";
import Info from "./Info";
import TechSection from "./Technology";
import FAQSection from "./FAQ";

const Home = () => {
  return (
    <div className="w-full overflow-hidden">
      <Landing />
      <Info />
      <TechSection />
      <FAQSection/>
    </div>
  );
};

export default Home;
