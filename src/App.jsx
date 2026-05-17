
import "./App.css";
import { Suspense } from 'react';
import Navbar from './components/navbar/navbar';
import Banner from './components/homepage/Bannner/Banner';
import Player from './components/homepage/Player/Player';

  const fetchPlayer = async() =>{
    const res = await fetch("/data.json");
    return res.json();
  }
  
const App = () => {
  const playerPromise = fetchPlayer();
  return (
    <>
    <Navbar />
    <Banner></Banner>
   <Suspense fallback={<span className="loading loading-dots loading-xs"></span>}>
     <Player playerPromise={playerPromise}></Player>
   </Suspense>
    </>
  );
};

export default App;