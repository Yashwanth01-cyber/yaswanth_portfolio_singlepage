import React from "react";

function App() {
  return (
    <div className="font-poppins bg-gradient-to-br from-slate-950 to-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Certifications />
      <Experience />
      <Projects />
      <Activities />
      <Contact />
    </div>
  );
}

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full bg-black/80 text-white p-4 z-50 shadow-lg backdrop-blur-lg">
    <ul className="flex justify-center space-x-6 font-semibold">
      <li><a href="#about" className="hover:text-purple-400 transition">About</a></li>
      <li><a href="#education" className="hover:text-purple-400 transition">Education</a></li>
      <li><a href="#skills" className="hover:text-purple-400 transition">Skills</a></li>
      <li><a href="#certifications" className="hover:text-purple-400 transition">Certifications</a></li>
      <li><a href="#experience" className="hover:text-purple-400 transition">Experience</a></li>
      <li><a href="#projects" className="hover:text-purple-400 transition">Projects</a></li>
      <li><a href="#activities" className="hover:text-purple-400 transition">Activities</a></li>
      <li><a href="#contact" className="hover:text-purple-400 transition">Contact</a></li>
    </ul>
  </nav>
);

const Hero = () => (
  <section className="h-screen flex flex-col justify-center items-center text-center pt-20 animate-fadeIn">
    <h1 className="text-6xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
      Yaswanth S
    </h1>
    <p className="text-xl text-purple-300 mt-4 animate-slideUp">
      Aspiring Cybersecurity Engineer & Frontend Developer
    </p>
    <a
      href="#projects"
      className="mt-6 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:scale-105 transition-transform shadow-lg"
    >
      View Projects
    </a>
  </section>
);

const About = () => (
  <section id="about" className="py-20 px-6 bg-slate-900/80 backdrop-blur-lg">
    <h2 className="text-5xl font-bold text-center text-purple-400 mb-10">About Me</h2>
    <p className="text-lg leading-relaxed text-gray-300 max-w-4xl mx-auto text-center">
      Motivated and enthusiastic engineering student in Cybersecurity. Eager to apply knowledge in frontend development 
      and cybersecurity analysis. Dedicated to learning, teamwork, and delivering results.
    </p>
  </section>
);

const Education = () => (
  <section id="education" className="py-20 px-6 bg-gradient-to-r from-slate-900 to-slate-800">
    <h2 className="text-5xl font-bold text-center text-purple-400 mb-10">Education</h2>
    <div className="max-w-3xl mx-auto bg-slate-800/60 p-6 rounded-xl shadow-lg border border-purple-500/30">
      <p className="text-2xl font-semibold">B.E. Cybersecurity (2024 - 2028)</p>
      <p className="text-md text-gray-300 mt-2">Study World College Of Engineering</p>
    </div>
  </section>
);

const Skills = () => (
  <section id="skills" className="py-20 px-6 bg-slate-900/80 backdrop-blur-lg">
    <h2 className="text-5xl font-bold text-center text-purple-400 mb-10">Skills</h2>
    <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 text-lg max-w-4xl mx-auto">
      {[
        "HTML, CSS, JavaScript, React",
        "Java, Python, SQL",
        "Cybersecurity, IAM, Splunk",
        "Creative Writing, Critical Thinking",
        "Data Structures, Data Analysis",
        "Frontend Development",
      ].map((skill, i) => (
        <li
          key={i}
          className="bg-slate-800/70 p-4 rounded-lg text-center shadow-lg hover:scale-105 hover:shadow-purple-500/30 transition-transform"
        >
          {skill}
        </li>
      ))}
    </ul>
  </section>
);

const Certifications = () => (
  <section id="certifications" className="py-20 px-6 bg-gradient-to-r from-slate-900 to-slate-800">
    <h2 className="text-5xl font-bold text-center text-purple-400 mb-10">Certifications</h2>
    <ul className="space-y-4 text-lg max-w-4xl mx-auto">
      <li>✅ Solution Architecture – AWS (Apr 2025)</li>
      <li>✅ Advanced Software Engineering – Walmart Global Tech (Apr-May 2025)</li>
      <li>✅ Information Access Management – TATA (Apr 2025)</li>
      <li>✅ Frontend Technologies – IBMCE (Mar 2025)</li>
      <li>✅ Cybersecurity – NY Jobs CEO Council (Mar-May 2025)</li>
    </ul>
  </section>
);

