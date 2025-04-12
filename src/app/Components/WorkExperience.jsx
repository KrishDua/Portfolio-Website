"use client"
import React from 'react'
import Image from 'next/image'
import TabButton from './TabButton';
import AboutCard from './AboutCard';
import Workexcard from './Workexcard';
export default function WorkExperience() {
    const haier = [
            "Developed a real-time chat application using Node.js, Express, and Socket.io.",
            "Built responsive frontend with HTML, CSS, and JavaScript.",
            "Implemented real-time user authentication and message delivery.",
            "Deployed the app on Render and collaborated with backend team."
      ];
    const ducat = [
            "Conducted weekly sessions on Data Structures and Algorithms for over 100 students.",
            "Designed problem sets and coding assignments to reinforce core DSA concepts.",
            "Assisted students with debugging, optimization, and algorithm design.",
            "Improved student engagement and retention through interactive teaching methods."
    ];
    return (
        <section id='work' className='text-white mb-5 scroll-mt-32' >
                <div className="bg-[#0f172a] border border-cyan-500 rounded-2xl w-full mb-10 shadow-lg p-8 max-w-3xl mx-auto transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <h2 className="text-3xl font-bold text-cyan-400 mb-6 text-center">
                    Work Experience 
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 p-4 sm:px-6 md:px-8">
                <Workexcard
                    heading="Software Engineering Intern"
                    company="Haier Appliances India Pvt. Ltd."
                    duration="Jun 3, 2024 – Jul 12, 2024."
                    image="/haier.png"
                    bullets={haier}
                />
                <Workexcard
                heading="DSA Teaching Assistant"
                company="Ducat India"
                duration="9th Dec 2023 - 9th Jan 2024"
                image="/Ducat.jpeg" 
                bullets={ducat}
                />

                </div>
                </div>
        </section>
      )
}