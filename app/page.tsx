// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex min-h-screen bg-zinc-50 font-sans dark:bg-black">
//       {/* Sidebar for larger screens */}
//       <nav className="hidden sm:block w-30 bg-gray-900 text-white fixed h-full z-10">
//         <div className="p-4">
//           <Image
//             src="/avatar_smoke.jpg"
//             alt="Avatar"
//             width={100}
//             height={100}
//             className="rounded-full mx-auto"  
//           />
//         </div>
//         <a href="#" className="block py-4 px-4 text-center hover:bg-gray-700">
//           <i className="fa fa-home text-2xl"></i>
//           <p>HOME</p>
//         </a>
//         <a href="#about" className="block py-4 px-4 text-center hover:bg-gray-700">
//           <i className="fa fa-user text-2xl"></i>
//           <p>ABOUT</p>
//         </a>
//         <a href="#photos" className="block py-4 px-4 text-center hover:bg-gray-700">
//           <i className="fa fa-eye text-2xl"></i>
//           <p>PHOTOS</p>
//         </a>
//         <a href="#contact" className="block py-4 px-4 text-center hover:bg-gray-700">
//           <i className="fa fa-envelope text-2xl"></i>
//           <p>CONTACT</p>
//         </a>
//       </nav>

//       {/* Top Navbar for small screens */}
//       <div className="sm:hidden bg-black text-white opacity-90 fixed top-0 w-full z-10">
//         <div className="flex justify-center text-sm">
//           <a href="#" className="flex-1 py-2 text-center">HOME</a>
//           <a href="#about" className="flex-1 py-2 text-center">ABOUT</a>
//           <a href="#photos" className="flex-1 py-2 text-center">PHOTOS</a>
//           <a href="#contact" className="flex-1 py-2 text-center">CONTACT</a>
//         </div>
//       </div>

//       {/* Main Content */}
//       <main className="sm:ml-30 w-full pt-16 sm:pt-0">
//         {/* Header/Home */}
//         <header className="py-16 px-8 text-center bg-black text-white" id="home">
//           <h1 className="text-4xl sm:text-6xl font-bold">
//             <span className="hidden sm:inline">I'm </span>Kilari Reddy Sekhar
//           </h1>
//           <p className="text-lg mt-4">AI & Machine Learning Engineer | Full stack Developer</p>
//           <Image
//             src="/man_smoke.png"
//             alt="Reddy"
//             width={992}
//             height={1108}
//             className="mx-auto mt-8"
//           />
//         </header>

//         {/* About Section */}
//         <section className="py-16 px-8 text-gray-600 dark:text-gray-400 max-w-4xl mx-auto" id="about">
//           <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">Kilari Reddy Sekhar</h2>
//           <hr className="w-50 border-gray-300 my-4" />
//           <p className="text-lg leading-8 mb-8">
//             👋 Hi there! I'm Kilari Reddy Sekhar — a passionate engineer with a deep love for artificial intelligence and backend development. I specialize in building scalable APIs, deploying machine learning solutions, and integrating generative AI capabilities into real-world applications.
//             With hands-on experience in FastAPI, Flask, Django, and ReactJS integration, I enjoy transforming complex data and model workflows into clean, production-ready services. Whether it's building microservices, automating pipelines, or fine-tuning GenAI models with RAG, I strive to create meaningful, high-impact solutions.
//           </p>
//           <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">My Skills</h3>
//           <p className="mb-2"><strong>AI and ML:</strong> Deep learning,  Supervised Learning, Clustering, Reinforcement Learning, Recommendation Systems, MLOps </p>
//           <div className="bg-white border rounded h-7 mb-4">
//             <div className="bg-gray-800 h-full w-95%"></div>
//           </div>
//           <p className="mb-2"><strong>Web development:</strong> FastAPI, Django, Flask, REST APIs, microservices</p>
//           <div className="bg-white border rounded h-7 mb-4">
//             <div className="bg-gray-800 h-full w-95%"></div>
//           </div>
//           <p className="mb-2"><strong>Data & DevOps:</strong> Data scraping, Data Preprocessing, feature engineering, Docker, Jenkins, CI/CD</p>
//           <div className="bg-white border rounded h-7 mb-4">
//             <div className="bg-gray-800 h-full w-85%"></div>
//           </div>
//           <p className="mb-2"><strong>Frontend & Integration:</strong> ReactJS, NextJS, RestAPI integration</p>
//           <div className="bg-white border rounded h-7 mb-8">
//             <div className="bg-gray-800 h-full w-80%"></div>
//           </div>

