export default function Projects() {
  const projects = [
    {
      title: "Wanderlust",
      description: "Full-stack travel app with Node.js, Express, MongoDB, and EJS.",
      link: "https://github.com/adarsh/wanderlust",
    },
    {
      title: "Portfolio",
      description: "Personal portfolio built with React + Tailwind.",
      link: "https://github.com/adarsh/portfolio",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((p, i) => (
          <div key={i} className="bg-white shadow rounded p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-600 mb-4">{p.description}</p>
            <a href={p.link} target="_blank" className="text-blue-600 hover:underline">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
