import { Helmet } from "react-helmet-async";
import Header from "../../components/Home/Header/Header";

const Home = () => {
    return (
        <div>
            <Helmet><title>EduSync | Home</title></Helmet>
            <Header />
        </div>
    );
};

export default Home;