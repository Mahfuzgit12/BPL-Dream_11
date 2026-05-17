
import "./App.css";
import { Suspense, useState } from 'react';
import Navbar from './components/navbar/navbar';
import Banner from './components/homepage/Bannner/Banner';
import Player from './components/homepage/Player/Player';

  const fetchPlayer = async() =>{
    const res = await fetch("/data.json");
    return res.json();
  }
  
const App = () => {
  const playerPromise = fetchPlayer();
  const[coin,setCoin]=useState(50000);
  return (
    <>
    <Navbar coin={coin} />
    <Banner></Banner>
   <Suspense fallback={<span className="loading loading-dots loading-xs"></span>}>
     <Player playerPromise={playerPromise} setCoin={setCoin} coin={coin}></Player>
   </Suspense>
    </>
  );
};

export default App;