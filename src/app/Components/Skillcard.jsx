import React from 'react';

function Skillcard({ name, image }) {
  return (
    <>
    <div className="duration-300 
    hover:scale-120 text-white rounded-xl p-4 shadow-md flex flex-col items-center justify-center bg-transparent hover:shadow-lg transition-all w-25 h-25">
      <img src={image} alt={`${name} logo`} className="w-full h-full object-contain mb-2" />
      <h3 className="text-sm font-semibold text-center text-white">{name}</h3>
    </div>
    </>
  );
}

export default Skillcard;
