import React, { useContext } from 'react'
import { themeConText } from './../../MyAuthProvider/MyProver';

const SinglePopular = ({myData}) => {
  const {user} = useContext(themeConText)
    const {image, name, recipe} = myData;


    const handleCart = () => {
      if(user.email) {
        myData.email = user?.email;
        console.log(myData)
        fetch('http://localhost:5000/cart',{
          method: "POST",
          headers: {
            "content-type" : "application/json"
          },
          body: JSON.stringify(myData)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
        })
      }else {
        alert("please log in")
      }

    }



  return (
    <div>
        <div className='overflow-hidden customHover'>
            <img src={image} className='w-full' alt="" />
        </div>
        <div className='bg-[#F3F3F3] text-center px-4 pt-4 pb-6'>
            <h2 className='text-semibold text-2xl text-[#151515] mt-8'>{name}</h2>
            <p className='mt-2 mb-6 text-[#151515] text-base'>{recipe}</p>
            <button onClick={handleCart} className='py-2 px-7 border-0 bg-blue-800 rounded-md hover:bg-blue-600 text-medium text-xl text-white'>Add to Cart</button>
        </div>
    </div>
  )
}

export default SinglePopular