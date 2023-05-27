import React from 'react'

const SinglePopular = ({myData}) => {
    const {image, name, recipe} = myData;
  return (
    <div>
        <div className='overflow-hidden customHover'>
            <img src={image} className='w-full' alt="" />
        </div>
        <div className='bg-[#F3F3F3] text-center px-4 pt-4 pb-6'>
            <h2 className='text-semibold text-2xl text-[#151515] mt-8'>{name}</h2>
            <p className='mt-2 mb-6 text-[#151515] text-base'>{recipe}</p>
            <button className='py-2 px-7 border-0 bg-blue-800 rounded-md hover:bg-blue-600 text-medium text-xl text-white'>Add to Cart</button>
        </div>
    </div>
  )
}

export default SinglePopular