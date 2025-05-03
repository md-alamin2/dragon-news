import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";

const AuthProvider = ({ children }) => {
    const [user, setUser]= useState(null);
    console.log(user);

    // register user
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // const login
    const loginUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logout user
    const logoutUser = () =>{
        return signOut(auth)
    }



    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
        });
        return ()=>{
            unsubscribe()
        }
    },[])
    const userInfo ={
        user,
        setUser,
        createUser,
        loginUser,
        logoutUser,
    }
  return (
    <div>
      <AuthContext value={userInfo}>{children}</AuthContext>
    </div>
  );
};

export default AuthProvider;
