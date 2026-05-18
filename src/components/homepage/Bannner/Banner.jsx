import BannerImg from "../../../assets/bg-shadow.png"
import mainBannerImg from "../../../assets/banner-main.png"
const Banner = () => {
  return (
    <div className='relative h-[520px] rounded-3xl container mx-auto overflow-hidden my-8'>
      {/* Background Image */}
      <img className="absolute inset-0 w-full h-full object-cover rounded-3xl" src={BannerImg} alt="banner background" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent rounded-3xl" />
      {/* Content Container */}
      <div className='relative flex flex-col lg:flex-row items-center justify-between h-full px-8 lg:px-12 gap-6'>
        
        {/* Left Side - Text Content */}
        <div className='flex-1 flex flex-col justify-center z-20 text-center lg:text-left'>
          <h1 className='text-4xl md:text-5xl font-extrabold text-white mb-3 leading-tight'>
            Assemble Your Ultimate <span className='text-yellow-400'>Dream 11</span> Cricket Team
          </h1>
          <p className='text-lg md:text-xl text-gray-200 mb-6 font-medium'>
            Beyond Boundaries. Beyond Limits.
          </p>
          <div>
            <button className='px-6 py-3 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-500 text-black font-bold shadow-xl hover:scale-105 transition-transform'>
              Claim Free Credit
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className='flex-1 flex justify-center items-center z-20'>
          <img src={mainBannerImg} alt="Cricket player" className='max-h-80 md:max-h-96 object-contain drop-shadow-2xl' />
        </div>
      </div>
    </div>
  );
};

export default Banner;