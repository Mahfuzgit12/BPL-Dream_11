import { useState } from 'react';
import { FaFlag, FaUser } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Card = ({player, setCoin , coin , selectedPlayer, setSelectedPlayer}) => {
  const [isSelected,setIsselected]=useState(false);

  const handleChoosePlayer = () =>{
    let newCoin=coin - player.price;
    if(newCoin >= 0){
      setCoin(newCoin);
    }else{
      toast.error("Not enough coin to purchase this player");
      return;
    }
    toast.success(`${player.playername} is selected`);
     setIsselected(true);
     setSelectedPlayer([...selectedPlayer,player]);
  };

  return (
    <div className="w-full h-full">
      <div className="h-full bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-300 flex flex-col">
        {/* Image Section */}
        <div className="relative h-56 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden flex-shrink-0">
          <img
            src={player.imglink}
            alt={player.playername}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
          {isSelected && (
            <div className="absolute inset-0 bg-green-500/20 flex items-center justify-center">
              <div className="bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl font-bold">
                ✓
              </div>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-5 flex flex-col flex-1">
          {/* Player Name */}
          <h3 className="flex items-center gap-3 text-lg font-bold text-black mb-3 line-clamp-2 h-16 flex-wrap">
            <FaUser className="text-black flex-shrink-0 text-sm" />
            <span>{player.playername}</span>
          </h3>

          {/* Country and Type */}
          <div className='flex items-center gap-2 mb-4 flex-wrap'>
            <div className="flex items-center gap-2 text-sm text-black font-medium bg-gray-50 px-3 py-1.5 rounded-lg">
              <FaFlag className="text-black text-xs" />
              <span>{player.playercountry}</span>
            </div>
            <span className='px-3 py-1.5 rounded-lg text-xs font-bold bg-[#E7FE29] text-black'>
              {player.playertype}
            </span>
          </div>

          {/* Stats Section */}
          <div className="bg-gray-50 rounded-xl p-4 mb-4 flex-1">
            <div className="flex items-center justify-between mb-3">
              <p className='text-xs text-gray-600 font-semibold uppercase tracking-wide'>Rating</p>
              <span className='text-2xl font-bold text-black'>{player.rating}</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className='text-xs text-gray-500 font-medium'>Bowling:</span>
                <span className="text-sm font-semibold text-black bg-white px-2.5 py-1 rounded-md border border-gray-200">{player.bowlingstyle}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className='text-xs text-gray-500 font-medium'>Batting:</span>
                <span className="text-sm font-semibold text-black bg-white px-2.5 py-1 rounded-md border border-gray-200">{player.battingstyyle}</span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gray-200 mb-4"></div>

          {/* Price and Button */}
          <div className='flex items-center justify-between gap-3'>
            <div className='flex flex-col'>
              <span className='text-xs text-gray-500 font-medium uppercase tracking-wide'>Price</span>
              <div className='text-2xl font-bold text-black'>৳ {player.price.toLocaleString()}</div>
            </div>
            <button
              className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 flex-shrink-0 ${
                isSelected
                  ? 'bg-green-100 text-green-700 cursor-not-allowed border border-green-300'
                  : 'bg-[#E7FE29] text-black hover:bg-[#d4e01f] hover:shadow-lg active:scale-95 border border-[#E7FE29]'
              }`}
              onClick={handleChoosePlayer}
              disabled={isSelected}
            >
              {isSelected ? '✓ Added' : 'Buy'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;