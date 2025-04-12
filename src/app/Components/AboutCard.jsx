import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

function AboutCard(props) {
  const bullets = [
    "Software Engineering undergraduate at Delhi Technological University (DTU)",
    "Passionate about Machine Learning and Full Stack Web Development",
    "Solved 1000+ DSA problems across LeetCode & Codeforces",
    "Developed AI/ML projects like Urban Sound Classification and Emotion Detection",
    "Built production-grade apps like Chef Claude and Indian Spice Mart",
    "Aiming for a future in top-tier tech companies",
  ];

  return (
    <div className="bg-[#0f172a] border border-cyan-500 text-white p-8 rounded-2xl shadow-lg 
      transition-transform duration-300 hover:scale-105 hover:shadow-2xl max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-cyan-400 mb-6 text-center">
       {props.heading}
      </h2>
      <ul className="space-y-4">
        {props.bullets.map((point, index) => (
          <li key={index} className="flex items-start gap-3 text-base md:text-lg text-gray-300">
            <CheckCircleIcon className="h-6 w-6 text-cyan-400 shrink-0 mt-1" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AboutCard;
