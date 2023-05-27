import React from 'react'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import "swiper/css/pagination";
import 'swiper/css';
import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";

const OrderOnline = () => {
  return (
    <div className='py-10'>
        <SectionTitle titleTop="---From 11:00am to 10:00pm---" titleBottom="ORDER ONLINE" />
        <div className="container mx-auto">
        <Swiper
        slidesPerView={4}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mt-10"
      >
        <SwiperSlide>
          <div className='mb-10'>
            <img src={img1} className='w-full' alt="" />
            <h2 className="text-3xl font-semibold -mt-12 text-white text-center">SALADS</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='mb-12'>
            <img src={img2} className='w-full' alt="" />
            <h2 className="text-3xl font-semibold -mt-12 text-white text-center">SOUPS</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='mb-10'>
            <img src={img3} className='w-full' alt="" />
            <h2 className="text-3xl font-semibold -mt-12 text-white text-center">PIZZAS</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='mb-10'>
            <img src={img4} className='w-full' alt="" />
            <h2 className="text-3xl font-semibold -mt-12 text-white text-center">DESSERTS</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='mb-10'>
            <img src={img1} className='w-full' alt="" />
            <h2 className="text-3xl font-semibold -mt-12 text-white text-center">SALADS</h2>
          </div>
        </SwiperSlide>
      </Swiper>
        </div>
    </div>
  )
}

export default OrderOnline