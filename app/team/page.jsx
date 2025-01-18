"use client";

import { useEffect, useState } from "react";
import TeamCardStack from "./_components/CardStack";
import IconFilter from "./_components/IconFilter";
import axios from "axios";
import Title from "../components/Title";
const TeamPage = () => {
  const [teamData, setTeamData] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Technical");
useEffect(()=>{
  async function fetchData(){

    const data = await axios.get("/api/admin/team");
setTeamData(data.data)
  }
  fetchData();
},[activeCategory])

  console.log("Active Category:", activeCategory);

  const filteredTeamMembers = teamData.filter(
    (member) => member.domain === activeCategory
  );
  console.log("Filtered Team Members:", filteredTeamMembers);
  return (
    <div className="container flex flex-col items-center mx-auto p-4 pt-16">
      <Title title={"Our Team"} className="text-xl"/>
      <IconFilter
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <TeamCardStack initialTeamMembers={filteredTeamMembers} />
    </div>
  );
};

export default TeamPage;
