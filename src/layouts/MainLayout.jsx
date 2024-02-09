import { Typography } from "@material-tailwind/react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Shared/Navigation/Navigation";

const MainLayout = () => {
    return (
        <div>
            <Navigation />
            <Outlet />
            <Typography variant="h5">Footer</Typography>
        </div>
    );
};

export default MainLayout;