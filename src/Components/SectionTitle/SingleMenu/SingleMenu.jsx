import React from 'react'

const SingleMenu = ({item}) => {
    const {name,image,category,price,recipe} = item
  return (
    <div className='flex items-center gap-8'>
        <img src={image} className='w-[80px] h-[80px] rounded-full object-cover' alt="" />
        <div>
            <div className='flex items-center justify-between'>
                <h2 className='text-[#151515] font-semibold text-xl'>{name}-------------</h2>
                <p className='text-medium text-[#BB8506] text-xl'>${price}</p>
            </div>
            <p className='text-base mt-3 text-[#737373]'>{recipe}</p>
        </div>
    </div>
  )
}

export default SingleMenu