import Card from './../../UI/card';

const AvailablePlayers = ({players}) => {
 
  return (
    <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 '>
      {
        players.map((player)=>{
        
       return(
        <Card player={player}></Card>
       )        
        }
        )
      }

    </div>
  );
};

export default AvailablePlayers;