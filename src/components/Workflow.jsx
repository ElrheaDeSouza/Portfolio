const workflowSteps = [
  {
    step: "01",
    title: "Problem Definition",
    desc: "Understanding business objectives",
  },
  {
    step: "02",
    title: "Data Collection",
    desc: "Gathering & preprocessing data",
  },
  {
    step: "03",
    title: "EDA & Feature Engineering",
    desc: "Analyzing & creating features",
  },
  {
    step: "04",
    title: "Model Development",
    desc: "Training & tuning models",
  },
  {
    step: "05",
    title: "Deployment & Monitoring",
    desc: "Productionizing solutions",
  },
];

const Workflow = () => {
  return (
    <section>
      <h3 className="mb-12 text-center text-3xl font-semibold text-white">
        My Data Science Workflow
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {workflowSteps.map((item, index) => (
          <div
            key={index}
            className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-black p-6 text-center"
          >
            {/* Step Number */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400 text-black font-semibold">
                {item.step}
              </span>
            </div>

            <h4 className="mt-8 text-lg font-semibold text-white">
              {item.title}
            </h4>

            <p className="mt-2 text-sm text-gray-400">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Workflow;
