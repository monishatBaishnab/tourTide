import SectionTitle from "../../Shared/SectionTitle";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { places } from "./places";
const PopularDestination = () => {
    return (
        <div className="container py-10">
            <div className=" flex items-end justify-between">
                <SectionTitle title='Popular Destinations' desc='Most popular destinations around the world, from historical places to natural wonders.' />
                <div className="hidden md:flex items-center justify-center gap-5">
                    <button className="p-3 bg-primary rounded-md text-white hover:bg-black transition"><FaAngleLeft /></button>
                    <button className="p-3 bg-primary rounded-md text-white hover:bg-black transition"><FaAngleRight /></button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5">
                {
                    places?.map(place => <div key={place?.name} className="w-full h-[400px] md:h-[540px] lg:h-[661px] overflow-hidden rounded-xl relative">
                        <img className="h-full w-full object-cover" src={place?.image} alt="" />
                        <div className="absolute left-0 right-0 bottom-0 h-20 bg-gradient-to-b from-black/0 to-black/40 flex flex-col justify-center p-5 space-y-2">
                            <h4 className="!font-playfair text-white text-xl">{place?.name}</h4>
                            <p className="text-white flex items-center gap-1"><IoLocationSharp />{place?.location}</p>
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

export default PopularDestination;