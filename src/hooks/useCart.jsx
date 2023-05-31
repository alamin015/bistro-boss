import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query'
import { themeConText } from '../MyAuthProvider/MyProver';

const useCart = () => {
  const {user} = useContext(themeConText)

  const { refetch, data : cart =[] } = useQuery({
    queryKey: ['cart',user?.email],
    queryFn: async () => {
      const data = await fetch(`http://localhost:5000/cart?email=${user?.email}`)
      return data.json();
    },
  })

  return [cart,refetch]


}

export default useCart