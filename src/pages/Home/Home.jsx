import { Helmet } from "react-helmet-async";
import Header from "../../components/Home/Header/Header";
import PopularDestination from "../../components/Home/PopularDestination/PopularDestination";
import Offer from "../../components/Home/Offer/Offer";
import Blog from "../../components/Home/Blog/Blog";
import Destination from "../../components/Home/Destination/Destination";
import Footer from "../../components/Shared/Footer/Footer";

const Home = () => {
    return (
        <div>
            <Helmet><title>EduSync | Home</title></Helmet>
            <Header />
            <PopularDestination />
            <Offer />
            <Blog />
            <Destination />
        </div>
    );
};

export default Home;