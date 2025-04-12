import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

function Workexcard({ heading, company, duration, bullets, image }) {
  return (
    <div className="bg-[#0f172a] border border-cyan-500 text-white p-8 rounded-2xl shadow-lg 
      transition-transform duration-300 hover:scale-105 hover:shadow-2xl max-w-3xl mx-auto flex flex-col gap-6 items-center text-center">

      {/* Image on top */}
      {image && (
        <div className="duration-300 
        hover:scale-120 text-white rounded-xl p-4 shadow-md flex flex-col items-center justify-center bg-transparent hover:shadow-lg transition-all w-40 h-40">
          <Image
            src={image}
            alt={company}
            width={100}
            height={100}
            className="rounded-lg w-full h-full bg-white object-contain shadow-md mx-auto"
          />
        </div>
      )}

      {/* Content */}
      <div className="w-full text-left">
        <h2 className="text-2xl font-bold text-cyan-400 mb-2 text-center">{heading}</h2>
        <p className="text-lg text-gray-300 text-center">{company}</p>
        <p className="text-sm text-gray-400 italic mb-4 text-center">{duration}</p>

        <ul className="space-y-4">
          {bullets.map((point, index) => (
            <li key={index} className="flex items-start gap-3 text-base text-gray-300">
              <CheckCircleIcon className="h-6 w-6 text-cyan-400 shrink-0 mt-1" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Workexcard;
