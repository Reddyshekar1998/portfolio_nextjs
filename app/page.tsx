// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.jpeg"
//           alt="Next.js logo"
//           width={200}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             Hello Here Kilari Reddy 
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }


import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-zinc-50 font-sans dark:bg-black">
      {/* Sidebar for larger screens */}
      <nav className="hidden sm:block w-30 bg-gray-900 text-white fixed h-full z-10">
        <div className="p-4">
          <Image
            src="/avatar_smoke.jpg"
            alt="Avatar"
            width={100}
            height={100}
            className="rounded-full mx-auto"
          />
        </div>
        <a href="#" className="block py-4 px-4 text-center hover:bg-gray-700">
          <i className="fa fa-home text-2xl"></i>
          <p>HOME</p>
        </a>
        <a href="#about" className="block py-4 px-4 text-center hover:bg-gray-700">
          <i className="fa fa-user text-2xl"></i>
          <p>ABOUT</p>
        </a>
        <a href="#photos" className="block py-4 px-4 text-center hover:bg-gray-700">
          <i className="fa fa-eye text-2xl"></i>
          <p>PHOTOS</p>
        </a>
        <a href="#contact" className="block py-4 px-4 text-center hover:bg-gray-700">
          <i className="fa fa-envelope text-2xl"></i>
          <p>CONTACT</p>
        </a>
      </nav>

      {/* Top Navbar for small screens */}
      <div className="sm:hidden bg-black text-white opacity-90 fixed top-0 w-full z-10">
        <div className="flex justify-center text-sm">
          <a href="#" className="flex-1 py-2 text-center">HOME</a>
          <a href="#about" className="flex-1 py-2 text-center">ABOUT</a>
          <a href="#photos" className="flex-1 py-2 text-center">PHOTOS</a>
          <a href="#contact" className="flex-1 py-2 text-center">CONTACT</a>
        </div>
      </div>

      {/* Main Content */}
      <main className="sm:ml-30 w-full pt-16 sm:pt-0">
        {/* Header/Home */}
        <header className="py-16 px-8 text-center bg-black text-white" id="home">
          <h1 className="text-4xl sm:text-6xl font-bold">
            <span className="hidden sm:inline">I'm </span>Kilari Reddy Sekhar
          </h1>
          <p className="text-lg mt-4">AI & Machine Learning Engineer | Full stack Developer</p>
          <Image
            src="/man_smoke.png"
            alt="Reddy"
            width={992}
            height={1108}
            className="mx-auto mt-8"
          />
        </header>

        {/* About Section */}
        <section className="py-16 px-8 text-gray-600 dark:text-gray-400 max-w-4xl mx-auto" id="about">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">Kilari Reddy Sekhar</h2>
          <hr className="w-50 border-gray-300 my-4" />
          <p className="text-lg leading-8 mb-8">
            👋 Hi there! I'm Kilari Reddy Sekhar — a passionate engineer with a deep love for artificial intelligence and backend development. I specialize in building scalable APIs, deploying machine learning solutions, and integrating generative AI capabilities into real-world applications.
            With hands-on experience in FastAPI, Flask, Django, and ReactJS integration, I enjoy transforming complex data and model workflows into clean, production-ready services. Whether it's building microservices, automating pipelines, or fine-tuning GenAI models with RAG, I strive to create meaningful, high-impact solutions.
          </p>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">My Skills</h3>
          <p className="mb-2"><strong>AI and ML:</strong> Deep learning,  Supervised Learning, Clustering, Reinforcement Learning, Recommendation Systems, MLOps </p>
          <div className="bg-white border rounded h-7 mb-4">
            <div className="bg-gray-800 h-full w-95%"></div>
          </div>
          <p className="mb-2"><strong>Web development:</strong> FastAPI, Django, Flask, REST APIs, microservices</p>
          <div className="bg-white border rounded h-7 mb-4">
            <div className="bg-gray-800 h-full w-95%"></div>
          </div>
          <p className="mb-2"><strong>Data & DevOps:</strong> Data scraping, Data Preprocessing, feature engineering, Docker, Jenkins, CI/CD</p>
          <div className="bg-white border rounded h-7 mb-4">
            <div className="bg-gray-800 h-full w-85%"></div>
          </div>
          <p className="mb-2"><strong>Frontend & Integration:</strong> ReactJS, NextJS, RestAPI integration</p>
          <div className="bg-white border rounded h-7 mb-8">
            <div className="bg-gray-800 h-full w-80%"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-gray-100 dark:bg-gray-800 p-8 rounded">
            <div className="text-center">
              <span className="text-3xl font-bold">11+</span><br />
              Partners
            </div>
            <div className="text-center">
              <span className="text-3xl font-bold">55+</span><br />
              Projects Done
            </div>
            <div className="text-center">
              <span className="text-3xl font-bold">89+</span><br />
              Happy Clients
            </div>
            <div className="text-center">
              <span className="text-3xl font-bold">150+</span><br />
              Meetings
            </div>
          </div>

          <button className="mt-8 px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded hover:bg-gray-300 dark:hover:bg-gray-600">
            <i className="fa fa-download mr-2"></i> Download Resume
          </button>

          <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-16 mb-8">My Price</h3>
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 border rounded shadow">
              <div className="bg-gray-800 text-white text-xl py-8 text-center">Basic</div>
              <div className="p-4">
                <p className="py-2">Web Development and API integration</p>
                <p className="py-2">Deployment in AWS</p>
                <p className="py-2">5GB Storage</p>
                <p className="py-2">Mail Support</p>
                <div className="text-center py-4">
                  <h2 className="text-2xl font-bold">₹ 40000</h2>
                  <span className="text-gray-500">per month</span>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-6 text-center">
                  <button className="px-6 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded hover:bg-gray-200 dark:hover:bg-gray-600">Sign Up</button>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 border rounded shadow">
              <div className="bg-gray-800 text-white text-xl py-8 text-center">Pro</div>
              <div className="p-4">
                <p className="py-2">AI/ML development and Deployment</p>
                <p className="py-2">Integration with Web or App</p>
                <p className="py-2">50GB Storage</p>
                <p className="py-2">Endless Support</p>
                <div className="text-center py-4">
                  <h2 className="text-2xl font-bold">₹ 60000</h2>
                  <span className="text-gray-500">per month</span>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-6 text-center">
                  <button className="px-6 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded hover:bg-gray-200 dark:hover:bg-gray-600">Sign Up</button>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-16 mb-8">My Projects</h3>
          <div className="mb-8">
            <Image src="/w3images/bandmember.jpg" alt="Avatar" width={80} height={80} className="rounded-full float-left mr-4" />
            <p><span className="text-lg font-semibold mr-4">Chris Fox.</span> CEO at Mighty Schools.</p>
            <p>Kilari Reddy saved us from a web disaster.</p>
          </div>
          <div>
            <Image src="/w3images/avatar_g2.jpg" alt="Avatar" width={80} height={80} className="rounded-full float-left mr-4" />
            <p><span className="text-lg font-semibold mr-4">Rebecca Flex.</span> CEO at Company.</p>
            <p>No one is better than Kilari Reddy.</p>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-16 px-8 max-w-6xl mx-auto" id="photos">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">My Photos</h2>
          <hr className="w-50 border-gray-300 mb-8" />
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <Image src="/w3images/wedding.jpg" alt="Wedding" width={500} height={300} className="w-full mb-4" />
              <Image src="/w3images/rocks.jpg" alt="Rocks" width={500} height={300} className="w-full mb-4" />
              <Image src="/w3images/sailboat.jpg" alt="Sailboat" width={500} height={300} className="w-full" />
            </div>
            <div>
              <Image src="/w3images/underwater.jpg" alt="Underwater" width={500} height={300} className="w-full mb-4" />
              <Image src="/w3images/chef.jpg" alt="Chef" width={500} height={300} className="w-full mb-4" />
              <Image src="/w3images/wedding.jpg" alt="Wedding" width={500} height={300} className="w-full mb-4" />
              <Image src="/w3images/p6.jpg" alt="P6" width={500} height={300} className="w-full" />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-8 text-gray-600 dark:text-gray-400 max-w-4xl mx-auto" id="contact">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Contact Me</h2>
          <hr className="w-50 border-gray-300 mb-8" />
          <div className="mb-8">
            <p><i className="fa fa-map-marker text-white text-2xl mr-4"></i> Dodballapura</p>
            <p><i className="fa fa-phone text-white text-2xl mr-4"></i> Phone: +91 9738677801</p>
            <p><i className="fa fa-envelope text-white text-2xl mr-4"></i> Email: kilarireddysekhar@gmail.com</p>
          </div>
          <p className="mb-4">Let's get in touch. Send me a message:</p>
          <form className="space-y-4">
            <input className="w-full p-4 border rounded dark:bg-gray-800 dark:border-gray-600" type="text" placeholder="Name" required />
            <input className="w-full p-4 border rounded dark:bg-gray-800 dark:border-gray-600" type="email" placeholder="Email" required />
            <input className="w-full p-4 border rounded dark:bg-gray-800 dark:border-gray-600" type="text" placeholder="Subject" required />
            <textarea className="w-full p-4 border rounded dark:bg-gray-800 dark:border-gray-600" placeholder="Message" required></textarea>
            <button className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded hover:bg-gray-300 dark:hover:bg-gray-600" type="submit">
              <i className="fa fa-paper-plane mr-2"></i> SEND MESSAGE
            </button>
          </form>
        </section>

        {/* Footer */}
        <footer className="py-16 px-8 text-center text-gray-600 dark:text-gray-400">
          <div className="text-2xl mb-4">
            <i className="fa fa-facebook-official mr-4 hover:opacity-75"></i>
            <i className="fa fa-instagram mr-4 hover:opacity-75"></i>
            <i className="fa fa-snapchat mr-4 hover:opacity-75"></i>
            <i className="fa fa-pinterest-p mr-4 hover:opacity-75"></i>
            <i className="fa fa-twitter mr-4 hover:opacity-75"></i>
            <i className="fa fa-linkedin hover:opacity-75"></i>
          </div>
          <p className="text-sm">Powered by <a href="#" className="text-green-500 hover:text-green-700">Kilari Reddy Sekhar</a></p>
        </footer>
      </main>
    </div>
  );
}
