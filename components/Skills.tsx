import { motion } from 'motion/react';
import { Brain, Code2, Database, Network, Cpu, BarChart3 } from 'lucide-react';
import { LinearProgress } from '@mui/material';

export default function Skills() {
  const skillCategories = [
    {
      icon: Brain,
      title: 'Deep Learning',
      skills: [
        { name: 'TensorFlow / Keras', level: 95 },
        { name: 'PyTorch', level: 92 },
        { name: 'Neural Networks', level: 90 },
        { name: 'Transfer Learning', level: 88 },
      ]
    },
    {
      icon: Network,
      title: 'NLP & Computer Vision',
      skills: [
        { name: 'Transformers (BERT, GPT)', level: 93 },
        { name: 'OpenCV', level: 87 },
        { name: 'YOLO / Object Detection', level: 85 },
        { name: 'Hugging Face', level: 90 },
      ]
    },
    {
      icon: Code2,
      title: 'Programming',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'JavaScript', level: 80 },
        { name: 'SQL', level: 85 },
        { name: 'C++ (for optimization)', level: 75 },
      ]
    },
    {
      icon: BarChart3,
      title: 'MLOps & Deployment',
      skills: [
        { name: 'Docker / Kubernetes', level: 88 },
        { name: 'MLflow', level: 85 },
        { name: 'AWS SageMaker', level: 82 },
        { name: 'FastAPI / Flask / Django', level: 90 },
      ]
    },
    {
      icon: Database,
      title: 'Data Engineering',
      skills: [
        { name: 'Pandas / NumPy', level: 95 },
        { name: 'Apache Spark', level: 83 },
        { name: 'PostgreSQL / MongoDB', level: 87 },
        { name: 'Data Pipelines', level: 85 },
      ]
    },
    {
      icon: Cpu,
      title: 'Specialized Skills',
      skills: [
        { name: 'Reinforcement Learning', level: 80 },
        { name: 'Agentic AI / Generative AI', level: 88 },
        { name: 'Time Series Forecasting', level: 85 },
        { name: 'MLOps / CI/CD', level: 87 },
      ]
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl text-center mb-4">
            Technical <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Comprehensive skill set across the entire ML lifecycle
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
                className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-indigo-500/50 transition-all hover:shadow-lg hover:shadow-indigo-500/20"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-3 rounded-lg">
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-slate-300">{skill.name}</span>
                        <span className="text-sm text-indigo-400">{skill.level}%</span>
                      </div>
                      <LinearProgress
                        variant="determinate"
                        value={skill.level}
                        sx={{
                          height: 6,
                          borderRadius: 3,
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          '& .MuiLinearProgress-bar': {
                            background: 'linear-gradient(90deg, rgb(99, 102, 241), rgb(168, 85, 247))',
                            borderRadius: 3,
                          }
                        }}
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
