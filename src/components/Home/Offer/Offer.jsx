import { FaAngleLeft, FaAngleRight, FaStar } from "react-icons/fa6";
import SectionTitle from "../../Shared/SectionTitle";
import { places } from "../PopularDestination/places";
import { Button } from "@material-tailwind/react";

const Offer = () => {
    
    return (
        <div className="container">
            <div className="flex items-end justify-between">
                <div className="hidden md:flex items-center justify-center gap-5">
                    <button className="p-3 bg-primary rounded-md text-white hover:bg-black transition"><FaAngleLeft /></button>
                    <button className="p-3 bg-primary rounded-md text-white hover:bg-black transition"><FaAngleRight /></button>
                </div>
                <SectionTitle align='right' side='right' title='Special Offer' desc={'Check out our special offer and discounts'} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5">
                {
                    places?.map(place => <div key={place?.name} className="rounded-3xl bg-[#FFF8F1] space-y-3 overflow-hidden">
                    <div className="w-full h-[300px] overflow-hidden">
                        <img className="w-full h-full object-cover" src="https://i.ibb.co/s1xJ6gk/nick-karvounis-dg-Rh4-MQ1-AGQ-unsplash.jpg" alt="" />
                    </div>
                    <div className="p-5 space-y-2">
                        <h4 className="text-2xl text-blue-gray-500">Lisbon, Portugal</h4>
                        <div className="flex items-center gap-1 text-yellow-500">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        </div>
                        <p>5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.</p>
                        <div className="flex items-center justify-between">
                            <h3 className="text-4xl text-primary"><span className="text-lg text-blue-gray-500">From</span> $415</h3>
                            <Button className="bg-primary !font-normal py-2 text-base shadow-none hover:shadow-none">details</Button>
                        </div>
                    </div>
                </div>)
                }
            </div>
            <div className="flex items-center justify-center gap-5 md:hidden mt-5">
                <button className="p-3 bg-primary rounded-md text-white hover:bg-black transition"><FaAngleLeft /></button>
                <button className="p-3 bg-primary rounded-md text-white hover:bg-black transition"><FaAngleRight /></button>
            </div>
        </div>
    );
};

export default Offer;