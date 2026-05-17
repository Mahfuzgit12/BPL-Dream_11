import { useState } from 'react';
import { Mail, Send } from 'lucide-react';
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
      toast.success('Successfully subscribed to newsletter!');
    }, 1000);
  };

  return (
    <div className="w-full py-20 px-4 md:px-8 bg-gradient-to-b from-slate-900 via-slate-950 to-black relative">
      <div className="max-w-4xl mx-auto">

        {/* Newsletter Container */}
        <div className="relative z-10 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-16 shadow-2xl">
          {/* Cricket Decorative Elements */}
          <div className="absolute top-6 right-6 text-yellow-400 opacity-20 text-6xl">🏏</div>
          <div className="absolute bottom-6 left-6 text-blue-400 opacity-20 text-5xl">⚡</div>

          {/* Content */}
          <div className="relative text-center space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-yellow-400 p-3 rounded-full">
                  <Mail className="w-8 h-8 text-white" />
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-yellow-300 bg-clip-text text-transparent">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-lg md:text-xl text-gray-300 font-light max-w-2xl mx-auto">
                Get the latest updates, exclusive fantasy cricket tips, and insider news directly to your inbox
              </p>
            </div>

            {/* Email Form */}
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 hover:bg-white/15"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-500 to-yellow-400 hover:from-blue-600 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105 disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg"
              >
                {isLoading ? (
                  <span className="animate-spin">⏳</span>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span className="hidden sm:inline">Subscribe</span>
                  </>
                )}
              </button>
            </form>

            {/* Privacy Text */}
            <p className="text-sm text-gray-400 font-light">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
