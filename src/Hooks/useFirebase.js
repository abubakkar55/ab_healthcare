import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import initFirebase from './../firebase/firebase.init';
import { useHistory } from 'react-router';

const useFirebase = () => {

    initFirebase();

    // react hook form info
    const [registerFormData, setregisterFormData] = useState({});
    const [logInFormData, setLogInFormData] = useState({});
    const { register, handleSubmit, formState: { errors }, trigger, reset } = useForm();
    const history = useHistory();

    // firebase info
    const [user, setUser] = useState({});
    const [error, setError] = useState("");

    // this function will get  register user data
    const onSubmit = (data) => {
        setregisterFormData(data);
    }
    const logInData = (data) => {
        setregisterFormData(data);
    }

    // destructure user form data
    const { name, email, password, imgUrl } = registerFormData || {};
    const { logInEmail, logInPassword } = logInFormData || {};
    console.log(registerFormData);
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
            photoURL: imgUrl
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
                setUser(result.user);
                updateUserProfile();
                logOut();
                reset();
            }).catch((error) => {
                setError(error.message);
            });
            history.push("/login");
    }

    //login 
    const logIn = () => {
        signInWithEmailAndPassword(auth, logInEmail, logInPassword)
            .then((result) => {
                setUser(result.user);
                reset();
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
        handleSubmit, onSubmit, errors,
        register, registerFormData,
        trigger, googleSignIn, user, setUser, error,
        logOut, registerUser, logIn, logInData
    }
}

export default useFirebase