//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-gray-100 dark:bg-gray-800 p-8 rounded">
//             <div className="text-center">
//               <span className="text-3xl font-bold">11+</span><br />
//               Partners
//             </div>
//             <div className="text-center">
//               <span className="text-3xl font-bold">55+</span><br />
//               Projects Done
//             </div>
//             <div className="text-center">
//               <span className="text-3xl font-bold">89+</span><br />
//               Happy Clients
//             </div>
//             <div className="text-center">
//               <span className="text-3xl font-bold">150+</span><br />
//               Meetings
//             </div>
//           </div>

//           <button className="mt-8 px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded hover:bg-gray-300 dark:hover:bg-gray-600">
//             <i className="fa fa-download mr-2"></i> Download Resume
//           </button>

//           <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-16 mb-8">My Price</h3>
//           <div className="grid sm:grid-cols-2 gap-8">
//             <div className="bg-white dark:bg-gray-800 border rounded shadow">
//               <div className="bg-gray-800 text-white text-xl py-8 text-center">Basic</div>
//               <div className="p-4">
//                 <p className="py-2">Web Development and API integration</p>
//                 <p className="py-2">Deployment in AWS</p>
//                 <p className="py-2">5GB Storage</p>
//                 <p className="py-2">Mail Support</p>
//                 <div className="text-center py-4">
//                   <h2 className="text-2xl font-bold">₹ 40000</h2>
//                   <span className="text-gray-500">per month</span>
//                 </div>
//                 <div className="bg-gray-100 dark:bg-gray-700 p-6 text-center">
//                   <button className="px-6 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded hover:bg-gray-200 dark:hover:bg-gray-600">Sign Up</button>
//                 </div>
//               </div>
//             </div>
//             <div className="bg-white dark:bg-gray-800 border rounded shadow">
//               <div className="bg-gray-800 text-white text-xl py-8 text-center">Pro</div>
//               <div className="p-4">
//                 <p className="py-2">AI/ML development and Deployment</p>
//                 <p className="py-2">Integration with Web or App</p>
//                 <p className="py-2">50GB Storage</p>
//                 <p className="py-2">Endless Support</p>
//                 <div className="text-center py-4">
//                   <h2 className="text-2xl font-bold">₹ 60000</h2>
//                   <span className="text-gray-500">per month</span>
//                 </div>
//                 <div className="bg-gray-100 dark:bg-gray-700 p-6 text-center">
//                   <button className="px-6 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded hover:bg-gray-200 dark:hover:bg-gray-600">Sign Up</button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-16 mb-8">My Projects</h3>
//           <div className="mb-8">
//             <Image src="/w3images/bandmember.jpg" alt="Avatar" width={80} height={80} className="rounded-full float-left mr-4" />
//             <p><span className="text-lg font-semibold mr-4">Chris Fox.</span> CEO at Mighty Schools.</p>
//             <p>Kilari Reddy saved us from a web disaster.</p>
//           </div>
//           <div>
//             <Image src="/w3images/avatar_g2.jpg" alt="Avatar" width={80} height={80} className="rounded-full float-left mr-4" />
//             <p><span className="text-lg font-semibold mr-4">Rebecca Flex.</span> CEO at Company.</p>
//             <p>No one is better than Kilari Reddy.</p>
//           </div>
//         </section>

//         {/* Portfolio Section */}
//         <section className="py-16 px-8 max-w-6xl mx-auto" id="photos">
//           <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">My Photos</h2>
//           <hr className="w-50 border-gray-300 mb-8" />
//           <div className="grid sm:grid-cols-2 gap-4">
//             <div>
//               <Image src="/w3images/wedding.jpg" alt="Wedding" width={500} height={300} className="w-full mb-4" />
//               <Image src="/w3images/rocks.jpg" alt="Rocks" width={500} height={300} className="w-full mb-4" />
//               <Image src="/w3images/sailboat.jpg" alt="Sailboat" width={500} height={300} className="w-full" />
//             </div>
//             <div>
//               <Image src="/w3images/underwater.jpg" alt="Underwater" width={500} height={300} className="w-full mb-4" />
//               <Image src="/w3images/chef.jpg" alt="Chef" width={500} height={300} className="w-full mb-4" />
//               <Image src="/w3images/wedding.jpg" alt="Wedding" width={500} height={300} className="w-full mb-4" />
//               <Image src="/w3images/p6.jpg" alt="P6" width={500} height={300} className="w-full" />
//             </div>
//           </div>
//         </section>

