import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, EffectCoverflow } from 'swiper/modules'; // New path for modules
import {swiperContent} from '../constants/index';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Home.css'

const Home = () => {
  return (
    <>
    <div className="flex flex-col lg:flex-col sm:justify-center justify-between items-center mt-6 lg:mt-20">
      <div className="">
       <h1 className='text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide'>
       Unlocking Insights: Your Gateway to 
       <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'>
        {" "} 
        Groundbreaking Research and Knowledge
       </span>
       </h1>
       <p className='mt-5 text-center p-3 bg-cyan-800'>
       Data science is a multidisciplinary field that combines statistical analysis, programming, 
       and domain expertise to extract meaningful insights from large sets of data. By leveraging 
       tools like machine learning, artificial intelligence, and data visualization, data scientists 
       can analyze patterns, make predictions, and drive data-driven decision-making across various 
       industries. Whether it’s improving customer experiences, optimizing business processes, or 
       discovering new trends, data science plays a critical role in turning raw data into actionable knowledge.
       </p>
      </div>
    
    </div>
    <div className="mt-10 lg:mt-15">
        {/* Add your content here */}
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {swiperContent.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item.image} alt="slide_image" />
          </SwiperSlide>
        ))}

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
      </div>

      
    </>
  )
}

export default Home
