import { FaUser } from "react-icons/fa";
import { X, Trash2, Star, Trophy } from "lucide-react";

const SelectedPlayer = ({ selectedPlayer = [], setSelectedPlayer, coin, setCoin }) => {

  const handleDeleteSelectedPlayer = (player) => {
    const filteredPlayers = selectedPlayer.filter((p) => p.playername !== player.playername);
    setSelectedPlayer(filteredPlayers);
    setCoin(coin + player.price);
  };

  const totalPrice = selectedPlayer.reduce((sum, player) => sum + player.price, 0);
  const remaining = 50000 - totalPrice;

  return (
    <div className="space-y-6">
      {selectedPlayer.length === 0 ? (
        // Empty State
        <div className="h-[500px] flex items-center justify-center">
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <div className="p-6 rounded-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30">
                <Trophy className="w-12 h-12 text-blue-400" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">No Players Selected Yet</h2>
              <p className="text-gray-400 text-lg">Go to the Available tab to assemble your dream team</p>
            </div>
            <div className="pt-6">
              <div className="inline-block px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30">
                <p className="text-sm font-semibold text-blue-300">✨ Select players to get started</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {/* Total Spent */}
            <div className="p-5 rounded-xl backdrop-blur-sm bg-gradient-to-br from-red-600/20 to-red-700/20 border border-red-500/30 hover:border-red-500/60 transition-all duration-300">
              <p className="text-gray-400 text-sm mb-2">Total Spent</p>
              <p className="text-2xl font-bold text-white">₹{totalPrice.toLocaleString()}</p>
            </div>

            {/* Remaining Budget */}
            <div className="p-5 rounded-xl backdrop-blur-sm bg-gradient-to-br from-green-600/20 to-green-700/20 border border-green-500/30 hover:border-green-500/60 transition-all duration-300">
              <p className="text-gray-400 text-sm mb-2">Remaining Budget</p>
              <p className="text-2xl font-bold text-green-400">₹{remaining.toLocaleString()}</p>
            </div>

            {/* Players Count */}
            <div className="p-5 rounded-xl backdrop-blur-sm bg-gradient-to-br from-blue-600/20 to-blue-700/20 border border-blue-500/30 hover:border-blue-500/60 transition-all duration-300">
              <p className="text-gray-400 text-sm mb-2">Squad Size</p>
              <p className="text-2xl font-bold text-blue-400">{selectedPlayer.length} <span className="text-sm text-gray-400">/11</span></p>
            </div>
          </div>

          {/* Players List */}
          <div className="space-y-3">
            {selectedPlayer.map((player, ind) => (
              <div
                key={ind}
                className="group relative backdrop-blur-sm bg-gradient-to-r from-slate-800/50 via-slate-800/40 to-slate-900/50 border border-white/10 rounded-2xl p-5 md:p-6 hover:border-white/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-purple-600/0 to-yellow-500/0 group-hover:from-blue-600/10 group-hover:via-purple-600/10 group-hover:to-yellow-500/10 rounded-2xl transition-all duration-300"></div>

                {/* Content */}
                <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  {/* Player Info */}
                  <div className="flex items-center gap-4 flex-grow">
                    {/* Player Image */}
                    <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden flex-shrink-0 border border-white/10">
                      <img
                        src={player.imglink}
                        alt={player.playername}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-40"></div>
                    </div>

                    {/* Player Details */}
                    <div className="flex-grow space-y-2">
                      <div>
                        <h3 className="flex items-center gap-2 font-bold text-lg text-white group-hover:text-blue-300 transition-colors duration-300">
                          <FaUser className="w-4 h-4 text-blue-400" />
                          {player.playername}
                        </h3>
                      </div>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-gray-300">
                          {player.playertype}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-yellow-500/20 border border-yellow-500/30 text-xs font-semibold text-yellow-300">
                          {player.playercountry}
                        </span>
                      </div>
                      <div className="flex gap-4 text-xs text-gray-400">
                        <span>⚾ {player.bowlingstyle}</span>
                        <span>🏏 {player.battyingstyle}</span>
                      </div>
                    </div>
                  </div>

                  {/* Price and Remove Button */}
                  <div className="flex items-center gap-4 w-full md:w-auto">
                    <div className="text-right flex-shrink-0">
                      <p className="text-gray-400 text-xs mb-1">Price</p>
                      <p className="text-xl md:text-2xl font-bold text-yellow-400">₹{player.price.toLocaleString()}</p>
                    </div>
                    <button
                      onClick={() => handleDeleteSelectedPlayer(player)}
                      className="p-3 rounded-xl bg-gradient-to-r from-red-600/40 to-red-700/40 border border-red-500/30 text-red-400 hover:from-red-600/60 hover:to-red-700/60 hover:border-red-500/60 hover:text-red-300 transition-all duration-300 hover:scale-110 active:scale-95 flex-shrink-0 group/btn"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="pt-6 border-t border-white/10 flex gap-3">
            <button
              onClick={() => {
                setSelectedPlayer([]);
                setCoin(50000);
              }}
              className="flex-1 py-3 rounded-xl px-6 font-bold text-white bg-gradient-to-r from-gray-700/80 to-gray-800/80 border border-white/10 hover:from-gray-700 hover:to-gray-800 hover:border-white/20 transition-all duration-300"
            >
              Clear Team
            </button>
            <button className="flex-1 py-3 rounded-xl px-6 font-bold text-white bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50">
              Confirm & Play
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default SelectedPlayer;
