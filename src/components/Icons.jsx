import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div>
      {/* Social Icons */}
      <div className="flex justify-center gap-4 text-4xl text-gray-400">
        <a
          href="mailto:elrheadesouza@gmail.com"
          aria-label="Email"
          className="hover:text-blue-500 hover:scale-110 transition-transform"
        >
          <FaEnvelope />
        </a>

        <a
          href="https://github.com/ElrheaDeSouza"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="hover:text-blue-500 hover:scale-110 transition-transform"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/elrhea-desouza-a07402325/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="hover:text-blue-500 hover:scale-110 transition-transform"
        >
          <FaLinkedin />
        </a>
      </div>

      {/* Bouncing Arrow */}
      <div className="mt-8 flex justify-center">
        <span className="text-blue-500 text-3xl animate-bounce">
          ↓
        </span>
      </div>
    </div>
  );
};

export default SocialLinks;
