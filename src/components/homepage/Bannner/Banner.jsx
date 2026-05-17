import BannerImg from "../../../assets/bg-shadow.png"
import mainBannerImg from "../../../assets/banner-main.png"
const Banner = () => {
  return (
    <div className='relative h-[500px] rounded-3xl container mx-auto overflow-hidden'>
      {/* Background Image */}
      <img className="absolute inset-0 w-full h-full object-cover rounded-3xl" src={BannerImg} alt="banner background" />
      
      {/* Content Container */}
      <div className='relative flex items-center justify-between h-full px-12 gap-8'>
        
        {/* Left Side - Text Content */}
        <div className='flex-1 flex flex-col justify-center z-10'>
          <h1 className='text-5xl font-bold text-white mb-4 leading-tight'>
            Assemble Your Ultimate <span className='text-yellow-400'>Dream 11</span> Cricket Team
          </h1>
          <p className='text-xl text-gray-200 mb-8 font-semibold'>
            Beyond Boundaries Beyond Limits
          </p>
          <div>
            <button className='btn btn-warning btn-lg text-black font-bold hover:scale-105 transition-transform'>
              Claim Free Credit
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className='flex-1 flex justify-center items-center'>
          <img src={mainBannerImg} alt="Cricket player" className='max-h-96 object-contain drop-shadow-2xl' />
        </div>
      </div>
    </div>
  );
};

export default Banner;