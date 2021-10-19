import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import initFirebase from './../firebase/firebase.init';

const useFirebase = () => {

    initFirebase();

    // firebase info
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [photo, setPhoto] = useState("");
 console.log(name, email, password);

    const auth = getAuth();

    //sign in google
    const googleSignIn = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user)
            }).catch((error) => {
                setError(error.message);
            });

    }

    const updateUserProfile = () => {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
            .then(() => {
            }).catch((error) => {
                setError(error.message);
            });
    }

    // sign up
    const registerUser = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                updateUserProfile();
                setUser(result.user);
            }).catch((error) => {
                setError(error.message);
            });
    }

    //login 
    const logIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
            
            }).catch((error) => {
                setError(error.message);
            });
    }

    // logout
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            }).catch((error) => {
                setError(error.message);
            });
    }

    //user is login or logout ? this function will observe the user state
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
        })
    }, [])

    return {
     setName, setError, error, setPassword, setEmail, logIn, logOut, registerUser, googleSignIn, setPhoto, user

    }
}

export default useFirebase