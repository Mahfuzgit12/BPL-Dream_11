import dollarImg from "../../assets/icon.png";
import logo from "../../assets/logo.png";

const navbar = ({coin}) => {
  return (
    <div >
      <div className="navbar bg-base-100 shadow-sm container mx-auto ">
  <div className="flex-1">
    <img src={logo} alt="BPL Dream 11 Logo" className="h-15 w-auto" />
  </div>
  <div className="flex-none">
    <button className=" flex justify-between items-center gap-5 font-bold text-xl">
      {coin} Coins
      <img src={dollarImg} alt="Dollar" />
    </button>
  </div>
</div>
    </div>
  );
};

export default navbar;
