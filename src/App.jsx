import React from "react";
import "./index.css";
import photo from "./assets/adarsh_photo.jpg";

export default function App() {
  const projects = [
    { title: "Wanderlust", description: "Travel app with Node.js, Express, MongoDB, EJS.", link: "https://github.com/adarsh/wanderlust" },
    { title: "Algorithm Visualizer", description: "Interactive tool to visualize A*, UCS, Minimax.", link: "https://github.com/adarsh/algovisualizer" },
    { title: "Portfolio", description: "Personal portfolio built with React + Tailwind.", link: "https://github.com/adarsh/portfolio" },
  ];

  const skills = ["React", "Node.js", "MongoDB", "Tailwind CSS", "Algorithms", "Compiler Design"];
  const experience = [
    { role: "Technical Lead - Swar Music Society", desc: "Led projects, managed team, and built scalable backend systems." },
    { role: "Interview - Omegabridge Solutions", desc: "Prepared and showcased backend + cloud deployment skills." },
    { role: "Backend Developer Projects", desc: "Worked on Wanderlust, portfolio, and algorithm visualizer apps." },
  ];
  const achievements = ["CGPA 8.9 (B.Tech)", "Leadership in college society", "Backend projects deployed on cloud"];

  return (
    <div className="font-mono bg-black text-green-400 min-h-screen scroll-smooth">
      {/* Header with Image + Links */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-green-400">
        {/* Image top-left */}
        <div className="flex items-center gap-4">
          <img
            src={photo}
            alt="Adarsh Pandey"
            className="w-20 h-20 rounded-full border-2 border-green-400 shadow-lg hover:shadow-green-500 transition"
          />
          <h1 className="text-green-400 font-bold text-2xl flex flex-col space-y-2">
  <span className="text-3xl tracking-wide">Adarsh Pandey</span>
  
  <span className="text-green-300 text-lg text-blue-500">
    Gen AI Exchange Hackathon 2025
  </span>
  
  <span className="text-green-300 text-lg text-yellow-500">
    Intern — Def Space Summer Internship at Bharatiya Space Research Center (ISRO)
    </span>
   <span className ="text-green-300 text-lg text-red-500">in Artificial Intelligence and Digital Forensic in Space and Defence</span> 
  
  
  <span className="text-green-300 text-lg">
     Java Developer | Spring AI | Spring Boot
  </span>
</h1>

        </div>

        {/* Quick Links + Resume */}
        <nav className="space-x-6">
          <a href="https://github.com/adarsh" target="_blank" rel="noreferrer" className="hover:text-cyan-400">GitHub</a>
          <a href="https://linkedin.com/in/adarsh" target="_blank" rel="noreferrer" className="hover:text-cyan-400">LinkedIn</a>
          <a href="https://github.com/adarsh/dsa-sheet" target="_blank" rel="noreferrer" className="hover:text-cyan-400">Data-Structure Sheet</a>
          <a href="/resume.pdf" download="Adarsh_Pandey_Resume.pdf" className="px-4 py-2 bg-green-400 text-black rounded hover:bg-green-300">
            Download Resume
          </a>
        </nav>
      </header>

      {/* Professional Summary */}
      <section id="summary" className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-cyan-400">&gt; Professional Summary</h2>
        <p className="text-green-300 leading-relaxed">
          B.Tech student with strong academic record (CGPA 8.9), Technical Lead at Swar Music Society,
          and hands-on developer experienced in backend systems, algorithms, and cloud deployment.
          Passionate about solving complex problems and building scalable platforms.
        </p>
      </section>
{/* Projects Tree */}
<section id="projects" className="py-16 px-6 max-w-6xl mx-auto">
  <h2 className="text-3xl font-bold mb-10 text-center text-cyan-400">&gt; Projects</h2>

  {/* Horizontal trunk line */}
  <div className="relative flex justify-center">
    <div className="w-full h-1 bg-green-400"></div>
  </div>

  {/* Nodes hanging downward with gaps */}
  <div className="flex justify-around mt-12 space-x-12">
    {/* Project 1 */}
    <div className="flex flex-col items-center">
      <div className="w-1 h-12 bg-green-400"></div> {/* vertical connector */}
      <div className="w-4 h-4 bg-green-400 rounded-full border border-black"></div>
      <div className="mt-6 text-center px-4 py-2 bg-gray-900 border border-green-400 rounded shadow">
        <h3 className="text-xl font-semibold text-green-300">Wanderlust</h3>
        <p className="text-green-200 text-sm">Travel app with Node.js, Express, MongoDB, EJS</p>
      </div>
    </div>

    {/* Project 2 */}
    <div className="flex flex-col items-center">
      <div className="w-1 h-12 bg-green-400"></div>
      <div className="w-4 h-4 bg-green-400 rounded-full border border-black"></div>
      <div className="mt-6 text-center px-4 py-2 bg-gray-900 border border-green-400 rounded shadow">
        <h3 className="text-xl font-semibold text-green-300">Algorithm Visualizer</h3>
        <p className="text-green-200 text-sm">Interactive tool for A*, UCS, Minimax</p>
      </div>
    </div>

    {/* Project 3 */}
    <div className="flex flex-col items-center">
      <div className="w-1 h-12 bg-green-400"></div>
      <div className="w-4 h-4 bg-green-400 rounded-full border border-black"></div>
      <div className="mt-6 text-center px-4 py-2 bg-gray-900 border border-green-400 rounded shadow">
        <h3 className="text-xl font-semibold text-green-300">Portfolio</h3>
        <p className="text-green-200 text-sm">Personal portfolio built with React + Tailwind</p>
      </div>
    </div>

    {/* Project 4 */}
    <div className="flex flex-col items-center">
      <div className="w-1 h-12 bg-green-400"></div>
      <div className="w-4 h-4 bg-green-400 rounded-full border border-black"></div>
      <div className="mt-6 text-center px-4 py-2 bg-gray-900 border border-green-400 rounded shadow">
        <h3 className="text-xl font-semibold text-green-300">Cloud Deployments</h3>
        <p className="text-green-200 text-sm">Projects deployed on Render & MongoDB Atlas</p>
      </div>
    </div>
  </div>
</section>



     {/* Skills Tree */}
<section id="skills" className="py-16 px-6 max-w-5xl mx-auto">
  <h2 className="text-3xl font-bold mb-10 text-center text-cyan-400">&gt; Skills</h2>

  {/* Horizontal trunk line */}
  <div className="relative flex justify-center">
    <div className="w-full h-1 bg-green-400"></div>
  </div>

  {/* Branches with vertical stacks */}
  <div className="flex justify-around mt-8">
    {/* Branch 1 */}
    <div className="flex flex-col items-center">
      <div className="w-1 h-12 bg-green-400"></div> {/* vertical connector */}
      <div className="w-4 h-4 bg-green-400 rounded-full border border-black"></div>
      <div className="mt-4 flex flex-col items-center space-y-2">
        <span className="px-4 py-2 bg-gray-800 text-green-300 border border-green-400 rounded">React</span>
        <span className="px-4 py-2 bg-gray-800 text-green-300 border border-green-400 rounded">Node.js</span>
        <span className="px-4 py-2 bg-gray-800 text-green-300 border border-green-400 rounded">MongoDB</span>
        <span className="px-4 py-2 bg-gray-800 text-green-300 border border-green-400 rounded">Express</span>
        <span className="px-4 py-2 bg-gray-800 text-green-300 border border-green-400 rounded">Tailwind CSS</span>
      </div>
    </div>

    {/* Branch 2 */}
    <div className="flex flex-col items-center">
      <div className="w-1 h-12 bg-green-400"></div>
      <div className="w-4 h-4 bg-green-400 rounded-full border border-black"></div>
      <div className="mt-4 flex flex-col items-center space-y-2">
        <span className="px-4 py-2 bg-gray-800 text-green-300 border border-green-400 rounded">Algorithms</span>
        <span className="px-4 py-2 bg-gray-800 text-green-300 border border-green-400 rounded">A*</span>
        <span className="px-4 py-2 bg-gray-800 text-green-300 border border-green-400 rounded">UCS</span>
        <span className="px-4 py-2 bg-gray-800 text-green-300 border border-green-400 rounded">Minimax</span>
        <span className="px-4 py-2 bg-gray-800 text-green-300 border border-green-400 rounded">Alpha-Beta Pruning</span>
      </div>
    </div>

    {/* Branch 3 */}
    <div className="flex flex-col items-center">
      <div className="w-1 h-12 bg-green-400"></div>
      <div className="w-4 h-4 bg-green-400 rounded-full border border-black"></div>
      <div className="mt-4 flex flex-col items-center space-y-2">
        <span className="px-4 py-2 bg-gray-800 text-green-300 border border-green-400 rounded">Compiler Design</span>
        <span className="px-4 py-2 bg-gray-800 text-green-300 border border-green-400 rounded">Cloud Deployment</span>
        <span className="px-4 py-2 bg-gray-800 text-green-300 border border-green-400 rounded">Git/GitHub</span>
        <span className="px-4 py-2 bg-gray-800 text-green-300 border border-green-400 rounded">Problem Solving</span>
        <span className="px-4 py-2 bg-gray-800 text-green-300 border border-green-400 rounded">Leadership</span>
      </div>
    </div>
  </div>
</section>


      {/* Experience Tree */}
<section id="experience" className="py-16 px-6 max-w-4xl mx-auto">
  <h2 className="text-3xl font-bold mb-10 text-center text-cyan-400">&gt; Experience</h2>

  {/* Vertical trunk line */}
  <div className="relative">
    <div className="absolute left-8 top-0 h-full border-l-2 border-green-400"></div>

    {/* Node 1 */}
    <div className="flex items-center mb-8">
      <div className="w-8 flex justify-center">
        <div className="w-4 h-4 bg-green-400 rounded-full border border-black"></div>
      </div>
      <div className="ml-6 px-4 py-2 bg-gray-900 border border-green-400 rounded shadow text-green-200">
        <h3 className="text-xl font-semibold text-green-300">Technical Lead - Swar Music Society</h3>
        <p>Led projects, managed team, and built scalable backend systems.</p>
      </div>
    </div>

    {/* Node 2 */}
    <div className="flex items-center mb-8">
      <div className="w-8 flex justify-center">
        <div className="w-4 h-4 bg-green-400 rounded-full border border-black"></div>
      </div>
      <div className="ml-6 px-4 py-2 bg-gray-900 border border-green-400 rounded shadow text-green-200">
        <h3 className="text-xl font-semibold text-green-300">Interview - Omegabridge Solutions</h3>
        <p>Prepared and showcased backend + cloud deployment skills.</p>
      </div>
    </div>

    {/* Node 3 */}
    <div className="flex items-center mb-8">
      <div className="w-8 flex justify-center">
        <div className="w-4 h-4 bg-green-400 rounded-full border border-black"></div>
      </div>
      <div className="ml-6 px-4 py-2 bg-gray-900 border border-green-400 rounded shadow text-green-200">
        <h3 className="text-xl font-semibold text-green-300">Backend Developer Projects</h3>
        <p>Worked on Wanderlust, portfolio, and algorithm visualizer apps.</p>
      </div>
    </div>
  </div>
</section>



      {/* Achievements */}
      <section id="achievements" className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-cyan-400">&gt; Achievements</h2>
        <ul className="space-y-4">
          {achievements.map((ach, i) => (
            <li key={i} className="text-green-200">- {ach}</li>
          ))}
        </ul>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center border-t border-green-400 text-green-300">
        © 2026 Adarsh Pandey | Ready for Google & Top MNCs
      </footer>
    </div>
  );
}
