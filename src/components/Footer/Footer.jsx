import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { toast } from 'react-toastify';
import logo from '../../assets/logo.png';

const Footer = () => {
  const [footerEmail, setFooterEmail] = useState('');

  const handleFooterSubscribe = (e) => {
    e.preventDefault();
    if (!footerEmail || !/\S+@\S+\.\S+/.test(footerEmail)) {
      toast.error('Please enter a valid email');
      return;
    }
    setFooterEmail('');
    toast.success('Thank you for subscribing!');
  };

  const quickLinks = ['Home','Players','Leagues','Rules','Statistics'];
  const resources = ['Blog','Tutorials','FAQ','Support','Community'];
  const legal = ['Privacy Policy','Terms of Service','Cookie Policy','Disclaimer'];

  return (
    <footer className="relative bg-[#020617] text-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-br from-[#60A5FA] to-[#FDE68A] p-2 rounded-xl shadow-md">
                <img src={logo} alt="BPL Dream 11" className="h-10 w-auto" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">BPL Dream 11</h3>
                <p className="text-sm text-yellow-300 font-medium">Premium Fantasy Cricket</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm max-w-sm">Assemble your ultimate team, compete in leagues, and win big with expert tips and exclusive insights.</p>

            <div className="space-y-3 pt-4 text-sm text-gray-300">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-yellow-300" />
                <span>Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-yellow-300" />
                <a href="tel:+8801700000000" className="hover:text-yellow-300 transition">+880 17 0000 0000</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-yellow-300" />
                <a href="mailto:info@bpldream11.com" className="hover:text-yellow-300 transition">info@bpldream11.com</a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              {quickLinks.map((l, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-yellow-300 transition-transform duration-200 hover:translate-x-1">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              {resources.map((r,i) => (
                <li key={i}><a href="#" className="hover:text-yellow-300 transition-transform duration-200 hover:translate-x-1">{r}</a></li>
              ))}
            </ul>
          </div>

          {/* Newsletter Mini */}
          <div>
            <h4 className="text-white font-semibold mb-4">Subscribe</h4>
            <p className="text-gray-400 text-sm mb-4">Get match alerts and expert fantasy tips.</p>
            <form onSubmit={handleFooterSubscribe} className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                value={footerEmail}
                onChange={(e) => setFooterEmail(e.target.value)}
                className="flex-1 px-4 py-2 rounded-lg bg-white/6 border border-white/8 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition"
              />
              <button type="submit" className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#FDE68A] via-[#60A5FA] to-[#8B5CF6] text-[#021025] font-semibold shadow-sm hover:scale-105 transition"> <Send className="w-4 h-4" /> </button>
            </form>

            <div className="mt-6">
              <span className="text-gray-400 text-sm">Follow us</span>
              <div className="flex items-center gap-3 mt-3">
                <a href="#" className="p-2 rounded-full bg-white/4 hover:bg-white/8 transition"><FaFacebook className="w-4 h-4 text-white" /></a>
                <a href="#" className="p-2 rounded-full bg-white/4 hover:bg-white/8 transition"><FaTwitter className="w-4 h-4 text-white" /></a>
                <a href="#" className="p-2 rounded-full bg-white/4 hover:bg-white/8 transition"><FaInstagram className="w-4 h-4 text-white" /></a>
                <a href="#" className="p-2 rounded-full bg-white/4 hover:bg-white/8 transition"><FaLinkedin className="w-4 h-4 text-white" /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-400">&copy; {new Date().getFullYear()} BPL Dream 11. All rights reserved.</div>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            {legal.map((l,i) => (
              <span key={i} className="hover:text-yellow-300 transition">{l}{i < legal.length -1 && <span className="mx-2">|</span>}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
