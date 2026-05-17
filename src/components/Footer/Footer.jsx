import { useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, Facebook } from 'lucide-react';
import { toast } from 'react-toastify';
import logo from '../../assets/logo.png';

const Footer = () => {
  const [footerEmail, setFooterEmail] = useState('');

  const handleFooterSubscribe = (e) => {
    e.preventDefault();
    if (!footerEmail) {
      toast.error('Please enter a valid email');
      return;
    }
    setFooterEmail('');
    toast.success('Thank you for subscribing! 🏏');
  };

  const quickLinks = [
    { label: 'Home', href: '#' },
    { label: 'Players', href: '#' },
    { label: 'Leagues', href: '#' },
    { label: 'Rules', href: '#' },
    { label: 'Statistics', href: '#' },
  ];

  const resources = [
    { label: 'Blog', href: '#' },
    { label: 'Tutorials', href: '#' },
    { label: 'FAQ', href: '#' },
    { label: 'Support', href: '#' },
    { label: 'Community', href: '#' },
  ];

  const legal = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'Disclaimer', href: '#' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-400' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-blue-300' },
    { icon: Github, href: '#', label: 'GitHub', color: 'hover:text-gray-300' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-500' },
  ];

  return (
    <footer className="relative w-full overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950/10 to-slate-950 -z-10"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
      </div>

      {/* Top Border Glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-br from-blue-600 to-yellow-400 p-3 rounded-xl shadow-lg hover:shadow-blue-500/50 transition-all duration-300">
                <img src={logo} alt="BPL Dream 11" className="h-8 w-auto" />
              </div>
              <div>
                <h3 className="text-2xl font-black bg-gradient-to-r from-blue-400 to-yellow-300 bg-clip-text text-transparent">
                  BPL Dream 11
                </h3>
                <p className="text-xs text-yellow-400 font-bold tracking-widest">FANTASY CRICKET</p>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed text-sm md:text-base max-w-md">
              Experience the ultimate fantasy cricket platform. Assemble your dream team, compete with millions, and win big. Join the revolution of fantasy sports in Bangladesh.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3 text-sm group cursor-pointer">
                <MapPin className="w-4 h-4 text-yellow-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-gray-300 group-hover:text-white transition-colors">Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center gap-3 text-sm group cursor-pointer">
                <Phone className="w-4 h-4 text-yellow-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a href="tel:+8801700000000" className="text-gray-300 group-hover:text-yellow-400 transition-colors">
                  +880 17 0000 0000
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm group cursor-pointer">
                <Mail className="w-4 h-4 text-yellow-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a href="mailto:info@bpldream11.com" className="text-gray-300 group-hover:text-yellow-400 transition-colors">
                  info@bpldream11.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h4 className="text-white font-bold text-lg flex items-center gap-3">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-yellow-400 rounded-full"></div>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-yellow-400 transition-all duration-300 text-sm hover:translate-x-1 inline-block group"
                  >
                    <span className="group-hover:text-yellow-400">→</span> {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-5">
            <h4 className="text-white font-bold text-lg flex items-center gap-3">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-yellow-400 rounded-full"></div>
              Resources
            </h4>
            <ul className="space-y-3">
              {resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-yellow-400 transition-all duration-300 text-sm hover:translate-x-1 inline-block group"
                  >
                    <span className="group-hover:text-yellow-400">→</span> {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-5">
            <h4 className="text-white font-bold text-lg flex items-center gap-3">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-yellow-400 rounded-full"></div>
              Newsletter
            </h4>
            <p className="text-gray-400 text-sm">Subscribe for daily fantasy tips and updates</p>
            <form onSubmit={handleFooterSubscribe} className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                value={footerEmail}
                onChange={(e) => setFooterEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm transition-all hover:bg-white/10 focus:bg-white/15"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-yellow-500 text-white font-bold hover:from-blue-700 hover:to-yellow-600 transition-all duration-300 flex items-center justify-center gap-2 text-sm hover:shadow-lg hover:shadow-yellow-500/30 active:scale-95"
              >
                <Send className="w-4 h-4" />
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-8"></div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Social Links */}
          <div className="flex items-center gap-6">
            <span className="text-gray-400 text-sm font-bold">Follow Us:</span>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className={`p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 hover:border-white/30 transition-all duration-300 transform hover:scale-110 active:scale-95 ${social.color}`}
                  title={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Copyright & Legal */}
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2 md:gap-4 justify-start md:justify-end text-xs md:text-sm">
              {legal.map((link, index) => (
                <div key={index} className="flex items-center gap-2 md:gap-4">
                  <a href={link.href} className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                    {link.label}
                  </a>
                  {index < legal.length - 1 && <span className="text-gray-600 hidden md:inline">|</span>}
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-xs md:text-sm text-center md:text-right">
              &copy; 2024 BPL Dream 11. All rights reserved. | Crafted with 🏏 for fantasy cricket lovers
            </p>
          </div>
        </div>
      </div>

      {/* Live Indicator */}
      <div className="absolute bottom-6 right-6 flex items-center gap-2 text-xs group cursor-pointer">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse group-hover:animate-bounce"></div>
        <span className="text-gray-400 group-hover:text-green-400 transition-colors">Live & Active</span>
      </div>
    </footer>
  );
};

export default Footer;
