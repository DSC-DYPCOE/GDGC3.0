'use client';

import { useState } from 'react';
import TeamCardStack from './_components/CardStack';
import IconFilter from './_components/IconFilter';

const initialTeamMembers = [
  { id: 1, name: 'Alice', role: 'Technical', image: '/omsalunke.jpeg', bio: 'Tech Lead' },
  { id: 2, name: 'Alice', role: 'Technical', image: '/omsalunke.jpeg', bio: 'Tech Lead' },
  { id: 3, name: 'Alice', role: 'Technical', image: '/omsalunke.jpeg', bio: 'Tech Lead' },
  { id: 4, name: 'Alice', role: 'Technical', image: '/alice.jpg', bio: 'Tech Lead' },
  { id: 5, name: 'Eve', role: 'Media', image: '/eve.jpg', bio: 'Media Coordinator' },
];

const TeamPage = () => {
  const [activeCategory, setActiveCategory] = useState('Technical');

  console.log('Active Category:', activeCategory);

  const filteredTeamMembers = initialTeamMembers.filter(
    (member) => member.role === activeCategory
  );
  console.log('Filtered Team Members:', filteredTeamMembers);
  return (
    <div className="container flex flex-col items-center mx-auto p-4">
      <IconFilter activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      <TeamCardStack initialTeamMembers={filteredTeamMembers} />
    </div>
  );
};

export default TeamPage;
