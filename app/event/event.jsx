import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const GDGCPage = () => {
  const infoBoxes = [
    {
      title: "Concept of GDGC",
      content: "A supportive environment for students to develop technical expertise, share knowledge, and work on real-world tech solutions. For students passionate about innovation and continuous learning.",
      bgColor: "bg-red-100",
      borderColor: "border-red-500",
      textColor: "text-red-600"
    },
    {
      title: "Target Audience",
      content: "Tailored for university students passionate about technology, eager to enhance coding and problem-solving skills while building projects and fostering a global tech network.",
      bgColor: "bg-blue-100",
      borderColor: "border-blue-500",
      textColor: "text-blue-600"
    },
    {
      title: "Why GDGC?",
      content: "Bridges the gap between academic learning and industry demands through skill application, hands-on projects, and collaboration with peers and professionals.",
      bgColor: "bg-green-100",
      borderColor: "border-green-500",
      textColor: "text-green-600"
    },
    {
      title: "Other Concept",
      content: "Promotes community building and inspires students to take leadership roles, offering organizing tech events, learning new tools, and forging valuable connections.",
      bgColor: "bg-yellow-100",
      borderColor: "border-yellow-500",
      textColor: "text-yellow-600"
    }
  ];

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold text-white flex items-center justify-center gap-2">
            What is GDGC? 🤔
          </h1>
          
          <p className="text-gray-200 text-lg">
            Google Developer Group Campus is a student-led program supported by Google, offering an inclusive platform
            for students to explore, learn, and share their passion for technology. It focuses on collaboration in web
            development, mobile apps, cloud computing, and beyond.
          </p>
          
          <p className="text-gray-200 text-lg">
            GDGC encourages skill-building, peer-to-peer learning, and networking while granting access to resources and
            mentorship from industry experts—making it a fantastic opportunity for aspiring tech leaders.
          </p>
        </div>

        {/* Info Boxes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {infoBoxes.map((box, index) => (
            <Card 
              key={index} 
              className={`${box.bgColor} border-2 ${box.borderColor} transition-transform hover:scale-105`}
            >
              <CardContent className="p-6">
                <h2 className={`text-xl font-bold mb-3 ${box.textColor}`}>
                  {box.title}
                </h2>
                <p className="text-gray-800">
                  {box.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GDGCPage;