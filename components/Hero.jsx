export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <h1 className="text-5xl font-bold mb-4">Hi, I’m Adarsh Pandey</h1>
      <p className="text-xl mb-6">Developer • Technical Lead • Musician</p>
      <div className="space-x-4">
        <a href="#projects" className="px-6 py-2 bg-white text-blue-600 rounded shadow hover:bg-gray-100">
          View Projects
        </a>
        <a href="#contact" className="px-6 py-2 border border-white rounded hover:bg-white hover:text-blue-600">
          Contact Me
        </a>
      </div>
    </section>
  );
}
