
import { Swiper, SwiperSlide } from 'swiper/react';
import { TfiAngleDown } from "react-icons/tfi";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

// import required modules
import { Pagination, EffectFade, Navigation } from 'swiper/modules';
const Header = () => {

  const slids = [
    {
      image: 'https://i.ibb.co/s1xJ6gk/nick-karvounis-dg-Rh4-MQ1-AGQ-unsplash.jpg'
    },
    {
      image: 'https://i.ibb.co/NxCt3zW/nathan-cima-v-G5akut-Nq-CM-unsplash.jpg'
    },
    {
      image: 'https://i.ibb.co/TYyGx3L/joshua-leeman-5igo0hl7-NN0-unsplash.jpg'
    }
  ]

  const data = [
    'Destination',
    "Person",
    "Check In",
    "Check Out"
  ]

  return (
    <div className='max-w-[1920px]'>
      <Swiper
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}
        effect={'fade'}
        modules={[Pagination, EffectFade, Navigation]}
        className="mySwiper header"
      >
        {
          slids.map(slide => <SwiperSlide key={slide.image}>
            <div className='w-full h-full overflow-hidden relative'>
              <img className='h-full w-full object-cover' src={slide.image} alt="" />
              <div className='absolute left-0 top-0 bottom-0 right-0 bg-black/50'></div>
              <div className='absolute left-0 top-0 bottom-0 my-auto flex flex-col justify-center max-w-screen-2xl mx-auto'>
                <h2 className='!font-playfair text-white text-2xl md:text-7xl max-w-screen-lg pl-10'>Start your unforgettable journey with us.</h2>
                <p className='text-white mt-5 text-lg pl-10'>The best travel for your jouney begins now</p>
                <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 bg-white max-w-[80vw] rounded-r-2xl'>
                  <div className='md:col-span-3 lg:col-span-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-10 gap-4'>
                    {
                      data?.map(item =>
                        <div key={item} className='space-y-2'>
                          <h5 className='uppercase text-blue-gray-500'>{item}</h5>
                          <div className='flex items-center gap-2'>
                            <input className='outline-none focus:outline-none border-b-2 border-b-black !font-playfair w-full' type="text" />
                            <TfiAngleDown />
                          </div>
                        </div>
                      )
                    }

                  </div>
                  <div className='col-span-1 flex items-center justify-center bg-primary text-white cursor-pointer p-10 rounded-r-2xl'>
                      <span className='!font-playfair'>Book Now</span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>)
        }
        <div className='absolute left-0'>
          <span className='swiper-button-prev header-btn-prev p-2 text-2xl transition-all rounded-md bg-cyan-100'><BsArrowLeft className='' /></span>
          <span className='swiper-button-next header-btn-next p-2 text-2xl transition-all rounded-md bg-cyan-100'><BsArrowRight className='' /></span>
        </div>
      </Swiper >
    </div>
  );
};

export default Header;