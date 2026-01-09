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
              Hello! I'm Elrhea, a passionate Data Scientist and Machine Learning Engineer. I thrive on transforming complex datasets into meaningful and actionable insights. My journey in the world of data has been driven by a relentless curiosity and a desire to solve real-world problems.
            </p>
            <p className="text-lg text-gray-400 mb-6">
              With a strong foundation in statistics, programming, and machine learning, I specialize in developing predictive models and leveraging deep learning techniques to uncover hidden patterns in data. I am always excited to take on new challenges and contribute to innovative projects.
            </p>
            <p className="text-lg text-gray-400">
              When I'm not working with data, I enjoy exploring new technologies, reading about advancements in AI, and hiking in the great outdoors.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/Elrhea_De_Souza_Resume.pdf" // Placeholder for resume
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
