import { use, useState } from 'react';
import AvailablePlayers from './../AvailablePlayers/AvailablePlayers';
import SelectedPlayer from './../SelectedPlayer/SelectedPlayer';

const Player = ({ playerPromise, setCoin , coin}) => {
  const players = use(playerPromise);

  const [selectedType,setSelectedType] = useState("Available");
  const [selectedPlayer,setSelectedPlayer] = useState([]);

  return (
    <div className='container mx-auto py-12 px-4'>
      <div className='flex flex-col sm:flex-row justify-between gap-6 items-start sm:items-center mb-8'>
        <div>
          {selectedType === "Available" ? (
            <h2 className='text-3xl md:text-4xl font-bold text-black'>Available Players</h2>
          ) : (
            <h2 className='text-3xl md:text-4xl font-bold text-black'>
              Selected Players
              <span className='text-[#E7FE29] ml-2'>({selectedPlayer.length}/{players.length})</span>
            </h2>
          )}
          <p className='text-gray-600 mt-2'>Pick your ultimate cricket team</p>
        </div>

        <div className='flex gap-3 bg-gray-100/80 p-2 rounded-full shadow-lg border border-white/40'>
          <button
            onClick={() => setSelectedType("Available")}
            aria-pressed={selectedType === "Available"}
            className={`px-7 py-3 rounded-full font-semibold uppercase tracking-wide shadow-lg transition-all duration-200 ${
              selectedType === "Available"
                ? 'bg-gradient-to-r from-yellow-300 to-yellow-500 text-black shadow-yellow-300/50 scale-[1.02]'
                : 'bg-white text-gray-800 hover:bg-yellow-100 hover:text-black'
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setSelectedType("Selected")}
            aria-pressed={selectedType === "Selected"}
            className={`px-7 py-3 rounded-full font-semibold uppercase tracking-wide shadow-lg transition-all duration-200 ${
              selectedType === "Selected"
                ? 'bg-gradient-to-r from-yellow-300 to-yellow-500 text-black shadow-yellow-300/50 scale-[1.02]'
                : 'bg-white text-gray-800 hover:bg-yellow-100 hover:text-black'
            }`}
          >
            Selected <span className='ml-1 font-bold'>({selectedPlayer.length})</span>
          </button>
        </div>
      </div>

      <div>
        {selectedType === "Available"
          ? <AvailablePlayers players={players} setCoin={setCoin} coin={coin} selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer} />
          : <SelectedPlayer selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer} setCoin={setCoin} coin={coin} />
        }
      </div>
    </div>
  );
};

export default Player;