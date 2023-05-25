import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../assets/home/01.jpg';
import img2 from '../../../assets/home/02.jpg';
import img3 from '../../../assets/home/03.png';
import img4 from '../../../assets/home/04.jpg';

const Home = () => {
  return (
    <div className='w-full'>
      <Carousel centerMode={true}>
                <div className='h-[90vh]'>
                    <img className='w-full' src={img1} />
                </div>
                <div  className='h-[90vh]'>
                    <img src={img2} />
                </div>
                <div  className='h-[90vh]'>
                    <img src={img3} />
                </div>
                <div  className='h-[90vh]'>
                    <img src={img4} />
                </div>
            </Carousel>
    </div>
  )
}

export default Home