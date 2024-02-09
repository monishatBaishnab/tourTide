
import { Swiper, SwiperSlide } from 'swiper/react';

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
              <div className='absolute left-0 top-0 bottom-0 my-auto flex flex-col justify-center'>
                <h2>Start your unforgettable journey with us.</h2>
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