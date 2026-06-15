'use client';
import { motion } from 'motion/react';
import { Award, Briefcase, GraduationCap, TrendingUp } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Briefcase, label: 'Years Experience', value: '3+' },
    { icon: Award, label: 'Projects Completed', value: '10+' },
    { icon: TrendingUp, label: 'Model Accuracy', value: '95%+' },
    { icon: GraduationCap, label: 'Certifications', value: '3' },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl text-center mb-4">
            About <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Passionate about leveraging AI to solve complex real-world problems
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop"
                alt="AI Neural Network"
                className="relative rounded-2xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <p className="text-slate-300 leading-relaxed">
                I’m a passionate AI/ML Engineer with hands-on experience in designing, developing, and deploying scalable
                machine learning and AI-driven applications. My expertise spans across deep learning frameworks such as
                TensorFlow, PyTorch, and Keras, along with strong proficiency in full-stack development and backend systems.
              </p>

              <p className="text-slate-300 leading-relaxed">
                I specialize in building end-to-end AI solutions, from data collection and preprocessing to model training,
                deployment, and production integration. My core areas of expertise include Natural Language Processing (NLP),
                Computer Vision, Generative AI, Agentic AI, and intelligent automation systems.
              </p>

              <p className="text-slate-300 leading-relaxed">
                With a strong foundation in computer science, mathematics, and software engineering, I focus on developing
                production-ready AI systems that are accurate, scalable, maintainable, and efficient. I’m passionate about
                leveraging AI technologies to solve real-world problems and create impactful digital solutions.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-indigo-500/50 transition-colors"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-indigo-400" />
                <div className="text-3xl mb-2 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
