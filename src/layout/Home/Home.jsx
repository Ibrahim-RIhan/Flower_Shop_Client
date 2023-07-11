import Banner from "../../component/Banner/Banner";
import Contact from "../../component/Contact/Contact";
import FeaturedFlower from "../../component/FeaturedFlower/FeaturedFlower";
import Footer from "../../component/Footer/Footer";
import Gallery from "../../component/Gallery/Gallery";
import HotDeal from "../../component/Hot_Deal/HotDeal";
import Services from "../../component/Services/Services";


const Home = () => {
    return (
        <div>
           <Banner></Banner> 
           <FeaturedFlower></FeaturedFlower>
           <Services></Services>
           <HotDeal></HotDeal>
           <Gallery></Gallery>
           <Contact></Contact>
           <Footer></Footer>
        </div>
    );
};

export default Home;