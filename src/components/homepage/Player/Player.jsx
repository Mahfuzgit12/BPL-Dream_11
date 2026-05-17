import { use, useState } from 'react';
import AvailablePlayers from './../AvailablePlayers/AvailablePlayers';
import SelectedPlayer from './../SelectedPlayer/SelectedPlayer';
import { Users, Star } from 'lucide-react';

const Player = ({ fetchPlayer, setCoin, coin }) => {
  const players = use(fetchPlayer());

  const [selectedType, setSelectedType] = useState("Available");
  const [selectedPlayer, setSelectedPlayer] = useState([]);

  return (
    <div className='container mx-auto px-4 md:px-0 my-16'>
      {/* Header Section */}
      <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10'>
        {/* Title */}
        <div className='space-y-2'>
          {selectedType === "Available" ? (
            <>
              <div className='flex items-center gap-3'>
                <div className='p-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl'>
                  <Users className='w-6 h-6 text-white' />
                </div>
                <h2 className='text-3xl md:text-4xl font-black text-white'>Available Players</h2>
              </div>
              <p className='text-gray-400 text-sm md:text-base ml-0 md:ml-16'>Select your dream team from elite cricket players</p>
            </>
          ) : (
            <>
              <div className='flex items-center gap-3'>
                <div className='p-3 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl'>
                  <Star className='w-6 h-6 text-white' />
                </div>
                <h2 className='text-3xl md:text-4xl font-black text-white'>Selected Players</h2>
              </div>
              <p className='text-gray-400 text-sm md:text-base ml-0 md:ml-16'>
                <span className='text-yellow-400 font-bold'>{selectedPlayer.length}</span> of {players.length} slots filled
              </p>
            </>
          )}
        </div>

        {/* Toggle Buttons */}
        <div className='flex gap-2 backdrop-blur-sm bg-white/5 p-1 rounded-xl border border-white/10'>
          <button
            onClick={() => setSelectedType("Available")}
            className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 flex items-center gap-2 ${
              selectedType === "Available"
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/50'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Users className='w-4 h-4' />
            Available
          </button>
          <button
            onClick={() => setSelectedType("Selected")}
            className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 flex items-center gap-2 ${
              selectedType === "Selected"
                ? 'bg-gradient-to-r from-yellow-500 to-orange-600 text-white shadow-lg shadow-yellow-500/50'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Star className='w-4 h-4' />
            Selected <span className='bg-white/20 px-2 py-1 rounded-full text-xs'>{selectedPlayer.length}</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className='animate-fadeIn'>
        {selectedType === "Available" ? (
          <AvailablePlayers
            players={players}
            setCoin={setCoin}
            coin={coin}
            selectedPlayer={selectedPlayer}
            setSelectedPlayer={setSelectedPlayer}
          />
        ) : (
          <SelectedPlayer
            selectedPlayer={selectedPlayer}
            setSelectedPlayer={setSelectedPlayer}
            setCoin={setCoin}
            coin={coin}
          />
        )}
      </div>
    </div>
  );
};

export default Player;