import { useState } from 'react';
import { Flag, User, TrendingUp, X, Zap } from 'lucide-react';
import { toast } from 'react-toastify';

const Card = ({ player, setCoin, coin, selectedPlayer, setSelectedPlayer }) => {
  const [isSelected, setIsSelected] = useState(false);

  const isPlayerSelected = selectedPlayer.some(p => p.playername === player.playername);

  const handleChoosePlayer = () => {
    if (isPlayerSelected) {
      toast.error(`${player.playername} is already selected`);
      return;
    }

    const newCoin = coin - player.price;
    if (newCoin >= 0) {
      setCoin(newCoin);
      toast.success(`${player.playername} added to your team! 🎯`);
      setIsSelected(true);
      setSelectedPlayer([...selectedPlayer, player]);
    } else {
      toast.error("Insufficient coins to purchase this player 💰");
    }
  };

  // Role badge styling
  const getRoleBadgeStyle = (role) => {
    const roleStyles = {
      'Batsman': 'from-blue-600 to-blue-700',
      'Bowler': 'from-green-600 to-green-700',
      'All-rounder': 'from-purple-600 to-purple-700',
      'Wicketkeeper': 'from-orange-600 to-orange-700',
    };
    return roleStyles[role] || 'from-gray-600 to-gray-700';
  };

  return (
    <div className="group h-full animate-fadeIn">
      <div className="relative h-full rounded-2xl overflow-hidden backdrop-blur-xl bg-gradient-to-br from-slate-800/40 via-slate-900/40 to-slate-950/40 border border-white/10 transition-all duration-300 hover:border-white/30 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2">
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-purple-600/0 to-yellow-500/0 group-hover:from-blue-600/20 group-hover:via-purple-600/10 group-hover:to-yellow-500/10 transition-all duration-300"></div>

        {/* Content */}
        <div className="relative p-0 h-full flex flex-col">
          {/* Image Section */}
          <div className="relative h-48 overflow-hidden bg-gradient-to-b from-slate-800 to-slate-900">
            <img
              src={player.imglink}
              alt={player.playername}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>

            {/* Role Badge */}
            <div className={`absolute top-4 right-4 px-3 py-1.5 rounded-full bg-gradient-to-r ${getRoleBadgeStyle(player.playertype)} text-white text-xs font-bold shadow-lg`}>
              {player.playertype}
            </div>

            {/* Rating Badge */}
            <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 text-xs font-bold shadow-lg flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              {player.rating}
            </div>
          </div>

          {/* Body Section */}
          <div className="p-5 flex flex-col flex-grow space-y-4">
            {/* Player Name */}
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2 truncate">
                <User className="w-4 h-4 text-blue-400 flex-shrink-0" />
                {player.playername}
              </h3>
            </div>

            {/* Country */}
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <Flag className="w-4 h-4 text-yellow-400 flex-shrink-0" />
              <span className="font-medium">{player.playercountry}</span>
            </div>

            {/* Stats Section */}
            <div className="space-y-2 pt-2 border-t border-white/10">
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">Bowling</span>
                <span className="text-gray-300 font-semibold">{player.bowlingstyle}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">Batting</span>
                <span className="text-gray-300 font-semibold">{player.battingstyyle}</span>
              </div>
            </div>

            {/* Footer - Price and Button */}
            <div className="pt-3 border-t border-white/10 space-y-3 mt-auto">
              {/* Price */}
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">Price</span>
                <span className="text-yellow-400 font-bold text-lg flex items-center gap-1">
                  <Zap className="w-4 h-4" />
                  {player.price.toLocaleString()}
                </span>
              </div>

              {/* Action Button */}
              <button
                onClick={handleChoosePlayer}
                disabled={isPlayerSelected}
                className={`w-full py-3 rounded-xl font-bold text-white transition-all duration-300 flex items-center justify-center gap-2 ${
                  isPlayerSelected
                    ? 'bg-gradient-to-r from-gray-600 to-gray-700 cursor-not-allowed opacity-75'
                    : 'bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 hover:from-blue-700 hover:via-purple-700 hover:to-blue-700 hover:shadow-lg hover:shadow-blue-500/50 active:scale-95'
                }`}
              >
                {isPlayerSelected ? (
                  <>
                    <X className="w-4 h-4" />
                    Already Selected
                  </>
                ) : (
                  <>
                    <Zap className="w-4 h-4" />
                    Select Player
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Border Shimmer */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-yellow-400 opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300"></div>
        </div>
      </div>
    </div>
  );
};

export default Card;