//         {/* Contact Section */}
//         <section className="py-16 px-8 text-gray-600 dark:text-gray-400 max-w-4xl mx-auto" id="contact">
//           <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Contact Me</h2>
//           <hr className="w-50 border-gray-300 mb-8" />
//           <div className="mb-8">
//             <p><i className="fa fa-map-marker text-white text-2xl mr-4"></i> Dodballapura</p>
//             <p><i className="fa fa-phone text-white text-2xl mr-4"></i> Phone: +91 9738677801</p>
//             <p><i className="fa fa-envelope text-white text-2xl mr-4"></i> Email: kilarireddysekhar@gmail.com</p>
//           </div>
//           <p className="mb-4">Let's get in touch. Send me a message:</p>
//           <form className="space-y-4">
//             <input className="w-full p-4 border rounded dark:bg-gray-800 dark:border-gray-600" type="text" placeholder="Name" required />
//             <input className="w-full p-4 border rounded dark:bg-gray-800 dark:border-gray-600" type="email" placeholder="Email" required />
//             <input className="w-full p-4 border rounded dark:bg-gray-800 dark:border-gray-600" type="text" placeholder="Subject" required />
//             <textarea className="w-full p-4 border rounded dark:bg-gray-800 dark:border-gray-600" placeholder="Message" required></textarea>
//             <button className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded hover:bg-gray-300 dark:hover:bg-gray-600" type="submit">
//               <i className="fa fa-paper-plane mr-2"></i> SEND MESSAGE
//             </button>
//           </form>
//         </section>

//         {/* Footer */}
//         <footer className="py-16 px-8 text-center text-gray-600 dark:text-gray-400">
//           <div className="text-2xl mb-4">
//             <i className="fa fa-facebook-official mr-4 hover:opacity-75"></i>
//             <i className="fa fa-instagram mr-4 hover:opacity-75"></i>
//             <i className="fa fa-snapchat mr-4 hover:opacity-75"></i>
//             <i className="fa fa-pinterest-p mr-4 hover:opacity-75"></i>
//             <i className="fa fa-twitter mr-4 hover:opacity-75"></i>
//             <i className="fa fa-linkedin hover:opacity-75"></i>
//           </div>
//           <p className="text-sm">Powered by <a href="#" className="text-green-500 hover:text-green-700">Kilari Reddy Sekhar</a></p>
//         </footer>
//       </main>
//     </div>
//   );
// }



