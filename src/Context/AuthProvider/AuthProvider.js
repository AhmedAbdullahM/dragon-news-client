import React,{createContext,useState,useEffect} from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from './../../firebase/Firebase.config';
import toast from 'react-hot-toast';
export const AuthContext=createContext()

const auth=getAuth(app)

const AuthProvider = ({children}) => {
const [user,setUser]=useState(null)
const [loading,setLoading]=useState(true)
    const providerLogin=(provider)=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUserProfile=(profile)=>{
        return updateProfile(auth.currentUser,profile)
    }

    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

const LogOut=()=>{
    setLoading(true)
   return signOut(auth)
}
const verifyEmail=()=>{
 return sendEmailVerification(auth.currentUser)
}

useEffect(()=>{
   const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
        // console.log('from useEffect state change', currentUser)
        // console.log(currentUser)
        if( currentUser === null || currentUser.emailVerified){

            setUser(currentUser)
        }
        
        else{
            toast.error('your email not verified')
            
        }
        setLoading(false)
       
    })
    return ()=>unsubscribe;
},[])


const authInfo={
    user,
    providerLogin,
    LogOut,
    createUser,
    signIn,
    loading,
    updateUserProfile,
    verifyEmail,
    setLoading
}


    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;