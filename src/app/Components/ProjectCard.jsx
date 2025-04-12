import React from 'react';
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export default function ProjectCard({ project }) {
  return (
    <div className="rounded-xl shadow-lg overflow-hidden flex flex-col border border-cyan-500 
                    transform transition duration-300 hover:scale-105 hover:shadow-2xl bg-[#0f172a]">
      <div
        className="h-52 md:h-64 w-full bg-no-repeat bg-contain bg-center"
        style={{ 
                backgroundImage: `url(${project.imgurl})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
            }}
      />
      <div className="p-5 flex flex-col justify-between grow">
        <h3 className="text-xl text-white font-semibold mb-3">{project.title}</h3>
        <div className="flex justify-between gap-4 mt-auto">
          {project.githuburl && (
            <Link
              href={project.githuburl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-2 border border-cyan-500 text-cyan-500 rounded-md hover:text-white hover:border-white transition"
            >
              <CodeBracketIcon className="h-5 w-5" />
              <span className="text-sm">Github Repo</span>
            </Link>
          )}

          {project.liveurl && (
            <Link
              href={project.liveurl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-2 border border-cyan-500 text-cyan-500 rounded-md hover:text-white hover:border-white transition"
            >
              <EyeIcon className="h-5 w-5" />
              <span className="text-sm">Live Demo</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
