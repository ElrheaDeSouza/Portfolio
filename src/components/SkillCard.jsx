const SkillCard = ({ title, items }) => {
  return (
    <div className="rounded-2xl border border-cyan-400/30 bg-white/5 p-6 backdrop-blur transition hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]">
      <h3 className="mb-4 text-lg font-semibold text-white">
        {title}
      </h3>

      <ul className="space-y-2 text-sm">
        {items.length === 0 ? (
          <li className="italic text-white/40">Coming soon</li>
        ) : (
          items.map((item, index) => (
            <li key={index} className="text-white/80">
              <span className="text-cyan-400">•</span>{" "}
              <span className="font-medium">{item.name}</span>
              <span className="text-white/50"> — {item.desc}</span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default SkillCard;
