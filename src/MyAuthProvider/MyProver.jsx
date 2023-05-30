import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import app from './firebase.config';




export const themeConText = createContext(null);


const MyProver = ({children}) => {
    const [user,setUser] = useState({})
    const [loader,setLoader] = useState(true)
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();


    const googleSignIn = () => {
      setLoader(true)
       return signInWithPopup(auth, googleProvider)
    }
    const userInfo = {
        googleSignIn,
        setUser,
        user,
        loader
    }

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth,(Cuser) => {
    setLoader(false)
  })
  return () => {
    unsubscribe();
  }
},[])

  return (
    <themeConText.Provider value={userInfo}>
        {
            children
        }
    </themeConText.Provider>
  )
}

export default MyProver