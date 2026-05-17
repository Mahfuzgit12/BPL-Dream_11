import dollarImg from "../../assets/icon.png";
import logo from "../../assets/logo.png";
import { Zap } from "lucide-react";

const navbar = ({ coin }) => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-gradient-to-r from-slate-900/80 via-slate-800/80 to-slate-900/80 border-b border-white/10 shadow-2xl">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-yellow-400 p-2 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
              <img 
                src={logo} 
                alt="BPL Dream 11 Logo" 
                className="h-7 w-auto drop-shadow-sm"
              />
            </div>
            <div>
              <h1 className="text-xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-yellow-300 bg-clip-text text-transparent">
                BPL Dream 11
              </h1>
              <p className="text-xs text-yellow-400/70 font-semibold tracking-wider">Fantasy Cricket</p>
            </div>
          </div>

          {/* Coin Balance Button */}
          <button className="group relative px-6 py-3 rounded-xl font-bold text-lg transition-all duration-300">
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 via-purple-600/80 to-yellow-500/80 rounded-xl opacity-70 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            
            {/* Glass Effect Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 p-px">
              <div className="absolute inset-0 bg-slate-900 rounded-xl"></div>
            </div>

            {/* Content */}
            <div className="relative flex items-center gap-3 text-white">
              <div className="flex items-center justify-center w-7 h-7 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-lg shadow-lg">
                <Zap className="w-4 h-4 text-slate-900" />
              </div>
              <span className="text-white font-bold">{coin.toLocaleString()}</span>
              <img 
                src={dollarImg} 
                alt="Coin" 
                className="h-6 w-6 drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* Shine Effect */}
            <div className="absolute inset-0 rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </div>
          </button>
        </div>
      </div>

      {/* Glowing Border Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
    </nav>
  );
};

export default navbar;
