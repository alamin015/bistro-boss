import React, { useContext } from 'react';
import { FcGoogle } from "react-icons/fc";
import { themeConText } from '../../MyAuthProvider/MyProver';
import { useNavigate } from 'react-router-dom';

const Login = () => {
const Navigate = useNavigate();
    const {googleSignIn,setUser,user} = useContext(themeConText);

    const handleLogin = () => {
        googleSignIn()
        .then(result => {
            setUser(result.user);
            Navigate("/")
        })
    }


  return (
    <div className='flex items-center justify-center h-screen w-full'>
        <FcGoogle onClick={handleLogin} className='text-5xl cursor-pointer' />
    </div>
  )
}

export default Login