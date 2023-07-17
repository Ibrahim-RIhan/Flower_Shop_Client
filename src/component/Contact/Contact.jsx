import { useEffect } from "react";
import "./Contact.css";
import Aos from "aos";

const Contact = () => {
  useEffect(() => {
    Aos.init();
}, [])
  return (

    <div 
    data-aos="fade-up"
    data-aos-anchor-placement="center-bottom"
    className="container mx-auto contact my-20  flex  justify-center  items-center flex-col h-full">
      <h3 className="text-5xl font-bold ">Get The Latest Deals</h3>
      <p className="text-xl text-gray-500 my-5">$30 coupon for first shopping</p>
      <div className="flex gap-3 flex-col md:flex-row">
        <input className=" py-3 border-2 transition-all hover:scale-105 border-rose-500 rounded-xl px-10 md:px-20 focus:border-yellow-400" type="text" />
        <button className="transition-all hover:scale-105 hover:bg-purple-500 bg-rose-500 text-white px-5 py-3 rounded-xl  font-semibold text-lg">Subscribe</button>
      </div>
    </div>
  );
};

export default Contact;
