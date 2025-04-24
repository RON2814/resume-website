function FuturePlans() {
  const plans = [
    {
      year: "2024 - Future",
      title: "SOFTWARE DEVELOPER",
      description:
        "After graduation, I want to work as a software developer. I know I still have a lot to learn, so I'm open to any job related to my course that will help me grow.",
    },
    {
      year: "Next Steps",
      title: "HANDS-ON EXPERIENCE",
      description:
        "I don't plan to take further studies right now. I'd rather focus on getting hands-on experience.",
    },
    {
      year: "Career Goals",
      title: "IDEAL WORKPLACE",
      description:
        "I don't have a dream company yet, but I want to work in a place that's respectful and not stressful. I'm most interested in working on mobile apps or backend systems.",
    },
    {
      year: "Personal Goals",
      title: "OUTSIDE OF TECH",
      description:
        "Personally, I want to travel, make music, and maybe build a game just for fun.",
    },
    {
      year: "Motivation",
      title: "WHAT DRIVES ME",
      description:
        "What keeps me going is the support of my family and my curiosity about how things work in tech.",
    },
  ];

  return (
    <div className="p-4 mt-24 md:px-[10%]">
      <h2 className="text-gray-700 text-3xl mb-4 text-center md:text-start">
        <span className="border-b-2 border-pink-100 font-semibold">
          FUTURE PLANS
        </span>
      </h2>
      <div className="container mx-auto px-4 mt-8 mb-16">
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[1px] bg-gray-200"></div>

          {plans.map((plan, index) => (
            <div
              key={index}
              className={`flex mb-16 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Left Content or Right Content */}
              <div
                className={`w-1/2 ${
                  index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                }`}
              >
                <div className="mb-2 text-gray-500">{plan.year}</div>
                <h3 className="text-xl font-semibold text-gray-700">
                  {plan.title}
                </h3>
              </div>

              {/* Timeline Dot */}
              <div className="relative flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-pink-500 z-10"></div>
              </div>

              {/* Right Content or Left Content */}
              <div
                className={`w-1/2 ${
                  index % 2 === 0 ? "pl-8 text-left" : "pr-8 text-right"
                }`}
              >
                <p className="text-gray-600">{plan.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FuturePlans;
