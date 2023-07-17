import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="text-center leading-relaxed p-20 bg-stone-800 text-white">
      <h1 className="text-3xl font-bold">
        <span className="text-rose-400">Flower</span>Shop
      </h1>
      <p className="text-gray-300 my-5">
        It is a long established fact that a reader will be distracted by the
        readable <br /> content of a page when looking at its layout.
      </p>
      <div className="text-center flex justify-center items-center gap-5 text-3xl">
        <FaFacebook className="transition-all hover:scale-125 hover:text-rose-500"></FaFacebook>
        <FaTwitter className="transition-all hover:scale-125 hover:text-rose-500"></FaTwitter>
        <FaInstagram className="transition-all hover:scale-125 hover:text-rose-500"></FaInstagram>
        <FaYoutube className="transition-all hover:scale-125 hover:text-rose-500"></FaYoutube>
      </div>
      <p className="text-gray-500 my-3">
        @2020-2023, FlowerShop.com. All rights reserved.{" "}
      </p>
    </div>
  );
};

export default Footer;
