import { Link } from "react-router-dom";
import SectionTitle from "../../Shared/SectionTitle";
import { FaArrowRightLong } from "react-icons/fa6";

const Blog = () => {
    return (
        <div className="container py-10">
            <SectionTitle title='Our Blog' desc='An insight the incredible experience in the world' />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center mt-10">
                <div className="w-full h-[400px] md:h-600px] lg:h-[700px] overflow-hidden rounded-xl">
                    <img className="w-full h-full object-cover" src="https://s3-alpha-sig.figma.com/img/d8c0/9581/0adccc54c1cae01de3a13bf58abe510e?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KrHBe8K9bjiEpEM9IrEKW-WR8KSq1b4Z4wvFDXMucmN~1--~buwdQs24kwHeJdg3YCo-I72f9bz-P0yCmqBURtybOEaD4k0Jkq0l0OzdRj5N31eYwLsfxsmFe1QzmzgiW4ht6YTIvFxn-8LNEdC46BzyNDLqssntsdZyPB68zb-UaXurmfmR7f5W0SJPmRIVrGN6AdivuSUezLyxf-Rs7Ogmt1D6RftINJ1BLiw~nkAnuqMjUqcK1RprQkOwVroR~DhmhktYpIwptzKmxCldR~HzbVrZxUDQdZkDCzmyc2DfGLrAsTksdxHjkn7b83UV7Lz8NqfU6CJ6AzeujdiyCQ__" alt="" />
                </div>
                <div className="space-y-5">
                    <h2 className="text-4xl !font-playfair">Beautiful Italy Lets travel</h2>
                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness. No one rejects, dislike, or avoids plasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremly painful. Nor again is there anyone who loves or pursues.</p>
                    <Link className="flex items-center gap-2 text-primary">Read More <FaArrowRightLong /></Link>
                </div>
            </div>
        </div>
    );
};

export default Blog;