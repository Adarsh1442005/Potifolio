export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
      <form className="max-w-md mx-auto space-y-4">
        <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border rounded" />
        <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border rounded" />
        <textarea placeholder="Your Message" className="w-full px-4 py-2 border rounded h-32"></textarea>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </section>
  );
}
