import Image from "next/image";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import AboutSection from "./Components/AboutSection";
import ProjectSection from "./Components/ProjectSection";
import SkillsSection from "./Components/SkillsSection";
import WorkExperience from "./Components/WorkExperience";
import EmailSection from "./Components/EmailSection";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col bg-blue-950 mx-auto px-5 py-4">
        <Navbar />
        <div className="container mt-14 mx-auto px=12 py-4" >
        <HeroSection />
        <AboutSection />
        <ProjectSection/>
        <WorkExperience />
        <SkillsSection/>
        <EmailSection />
        </div>
      </main>
  );
}