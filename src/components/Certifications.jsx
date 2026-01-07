const certifications = [
  "AWS Certified Machine Learning - Specialty",
  "TensorFlow Developer Certificate",
  "Deep Learning Specialization - DeepLearning.AI",
  "Advanced Data Science with IBM",
];

const Certifications = () => {
  return (
    <section>
      <div className="rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/5 to-black p-8">
        <h3 className="text-2xl font-semibold text-white mb-8">
          Certifications
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex items-center gap-3 rounded-xl border border-cyan-400/20 bg-black/40 px-6 py-4"
            >
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              <p className="text-gray-200">{cert}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
