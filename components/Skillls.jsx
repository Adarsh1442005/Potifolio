export default function Skills() {
  const skills = ["React", "Node.js", "MongoDB", "Tailwind CSS", "Algorithms", "Compiler Design"];

  return (
    <section id="skills" className="py-20 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((s, i) => (
          <span key={i} className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full shadow">
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}
