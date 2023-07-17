import { useEffect } from "react";
import "./Banner.css";
import Aos from "aos";

const Banner = () => {
    useEffect(() => {
        Aos.init();
    }, [])
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      className="banner p-20 h-[100vh] flex flex-col md:flex-row justify-start items-center gap-10  "
    >
      <div className="leading-loose text-white">
        <h1 className="text-7xl font-bold ">
          Lets make <br /> beautiful flowers a <br /> part of your life.
        </h1>
        <p className="text-xl my-5  font-semibold">
          It is a long established fact that a reader will be distracted by the
          readable <br /> content of a page when looking at its layout. The
          point of using Lorem Ipsum <br /> is that it has a more-or-less normal
          distribution of letters.
        </p>
        <button className="bg-[#E55473] px-5 py-3 rounded-lg text-xl font-semibold transition-opacity hover:scale-110 text-white">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
