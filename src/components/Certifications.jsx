const certificationsData = [
  "AWS APAC Solutions Architecture - Forage",
  "Deep Learning for Developers - Infosys Springboard",
  "Introduction to Large Language Models - Google Cloud",
  "Basics of AWS Managed Services - AWS Training & Certification",
];

const certificateFileMap = {
  "AWS APAC Solutions Architecture - Forage": "AWS.pdf",
  "Deep Learning for Developers - Infosys Springboard": "Deep Learning for Developers.pdf",
  "Introduction to Large Language Models - Google Cloud": "Introduction to Large Language Models.pdf",
  "Basics of AWS Managed Services - AWS Training & Certification": "Basics of AWS Managed Services.pdf",
};

const generateLink = (name) => {
  const fileName = certificateFileMap[name];
  return fileName ? `/Certificates/${fileName}` : "#"; // Fallback to '#' if no mapping found
};

const certifications = certificationsData.map((name) => ({
  name,
  link: generateLink(name),
}));

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
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-cyan-400"
              >
                {cert.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
