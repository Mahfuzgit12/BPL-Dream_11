import Card from './../../UI/card';
const AvailablePlayers = ({players, setCoin , coin, selectedPlayer, setSelectedPlayer }) => {
 
  return (
    <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 '>
      {
        players.map((player, index)=>{
        
       return(
        <Card key={player.playername || index} player={player} setCoin={setCoin} coin={coin} selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer}></Card>
       )        
        }
        )
      }

    </div>
  );
};

export default AvailablePlayers;