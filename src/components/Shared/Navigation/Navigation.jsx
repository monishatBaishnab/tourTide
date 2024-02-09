import { Drawer, IconButton, Navbar, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import Headroom from "react-headroom";
import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";
import SignUpBtn from "./SignUpBtn";
import navList from "./navList";

const Navigation = () => {
    const [openDrower, setOpenDrower] = useState(false);
    const closeDrawer = () => setOpenDrower(!openDrower);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenDrower(false),
        );
    }, []);

    const navItems = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            {
                navList.map(item => <Typography key={item.path} as="li" variant="small" color="blue-gray" className="p-1 font-normal text-secondry" >
                    <NavLink to={item.path} className={({ isActive }) => isActive ? "relative after:absolute after:left-0 after:right-0 after:-bottom-2 after:h-0.5 after:bg-primary" : ""
                    }>
                        {item?.level}
                    </NavLink>
                </Typography>)
            }
        </ul>
    );
    return (
        <>
            <Headroom className="z-40 ">
                <Navbar className="h-max max-w-full rounded-none px-4 py-2 bg-white/50 bg-opacity-0 lg:px-8 lg:py-4">
                    <div className="container">
                        <div className="flex items-center justify-between text-secondry">
                            <Link><Typography variant="h3">TourTide</Typography></Link>
                            <div className="mr-4 hidden lg:block">{navItems}</div>
                            <div className="flex items-center gap-x-5">
                                <Link>Sign in</Link>
                                <SignUpBtn />
                                <IconButton variant="text" className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden" ripple={false} onClick={() => setOpenDrower(!openDrower)}>
                                    <FaBars className="text-xl" />
                                </IconButton>
                            </div>
                        </div>
                    </div>
                </Navbar>
            </Headroom>
            <Drawer open={openDrower} onClose={closeDrawer} className="p-4" overlayProps={{ className: 'fixed' }}>
                <div className="flex flex-col justify-between h-full overflow-y-auto">
                    <Sidebar />
                    <div className="p-2 flex items-center justify-between">
                        <div className="w-full flex justify-center">
                            <SignUpBtn />
                        </div>
                        <div className="w-full flex justify-center">
                            <Link className="w-full text-center">Sign in</Link>
                        </div>
                    </div>
                </div>
            </Drawer>
        </>
    );
};

export default Navigation;