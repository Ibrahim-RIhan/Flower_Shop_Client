import { useEffect } from "react";
import image from "./images/pngwing 8.png";
import Aos from "aos";

const HotDeal = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      className="my-20 gap-20  bg-[#E554730D] p-20 flex flex-col-reverse md:flex-row justify-center items-center "
    >
      <div className="w-1/2 text-center">
        <h1 className="text-4xl font-bold">
          Hot Deal ! Sale Up To 25% <span className="text-rose-500">Off</span>
        </h1>
        <p className="text-xl my-5 text-gray-500">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <button className="bg-[#E55473] px-5 py-3 font-semibold text-lg transition-all hover:scale-110 hover:bg-purple-500 rounded-lg text-white">
          Sign Up
        </button>
      </div>
      <div>
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default HotDeal;
