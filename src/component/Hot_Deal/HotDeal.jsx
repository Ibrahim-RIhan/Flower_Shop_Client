import image from "./images/pngwing 8.png";

const HotDeal = () => {
  return (
    <div className="my-20 gap-20  bg-[#E554730D] p-20 flex flex-col-reverse md:flex-row justify-center items-center ">
      <div className="w-1/2 text-center">
        <h1>Hot Deal ! Sale Up To 25% <span>off</span></h1>
        <p className="text-xl my-5 text-gray-500">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        <button className='bg-[#E55473] p-3 rounded-lg text-white'>Sign Up</button>
      </div>
      <div>
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default HotDeal;
