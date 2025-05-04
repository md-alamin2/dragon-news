import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser]= useState(null);
    const [loading, setLoading] = useState(true);
    const [titles, setTitles] =useState([]);

    // register user
    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // update user profile
    const updateUser = (updatedUser)=>{
        return updateProfile(auth.currentUser, updatedUser);
    }

    // login user
    const loginUser = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // login with google
    const loginWithGoogle=()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // password reset
    const passwordReset=(email)=>{
        return sendPasswordResetEmail(auth, email)
    }

    // logout user
    const logoutUser = () =>{
        return signOut(auth)
    }



    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        });
        return ()=>{
            unsubscribe()
        }
    },[])

    
    const userInfo ={
        user,
        setUser,
        loading,
        titles,
        setTitles,
        createUser,
        updateUser,
        loginUser,
        loginWithGoogle,
        passwordReset,
        logoutUser,
    }
  return (
    <div>
      <AuthContext value={userInfo}>{children}</AuthContext>
    </div>
  );
};

export default AuthProvider;
