import images1 from './images/Flower 01.png'
import images2 from './images/Rectangle 4.png'
import images3 from './images/Rectangle 5.png'
import images4 from './images/Rectangle 6.png'



const Gallery = () => {
    return (
        <div className='my-20 container mx-auto'>
            <h1 className="text-5xl text-center font-bold">Instagram Gallery</h1>
            <p className="text-center font-semibold text-xl my-5 text-gray-500">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            <div className='grid grid-cols-1 md:grid-cols-4 justify-center items-center my-16 gap-5 place-items-center'>
                <div>
                    <img src={images1} alt="" />
                </div>
                <div>
                    <img src={images2} alt="" />
                </div>
                <div>
                    <img src={images3} alt="" />
                </div>
                <div>
                    <img src={images4} alt="" />
                </div>
                
            </div>
        </div>
    );
};

export default Gallery;