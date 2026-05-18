
import { FaUser } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

const SelectedPlayer = ({ selectedPlayer =[], setSelectedPlayer, coin , setCoin}) => {

  const handleDeleteSelectedPlayer =(player) =>{
   const filteredPlayers =selectedPlayer.filter((selectedPlayer) => selectedPlayer.playername != player.playername);
   setSelectedPlayer(filteredPlayers);
   setCoin(coin+player.price);
  }

  const totalPrice = selectedPlayer.reduce((sum, player) => sum + player.price, 0);
  const maxTeamSize = 11;
  const availableSlots = maxTeamSize - selectedPlayer.length;

  return (
    <div className="w-full">
      {selectedPlayer.length === 0 ? (
        <div className="min-h-[450px] flex items-center justify-center">
          <div className="text-center px-6">
            <div className="mb-6 inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full">
              <span className="text-5xl">👥</span>
            </div>
            <h2 className="font-bold text-3xl text-black mb-3">No Players Selected Yet</h2>
            <p className="text-gray-600 text-lg max-w-md mx-auto leading-relaxed">
              Start building your dream team by selecting players from the Available tab
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Header */}
          <div className="bg-gradient-to-r from-black to-gray-900 rounded-2xl p-6 md:p-8 text-white shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-300 mb-1">YOUR TEAM</h3>
                <h2 className="text-3xl md:text-4xl font-bold">Cricket Squad</h2>
              </div>
              <div className="text-right">
                <p className="text-gray-300 text-sm font-medium">Team Slots</p>
                <p className="text-3xl font-bold text-[#E7FE29]">{selectedPlayer.length}/{maxTeamSize}</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-[#E7FE29] to-green-400 h-full transition-all duration-500"
                style={{ width: `${(selectedPlayer.length / maxTeamSize) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-gray-600 text-sm font-semibold uppercase tracking-wide mb-2">Total Players</p>
              <p className="text-3xl font-bold text-black">{selectedPlayer.length}</p>
            </div>

            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-gray-600 text-sm font-semibold uppercase tracking-wide mb-2">Total Spent</p>
              <p className="text-3xl font-bold text-black">৳ {totalPrice.toLocaleString()}</p>
            </div>

            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-gray-600 text-sm font-semibold uppercase tracking-wide mb-2">Remaining</p>
              <p className="text-3xl font-bold text-green-600">৳ {coin.toLocaleString()}</p>
            </div>

            <div className={`bg-white rounded-xl p-5 border shadow-sm hover:shadow-md transition-shadow ${
              availableSlots === 0 ? 'border-green-300 bg-green-50' : 'border-gray-100'
            }`}>
              <p className="text-gray-600 text-sm font-semibold uppercase tracking-wide mb-2">Available Slots</p>
              <p className={`text-3xl font-bold ${availableSlots === 0 ? 'text-green-600' : 'text-black'}`}>
                {availableSlots}
              </p>
            </div>
          </div>

          {/* Players List Header */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-black">Selected Players</h3>
            <span className="text-sm font-semibold text-gray-600 bg-gray-100 px-4 py-2 rounded-full">
              {selectedPlayer.length} in squad
            </span>
          </div>

          {/* Players List */}
          <div className='space-y-3'>
            {selectedPlayer.map((player, ind) => (
              <div
                key={player.playername ?? ind}
                className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-gray-200 transition-all duration-300 overflow-hidden"
              >
                <div className="p-5 md:p-6 flex items-center justify-between gap-4">
                  {/* Player Image & Info */}
                  <div className="flex items-center gap-4 min-w-0 flex-1">
                    {/* Player Image */}
                    <div className="relative flex-shrink-0">
                      <img
                        src={player.imglink}
                        alt={player.playername}
                        className="h-[80px] w-[80px] rounded-xl object-cover border-2 border-gray-100 group-hover:border-[#E7FE29] transition-colors"
                      />
                      <div className="absolute -top-2 -right-2 bg-[#E7FE29] text-black font-bold text-xs px-2.5 py-1 rounded-full">
                        #{ind + 1}
                      </div>
                    </div>

                    {/* Player Details */}
                    <div className="min-w-0 flex-1">
                      <h2 className="flex items-center gap-2 font-bold text-lg text-black mb-2 line-clamp-2">
                        <FaUser className="text-black flex-shrink-0 text-sm" />
                        <span>{player.playername}</span>
                      </h2>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className='px-3 py-1 rounded-lg text-xs font-bold bg-[#E7FE29] text-black'>
                          {player.playertype}
                        </span>
                        <span className="text-sm text-gray-600 font-medium">
                          {player.bowlingstyle}
                        </span>
                        {player.battingstyyle && (
                          <span className="text-sm text-gray-600 font-medium">
                            • {player.battingstyyle}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Price & Delete */}
                  <div className="flex items-center gap-4 flex-shrink-0">
                    <div className="text-right">
                      <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-1">Price</p>
                      <p className="font-bold text-2xl text-black whitespace-nowrap">৳ {player.price.toLocaleString()}</p>
                    </div>

                    <button
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-all duration-200 group-hover:scale-110 flex-shrink-0"
                      onClick={() => handleDeleteSelectedPlayer(player)}
                      title="Remove player"
                    >
                      <MdDeleteOutline className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Action Footer */}
          {selectedPlayer.length > 0 && (
            <div className="bg-gradient-to-r from-[#E7FE29]/10 to-blue-50 rounded-xl p-6 border-2 border-[#E7FE29]/30 mt-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="font-bold text-lg text-black mb-1">Team Complete!</h3>
                  <p className="text-gray-600 text-sm">
                    {availableSlots === 0
                      ? "Your squad is full. Ready to compete!"
                      : `Add ${availableSlots} more player${availableSlots > 1 ? 's' : ''} to complete your team`}
                  </p>
                </div>
                <button
                  disabled={availableSlots > 0}
                  className={`px-8 py-3 rounded-lg font-bold transition-all duration-300 flex-shrink-0 ${
                    availableSlots === 0
                      ? 'bg-green-500 text-white hover:bg-green-600 hover:shadow-lg'
                      : 'bg-gray-300 text-gray-600 cursor-not-allowed'
                  }`}
                >
                  {availableSlots === 0 ? '✓ Ready to Play' : 'Complete Team'}
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SelectedPlayer;
