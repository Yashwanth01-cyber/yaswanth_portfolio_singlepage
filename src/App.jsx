import React from 'react';

function App() {
  return (
    <div className="font-poppins bg-gradient-to-br from-sky-900 to-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Certifications />
      <Projects />
      <Activities />
      <Contact />
    </div>
  );
}

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 text-white p-4 z-50 shadow-lg">
    <ul className="flex justify-center space-x-6 font-semibold">
      <li><a href="#about" className="hover:text-purple-400">About</a></li>
      <li><a href="#education" className="hover:text-purple-400">Education</a></li>
      <li><a href="#skills" className="hover:text-purple-400">Skills</a></li>
      <li><a href="#certifications" className="hover:text-purple-400">Certifications</a></li>
      <li><a href="#projects" className="hover:text-purple-400">Projects</a></li>
      <li><a href="#activities" className="hover:text-purple-400">Activities</a></li>
      <li><a href="#contact" className="hover:text-purple-400">Contact</a></li>
    </ul>
  </nav>
);

const Hero = () => (
  <section className="h-screen flex flex-col justify-center items-center text-center pt-20 animate-fadeIn">
    <h1 className="text-5xl font-bold">Yaswanth S</h1>
    <p className="text-xl text-purple-400 mt-4 animate-slideUp">Aspiring Cybersecurity Engineer & Frontend Developer</p>
    <a href="#projects" className="mt-6 px-6 py-2 bg-purple-600 rounded-full hover:bg-purple-800 transition">
      View Projects
    </a>
  </section>
);

const About = () => (
  <section id="about" className="py-16 px-6 bg-slate-800 animate-fadeIn">
    <h2 className="text-4xl font-bold text-purple-400 mb-6">About Me</h2>
    <p className="text-lg leading-relaxed">
      Motivated and enthusiastic engineering student in Cybersecurity. Eager to apply knowledge in frontend development and cybersecurity analysis. Dedicated to learning, teamwork, and delivering results.
    </p>
  </section>
);

const Education = () => (
  <section id="education" className="py-16 px-6 bg-slate-900 animate-fadeIn">
    <h2 className="text-4xl font-bold text-purple-400 mb-6">Education</h2>
    <p className="text-lg">B.E. Cybersecurity, 2024 - 2028</p>
    <p className="text-md text-gray-300">Study World College Of Engineering</p>
  </section>
);

const Skills = () => (
  <section id="skills" className="py-16 px-6 bg-slate-800 animate-fadeIn">
    <h2 className="text-4xl font-bold text-purple-400 mb-6">Skills</h2>
    <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-lg list-disc pl-5">
      <li>HTML, CSS, JavaScript, React</li>
      <li>Java, Python, SQL</li>
      <li>Cybersecurity, IAM, Splunk</li>
      <li>Creative Writing, Critical Thinking</li>
      <li>Data Structures, Data Analysis</li>
      <li>Frontend Development</li>
    </ul>
  </section>
);

const Certifications = () => (
  <section id="certifications" className="py-16 px-6 bg-slate-900 animate-fadeIn">
    <h2 className="text-4xl font-bold text-purple-400 mb-6">Certifications</h2>
    <ul className="space-y-3 text-lg">
      <li>✅ Solution Architecture – AWS (Apr 2025)</li>
      <li>✅ Advanced Software Engineering – Walmart Global Tech (Apr-May 2025)</li>
      <li>✅ Information Access Management – TATA (Apr 2025)</li>
      <li>✅ Frontend Technologies – IBMCE (Mar 2025)</li>
      <li>✅ Cybersecurity – NY Jobs CEO Council (Mar-May 2025)</li>
    </ul>
  </section>
);

const Projects = () => (
  <section id="projects" className="py-16 px-6 bg-slate-800 animate-fadeIn">
    <h2 className="text-4xl font-bold text-purple-400 mb-6">Projects</h2>
    <div className="bg-slate-700 p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold">🔐 Keylogger with Encrypted Data Exfiltration</h3>
      <p className="mt-2 text-sm text-gray-300">June 2025</p>
      <a href="https://github.com/Yashwanth01-cyber/final-project" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline mt-2 block">
        View on GitHub →
      </a>
    </div>
  </section>
);

const Activities = () => (
  <section id="activities" className="py-16 px-6 bg-slate-900 animate-fadeIn">
    <h2 className="text-4xl font-bold text-purple-400 mb-6">Extra Curricular</h2>
    <ul className="list-disc pl-5 text-lg">
      <li>Participated in Hackathon</li>
      <li>Participated in Codeathon</li>
    </ul>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-16 px-6 bg-slate-800 animate-fadeIn">
    <h2 className="text-4xl font-bold text-purple-400 mb-6">Contact Me</h2>
    <p className="text-lg mb-4">📧 yashwanthyashwanth12174@gmail.com</p>
    <p className="text-lg">📞 +91 8220818564</p>
    <a href="https://github.com/Yashwanth01-cyber" target="_blank" className="text-blue-400 block mt-2">GitHub Profile →</a>
  </section>
);

export default App;
