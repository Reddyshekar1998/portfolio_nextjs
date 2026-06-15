

import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { Button, Chip } from '@mui/material';

export default function Blog() {
  const blogPosts = [
    {
      title: 'Understanding Transformer Architecture: From Attention to GPT',
      excerpt: 'Deep dive into how transformers revolutionized NLP and paved the way for large language models like GPT-4 and BERT.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=300&fit=crop',
      date: 'May 15, 2026',
      readTime: '8 min read',
      category: 'Deep Learning',
      tags: ['Transformers', 'NLP', 'Attention'],
    },
    {
      title: 'Building Production-Ready ML Systems: Best Practices',
      excerpt: 'Essential practices for deploying machine learning models at scale, including monitoring, versioning, and A/B testing.',
      image: 'https://images.unsplash.com/photo-1674027444485-cec3da58eef4?w=600&h=300&fit=crop',
      date: 'May 8, 2026',
      readTime: '12 min read',
      category: 'MLOps',
      tags: ['MLOps', 'Deployment', 'Best Practices'],
    },
    {
      title: 'Computer Vision in 2026: YOLO, SAM, and Beyond',
      excerpt: 'Exploring the latest advancements in computer vision, from real-time object detection to segment anything models.',
      image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&h=300&fit=crop',
      date: 'April 28, 2026',
      readTime: '10 min read',
      category: 'Computer Vision',
      tags: ['YOLO', 'SAM', 'Object Detection'],
    },
    {
      title: 'Fine-tuning LLMs: Techniques and Trade-offs',
      excerpt: 'Comprehensive guide to fine-tuning large language models, including LORA, RLHF, and parameter-efficient methods.',
      image: 'https://images.unsplash.com/photo-1709120395858-92f1c7c577f5?w=600&h=300&fit=crop',
      date: 'April 20, 2026',
      readTime: '15 min read',
      category: 'LLMs',
      tags: ['Fine-tuning', 'LORA', 'RLHF'],
    },
    {
      title: 'Responsible AI: Ethics and Bias in Machine Learning',
      excerpt: 'Addressing critical concerns around AI ethics, fairness, and mitigating bias in machine learning systems.',
      image: 'https://images.unsplash.com/photo-1674027444636-ce7379d51252?w=600&h=300&fit=crop',
      date: 'April 12, 2026',
      readTime: '9 min read',
      category: 'AI Ethics',
      tags: ['Ethics', 'Fairness', 'Bias'],
    },
    {
      title: 'Generative AI: From GANs to Diffusion Models',
      excerpt: 'Evolution of generative models and how diffusion models like Stable Diffusion are changing creative AI.',
      image: 'https://images.unsplash.com/photo-1677442135136-760c813028c0?w=600&h=300&fit=crop',
      date: 'March 30, 2026',
      readTime: '11 min read',
      category: 'Generative AI',
      tags: ['GANs', 'Diffusion', 'Stable Diffusion'],
    },
  ];

  return (
    <section id="blog" className="py-20 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="w-8 h-8 text-indigo-400" />
            <h2 className="text-4xl sm:text-5xl text-center">
             <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Blogs</span>
            </h2>
          </div>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on artificial intelligence and machine learning
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-indigo-500/50 transition-all hover:shadow-xl hover:shadow-indigo-500/20"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Chip
                      label={post.category}
                      size="small"
                      sx={{
                        backgroundColor: 'rgba(99, 102, 241, 0.9)',
                        color: 'white',
                        backdropFilter: 'blur(8px)',
                      }}
                    />
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-lg mb-3 line-clamp-2 group-hover:text-indigo-400 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-slate-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded bg-white/5 text-slate-400 border border-white/10"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <Button
                    endIcon={<ArrowRight />}
                    className="text-indigo-400 hover:text-indigo-300"
                    sx={{
                      textTransform: 'none',
                      padding: 0,
                      minWidth: 'auto',
                      '&:hover': {
                        backgroundColor: 'transparent'
                      }
                    }}
                  >
                    Read More
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outlined"
              endIcon={<ArrowRight />}
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
              View All Articles
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
