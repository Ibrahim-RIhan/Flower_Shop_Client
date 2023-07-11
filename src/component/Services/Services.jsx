import logo1 from "./images/Group 57.png";
import logo2 from "./images/Group 58.png";
import logo3 from "./images/Group 59.png";

const Services = () => {
  return (
    <div className="my-20 container mx-auto rounded-xl  bg-[#2727270D] p-20 grid grid-cols-1 md:grid-cols-3 justify-center items-center place-items-center ">
      <div className="">
        <img src={logo1} alt="" />
        <p>Same Day Delivery. Click & Collect.</p>
      </div>
      <div className="">
        <img src={logo2} alt="" />
        <p>Fresh Flowers. Local Growers.</p>
      </div>
      <div className="">
        <img src={logo3} alt="" />
        <p>24/7 Free Support.</p>
      </div>
    </div>
  );
};

export default Services;
