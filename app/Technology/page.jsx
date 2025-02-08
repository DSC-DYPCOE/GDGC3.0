import React from "react";
import AndroidHero from "./_components/Android";
import WebDevHero from "./_components/Web";
import CloudComputingHero from "./_components/Claude";
import MachineLearningHero from "./_components/MachineLearning";
import CyberSecurityHero from "./_components/Cyber";
import CompetitiveProgrammingHero from "./_components/Compitative";

const Tech = () => {
  return (
    <div className="mt-20" id="TechnologyPage">
      <h1 className="text-4xl font-bold text-center mb-8 text-white">
        Technologies We are Interested in!
      </h1>
      <AndroidHero />
      <WebDevHero />
      <CloudComputingHero />
      <MachineLearningHero />
      <CyberSecurityHero />
      <CompetitiveProgrammingHero />
    </div>
  );
}

export default Tech;
