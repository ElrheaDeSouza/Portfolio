import { Github, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

const projects = [
  {
    repo: "house-price-predictor-flask-colab-n8n",
    title: "FlowSense-ML Powered Workflow Automation",
    tag: "Machine Learning",
    description:
      "An end-to-end ML application that predicts house prices using a trained model, exposes predictions through a Flask API, and uses n8n automation to email results instantly to users.",
    details:
      "Feature engineering, hyperparameter tuning, and Flask API deployment.",
    stats: [
      { value: "94%", label: "Accuracy" },
      { value: "91%", label: "Precision" },
      { value: "100K+", label: "Records" },
    ],
    tech: ["Python", "Flask", "n8n", "ML", "Webhooks"],
    color: "from-blue-500 to-cyan-400",
  },
  {
    repo: "faiss-booksearch-vectorstore",
    title: "FAISS BookSearch VectorStore",
    tag: "Machine Learning",
    description:
      "A book recommendation system that uses embedding models via Ollama and FAISS to perform fast vector-based similarity search and return relevant book recommendations based on user queries.",
    details:
      "FAISS fine-tuning, Kafka pipelines, AWS deployment.",
    stats: [
      { value: "92%", label: "F1 Score" },
      { value: "10K/min", label: "Speed" },
      { value: "5", label: "Languages" },
    ],
    tech: ["Python", "FAISS", "Ollama", "Machine Learning", "Vector Databases"],
    color: "from-cyan-400 to-blue-500",
  },
  {
    repo: "CalifoniaHousePricePrediction",
    title: "Recommendation System",
    tag: "AI Systems",
    description:
      "Personalized recommendation engine improving CTR by 28%.",
    details:
      "Matrix factorization and neural embeddings.",
    stats: [
      { value: "28%", label: "CTR Boost" },
      { value: "1M+", label: "Users" },
      { value: "50ms", label: "Latency" },
    ],
    tech: ["Python", "TensorFlow", "FastAPI", "Redis"],
    color: "from-purple-500 to-fuchsia-500",
  },
  {
    repo: "Emotion-Detection",
    title: "Computer Vision Pipeline",
    tag: "Computer Vision",
    description:
      "Real-time object detection for surveillance analytics.",
    details:
      "YOLO optimization and edge deployment.",
    stats: [
      { value: "96%", label: "mAP" },
      { value: "30 FPS", label: "Inference" },
      { value: "Edge", label: "Deployment" },
    ],
    tech: ["YOLO", "OpenCV", "CUDA", "ONNX"],
    color: "from-pink-500 to-rose-500",
  },
]

const Project = () => {
  return (
    <section id="projects" className="bg-black px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-4xl font-bold text-white">
         Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-black p-6 backdrop-blur"
            >
              {/* Accent Bar */}
              <div
                className={`absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r ${project.color}`}
              />

              {/* Tag */}
              <span className="absolute right-6 top-6 rounded-full border border-white/10 px-3 py-1 text-xs text-cyan-400">
                {project.tag}
              </span>

              {/* Title */}
              <h3 className="mt-6 text-2xl font-semibold text-white">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-gray-400">
                {project.description}
              </p>

              <p className="mt-3 text-sm text-gray-500">
                {project.details}
              </p>

              {/* Stats */}
              <div className="mt-6 grid grid-cols-3 gap-4 rounded-xl border border-white/10 bg-black/40 p-4">
                {project.stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <p className="text-xl font-bold text-cyan-400">
                      {stat.value}
                    </p>
                    <p className="text-xs text-gray-400">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-8 flex gap-4">
                <a
                  href={`https://github.com/ElrheaDeSouza/${project.repo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 py-2 text-sm hover:bg-white/10 transition"
                >
                  <Github size={16} /> Code
                </a>
                <button className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 py-2 text-sm hover:bg-white/10 transition">
                  <ExternalLink size={16} /> Demo
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Project
