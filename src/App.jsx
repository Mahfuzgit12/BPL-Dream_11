import "./App.css";
import { Suspense, useState } from 'react';
import Navbar from './components/navbar/navbar';
import Banner from './components/homepage/Bannner/Banner';
import Player from './components/homepage/Player/Player';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';
import { Loader } from 'lucide-react';

const fetchPlayer = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

const App = () => {
  const [coin, setCoin] = useState(50000);

  return (
    <>
      <Navbar coin={coin} />
      <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-black">
        <Banner />
        <Suspense fallback={
          <div className="flex items-center justify-center h-96">
            <div className="flex flex-col items-center gap-4">
              <Loader className="w-12 h-12 text-blue-400 animate-spin" />
              <p className="text-gray-400 font-semibold">Loading players...</p>
            </div>
          </div>
        }>
          <Player fetchPlayer={fetchPlayer} setCoin={setCoin} coin={coin} />
        </Suspense>
      </main>
      <Newsletter />
      <Footer />
    </>
  );
};

export default App;