import { use, useState } from 'react';
import AvailablePlayers from './../AvailablePlayers/AvailablePlayers';
import SelectedPlayer from './../SelectedPlayer/SelectedPlayer';

const Player = ({ playerPromise, setCoin , coin}) => {
  const players = use(playerPromise);
  

  const [selectedType,setSelectedType] = useState("Available");

  const [selectedPlayer,setSelectedPlayer] = useState([]);

  return (
    <div className='container mx-auto my-15'>
<div className='flex justify-between gap-4 items-center mb-5'>
       
        {
          selectedType === "Available" ?  <h2>Available PLayers</h2> : <h2>Selected Players(2/10)</h2>
        }
      <div>
        <button
        onClick={ () => setSelectedType("Available")}
         className={`btn ${selectedType ==="Available" ? "bg-[#E7FE29]" : "bg-amber-50"}  rounded-r-none text-black`}>Available</button>
        <button
        onClick={() => setSelectedType("Selected")}
        className={`btn ${selectedType ==="Selected" ? "bg-[#E7FE29]" : "bg-amber-50" } rounded-l-none  text-black`}>Selected</button>
      </div>
</div>
      {  selectedType === "Available" ? <AvailablePlayers players={players} setCoin={setCoin} coin={coin} selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer}></AvailablePlayers> : <SelectedPlayer selectedPlayer={selectedPlayer} ></SelectedPlayer>}
    </div>
  );
};

export default Player;