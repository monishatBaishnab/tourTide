import { Typography } from "@material-tailwind/react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Shared/Navigation/Navigation";
import Footer from "../components/Shared/Footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <Navigation />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;