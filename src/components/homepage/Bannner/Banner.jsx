import BannerImg from "../../../assets/bg-shadow.png";
import mainBannerImg from "../../../assets/banner-main.png";
import { ArrowRight, Sparkles } from "lucide-react";

const Banner = () => {
  return (
    <div className="relative container mx-auto px-4 md:px-0 my-8 md:my-12">
      {/* Main Banner Container */}
      <div className="relative h-[450px] md:h-[550px] rounded-3xl overflow-hidden group">
        {/* Animated Background Layers */}
        <div className="absolute inset-0">
          <img 
            className="absolute inset-0 w-full h-full object-cover rounded-3xl" 
            src={BannerImg} 
            alt="banner background"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-transparent to-slate-900/40 rounded-3xl"></div>
          
          {/* Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-yellow-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500"></div>
        </div>

        {/* Content Container */}
        <div className="relative flex flex-col lg:flex-row items-center justify-between h-full px-6 md:px-12 gap-8 z-10">
          {/* Left Side - Text Content */}
          <div className="flex-1 flex flex-col justify-center space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 w-fit px-4 py-2 bg-white/10 border border-white/20 rounded-full backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-semibold text-yellow-300">Fantasy Cricket Revolution</span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-white">
                Assemble Your Ultimate
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-yellow-300 bg-clip-text text-transparent">
                  Dream 11 Team
                </span>
              </h1>
            </div>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-gray-300 font-medium max-w-xl leading-relaxed">
              Beyond Boundaries, Beyond Limits. Select elite cricket players and compete with millions worldwide.
            </p>

            {/* CTA Button */}
            <div className="flex gap-4 pt-4">
              <button className="group relative px-8 md:px-10 py-4 rounded-xl font-bold text-lg text-white overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95">
                {/* Animated Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-yellow-500 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-yellow-400/50"></div>

                {/* Glass Overlay */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Content */}
                <div className="relative flex items-center justify-center gap-2">
                  <span>Claim Free Credit</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                </div>
              </button>

              {/* Secondary Button */}
              <button className="group relative px-8 md:px-10 py-4 rounded-xl font-bold text-lg text-white overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95">
                <div className="absolute inset-0 bg-white/10 border border-white/20 rounded-xl backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300"></div>
                <div className="relative flex items-center justify-center gap-2">
                  <span>Learn More</span>
                </div>
              </button>
            </div>
          </div>

          {/* Right Side - Image with Effects */}
          <div className="flex-1 flex justify-center items-center relative">
            {/* Glow Background */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/30 via-purple-600/20 to-yellow-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Player Image */}
            <img 
              src={mainBannerImg} 
              alt="Cricket player" 
              className="relative max-h-96 object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500 z-10"
            />
          </div>
        </div>

        {/* Animated Border */}
        <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-yellow-400 bg-clip-border opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
      </div>

      {/* Floating Statistics */}
      <div className="hidden lg:grid grid-cols-3 gap-4 mt-8">
        <div className="px-6 py-4 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group/stat">
          <h3 className="text-sm font-semibold text-gray-400">Total Players</h3>
          <p className="text-3xl font-bold text-white mt-2">1000+</p>
          <p className="text-xs text-yellow-400 mt-1">✨ Elite Selection</p>
        </div>
        <div className="px-6 py-4 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group/stat">
          <h3 className="text-sm font-semibold text-gray-400">Active Players</h3>
          <p className="text-3xl font-bold text-white mt-2">50K+</p>
          <p className="text-xs text-blue-400 mt-1">⚡ Competing Now</p>
        </div>
        <div className="px-6 py-4 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group/stat">
          <h3 className="text-sm font-semibold text-gray-400">Prize Pool</h3>
          <p className="text-3xl font-bold text-white mt-2">₹100Cr+</p>
          <p className="text-xs text-purple-400 mt-1">🏆 Ready to Win</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;