import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../assets/home/01.jpg';
import img2 from '../../../assets/home/02.jpg';
import img3 from '../../../assets/home/03.png';
import img4 from '../../../assets/home/04.jpg';

const Banner = () => {
  return (
    <div className='text-center mt-[100px]'>
    <Carousel>
              <div className='h-[80vh] w-full'>
                  <img className='w-full' src={img1} />
              </div>
              <div  className='h-[80vh] w-full'>
                  <img src={img2} />
              </div>
              <div  className='h-[80vh] w-full'>
                  <img src={img3} />
              </div>
              <div  className='h-[80vh] w-full'>
                  <img src={img4} />
              </div>
          </Carousel>
  </div>
  )
}

export default Banner