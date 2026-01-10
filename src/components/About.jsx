import React from 'react';

const About = () => {
  return (
    <div id="about" className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img
              src="https://via.placeholder.com/400"
              alt="Elrhea De Souza"
              className="rounded-lg shadow-lg w-full max-w-sm"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-4 text-blue-500/80">About Me</h2>
            <p className="text-lg text-gray-400 mb-6">
              Hello! I'm Elrhea, a passionate Data Scientist and Machine Learning Engineer who enjoys turning raw data into intelligent, usable systems. I work hands-on with real-world datasets cleaning data, building models, and extracting insights that actually matter.
            </p>
            <p className="text-lg text-gray-400 mb-6">
              With a strong foundation in statistics, programming, and machine learning, I enjoy experimenting, improving models, and understanding why they work not just making them run.
            </p>
            <p className="text-lg text-gray-400">
              When I’m not working with data, I enjoy exploring new technologies, keeping up with advancements in AI, building clean and responsive web interfaces, and unwinding with music especially playing the violin.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/Resume/ElrhesDesouza_DataScience_Resume-2.pdf" // Updated resume path
                download
                className="rounded-xl bg-blue-500 px-6 py-3 font-medium text-black hover:bg-blue-400 transition"
              >
                Download Resume
              </a>
              <a
                href="#experience" // Placeholder for experience section
                className="rounded-xl border border-blue-500 px-6 py-3 font-medium hover:text-blue-500 hover:scale-110 transition-transform"
              >
                Jump to Experience
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
