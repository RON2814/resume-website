function Resume() {
  return (
    <div className="p-4 mt-24 md:px-[10%]">
      <h2 className="text-gray-700 text-3xl mb-4 text-center md:text-start">
        <span className="border-b-2 border-pink-100 font-semibold">
          RESUME PAGE
        </span>
      </h2>
      <div className="flex flex-col items-center my-8">
        <a
          href="/resume-cv.pdf"
          download="John_Aaron_Apayong_Resume.pdf"
          className="bg-pink-600 hover:bg-pink-400 text-white py-2 px-6 rounded-md mb-6 transition duration-300"
        >
          Download PDF
        </a>

        <div className="w-full h-[80vh] border border-gray-200 rounded-lg overflow-hidden shadow-md mb-6">
          <iframe
            src="/resume-cv.pdf"
            className="w-full h-full"
            title="Resume/CV"
          ></iframe>
        </div>

        <a
          href="/resume-cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-600 text-gray-700 py-2 px-6 rounded-md transition duration-300"
        >
          View and Download Resume/CV
        </a>
      </div>
    </div>
  );
}

export default Resume;
