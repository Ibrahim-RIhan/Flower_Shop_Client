import './Banner.css';
import banner from './images/pngwing 10.png'

const Banner = () => {
    return (
        <div className="banner p-20 h-[100vh] flex flex-col md:flex-row justify-evenly items-center gap-10  ">
            <div className='leading-loose'>
                <h1 className='text-7xl font-bold '>Lets make <br /> beautiful flowers a <br /> part of your life.</h1>
                <p className='text-xl my-5 text-gray-500 font-semibold'>It is a long established fact that a reader will be distracted by the readable <br /> content of a page when looking at its layout.  The point of using Lorem Ipsum <br /> is that it has a more-or-less normal distribution of letters.</p>
                <button className='bg-[#E55473] p-3 rounded-lg text-white'>Shop Now</button>
            </div>
            <div>
                <img src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;