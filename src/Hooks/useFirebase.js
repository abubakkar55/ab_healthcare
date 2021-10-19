import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import initFirebase from './../firebase/firebase.init';

const useFirebase = () => {

    initFirebase();

    // firebase info
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [photo, setPhoto] = useState("");

    const auth = getAuth();

    //sign in google
    const googleSignIn = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
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
        if (name.length === 0 || email.length === 0 || password.length === 0) {
            alert("please fill these input field")
        }
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
        setIsLoading(true);
        if (email.length === 0 && password.length === 0) {
            alert("please fill these input field")
        }
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logout
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            }).catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            }
            )
    }

    //user is login or logout ? this function will observe the user state
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        })
    }, [])

    return {
        setName, setError, error, setPassword, setEmail, logIn, logOut, registerUser, googleSignIn, setPhoto, user, setUser, setIsLoading, isLoading
    }
}

export default useFirebase