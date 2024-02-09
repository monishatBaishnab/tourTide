import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-[#172432] text-white">
            <div className="container py-10 grid grid-cols-1 md:grid-cols-4 gap-5">
                <div>
                    <h3>TourTide</h3>
                    <p>Copyright © TourTide 2023 All rights reserved</p>
                </div>
                <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <div>
                        <h5 className="text-2xl mb-4">Menu</h5>
                        <div className="flex flex-col">
                            <Link>Home</Link>
                            <Link>Explore</Link>
                            <Link>Travel</Link>
                            <Link>Blog</Link>
                            <Link>Pricing</Link>
                        </div>
                    </div>
                    <div>
                        <h5 className="text-2xl mb-4">Information</h5>
                        <div className="flex flex-col">
                            <Link>Destinations</Link>
                            <Link>Supports</Link>
                            <Link>Tarms and Conditions</Link>
                            <Link>Privacy</Link>
                        </div>
                    </div>
                    <div>
                        <h5 className="text-2xl mb-4">Contact Info</h5>
                        <div>
                            <p>+123 456 789</p>
                            <p>info@travellian.com</p>
                            <p>1245, New Yourk, USA</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h5 className="text-2xl mb-4">Follow us On</h5>
                    <div className="flex items-center gap-2">
                        <Link className="text-2xl"><FaFacebook /></Link>
                        <Link className="text-2xl"><FaInstagram /></Link>
                        <Link className="text-2xl"><FaLinkedin /></Link>
                        <Link className="text-2xl"><FaTwitter /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;