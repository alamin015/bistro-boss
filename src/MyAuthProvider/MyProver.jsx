import React, { createContext, useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from './firebase.config';




export const themeConText = createContext(null);


const MyProver = ({children}) => {
    const [user,setUser] = useState({})
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();


    const googleSignIn = () => {
       return signInWithPopup(auth, googleProvider)
    }
    const userInfo = {
        googleSignIn,
        setUser,
        user
    }



  return (
    <themeConText.Provider value={userInfo}>
        {
            children
        }
    </themeConText.Provider>
  )
}

export default MyProver