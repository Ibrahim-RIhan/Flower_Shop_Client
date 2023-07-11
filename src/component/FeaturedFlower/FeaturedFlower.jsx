import image1 from "./images/pngwing 5.png";
import image2 from "./images/pngwing 6.png";
import image3 from "./images/pngwing 7.png";

const FeaturedFlower = () => {
  return (
    <div className="my-20">
      <h1 className="text-center text-5xl font-bold my-5">
        Our featured flowers
      </h1>
      <p className="text-gray-500 text-xl text-center my-5">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-center items-center place-items-center my-16">
        <div className="bg-[#A7216226] p-5">
          <img src={image3} alt="" />
          <p className="text-center my-5 text-xl font-semibold">Pink Flower Tree</p>
        </div>
        <div className="bg-[#A7216226] p-5">
          <img src={image2} alt="" />
          <p className="text-center my-5 text-xl font-semibold">Yellow Flower Tree</p>
        </div>
        <div className="bg-[#A7216226] p-5">
          <img src={image1} alt="" />
          <p className="text-center my-5 text-xl font-semibold">Rose Flower</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedFlower;
