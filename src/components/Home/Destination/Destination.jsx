import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import SectionTitle from "../../Shared/SectionTitle";

const Destination = () => {
    return (
        <div className="container py-10">
            <div className="flex items-end justify-between">
                <SectionTitle title='Destination Gallery' desc='Our photo gallery on trip' />

                <div className="hidden md:flex items-center justify-center gap-5">
                    <button className="p-3 bg-primary rounded-md text-white hover:bg-black transition"><FaAngleLeft /></button>
                    <button className="p-3 bg-primary rounded-md text-white hover:bg-black transition"><FaAngleRight /></button>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-20 gap-5">
                <div className="w-full h-[450px] overflow-hidden hover:-translate-y-10 transition rounded-xl">
                    <img className="w-full h-full object-cover" src="https://s3-alpha-sig.figma.com/img/3169/3dd6/8a5d0f488a165c9b801d4a008d9dbcf8?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M14J~hMz6Z0JrGOf9KxeLYV~aARhb7q~67Zgavyw2~eN2chDQeRdah2rvRleq3khdPTuc7~ozLrtL0QfFC-wzpKXWcmtFVHEJ06uyMm28g7CIWFNaWRxdENP7aSPzm2wFuVCswJYE6a8X7loCeg82ie8YUd~lek6-fMuN9Nh0D5DfJmiAJa~jnPpv5DxYkOF9flyuecOq4C25bRxnw0ffT~XHRDgSFiXBtt5qmJUfhljw0aPI2ElHa5xCewTtB~zKW4N9jNN~BYOnsYRG0CKSjeg4W0RRJTCtpkySNxLbqgHYZp3Qik-2Npr~G1LIfabSD9LrhHb4V1ild30a9p9XQ__" alt="" />
                </div>
                <div className="w-full h-[450px] overflow-hidden hover:-translate-y-10 transition rounded-xl">
                    <img className="w-full h-full object-cover" src="https://s3-alpha-sig.figma.com/img/3169/3dd6/8a5d0f488a165c9b801d4a008d9dbcf8?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M14J~hMz6Z0JrGOf9KxeLYV~aARhb7q~67Zgavyw2~eN2chDQeRdah2rvRleq3khdPTuc7~ozLrtL0QfFC-wzpKXWcmtFVHEJ06uyMm28g7CIWFNaWRxdENP7aSPzm2wFuVCswJYE6a8X7loCeg82ie8YUd~lek6-fMuN9Nh0D5DfJmiAJa~jnPpv5DxYkOF9flyuecOq4C25bRxnw0ffT~XHRDgSFiXBtt5qmJUfhljw0aPI2ElHa5xCewTtB~zKW4N9jNN~BYOnsYRG0CKSjeg4W0RRJTCtpkySNxLbqgHYZp3Qik-2Npr~G1LIfabSD9LrhHb4V1ild30a9p9XQ__" alt="" />
                </div>
                <div className="w-full h-[450px] overflow-hidden hover:-translate-y-10 transition rounded-xl">
                    <img className="w-full h-full object-cover" src="https://s3-alpha-sig.figma.com/img/3169/3dd6/8a5d0f488a165c9b801d4a008d9dbcf8?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M14J~hMz6Z0JrGOf9KxeLYV~aARhb7q~67Zgavyw2~eN2chDQeRdah2rvRleq3khdPTuc7~ozLrtL0QfFC-wzpKXWcmtFVHEJ06uyMm28g7CIWFNaWRxdENP7aSPzm2wFuVCswJYE6a8X7loCeg82ie8YUd~lek6-fMuN9Nh0D5DfJmiAJa~jnPpv5DxYkOF9flyuecOq4C25bRxnw0ffT~XHRDgSFiXBtt5qmJUfhljw0aPI2ElHa5xCewTtB~zKW4N9jNN~BYOnsYRG0CKSjeg4W0RRJTCtpkySNxLbqgHYZp3Qik-2Npr~G1LIfabSD9LrhHb4V1ild30a9p9XQ__" alt="" />
                </div>
                <div className="w-full h-[450px] overflow-hidden hover:-translate-y-10 transition rounded-xl">
                    <img className="w-full h-full object-cover" src="https://s3-alpha-sig.figma.com/img/3169/3dd6/8a5d0f488a165c9b801d4a008d9dbcf8?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M14J~hMz6Z0JrGOf9KxeLYV~aARhb7q~67Zgavyw2~eN2chDQeRdah2rvRleq3khdPTuc7~ozLrtL0QfFC-wzpKXWcmtFVHEJ06uyMm28g7CIWFNaWRxdENP7aSPzm2wFuVCswJYE6a8X7loCeg82ie8YUd~lek6-fMuN9Nh0D5DfJmiAJa~jnPpv5DxYkOF9flyuecOq4C25bRxnw0ffT~XHRDgSFiXBtt5qmJUfhljw0aPI2ElHa5xCewTtB~zKW4N9jNN~BYOnsYRG0CKSjeg4W0RRJTCtpkySNxLbqgHYZp3Qik-2Npr~G1LIfabSD9LrhHb4V1ild30a9p9XQ__" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Destination;