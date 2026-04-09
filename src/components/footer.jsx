import React from 'react';
import { FaGithub, FaLinkedinIn, FaTwitter, FaEnvelope, FaCode } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      name: 'GitHub', 
      href: 'https://github.com/Alipta001', 
      icon: <FaGithub size={20} /> 
    },
    { 
      name: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/alipta-ghosh001/', 
      icon: <FaLinkedinIn size={20} /> 
    },
    { 
      name: 'Twitter', 
      href: 'https://twitter.com/your-username', 
      icon: <FaTwitter size={20} /> 
    },
    { 
      name: 'Email', 
      href: 'mailto:aliptaghosh7@gmail.com', 
      icon: <FaEnvelope size={20} /> 
    },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
  ];

  return (
    <footer className="relative bg-[#030303] pt-20 pb-10 border-t border-white/5 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[100px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 text-center md:text-left">
          
          {/* Brand Column */}
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-6">
              <span className="text-2xl font-black text-white uppercase italic tracking-tighter">
                ALIPTA<span className="text-cyan-500 italic lowercase font-light">.dev</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-[250px]">
              Crafting high-performance MERN applications and premium digital experiences.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="flex flex-col items-center">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6 text-cyan-500">Navigation</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6 text-cyan-500">Connect</h4>
            <div className="flex gap-5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-cyan-500 hover:border-cyan-500/50 transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-[11px] uppercase tracking-[0.2em]">
            © {currentYear} ALIPTA GHOSH. ALL RIGHTS RESERVED.
          </p>
          
          <div className="flex items-center gap-2 text-gray-500 text-[11px] uppercase tracking-[0.2em]">
            <span>Handcrafted with</span>
            <FaCode size={14} className="text-cyan-500/80" />
            <span>in West Bengal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}