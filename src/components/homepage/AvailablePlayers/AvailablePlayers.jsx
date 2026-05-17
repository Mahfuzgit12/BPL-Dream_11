import Card from './../../UI/card';

const AvailablePlayers = ({ players, setCoin, coin, selectedPlayer, setSelectedPlayer }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {players.map((player, index) => (
        <Card
          key={player.playername || index}
          player={player}
          setCoin={setCoin}
          coin={coin}
          selectedPlayer={selectedPlayer}
          setSelectedPlayer={setSelectedPlayer}
        />
      ))}
    </div>
  );
};

export default AvailablePlayers;