const Experience = () => (
  <section id="experience" className="py-20 px-6 bg-slate-900/80 backdrop-blur-lg">
    <h2 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-12">
      Experience
    </h2>

    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {/* Cybersecurity Internship */}
      <div className="bg-slate-800/70 p-6 rounded-xl shadow-lg border border-purple-500/30 hover:scale-105 hover:shadow-purple-500/40 transition-transform duration-300">
        <h3 className="text-2xl font-semibold">🔒 Cybersecurity Intern</h3>
        <p className="mt-1 text-gray-400">Elevates Labs | May 2025 – June 2025</p>
        <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-300">
          <li>Assisted in vulnerability assessment and penetration testing.</li>
          <li>Performed real-time threat analysis and documentation.</li>
          <li>Worked with ethical hacking tools and best practices.</li>
        </ul>
      </div>

      {/* Full Stack Internship */}
      <div className="bg-slate-800/70 p-6 rounded-xl shadow-lg border border-purple-500/30 hover:scale-105 hover:shadow-purple-500/40 transition-transform duration-300">
        <h3 className="text-2xl font-semibold">💻 Full Stack Intern</h3>
        <p className="mt-1 text-gray-400">Prodigy InfoTech | Aug 2025 – Sep 2025</p>
        <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-300">
          <li>Developed full-stack apps with React, Node.js & TailwindCSS.</li>
          <li>Built secure authentication and authorization features.</li>
          <li>Collaborated on chat systems & e-commerce projects.</li>
        </ul>
      </div>

      {/* Web Hacking Training */}
      <div className="bg-slate-800/70 p-6 rounded-xl shadow-lg border border-purple-500/30 hover:scale-105 hover:shadow-purple-500/40 transition-transform duration-300 md:col-span-2">
        <h3 className="text-2xl font-semibold">🌐 Web Hacking Training</h3>
        <p className="mt-1 text-gray-400">Udemy by Cyber Twinkle | Completed in 2025</p>
        <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-300">
          <li>Learned fundamentals of web application security.</li>
          <li>Practiced exploiting common vulnerabilities safely.</li>
          <li>Strengthened ethical hacking concepts through projects.</li>
        </ul>
      </div>
    </div>
  </section>
);

const Projects = () => (
  <section id="projects" className="py-20 px-6 bg-gradient-to-r from-slate-900 to-slate-800">
    <h2 className="text-5xl font-bold text-center text-purple-400 mb-10">Projects</h2>
    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      <div className="bg-slate-800/70 p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-purple-500/30 transition">
        <h3 className="text-2xl font-semibold">🔐 Keylogger with Encrypted Data Exfiltration</h3>
        <p className="mt-2 text-sm text-gray-400">June 2025</p>
        <a
          href="https://github.com/Yashwanth01-cyber/final-project"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline mt-2 block"
        >
          View on GitHub →
        </a>
      </div>

      <div className="bg-slate-800/70 p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-purple-500/30 transition">
        <h3 className="text-2xl font-semibold">📞 TalkShield - Real-time Scam Call Analyzer</h3>
        <p className="mt-2 text-sm text-gray-400">July 2025</p>
        <a
          href="https://github.com/Yashwanth01-cyber/TalkShield"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline mt-2 block"
        >
          View TalkShield →
        </a>
      </div>
    </div>
  </section>
);

const Activities = () => (
  <section id="activities" className="py-20 px-6 bg-slate-900/80 backdrop-blur-lg">
    <h2 className="text-5xl font-bold text-center text-purple-400 mb-10">Extra Curricular</h2>
    <ul className="list-disc pl-5 text-lg max-w-3xl mx-auto space-y-2 text-gray-300">
      <li>Participated in Hackathon</li>
      <li>Participated in Codeathon</li>
    </ul>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-20 px-6 bg-gradient-to-r from-slate-900 to-slate-800">
    <h2 className="text-5xl font-bold text-center text-purple-400 mb-10">Contact Me</h2>
    <div className="max-w-3xl mx-auto text-center space-y-4">
      <p className="text-lg">📧 yashwanthyashwanth12174@gmail.com</p>
      <p className="text-lg">📞 +91 8220818564</p>
      <p className="text-lg">
        💬 <a href="https://t.me/Yashwanth_09_01" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
          @Yashwanth_09_01 (Telegram)
        </a>
      </p>
      <img
        src="telegram_qr.png"
        alt="Telegram QR Code"
        className="w-40 h-40 mx-auto rounded-lg shadow-lg border border-purple-400"
      />
      <p className="text-sm text-gray-400">Scan QR to connect on Telegram</p>
      <p className="text-lg">
        🔗 <a href="https://github.com/Yashwanth01-cyber" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
          GitHub Profile →
        </a>
      </p>
    </div>
  </section>
);

export default App;
