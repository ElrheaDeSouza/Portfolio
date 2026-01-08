const Footer = () => {
  return (
    <footer
      id="contact"
      className="w-full bg-black px-6 py-16"
    >
      <div className="mx-auto max-w-6xl">


        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-sm text-gray-400">

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:elrheadesouza@gmail.com"
              className="hover:text-blue-700 transition"
            >
              Gmail
            </a>
            <span className="hidden sm:block">•</span>
            <a
              href="https://github.com/ElrheaDeSouza"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-700 transition"
            >
              GitHub
            </a>
            <span className="hidden sm:block">•</span>
            <a
              href="https://www.linkedin.com/in/elrhea-desouza-a07402325/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-700 transition"
            >
              LinkedIn
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
