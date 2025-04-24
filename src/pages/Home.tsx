import { Link } from "react-router-dom";
import MyImage from "../assets/images/about_img.webp";
import socialLinks from "../data/socialLinks";
import { Link as ScrollLink } from "react-scroll";

function Home() {
  return (
    <>
      <section id="welcome-hero" className="w-full">
        <div className="bg-gray-800 mx-auto flex flex-col items-center justify-center h-[800px] w-full">
          <div className="text-white py-6 text-center">
            <h1 className="text-[2.375rem] md:text-[3.375rem] font-bold text-center uppercase">
              hi <span className="text-pink-600">,</span> i am <br /> John Aaron{" "}
              <br /> Apayong <span className="text-pink-600">.</span>
            </h1>
          </div>

          <p className="text-center my-2 md:text-lg text-white uppercase">
            Full-Stack Developer.
          </p>

          <div className="flex flex-col items-center justify-center md:flex-row md:space-x-4">
            <Link
              to={`resume`}
              className=" text-white border border-pink-500 hover:bg-pink-500 transition-all duration-300 px-6 py-2 rounded-md mt-6 cursor-pointer"
            >
              Download Resume
            </Link>
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              offset={-88} // 6rem = 96px offset (negative since we're moving up)
              duration={800}
              className="text-white hover:text-pink-500 underline uppercase transition-all duration-300 px-6 py-2 rounded-md mt-6 cursor-pointer"
            >
              Learn more
            </ScrollLink>
          </div>
        </div>
      </section>
      <section id="about" className="bg-gray-100">
        <div className="py-6 mb-8 text-center border-b">
          <h2 className="text-gray-700 text-3xl text-center uppercase">
            <span className="border-b-2 border-pink-100 font-semibold">
              About me
            </span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-16 p-4 md:px-[10%]">
          <div className="flex flex-col items-center justify-start py-6 px-4">
            <p className="text-lg text-gray-700 max-w-2xl">
              I'm a <span className="font-medium">Full-stack Developer</span>, a
              3rd-year Computer Science student at{" "}
              <span className="font-medium">
                Cavite State University - Bacoor Campus
              </span>
              . I'm pursuing a career as a software developer. I love building
              things with code and continuously learning new tools to enhance my
              skills.
            </p>
            <p className="text-lg text-gray-500 max-w-2xl my-4">
              I'm from the Philippines and enjoy solving technical problems and
              writing code. In my free time, I watch anime, play games, and read
              manga. I value my family's support as I work towards my career
              goals.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6 pt-6 border-t border-gray-200 w-full">
              <div>
                <h3 className="text-base font-medium text-gray-700 mb-1">
                  Phone
                </h3>
                <p className="text-gray-500">+63 763 199 300</p>
              </div>
              <div>
                <h3 className="text-base font-medium text-gray-700 mb-1">
                  Email
                </h3>
                <p className="text-gray-500">johnaaronapayong@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded shadow-xl">
              <div className="absolute inset-0 bg-gray-700/30 z-10"></div>
              <img
                src={MyImage}
                alt="John Aaron Apayong"
                className="w-full h-[468px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gray-700 py-4 flex justify-center z-20">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit my ${link.link} profile`}
                    className="mx-4 text-2xl text-white hover:text-pink-400 transition-colors duration-300"
                  >
                    <link.icon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
