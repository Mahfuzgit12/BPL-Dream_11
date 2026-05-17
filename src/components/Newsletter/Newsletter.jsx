import { useState } from 'react';
import { Mail, Send, Sparkles } from 'lucide-react';
import { toast } from 'react-toastify';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter a valid email');
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setEmail('');
      toast.success('Successfully subscribed! Check your email 🎉');
    }, 1000);
  };

  return (
    <div className="relative w-full py-20 px-4 md:px-8 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-950 -z-20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Newsletter Container */}
        <div className="group relative backdrop-blur-2xl bg-gradient-to-br from-slate-800/40 via-slate-900/40 to-slate-950/40 border border-white/15 rounded-3xl p-8 md:p-16 shadow-2xl overflow-hidden">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-purple-600/0 to-yellow-500/0 group-hover:from-blue-600/10 group-hover:via-purple-600/10 group-hover:to-yellow-500/10 transition-all duration-500"></div>

          {/* Decorative Elements */}
          <div className="absolute top-8 right-8 text-yellow-400 opacity-10 text-7xl animate-bounce">🏏</div>
          <div className="absolute bottom-8 left-8 text-blue-400 opacity-10 text-6xl animate-pulse">⚡</div>

          {/* Content */}
          <div className="relative text-center space-y-8">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="group/icon relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-yellow-400 rounded-2xl blur-xl opacity-0 group-hover/icon:opacity-75 transition-all duration-300"></div>
                <div className="relative p-4 bg-gradient-to-br from-blue-600 to-yellow-400 rounded-2xl">
                  <Mail className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>

            {/* Header */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/20 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span className="text-sm font-semibold text-yellow-300">Fantasy Cricket Updates</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-yellow-300 bg-clip-text text-transparent">
                  Subscribe to Our Newsletter
                </span>
              </h2>

              <p className="text-lg md:text-xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
                Get exclusive fantasy cricket tips, player insights, league updates, and winning strategies delivered to your inbox every week.
              </p>
            </div>

            {/* Email Form */}
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 hover:bg-white/15 backdrop-blur-sm"
                />
                <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="group relative px-8 py-4 rounded-xl font-bold text-white overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap"
              >
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-yellow-500 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-yellow-400/50"></div>

                {/* Content */}
                <div className="relative flex items-center gap-2">
                  {isLoading ? (
                    <>
                      <span className="animate-spin">⏳</span>
                      <span>Subscribing...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span className="hidden sm:inline">Subscribe</span>
                      <span className="sm:hidden">Join</span>
                    </>
                  )}
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                </div>
              </button>
            </form>

            {/* Privacy Text */}
            <p className="text-xs md:text-sm text-gray-400 font-light">
              ✓ We respect your privacy. Unsubscribe at any time. No spam, only cricket! 🏏
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
