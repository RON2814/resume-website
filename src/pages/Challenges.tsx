function Challenges() {
  const challenges = [
    {
      title: "ONLINE LEARNING ADJUSTMENT",
      description:
        "Transitioning to online classes was hard at first. I learned to manage my time better and stay focused without a classroom.",
    },
    {
      title: "PROGRAMMING STRUGGLES",
      description:
        "Faced programming struggles, especially with Java. I learned to ask questions, read documentation, and practice more.",
    },
    {
      title: "BALANCING RESPONSIBILITIES",
      description:
        "Got overwhelmed with school and personal problems. I learned how to balance rest and productivity.",
    },
    {
      title: "FIRST COMPLETE PROJECT",
      description:
        "Built my first full website alone. I learned a lot about debugging, deployment, and being patient.",
    },
    {
      title: "DEALING WITH BURNOUT",
      description:
        "Faced burnout. I realized it's okay to pause and come back stronger.",
    },
  ];

  return (
    <div className="p-4 mt-24 md:px-[10%] mb-16">
      <h2 className="text-gray-700 text-3xl mb-8 text-center md:text-start">
        <span className="border-b-2 border-pink-100 font-semibold">
          CHALLENGES & LEARNING
        </span>
      </h2>

      <div className="px-4 md:px-12">
        <div className="relative ml-6">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gray-200"></div>

          {/* Challenge Items */}
          {challenges.map((challenge, index) => (
            <div key={index} className="relative mb-20">
              {/* Timeline Dot */}
              <div
                className="absolute left-0 top-0 w-3 h-3 rounded-full bg-pink-500"
                style={{ transform: "translateX(-50%) translateY(12px)" }}
              ></div>

              {/* Challenge Content - with proper left margin */}
              <div className="ml-6">
                <h3 className="text-2xl font-semibold text-gray-700 mb-3">
                  {challenge.title}
                </h3>
                <p className="text-gray-600 md:max-w-3xl">
                  {challenge.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Challenges;
