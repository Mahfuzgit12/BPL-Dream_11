import { FaFlag, FaUser } from 'react-icons/fa';

const card = ({player}) => {
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
          <button className='btn btn-ghost '>{player.playertype}</button>
          </div>
            <div className="divider"></div>
            <h2 className='font-bold'>Rating : {player.rating}</h2>
            <div className='flex gap-2 justify-between font-bold '>
              <p>{player.bowlingstyle}</p>
              <p className='text-left'>{player.battingstyyle}</p>
            </div>
            <div className='flex justify-between items-center font-bold'>
              <p className='font-semibold'>Price:{player.price}</p>
              <button className='btn btn-ghost'>Choose Player</button>
            </div>
          
        </div>
      </div> 
    </div>
  );
};

export default card;