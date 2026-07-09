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
    const amazon = [
        "Delivered two production features and resolved a team-wide release blocker for a high-traffic internal support platform.",
        "Built a self-service support tool (backend APIs + UI) to surface real-time customer campaign/prize status, eliminating manual cross-team investigation for support tickets — now live in production.",
        "Led migration of the platform's access control to a modern fine-grained policy framework, authoring 8+ policies with zero regressions, closing a flagged security risk.",
        "Root-caused and fixed release pipeline failures from a platform-wide dependency migration, restoring stable deployments team-wide."        
    ];  
    const oyo = [
            "Collaborated with the backend team to design and implement scalable RESTful APIs using Java, Spring Boot, and PostgreSQL.",
            "Built APIs for hotel reservations and user management, supporting 20K+ monthly requests.",
            "Refactored service layers and optimized SQL queries to improve backend performance by 30%.",
            "Implemented Redis caching to reduce database load and speed up response times."
    ];
    const ducat = [
            "Conducted weekly sessions on Data Structures and Algorithms for over 100 students.",
            "Designed problem sets and coding assignments to reinforce core DSA concepts.",
            "Assisted students with debugging, optimization, and algorithm design.",
            "Improved student engagement and retention through interactive teaching methods."
    ];
    return (
        <section id='work' className='text-white mb-5 scroll-mt-32' >
                <div className="bg-[#0f172a] border border-cyan-500 rounded-2xl w-full mb-10 shadow-lg p-8 max-w-3xl mx-auto transition-transform duration-300 hover:scale-105 hover:shadow-2xl active:scale-105 active:shadow-2xl">
                <h2 className="text-3xl font-bold text-cyan-400 mb-6 text-center">
                    Work Experience 
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 p-4 sm:px-6 md:px-8">
                <Workexcard
                    heading="Software Development Intern"
                    company="Amazon Development Centre India Pvt. Ltd."
                    duration="Jan 12, 2026 – June 26, 2026."
                    image="/amazon.png"
                    bullets={amazon}
                />                     
                <Workexcard
                    heading="Technology Intern"
                    company="Oyo Rooms, Oravel Stays Pvt. Limited."
                    duration="Jun 2, 2025 – Aug 1, 2025."
                    image="/oyo.png"
                    bullets={oyo}
                /> 
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