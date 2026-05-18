import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import logo from "../../assets/logo.png";
import dollarImg from "../../assets/icon.png";

const Navbar = ({ coin = 0 }) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="backdrop-blur-md bg-[linear-gradient(90deg,rgba(4,10,23,0.75),rgba(8,12,30,0.65))] border-b border-white/6">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-4">
              <button className="p-1 rounded-md hover:scale-105 transition-transform" aria-label="brand">
                <img src={logo} alt="brand" className="h-10 w-auto" />
              </button>
              <nav className="hidden md:flex items-center gap-6 ml-2">
                <a className="text-sm font-medium text-gray-200 hover:text-white px-2 py-1 rounded-md transition-colors" href="#">Home</a>
                <a className="text-sm font-medium text-gray-400 hover:text-white px-2 py-1 rounded-md transition-colors" href="#players">Players</a>
                <a className="text-sm font-medium text-gray-400 hover:text-white px-2 py-1 rounded-md transition-colors" href="#leagues">Leagues</a>
                <a className="text-sm font-medium text-gray-400 hover:text-white px-2 py-1 rounded-md transition-colors" href="#rules">Rules</a>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-3 bg-white/6 border border-white/8 rounded-full px-3 py-2 shadow-sm">
                <img src={dollarImg} alt="coin" className="h-6 w-6" />
                <div className="text-sm text-gray-100 font-semibold">{coin.toLocaleString()} <span className="text-xs text-gray-300">Coins</span></div>
              </div>

              <button className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-yellow-300 to-yellow-500 text-gray-900 font-semibold px-4 py-2 rounded-full shadow-2xl hover:translate-y-[-2px] transition-transform">
                <Sparkles className="w-4 h-4" /> <span>Claim Bonus</span>
              </button>

              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 md:hidden"
                onClick={() => setOpen(!open)}
                aria-label="menu"
              >
                {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-white/6 bg-[rgba(2,6,23,0.6)]/90">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
              <a className="text-gray-200 font-medium py-2 px-3 rounded-md hover:bg-white/3 transition" href="#">Home</a>
              <a className="text-gray-200 font-medium py-2 px-3 rounded-md hover:bg-white/3 transition" href="#players">Players</a>
              <a className="text-gray-200 font-medium py-2 px-3 rounded-md hover:bg-white/3 transition" href="#leagues">Leagues</a>
              <a className="text-gray-200 font-medium py-2 px-3 rounded-md hover:bg-white/3 transition" href="#rules">Rules</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
