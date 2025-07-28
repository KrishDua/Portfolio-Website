"use client"
import React from 'react'
import Image from 'next/image'
import TabButton from './TabButton';
import AboutCard from './AboutCard';
export default function AboutSection() {
    const whoami = [
        "Software Engineering undergraduate at Delhi Technological University (DTU)",
        "Passionate about Machine Learning and Full Stack Web Development",
        "Solved 1000+ DSA problems across LeetCode & Codeforces",
        "Developed AI/ML projects like Urban Sound Classification and Emotion Detection",
        "Built production-grade apps like Chef Claude and Indian Spice Mart",
        "Aiming for a future in top-tier tech companies",
      ];
    const whatdrivesme = [
        "The thrill of turning abstract ideas into real-world applications.",
        "A constant urge to challenge myself through competitive programming and projects.",
        "The power of data to drive smart, automated systems.",
        "The joy of collaborating, mentoring, and growing with tech communities.",
        "The vision of building scalable products that create real social impact.",
    ]
    const achievement = [
        "Secured a global rank of 7758 in Meta Hacker Cup 2024.",
        "Achieved 864 rank in India in the prestigious IEEE Xtreme 24-hour coding competition.",
        "Solved 1200+ DSA problems, showcasing strong problem-solving skills and consistency.",
        "Leetcode Knight with 800+ problems solved and a peak rating of 1846",
        "Codeforces Specialist with a peak rating of 1537",
        "CodeChef 3⭐️ (1753) rated competitive programmer"

    ]
  return (
    <section id='about' className='text-white mb-5 scroll-mt-32' >
            <div className="bg-[#0f172a] border border-cyan-500 rounded-2xl w-full mb-10 shadow-lg p-8 max-w-3xl mx-auto transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <h2 className="text-3xl font-bold text-cyan-400 mb-6 text-center">
                About Me
            </h2>
            <p className="text-gray-300 text-base sm:text-lg lg:text-xl text-justify leading-relaxed">
                I am a final-year Software Engineering student at Delhi Technological University with a strong focus on Machine Learning, Competitive Programming, and Full Stack Web Development.
                With over <span className="text-cyan-400 font-semibold">1000+ Data Structures and Algorithms problems</span> solved, I bring a solid foundation in algorithmic thinking and problem-solving.
                My experience spans building <span className="text-cyan-400 font-semibold">production-ready applications</span>, implementing <span className="text-cyan-400 font-semibold">deep learning models</span>, and contributing to real-world projects across diverse domains.
                I am driven by a passion for <span className="text-cyan-400 font-semibold">innovation, precision,</span> and <span className="text-cyan-400 font-semibold">continuous learning</span>.
            </p>
            </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            <AboutCard heading = "Who Am I?" bullets = {whoami} />
            <AboutCard heading = "What Drives Me?" bullets = {whatdrivesme} />
            <AboutCard heading = "Achievements" bullets = {achievement} />
        </div>
    </section>
  )
}