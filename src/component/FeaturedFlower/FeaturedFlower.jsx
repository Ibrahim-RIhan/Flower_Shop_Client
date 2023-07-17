import image1 from "./images/1 1.png";
import image2 from "./images/15207289_chrysanthemum_flower_03 1.png";
import image3 from "./images/16492474_chrysanthemum_flower_01 1.png";
import image4 from "./images/pngwing 5.png";
import image5 from "./images/pngwing 3.png";
import image6 from "./images/pngwing 4.png";
import { useEffect } from "react";
import Aos from "aos";

const FeaturedFlower = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      className="my-20"
    >
      <h1 className="text-center text-5xl font-bold my-5">Featured Flowers</h1>
      <p className="text-gray-500 text-xl text-center my-5">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 justify-center items-center place-items-center my-16">
        <div className="hover:scale-110 transition-all">
          <img src={image1} alt="" />
          <p className="text-xl font-semibold text-center text-gray-600">
            Rose
          </p>
        </div>
        <div className="hover:scale-110 transition-all">
          <img src={image2} alt="" />
          <p className="text-xl font-semibold text-center text-gray-600">RED</p>
        </div>
        <div className="hover:scale-110 transition-all">
          <img src={image3} alt="" />
          <p className="text-xl font-semibold text-center text-gray-600">
            Purple
          </p>
        </div>
        <div className="hover:scale-110 transition-all">
          <img src={image4} alt="" />
          <p className="text-xl font-semibold text-center text-gray-600">
            Gift
          </p>
        </div>
        <div className="hover:scale-110 transition-all">
          <img src={image5} alt="" />
          <p className="text-xl font-semibold text-center text-gray-600">
            Yellow
          </p>
        </div>
        <div className="hover:scale-110 transition-all">
          <img src={image6} alt="" />
          <p className="text-xl font-semibold text-center text-gray-600">
            Pink
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedFlower;
