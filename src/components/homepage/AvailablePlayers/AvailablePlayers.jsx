import Card from './../../UI/card';
const AvailablePlayers = ({players, setCoin , coin, selectedPlayer, setSelectedPlayer }) => {
  return (
    <div className='w-full'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {players.map((player, index) => (
          <Card
            key={player.playername ?? index}
            player={player}
            setCoin={setCoin}
            coin={coin}
            selectedPlayer={selectedPlayer}
            setSelectedPlayer={setSelectedPlayer}
          />
        ))}
      </div>

      {players.length === 0 && (
        <div className='text-center py-12'>
          <p className='text-xl text-gray-600'>No players available</p>
        </div>
      )}
    </div>
  );
};

export default AvailablePlayers;