"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="bg-[#121418] px-8 md:px-28 py-10 space-y-20">
      
      {/* NAVIGATION */}
      <nav className="flex justify-between items-center py-6 fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md px-6">
        <div className="text-xl font-bold text-gray-300">Kilari Reddy Sekhar</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-gray-300">
          <li><Link href="#home" className="hover:text-white">Home</Link></li>
          <li><Link href="#projects" className="hover:text-white">Projects</Link></li>
          <li><Link href="#skills" className="hover:text-white">Skills</Link></li>
          <li><Link href="#about" className="hover:text-white">About</Link></li>
          <li><Link href="#contact" className="hover:text-white">Contact</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden cursor-pointer" onClick={() => setIsOpen(true)}>
          <span className="text-3xl text-white">☰</span>
        </div>
      </nav>

      {/* Mobile Slide-in Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-[#0f1115] border-l border-gray-700 p-6 transition-all">
            
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-300 text-2xl absolute top-5 right-6"
            >
              ✖
            </button>

            <ul className="flex flex-col gap-6 mt-14 text-gray-300 text-lg">
              <li><Link href="#home" onClick={() => setIsOpen(false)}>Home</Link></li>
              <li><Link href="#projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
              <li><Link href="#skills" onClick={() => setIsOpen(false)}>Skills</Link></li>
              <li><Link href="#about" onClick={() => setIsOpen(false)}>About</Link></li>
              <li><Link href="#contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
            </ul>
          </div>
        </div>
      )}

      <div id="home" className="h-[50px]"></div>

      {/* HERO */}
      <section className="text-center space-y-4 scroll-mt-28">
        <h1 className="text-5xl font-bold text-gray-300">Kilari Reddy Sekhar</h1>
        <p className="text-gray-400 text-lg">
          Software Engineer • Python Backend • AI/ML
        </p>

        <div className="flex justify-center gap-10 text-blue-400 mt-3">
          <a className="hover:underline" href="https://github.com/Reddyshekar1998">GitHub</a>
          <a className="hover:underline" href="https://www.linkedin.com/in/kilari-reddy-sekhar-b309b7200/">LinkedIn</a>
          <a className="hover:underline" href="https://drive.google.com/file/d/1BdpBqyyQ24agWNpNQsbKgG0f1WV0pcrV/view?usp=sharing">Resume</a>
          <a className="hover:underline" href="mailto:reddyshekar1998@gmail.com">Email</a>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="scroll-mt-28">
        <h2 className="text-3xl font-semibold mb-6 text-white">Projects</h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Project 1 */}
          <div className="bg-[#121418] rounded-2xl p-5 border border-gray-300">
            <h3 className="text-xl font-bold text-gray-100 mb-3">Voicebot AI System</h3>
            <Image src="/man_smoke.png" alt="Voicebot" width={500} height={300} className="w-[300px] h-[370px] mb-10" />
            <p className="text-gray-400 mt-2">
              FastAPI + React voicebot with STT → LLM → TTS pipeline.
            </p>
            <div className="flex gap-3 mt-4">
              <span className="px-3 py-1 bg-[#1c1f24] rounded-full text-gray-300 text-sm">FastAPI</span>
              <span className="px-3 py-1 bg-[#1c1f24] rounded-full text-gray-300 text-sm">React</span>
              <span className="px-3 py-1 bg-[#1c1f24] rounded-full text-gray-300 text-sm">LLMs</span>
            </div>
            <div className="mt-5 flex gap-8 text-blue-400">
              <a className="hover:underline" href="#">View Code</a>
              <a className="hover:underline" href="#">Live Demo</a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-[#121418] rounded-2xl p-5 border border-gray-300">
            <h3 className="text-xl font-bold text-gray-100 mb-3">RAG Search Engine</h3>
            <p className="text-gray-400 mt-2">
              A production-grade RAG pipeline using vector DB + LLM.
            </p>
            <div className="flex gap-3 mt-4">
              <span className="px-3 py-1 bg-[#1c1f24] rounded-full text-gray-300 text-sm">FAISS</span>
              <span className="px-3 py-1 bg-[#1c1f24] rounded-full text-gray-300 text-sm">FastAPI</span>
              <span className="px-3 py-1 bg-[#1c1f24] rounded-full text-gray-300 text-sm">LLMs</span>
            </div>
            <div className="mt-5 flex gap-8 text-blue-400">
              <a className="hover:underline" href="#">View Code</a>
              <a className="hover:underline" href="#">Live Demo</a>
            </div>
          </div>

        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="scroll-mt-28">
        <h2 className="text-3xl font-semibold mb-6 text-white">Skills</h2>
        <div className="space-y-3 text-gray-300">
          <p><b className="text-white">Programming:</b> Python, TypeScript, JavaScript, SQL</p>
          <p><b className="text-white">Full Stack:</b> FastAPI, Django, Flask, REST API Architecture, Microservices, React.js, Next.js</p>
          <p><b className="text-white">AI/ML:</b> LLMs, RAG Systems, LangChain/LangGraph, Deep Learning, Computer Vision, OCR, NLP, Generative AI, Model Fine-Tuning, Time Series</p>
          <p><b className="text-white">DevOps:</b> Docker, Kubernetes, CI/CD Pipelines</p>
          <p><b className="text-white">Cloud:</b> AWS, Azure, Google Cloud</p>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-28">
        <h2 className="text-3xl font-semibold mb-6 text-white">About Me</h2>
        <p className="text-gray-300 leading-7">
          I am a Full stack Developer and AI/ML engineer specializing in Python, FastAPI,
          ReactJS, machine learning models, RAG pipelines, and scalable cloud deployments.
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-28">
        <h2 className="text-3xl font-semibold mb-6 text-white">Contact</h2>
        <p className="text-gray-300">Email: krs973867@gmail.com</p>
      </section>

    </main>
  );
}
