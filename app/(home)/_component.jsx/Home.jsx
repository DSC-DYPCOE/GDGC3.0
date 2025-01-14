import React from "react";
import Landing from "./Landing";
import Info from "./Info";
import TechSection from "./Technology";

const Home = () => {
  return (
    <div className="w-full overflow-hidden">
      <Landing />
      <Info />
      <TechSection />
    </div>
  );
};

export default Home;
