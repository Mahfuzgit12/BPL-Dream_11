import dollarImg from "../../assets/icon.png";

const navbar = ({coin}) => {
  return (
    <div >
      <div className="navbar bg-base-100 shadow-sm container mx-auto ">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">daisyUI</a>
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
