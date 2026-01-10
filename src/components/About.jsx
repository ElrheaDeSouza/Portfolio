import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      className="bg-black py-24 flex justify-center"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {/* Card Wrapper */}
      <div className="relative w-full max-w-6xl mx-6 blue-glow rounded-2xl">
        {/* Inner Card */}
        <div className="bg-black rounded-2xl px-8 md:px-14 py-24 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            
            {/* Image */}
            <div className="flex justify-center">
              <img
                src="/AboutMe/Pic.jpg"
                alt="DSZ"
                className="rounded-lg shadow-lg w-full max-w-[300px]"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-5xl font-bold mb-4 text-blue-500/80">
                Know Me More
              </h2>

              <p className="text-base text-gray-400 mb-4 leading-relaxed">
                Hello! I'm Elrhea, a passionate Data Scientist and Machine Learning Engineer who enjoys turning raw data into intelligent, usable systems.
              </p>

              <p className="text-base text-gray-400 mb-4 leading-relaxed">
                With a strong foundation in statistics, programming, and machine learning, I enjoy experimenting, improving models, and understanding why they work — not just making them run.
              </p>

              <p className="text-base text-gray-400 leading-relaxed">
                When I’m not working with data, I enjoy exploring AI, building clean and responsive web interfaces, and unwinding with music — especially playing the violin.
              </p>

              {/* Buttons */}
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <a
                  href="/Resume/ElrheaDesouza_Resume.pdf"
                  download
                  className="rounded-xl bg-blue-500 px-6 py-3 font-medium text-black hover:bg-blue-400 transition"
                >
                  Download Resume
                </a>

                <a
                  href="#experience"
                  className="rounded-xl border border-blue-500 px-6 py-3 font-medium hover:text-blue-500 hover:scale-105 transition"
                >
                  Jump to Experience
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
