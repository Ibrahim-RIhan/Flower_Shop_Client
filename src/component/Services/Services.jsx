import { useEffect } from "react";
import logo1 from "./images/Group 57.png";
import logo2 from "./images/Group 58.png";
import logo3 from "./images/Group 59.png";
import Aos from "aos";

const Services = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      className="my-20 container mx-auto rounded-xl bg-[#3d39390d] p-20 grid grid-cols-1 md:grid-cols-3 justify-center items-center place-items-center "
    >
      <div className="flex flex-col justify-center transition-all hover:scale-110 gap-3 items-center">
        <img src={logo1} alt="" />
        <p className="text-xl font-bold">Same Day Delivery: Click & Collect</p>
      </div>
      <div className="flex flex-col justify-center transition-all hover:scale-110 gap-3 my-10 items-center">
        <img src={logo2} alt="" />
        <p className="text-xl font-bold">Fresh Flowers Local Growers</p>
      </div>
      <div className="flex flex-col justify-center transition-all hover:scale-110 gap-3 items-center">
        <img src={logo3} alt="" />
        <p className="text-xl font-bold">24/7 Free Support</p>
      </div>
    </div>
  );
};

export default Services;
