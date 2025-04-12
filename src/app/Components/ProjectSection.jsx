"use client"
import React from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
function ProjectSection() {
const projects = [
    {
        id : 1,
        title : "Urban Sound Classification",
        imgurl : "/UrbanSound.png",
        tag : ["All","ML"],
        githuburl : "https://github.com/KrishDua/UrbanSoundClassification",
    },
    {
        id : 2,
        title : "Text Generation",
        imgurl : "/TextGeneration.png",
        tag : ["All","ML"],
        githuburl : "https://github.com/KrishDua/TextGeneration",
    },
    {
        id : 3,
        title : "Distracted Driver Detection",
        imgurl : "/DistractedDriver.png",
        tag : ["All","ML"],
        githuburl : "https://github.com/KrishDua/DistractedDriverDetection",
    },
    {
        id : 4,
        title : "Facial Emotion Recognition",
        imgurl : "/FER.png",
        tag : ["All","ML"],
        githuburl : "https://github.com/KrishDua/FacialEmotionRecognition",
    },
    {
        id : 5, 
        title : "Text Classification using Naive Bayes",
        imgurl : "/TextClassification.png",
        tag : ["All","ML"],
        githuburl : "https://github.com/KrishDua/NaiveBayes"
    },
    {
        id : 6,
        title : "Indian Spice Mart",
        imgurl : "/ISM.jpeg",
        tag : ["All","Web"],
        githuburl : "https://github.com/KrishDua/Ecommerce",
        liveurl : "https://indianspicemart-cuwn.onrender.com"
    },
    {
        id : 7,
        title : "Chef Claude",
        imgurl : "/ChefClaude.jpeg",
        tag : ["All","Web"],
        githuburl : "https://github.com/KrishDua/ChefClaude",
        liveurl : "https://chefclaude-a39i.onrender.com",
    },
    {
        id : 8,
        title : "Meme Generator",
        imgurl : "/meme.jpeg",
        tag : ["All","Web"],
        githuburl : "https://github.com/KrishDua/MemeGenerator",
        liveurl : "https://memegenerator-qr97.onrender.com",
    },
    {
        id : 9,
        title : "Note Taking App",
        imgurl : "/NoteTaking.jpeg",
        tag : ["All","Web"],
        githuburl : "https://github.com/KrishDua/Note-Taking-App",
        liveurl : "https://note-taking-app-nw4j.onrender.com",
    },
    {
        id : 10,
        title : "Chatting App",
        imgurl : "/ChattingApp.jpeg",
        tag : ["All","Web"],
        githuburl : "https://github.com/KrishDua/chatting-app",
        liveurl : "https://chatting-app-28g0.onrender.com",
    }
]
const [tag,settag] = React.useState("All");
function handletag(tag){
    settag(tag);
}
const filteredprojects = projects.filter((project) => 
    project.tag.includes(tag)
);
  return (
    <section id='projects' className='mb-10 scroll-mt-32' >
            <h2 className="text-4xl font-bold text-cyan-400 mb-2 text-center">
                My Projects
            </h2>
            <div className='text-white flex flex-row justify-center items-center gap-2 py-6 ' >
                <ProjectTag onclick={handletag} name="All"  isselected={tag === 'All'}/>
                <ProjectTag onclick={handletag} name="ML"  isselected={tag === 'ML'}/>
                <ProjectTag onclick={handletag}  name="Web"  isselected={tag === 'Web'}/>
            </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {filteredprojects.map((project) => (
            <ProjectCard key={project.id} project={project} />
        ))}
        </div>

    </section>
  )
}

export default ProjectSection