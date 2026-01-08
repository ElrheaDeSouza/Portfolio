import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="w-full bg-black px-6 py-16"
    >
      <div className="mx-auto max-w-6xl">

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-sm text-gray-400">

          {/* Social Icons */}
          <div className="flex items-center gap-6 text-xl">
            <a
              href="mailto:elrheadesouza@gmail.com"
              aria-label="Email"
              className="hover:text-blue-700 transition"
            >
              <FaEnvelope />
            </a>

            <a
              href="https://github.com/ElrheaDeSouza"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-blue-700 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/elrhea-desouza-a07402325/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-700 transition"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-400">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
