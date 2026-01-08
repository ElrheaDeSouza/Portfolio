import { Link } from "react-router-dom";
import RippleGrid from "./ui/RippleGrid"

export default function Hero() {
  return (
    <section className="relative bg-black pt-[0.5in]">

      {/* Grid Background (ONLY HERE) */}
      <RippleGrid
        enableRainbow={false}
        gridColor="#1d4ed8" 
        rippleIntensity={0.02} 
        gridSize={10}
        gridThickness={5} 
        fadeDistance={2.5}
        mouseInteraction={true}
        mouseInteractionRadius={1.2}
        opacity={0.4} 
        glowIntensity={0.2}
        className="fixed inset-0 -z-10"
      />

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <div className="max-w-3xl">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            <span className="h-2 w-2 rounded-full bg-blue-400"></span>
            Open to opportunities
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight">
            <span className="block text-gray-200">
              Elrhea De Souza
            </span>
          </h1>
          <h2 className="mt-6 text-5xl md:text-6xl font-bold leading-tight">
            <span className="block text-blue-500/80">
              Data Scientist &
            </span>
            <span className="block text-gray-200">
              ML Engineer
            </span>
          </h2>

          {/* Description */}
          <p className="mt-6 text-lg md:text-xl text-gray-400">
            Transforming complex data into actionable insights.
            Specialized in machine learning, deep learning, and
            predictive analytics to drive business innovation.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/projects" className="rounded-xl bg-blue-500 px-6 py-3 font-medium text-black hover:bg-blue-400 transition">
              View Projects →
            </Link>
            <Link to="/contact" className="rounded-xl border border-white/20 px-6 py-3 font-medium hover:bg-white/10 transition">
              Get in Touch
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
