import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import axios from "axios";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    // google login
    const googleProvider = new GoogleAuthProvider()

    // creating user using email and password
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // signIn with email and password
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    // logout 
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    // manage state and see if there is any logged in user
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)

            const existsUser = {email : currentUser?.email || user?.email}
            setLoading(false);
            
            if(currentUser) {
            console.log(existsUser);
                axios.post('https://e-readers-server.vercel.app/api/v1/auth/token-access', existsUser, {withCredentials: true} )
                .then(res => {
                    console.log(res.data)
                })
                .catch(err => console.log(err))
            }
            else {
                axios.post('https://e-readers-server.vercel.app/api/v1/logout', existsUser, {withCredentials: true})
                .then(res => {
                    console.log(res.data)
                })
                .catch(err => console.log(err))
            }


            
        })
        return () => {
            return unSubscribe();
        }
    }, [user])

    const authInfo = {
        user,
        loading,
        setLoading,
        createUser,
        signIn,
        logOut,
        googleSignIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;