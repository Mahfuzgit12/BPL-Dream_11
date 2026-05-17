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
    <div>
        <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src={player.imglink}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title"> <FaUser />{player.playername}</h2>
          <div className='flex justify-between gap-2 items-center'>
          <div className='flex gap-2 items-center'>
                  <FaFlag></FaFlag>
            <p>{player.playercountry}</p>
          </div>
          <button className='btn neutral '>{player.playertype}</button>
          </div>
            <div className="divider"></div>
            <h2 className='font-bold'>Rating : {player.rating}</h2>
            <div className='flex gap-2 justify-between font-bold '>
              <p>{player.bowlingstyle}</p>
              <p className='text-left'>{player.battingstyyle}</p>
            </div>
            <div className='flex justify-between items-center font-bold'>
              <p className='font-semibold'>Price:{player.price}</p>
              <button className='btn btn-ghost btn-active btn-success btn-outline' onClick={handleChoosePlayer} 
              disabled = {isSelected ? true : false }>
                {isSelected === true ? "Selected" : "Buy Player"}</button>
            </div>
          
        </div>
      </div> 
    </div>
  );
};

export default Card;