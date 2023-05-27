import React, { useEffect, useState } from 'react'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle'
import SingleMenu from '../../../Components/SectionTitle/SingleMenu/SingleMenu'

const OurMenu = () => {
    const [menu,setMenu] = useState([])

    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(result => setMenu(result.slice(0,6)))
    },[])
  return (
    <div className='py-14'>
        <SectionTitle titleTop="---Check it out---" titleBottom="FROM OUR MENU" />
        <div className='container mx-auto mt-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {
                menu.map(item => <SingleMenu item={item} key={item._id} />)
            }
        </div>
        </div>
    </div>
  )
}

export default OurMenu