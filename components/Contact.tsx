"use client";
import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Twitter, Send, MapPin, Phone } from 'lucide-react';
import { Button, TextField } from '@mui/material';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch(
        "${process.env.NEXT_PUBLIC_API_URL}/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      console.log("Request body:", formData);
      const data = await response.json();

      if (data.success) {
        setStatus("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("Server error.");
    }

    setLoading(false);
  };
  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl text-center mb-4">
            Get In <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Let's collaborate on your next AI project or discuss opportunities
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl mb-6">Contact Information</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-3 rounded-lg">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Email</p>
                      <a href="mailto:kilarireddysekhar@gmail.com" className="text-slate-200 hover:text-indigo-400 transition-colors">
                        kilarireddysekhar@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-3 rounded-lg">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Phone</p>
                      <a href="tel:+919738677801" className="text-slate-200 hover:text-indigo-400 transition-colors">
                        +91-9738677801
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-3 rounded-lg">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Location</p>
                      <p className="text-slate-200">Bangalore, Karnataka</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg mb-4">Connect With Me</h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Reddyshekar1998"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-800/50 p-3 rounded-lg hover:bg-indigo-500/20 border border-white/10 hover:border-indigo-500/50 transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/kilari-reddy-sekhar-b309b7200"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-800/50 p-3 rounded-lg hover:bg-indigo-500/20 border border-white/10 hover:border-indigo-500/50 transition-all"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-800/50 p-3 rounded-lg hover:bg-indigo-500/20 border border-white/10 hover:border-indigo-500/50 transition-all"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 rounded-xl p-6">
                <h4 className="text-lg mb-2">Open for Opportunities</h4>
                <p className="text-sm text-slate-400">
                  Currently available for consulting projects, full-time roles, and collaborative research in AI/ML.
                  Particularly interested in NLP, Computer Vision, and Generative AI applications.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-8"
            >
              <h3 className="text-2xl mb-6">Send a Message</h3>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Your Name"
                  variant="outlined"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      color: 'white',
                      '& fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.1)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(129, 140, 248, 0.5)',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'rgb(129, 140, 248)',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: 'rgb(148, 163, 184)',
                    },
                  }}
                />

                <TextField
                  fullWidth
                  label="Email Address"
                  type="email"
                  variant="outlined"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      color: 'white',
                      '& fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.1)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(129, 140, 248, 0.5)',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'rgb(129, 140, 248)',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: 'rgb(148, 163, 184)',
                    },
                  }}
                />

                <TextField
                  fullWidth
                  label="Subject"
                  variant="outlined"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      color: 'white',
                      '& fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.1)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(129, 140, 248, 0.5)',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'rgb(129, 140, 248)',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: 'rgb(148, 163, 184)',
                    },
                  }}
                />

                <TextField
                  fullWidth
                  label="Message"
                  multiline
                  rows={4}
                  variant="outlined"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      color: 'white',
                      '& fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.1)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(129, 140, 248, 0.5)',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'rgb(129, 140, 248)',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: 'rgb(148, 163, 184)',
                    },
                  }}
                />

                <Button
                  type="submit"
                  fullWidth
                  disabled={loading}
                  variant="contained"
                  endIcon={<Send />}
                  sx={{
                    background: 'linear-gradient(90deg, rgb(99, 102, 241), rgb(168, 85, 247))',
                    textTransform: 'none',
                    padding: '0.75rem',
                    fontSize: '1rem',
                    '&:hover': {
                      background: 'linear-gradient(90deg, rgb(79, 82, 221), rgb(148, 65, 227))',
                    }
                  }}
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
                {status && (
                  <p className="text-sm">
                    {status}
                  </p>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
