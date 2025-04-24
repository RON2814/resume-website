import getTechSkills from "../data/technicalSkills";
import getSvgSkillURL from "../utils/svg-skill-util";

function Skills() {
  const techSkills = getTechSkills();
  return (
    <div className="p-4 mt-24 md:px-[10%]">
      <h2 className="text-gray-700 text-3xl mb-4 text-center md:text-start">
        <span className="border-b-2 border-pink-100 font-semibold">SKILLS</span>
      </h2>
      <div className="bg-pink-100 bg-opacity-40 p-4 rounded">
        {/* Programming Language Skills */}
        <div className="mb-4">
          <h3 className="font-semibold text-lg mb-2 text-center">
            Programming Language
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {techSkills.language.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center bg-gray-300/60 hover:bg-pink-300/60 transition-colors duration-300 overflow-hidden shadow-md rounded-lg text-lightBgColor font-medium"
              >
                <div className="p-2 bg-mySecondary bg-opacity-[.25] rounded-l">
                  <img
                    src={getSvgSkillURL(skill.file)}
                    alt={skill.name}
                    width="32"
                    height="32"
                    loading="lazy"
                    className="bg-white rounded-lg p-1 h-auto w-[2rem] max-w-[100%] object-contain"
                  />
                </div>
                <div className="p-3">
                  <span>{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Front End Skills */}
        <div className="mb-4">
          <h3 className="font-semibold text-lg mb-2 text-center">Front-end</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {techSkills.frontEnd.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center bg-gray-300/60 hover:bg-pink-300/60 transition-colors duration-300 overflow-hidden shadow-md rounded-lg text-lightBgColor font-medium"
              >
                <div className="p-2 bg-mySecondary bg-opacity-[.25] rounded-l">
                  <img
                    src={getSvgSkillURL(skill.file)}
                    alt={skill.name}
                    width="32"
                    height="32"
                    loading="lazy"
                    className="bg-white rounded-lg p-1 h-auto w-[2rem] max-w-[100%] object-contain"
                  />
                </div>
                <div className="p-3">
                  <span>{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Back End Skills */}
        <div className="mb-4">
          <h3 className="font-semibold text-lg mb-2 text-center">Back-end</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {techSkills.backEnd.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center bg-gray-300/60 hover:bg-pink-300/60 transition-colors duration-300 overflow-hidden shadow-md rounded-lg text-lightBgColor font-medium"
              >
                <div className="p-2 bg-mySecondary bg-opacity-[.25] rounded-l">
                  <img
                    src={getSvgSkillURL(skill.file)}
                    alt={skill.name}
                    width="32"
                    height="32"
                    loading="lazy"
                    className="bg-white rounded-lg p-1 h-auto w-[2rem] max-w-[100%] object-contain"
                  />
                </div>
                <div className="p-3">
                  <span>{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Skills */}
        <div>
          <h3 className="font-semibold text-lg mb-2 text-center">Others</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {techSkills.others.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center bg-gray-300/60 hover:bg-pink-300/60 transition-colors duration-300 overflow-hidden shadow-md rounded-lg text-lightBgColor font-medium"
              >
                <div className="p-2 bg-mySecondary bg-opacity-[.25] rounded-l">
                  <img
                    src={getSvgSkillURL(skill.file)}
                    alt={skill.name}
                    width="32"
                    height="32"
                    loading="lazy"
                    className="bg-white rounded-lg p-1 h-auto w-[2rem] max-w-[100%] object-contain"
                  />
                </div>
                <div className="p-3">
                  <span>{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    // <div className="p-4">
    //   {techSkills.frontEnd.map((skill, index) => (
    //     <div key={index} className="flex flex-col items-center">
    //       <img
    //         src={getSvgSkillURL(skill.file)}
    //         alt={skill.name}
    //         className="h-auto w-[2rem] max-w-[100%] object-contain"
    //       />
    //       <span className="mt-2 text-center">{skill.name}</span>
    //     </div>
    //   ))}
    // </div>
  );
}

export default Skills;
