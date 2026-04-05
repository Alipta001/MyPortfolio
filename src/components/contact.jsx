import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { motion } from 'framer-motion';

// Validation Schema
const schema = yup.object({
  name: yup.string().required("Name is required").min(3, "Must be at least 3 characters"),
  email: yup.string().email("Invalid email address").required("Email is required"),
  message: yup.string().required("Please enter a message").min(10, "Message is too short"),
}).required();

export default function Contact() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("Form Data:", data);
    alert("Message sent successfully!");
  };

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] -z-10 rounded-full" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] -z-10 rounded-full" />

      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-[1000] italic tracking-tighter uppercase mb-4 text-white">
            Get In <span className="text-cyan-500">Touch.</span>
          </h2>
          <p className="text-gray-400 font-light tracking-wide max-w-md mx-auto">
            Ready to scale your next digital product? Let's discuss your vision.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-white/[0.02] border border-white/5 backdrop-blur-xl p-8 md:p-12 rounded-[40px] shadow-2xl"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Name Input */}
              <div className="relative group">
                <input 
                  {...register("name")}
                  type="text" 
                  placeholder=" " 
                  className={`peer w-full bg-transparent border-b-2 py-3 outline-none transition-all duration-300
                    ${errors.name ? 'border-red-500/50' : 'border-white/10 focus:border-cyan-500'}`} 
                />
                <label className="absolute left-0 top-3 text-gray-500 pointer-events-none transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-cyan-500 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                  YOUR NAME
                </label>
                {errors.name && <span className="text-[10px] text-red-500 mt-1 uppercase tracking-widest">{errors.name.message}</span>}
              </div>

              {/* Email Input */}
              <div className="relative group">
                <input 
                  {...register("email")}
                  type="email" 
                  placeholder=" " 
                  className={`peer w-full bg-transparent border-b-2 py-3 outline-none transition-all duration-300
                    ${errors.email ? 'border-red-500/50' : 'border-white/10 focus:border-cyan-500'}`} 
                />
                <label className="absolute left-0 top-3 text-gray-500 pointer-events-none transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-cyan-500 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                  EMAIL ADDRESS
                </label>
                {errors.email && <span className="text-[10px] text-red-500 mt-1 uppercase tracking-widest">{errors.email.message}</span>}
              </div>
            </div>

            {/* Message Area */}
            <div className="relative group">
              <textarea 
                {...register("message")}
                placeholder=" " 
                rows="4" 
                className={`peer w-full bg-transparent border-b-2 py-3 outline-none transition-all duration-300 resize-none
                  ${errors.message ? 'border-red-500/50' : 'border-white/10 focus:border-cyan-500'}`}
              ></textarea>
              <label className="absolute left-0 top-3 text-gray-500 pointer-events-none transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-cyan-500 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                TELL ME ABOUT THE PROJECT
              </label>
              {errors.message && <span className="text-[10px] text-red-500 mt-1 uppercase tracking-widest">{errors.message.message}</span>}
            </div>

            {/* Submit Button */}
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
              className="group relative w-full overflow-hidden bg-white text-black py-5 rounded-2xl font-bold uppercase tracking-[0.2em] text-sm hover:bg-cyan-500 hover:text-white transition-all duration-500 disabled:opacity-50"
            >
              <span className="relative z-10">
                {isSubmitting ? "Dispatching..." : "Send Message"}
              </span>
              <div className="absolute inset-0 bg-cyan-600 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500" />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}