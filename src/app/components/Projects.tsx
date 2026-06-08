import { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, Play, ChevronRight } from 'lucide-react';
import { Button, Chip } from '@mui/material';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'Intelligent Chatbot with GPT-4',
      description: 'Built a context-aware chatbot using GPT-4 API with custom fine-tuning for domain-specific knowledge. Implemented RAG architecture for enhanced accuracy.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      tags: ['NLP', 'GPT-4', 'Python', 'RAG'],
      metrics: ['95% User Satisfaction', '40% Cost Reduction', '2M+ Conversations'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'Real-time Object Detection System',
      description: 'Developed a real-time object detection system using YOLOv8, deployed on edge devices. Achieved 60 FPS with 92% accuracy.',
      image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&h=400&fit=crop',
      tags: ['Computer Vision', 'YOLO', 'PyTorch', 'Edge AI'],
      metrics: ['92% Accuracy', '60 FPS', 'Edge Deployment'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'Predictive Analytics Dashboard',
      description: 'Created an end-to-end ML pipeline for sales forecasting using LSTM networks. Integrated with real-time data streams and interactive visualizations.',
      image: 'https://images.unsplash.com/photo-1674027444485-cec3da58eef4?w=600&h=400&fit=crop',
      tags: ['Time Series', 'LSTM', 'TensorFlow', 'MLOps'],
      metrics: ['15% Revenue Increase', 'Real-time Predictions', 'Auto-scaling'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'Medical Image Classification',
      description: 'Developed a deep learning model for detecting anomalies in X-ray images. Used transfer learning with ResNet-50 and achieved state-of-the-art results.',
      image: 'https://images.unsplash.com/photo-1709120395858-92f1c7c577f5?w=600&h=400&fit=crop',
      tags: ['Medical AI', 'CNN', 'Transfer Learning', 'Healthcare'],
      metrics: ['97% Sensitivity', 'FDA Cleared', '10K+ Diagnoses'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'Sentiment Analysis Engine',
      description: 'Built a multi-lingual sentiment analysis system using BERT transformers. Processes 10M+ social media posts daily with 94% accuracy.',
      image: 'https://images.unsplash.com/photo-1674027444636-ce7379d51252?w=600&h=400&fit=crop',
      tags: ['NLP', 'BERT', 'Multi-lingual', 'Big Data'],
      metrics: ['94% Accuracy', '10M+ Posts/Day', '15 Languages'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'Generative Art with GANs',
      description: 'Implemented StyleGAN2 for creating high-quality artistic images. Built a web interface for users to generate and customize AI art.',
      image: 'https://images.unsplash.com/photo-1677442135136-760c813028c0?w=600&h=400&fit=crop',
      tags: ['GANs', 'Generative AI', 'PyTorch', 'Creative AI'],
      metrics: ['1024x1024 Resolution', '50K+ Artworks', 'Web Deployed'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl text-center mb-4">
            Featured <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Real-world AI solutions delivering measurable impact
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-indigo-500/50 transition-all hover:shadow-xl hover:shadow-indigo-500/20"
                onMouseEnter={() => setSelectedProject(index)}
                onMouseLeave={() => setSelectedProject(null)}
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

                  {selectedProject === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 bg-slate-900/90 flex items-center justify-center gap-4"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Button
                          variant="contained"
                          startIcon={<Github />}
                          className="bg-white/10 hover:bg-white/20"
                          sx={{
                            textTransform: 'none',
                            backdropFilter: 'blur(8px)'
                          }}
                        >
                          Code
                        </Button>
                      </a>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <Button
                          variant="contained"
                          startIcon={<Play />}
                          className="bg-gradient-to-r from-indigo-500 to-purple-600"
                          sx={{
                            textTransform: 'none',
                          }}
                        >
                          Demo
                        </Button>
                      </a>
                    </motion.div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl mb-3 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(99, 102, 241, 0.1)',
                          color: 'rgb(165, 180, 252)',
                          border: '1px solid rgba(99, 102, 241, 0.3)',
                          fontSize: '0.75rem'
                        }}
                      />
                    ))}
                  </div>

                  <div className="space-y-1">
                    {project.metrics.map((metric) => (
                      <div key={metric} className="flex items-center gap-2 text-xs text-slate-400">
                        <ChevronRight className="w-3 h-3 text-indigo-400" />
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
