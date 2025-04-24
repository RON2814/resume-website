import { useState } from "react";
import Carousel from "../components/Carousel";
import projects from "../data/projects";
import getProjectVideoURL from "../utils/video-project-util";
import ReactPlayer from "react-player";
import getSvgSkillURL from "../utils/svg-skill-util";
import { MdLaunch } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentProject = projects[activeIndex];

  return (
    <section id="project" className="p-4 mt-24 md:px-[10%]">
      <h2 className="text-gray-700 text-3xl mb-4 text-center md:text-start">
        <span className="border-b-2 border-pink-100 font-semibold">
          PROJECTS
        </span>
      </h2>

      {/* Project details card */}
      <div className="bg-gray-100/40 p-6 rounded-md mb-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Project video/image - left side on desktop */}
          <div className="lg:w-1/2">
            {currentProject && (
              <div className="rounded-md overflow-hidden shadow-md">
                <ReactPlayer
                  url={getProjectVideoURL(currentProject.video)}
                  playing
                  loop
                  muted
                  width="100%"
                  height="100%"
                  style={{ aspectRatio: "16/9", objectFit: "cover" }}
                />
              </div>
            )}
          </div>

          {/* Project details - right side on desktop */}
          <div className="lg:w-1/2">
            {currentProject && (
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-2xl font-medium mb-4">
                    {currentProject.name}
                  </h3>
                  <p className="mb-4 text-gray-700">
                    {currentProject.description}
                  </p>

                  <h4 className="font-medium mb-2">Tools Used:</h4>
                  <div className="flex flex-wrap mb-6">
                    {currentProject.tools.map((tool, index) => (
                      <div key={index} className="relative group mr-3 mb-2">
                        <img
                          src={getSvgSkillURL(tool.file)}
                          alt={tool.name}
                          width="32"
                          height="32"
                          loading="lazy"
                          className="w-8 h-8 border-2 border-pink-400 rounded-md p-1"
                        />
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-pink-600 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                          {tool.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={getProjectVideoURL(currentProject.video)}
                    className="flex items-center justify-center bg-pink-600 hover:bg-pink-400 text-white py-2 px-6 rounded-md mb-6 transition duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MdLaunch className="mr-2 text-lg" />
                    View Project
                  </a>
                  <a
                    href={currentProject.link}
                    className="flex items-center justify-center bg-pink-600 hover:bg-pink-400 text-white py-2 px-6 rounded-md mb-6 transition duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="mr-2 text-lg" />
                    View Code
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Project carousel */}
      <div className="mt-8">
        <h3 className="text-xl text-center font-medium mb-4">More Projects</h3>
        <Carousel activeIndex={activeIndex} onSlideChange={setActiveIndex} />
      </div>
    </section>
  );
};

export default Projects;
