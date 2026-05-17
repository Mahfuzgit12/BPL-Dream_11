
import { FaUser } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

const SelectedPlayer = ({ selectedPlayer =[], setSelectedPlayer, coin , setCoin}) => {

  const handleDeleteSelectedPlayer =(player) =>{
   const filteredPlayers =selectedPlayer.filter((selectedPlayer) => selectedPlayer.playername != player.playername);
   setSelectedPlayer(filteredPlayers);
   setCoin(coin+player.price);
  }
  return (
    <div className="space-y-5">
    { selectedPlayer.length === 0 ? 
    <div className="h-[400px] flex items-center justify-center flex-col gap-4">
      <h2 className="font-semibold text-xl">No Players selected Yet</h2>
      <p>Go to Available Tabs to select Players</p>
    </div>
      : selectedPlayer.map((player,ind) =>{
        return(
          <div >
                      <div key={ind} className="flex items-center gap-6 justify-between p-10 rounded-2xl border  ">
            <div className="flex items-center gap-6 ">
              <div>
                <img src={player.imglink} alt={player.playername} className="h-[75px] w-auto rounded-md" />
              </div>
              <div>
                <h2 className="flex items-center gap-2 font-bold text-xl"> <FaUser/>  {player.playername}</h2>
                <p>{player.playertype}</p>
              </div>
            </div>

            <button className="btn text-red-500" onClick={() => handleDeleteSelectedPlayer(player)}>
             <MdDeleteOutline />
            </button>
          </div>
          </div>
        )
      })
    }
    </div>
  );
};

export default SelectedPlayer;
