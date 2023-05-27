import React from 'react'

const SectionTitle = ({titleTop,titleBottom}) => {
  return (
        <div className="container text-center mx-auto py-4">
            <h4 className='mb-4 text-[#D99904] text-xl font-medium italic'>{titleTop}</h4>
            <h4 className='text-4xl py-4 max-w-[400px] mx-auto border-y-2 w-full'>{titleBottom}</h4>
        </div>
  )
}

export default SectionTitle