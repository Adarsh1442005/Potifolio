import React,{useEffect} from "react";
import "./index.css";
import photo from "./assets/adarsh_photo.jpg";
import resume from "./assets/resume.pdf";
import AOS from "aos";
import "aos/dist/aos.css";




export default function App() {
  useEffect(() => {
  AOS.init({ duration: 1000, once: true });
}, []);

  const projects = [
    { title: "CardioVascular Heart Diesease Prediction Model", description: "Developed a machine learning model to predict the likelihood of cardiovascular disease using patient health data (age, blood pressure, cholesterol, lifestyle factors, etc.). Implemented data preprocessing, feature engineering, and classification algorithms (e.g., Logistic Regression, Random Forest, and Neural Networks) to achieve high accuracy. The model provides early risk assessment, supporting preventive healthcare and clinical decision‑making.", link: "https://github.com/adarsh/wanderlust" },
    { title: "Full Stack Application (FreeLance Backend Engineer)", description: "Designed and developed a full‑stack application leveraging Spring Boot and Spring Data JPA for robust backend services. Implemented RESTful APIs, database integration, and secure authentication workflows to ensure scalability and reliability. Collaborated with clients in a freelance capacity, focusing on backend engineering tasks such as data modeling, query optimization, and API performance tuning. ", link: "https://github.com/adarsh/algovisualizer" },
    { title: "Real‑Time Authenticated Chat Application", description: "Built a secure, real‑time chat platform using the MERN stack (MongoDB, Express.js, React, Node.js) with WebSocket integration for instant communication. Implemented user authentication and authorization to ensure privacy and secure messaging. Designed scalable backend services with MongoDB for message persistence and Express.js APIs for user management. The frontend, developed in React, provides a responsive interface with live updates powered by WebSockets.", link: "https://github.com/adarsh/portfolio" },
    {title: "Swar Music Society – Full‑Stack Application" , description: "Designed and developed a full‑stack web application for the Swar Music Society to manage events, performances, and member collaboration. Built with Node.js, Express, MongoDB, and React, the platform enables seamless listing of concerts, image uploads, and member profiles. Integrated backend services with secure authentication and database management, while the frontend provides an interactive interface for announcements and performance showcases. This project demonstrates my ability to combine technical engineering with creative community needs, delivering a scalable solution that supports society operations and enhances visibility."},
    {title:"IoT Research Project – Fuzzy Logic Fan Speed Controller",description:"Designed and implemented an IoT‑based fan speed controller using Fuzzy Logic to intelligently adjust airflow based on real‑time environmental conditions such as temperature and humidity. The system integrates sensors with a microcontroller, applying fuzzy inference rules to determine optimal fan speed for comfort and energy efficiency. Data is transmitted and monitored through IoT protocols, enabling remote control and analytics. This project demonstrates expertise in embedded systems, IoT communication, and soft computing techniques, with practical applications in smart home automation and energy‑aware systems."},
    {title:"Harsh E‑Catering Services – Full‑Stack Application (MERN)",description:"Developed a full‑stack web application for Harsh E‑Catering Services using the MERN stack (MongoDB, Express.js, React, Node.js). The platform enables customers to browse menus, place online orders, and track deliveries in real time. Implemented secure authentication and role‑based access for customers and administrators. Designed scalable backend APIs with MongoDB for order management and integrated a responsive React frontend for a seamless user experience. This project demonstrates expertise in full‑stack development, RESTful API design, and real‑world business solutions.."}
  ];

  const skills = ["Java", "Python", "C", "Spring Boot", "Spring Security", "Claude","MicroServices","LangChain","Docker","Git","MERN Stack","Pandas","Numpy","Scikit-Learn","IOT", "Machine Learning","Hibernate","Spring Data Jpa"];
  const experience = [
    { role: "Internship- Bharatiya Space Research (ISRO)", desc: "      Working on Artificial Intelligence and Digital Forensics in Space & Defence applications. Contributing to research projects focused on secure systems, anomaly detection, and AI‑driven solutions for national space missions." },
    { role: "AI / ML Intern | Wipro Technologies (Corizo)", desc: "Research and developed a machine learning model for Cardiovascular diseases Prediction. Applied data Processing, feature Engineering, and Supervised Learning Algorithms to improve accuracy." },
    { role: "Teaching Asssitant at Apna College in MERN Stack", desc: "Helped many Students at Apna College in building Large full stack applications, Like Zerodha, Linkedin, Zoom, AI Based Interview Application etc." },
  ];
  const achievements = ["Awarded the G.P Birla Scholarship for academic excellence twice in 2023 and 2024, for academic excellence", "Gen AI Exchange Hackathon, innovated an AI powered Youth mental Wellness"];

  return (
    <div className="font-mono bg-black text-green-400 min-h-screen scroll-smooth">
      {/* Header with Image + Links */}
      <header className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 py-4 border-b border-green-400 space-y-4 md:space-y-0">
  {/* Image + Name */}
  <div className="flex items-center gap-4">
    <img
      src={photo}
      alt="Adarsh Pandey"
      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-green-400 shadow-lg hover:shadow-green-500 transition"
      data-aos="fade-right"
      data-aos-delay="100"
    />
    <h1 className="text-green-400 font-bold text-xl sm:text-2xl flex flex-col space-y-2">
      <span
        className="text-2xl sm:text-3xl tracking-wide"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Adarsh Pandey
      </span>
      <span
        className="text-blue-500 text-sm sm:text-lg"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Gen AI Exchange Hackathon 2025
      </span>
      <span
        className="text-yellow-500 text-sm sm:text-lg"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        Intern — Def Space Summer Internship at Bharatiya Space Research ISRO
      </span>
      <span
        className="text-yellow-500 text-sm sm:text-lg"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        Artificial Intelligence & Digital Forensic in Space and Defence
      </span>
      <span
        className="text-green-500 text-sm sm:text-lg"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        Java Developer | Spring AI | Spring Boot
      </span>
    </h1>
  </div>

  {/* Links */}
  <nav
    className="flex flex-wrap justify-center md:justify-end gap-4"
    data-aos="fade-left"
    data-aos-delay="700"
  >
    <a href="https://github.com/Adarsh1442005" className="hover:text-cyan-400">GitHub</a>
    <a href="https://www.linkedin.com/in/aadi-8343272a7/" className="hover:text-cyan-400">LinkedIn</a>
    <a href="https://github.com/Adarsh1442005/Dsahttps://github.com/Adarsh1442005/DataStructure" className="hover:text-cyan-400">DSA Sheet</a>
    <a href={resume} download="Adarsh_Pandey_Resume.pdf" className="px-4 py-2 bg-green-400 text-black rounded hover:bg-green-300">
      Resume
    </a>
  </nav>
</header>


      {/* Professional Summary */}
     <section id="summary" className="py-12 px-4 sm:px-6 max-w-4xl mx-auto text-center">
  <h2
    className="text-2xl sm:text-3xl font-bold mb-6 text-cyan-400"
    data-aos="fade-down"
    data-aos-delay="100"
  >
    &gt; Professional Summary
  </h2>
  <p
    className="text-green-300 leading-relaxed text-sm sm:text-base"
    data-aos="fade-up"
    data-aos-delay="300"
  >
    Apiring Software Enginerring and Experience in training AI Models,
    Currently Pursuing Internship at Bharatiya Space Research Center (ISRO)
    in Artificial Intelligence and Digital Forensic in defence and Space.
    Have Build a remarkable Prototype in Gen AI Exchange Hackathon 2025 of
    problem statement Generative AI Youth Mental Wellness and also reasearch
    and develop an Fuzzy Logic based Fan Speed Controller under the guidane
    of Prof.Dr.Raees Ahmed Khan Assistan Proffesor in Computer Science at
    Birla Institute of Technology. Also have an Hands on experience in
    building Full Stack Application using Spring Boot and Mern Stack
    Technology. Always Passionated and Eager to Learn.
  </p>
</section>

      {/* Projects Tree */}
      <section id="projects" className="py-16 px-4 sm:px-6 max-w-6xl mx-auto">
  <h2 className="text-3xl sm:text-4xl font-extrabold mb-16 text-center text-cyan-400 tracking-wide animate-glance">
  <span className="border-b-4 border-green-400 pb-2">&gt; Projects</span>
</h2>


  {/* Horizontal trunk line */}
  <div className="relative flex justify-center mb-12">
    <div className="w-full h-1 bg-green-400"></div>
  </div>

  {/* Responsive grid for projects */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
  {projects.map((proj, i) => (
    <div
      key={i}
      className="flex flex-col items-center"
      data-aos="fade-down"
      data-aos-delay={i * 200} // staggered delay for each branch
    >
      <div className="w-1 h-12 bg-green-400"></div>
      <div className="w-4 h-4 bg-green-400 rounded-full border border-black"></div>
      <div className="mt-6 text-center px-6 py-4 bg-gray-900 border border-green-400 rounded shadow w-full">
        <h3 className="text-lg sm:text-xl font-semibold text-green-300">
          {proj.title}
        </h3>
        <p className="text-green-200 text-xs sm:text-sm mt-2">
          {proj.description}
        </p>
      </div>
    </div>
  ))}
</div>

</section>


      {/* Skills Tree */}
      <section id="skills" className="py-12 px-4 sm:px-6 max-w-5xl mx-auto">
  <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-center text-cyan-400">&gt; Skills</h2>

  {/* Horizontal trunk line */}
  <div className="relative flex justify-center">
    <div className="w-full h-1 bg-green-400"></div>
  </div>

  {/* Skills grid with animations */}
  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {skills.map((skill, i) => (
      <span
        key={i}
        className="px-4 py-2 bg-gray-800 text-green-300 border border-green-400 rounded text-sm sm:text-base text-center"
        data-aos="fade-up"
        data-aos-delay={i * 100} // staggered reveal
      >
        {skill}
      </span>
    ))}
  </div>
</section>



      {/* Experience Tree */}
      <section id="experience" className="py-12 px-4 sm:px-6 max-w-4xl mx-auto">
  <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-center text-cyan-400">&gt; Experience</h2>

  <div className="relative">
    <div className="absolute left-4 sm:left-8 top-0 h-full border-l-2 border-green-400"></div>

    {experience.map((exp, i) => (
      <div
        key={i}
        className="flex items-center mb-8"
        data-aos="fade-right"       // animation direction
        data-aos-delay={i * 200}    // staggered delay
      >
        <div className="w-8 flex justify-center">
          <div className="w-4 h-4 bg-green-400 rounded-full border border-black"></div>
        </div>
        <div className="ml-4 sm:ml-6 px-4 py-2 bg-gray-900 border border-green-400 rounded shadow text-green-200 w-full">
          <h3 className="text-lg sm:text-xl font-semibold text-blue-300">{exp.role}</h3>
          <p className="text-sm sm:text-base">{exp.desc}</p>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* Achievements */}
     <section id="achievements" className="py-12 px-4 sm:px-6 max-w-4xl mx-auto">
  <h2
    className="text-2xl sm:text-3xl font-bold mb-10 text-center text-cyan-400"
    data-aos="fade-down"
    data-aos-delay="100"
  >
    &gt; Achievements
  </h2>

  <div className="relative">
    {/* Vertical trunk line */}
    <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full border-l-2 border-green-400"></div>

    <div className="space-y-8">
      {achievements.map((ach, i) => (
        <div
          key={i}
          className="flex items-center justify-center"
          data-aos="fade-up"
          data-aos-delay={i * 200} // staggered reveal
        >
          {/* Dot marker */}
          <div className="w-4 h-4 bg-green-400 rounded-full border border-black"></div>

          {/* Achievement card */}
          <div className="ml-4 px-4 py-2 bg-gray-900 border border-green-400 rounded shadow text-green-200 text-sm sm:text-base">
            - {ach}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Footer */}
     <footer className="py-6 text-center border-t border-green-400 text-green-300 text-sm sm:text-base">
  
  <div className="mt-2 space-y-1">
    <a href="mailto:ap4866017@gmail.com" className="block hover:text-cyan-400">
     ap4866017@gmail.com
    </a>
    <a href="tel:+917275733778" className="block hover:text-cyan-400">
       +91 7275733778
    </a>
  </div>
</footer>
    </div>
  );
}
