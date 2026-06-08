import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';
import { Button } from '@mui/material';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 -left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="mb-6 inline-block"
          >
            <img
              src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=200&h=200&fit=crop"
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-indigo-500/50 shadow-2xl shadow-indigo-500/50"
            />
          </motion.div>

          <h1 className="text-5xl sm:text-7xl mb-4">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI/ML Engineer
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-slate-300 mb-6">
            Building Intelligent Systems with Deep Learning & Neural Networks
          </p>

          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
            Specialized in Natural Language Processing, Computer Vision, Generative AI, and Agentic AI with full stack development skills.
            Transforming data into actionable insights with state-of-the-art machine learning models.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button
              variant="contained"
              startIcon={<Mail />}
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({
                  behavior: 'smooth',
                });
              }}
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700"
              sx={{
                textTransform: 'none',
                borderRadius: '0.5rem',
                padding: '0.75rem 2rem'
              }}
            >
              Get In Touch
            </Button>
            <Button
              variant="outlined"
              startIcon={<Download />}
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/resume.pdf';
                link.download = 'Reddy_Shekar_Resume.pdf';
                link.click();
              }}
              className="border-indigo-500 text-indigo-400 hover:bg-indigo-500/10"
              sx={{
                textTransform: 'none',
                borderRadius: '0.5rem',
                padding: '0.75rem 2rem',
                borderColor: 'rgb(129, 140, 248)',
                color: 'rgb(165, 180, 252)',
                '&:hover': {
                  borderColor: 'rgb(129, 140, 248)',
                  backgroundColor: 'rgba(99, 102, 241, 0.1)'
                }
              }}
            >
              Download CV
            </Button>
          </div>

          <div className="flex gap-6 justify-center">
            <a href="https://github.com/Reddyshekar1998" target="_blank" rel="noopener noreferrer"
               className="text-slate-400 hover:text-indigo-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/kilari-reddy-sekhar-b309b7200" target="_blank" rel="noopener noreferrer"
               className="text-slate-400 hover:text-indigo-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:kilarireddysekhar@gmail.com"
               className="text-slate-400 hover:text-indigo-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-slate-400" />
        </motion.div>
      </div>
    </section>
  );
}
