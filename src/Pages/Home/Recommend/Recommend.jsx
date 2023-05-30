import React, { useEffect, useState } from 'react'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle'
import SinglePopular from '../../../Components/SinglePopular/SinglePopular';

const Recommend = () => {
  const [items,setItems] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/menu')
    .then(res => res.json())
    .then(result => setItems(result))
  },[])
  return (
    <div className='py-12'>
      <SectionTitle titleBottom="CHEF RECOMMENDS" titleTop="---Should Try---" />
      <div className='container mx-auto mt-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
          {
            items.map((single) => <SinglePopular myData={single} key={single._id} />)
          }
        </div>
      </div>
    </div>
  )
}

export default Recommend