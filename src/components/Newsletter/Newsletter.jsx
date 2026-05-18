import { useState } from 'react';
import { Mail, Send, Sparkles } from 'lucide-react';
import { toast } from 'react-toastify';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      toast.error('Please enter a valid email');
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setEmail('');
      toast.success('Successfully subscribed to newsletter!');
    }, 900);
  };

  return (
    <section className="w-full py-16 px-4 md:px-8 bg-[#020617]">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Glow decor */}
          <div className="absolute -left-28 -top-20 w-72 h-72 bg-gradient-to-tr from-[#6EE7F6]/30 via-[#8B5CF6]/20 to-[#FDE68A]/10 blur-3xl opacity-70 transform rotate-12" />
          <div className="absolute -right-28 -bottom-20 w-72 h-72 bg-gradient-to-bl from-[#FDE68A]/20 via-[#8B5CF6]/20 to-[#60A5FA]/10 blur-3xl opacity-60 transform -rotate-12" />

          <div className="relative z-20 backdrop-blur-lg bg-white/6 border border-white/8 rounded-3xl p-8 md:p-12 shadow-[0_10px_30px_rgba(2,6,23,0.6)]">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center justify-center bg-gradient-to-r from-[#60A5FA] to-[#FDE68A] p-3 rounded-full shadow-md">
                  <Mail className="w-6 h-6 text-[#020617]" />
                </div>
                <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
                  Subscribe to our <span className="text-yellow-300">Newsletter</span>
                </h2>
                <p className="mt-3 text-gray-300 max-w-xl">
                  Get the latest updates and fantasy cricket news — match tips, team insights, and exclusive offers.
                </p>
              </div>

              <form onSubmit={handleSubscribe} className="flex-1 w-full">
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <label className="sr-only">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-5 py-4 rounded-2xl bg-white/6 border border-white/10 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-200 backdrop-blur-sm"
                  />

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-[#FDE68A] via-[#60A5FA] to-[#8B5CF6] text-[#021025] font-semibold shadow-lg hover:scale-105 transform transition disabled:opacity-70"
                  >
                    {isLoading ? (
                      <span className="animate-spin">⏳</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Subscribe</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
                  <span>We respect your privacy. Unsubscribe anytime.</span>
                  <div className="flex items-center gap-2 text-yellow-300">
                    <Sparkles className="w-4 h-4" />
                    <span>Premium insights</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
