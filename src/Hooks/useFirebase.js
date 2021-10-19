import { useState } from 'react'
import { useForm } from "react-hook-form";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initFirebase from './../firebase/firebase.init';

const useFirebase = () => {

    initFirebase();

    // react hook form info
    const [userFormData, setUserFormData] = useState({});
    const { register, handleSubmit, reset, formState: { errors }, trigger } = useForm();

    // firebase info
    const [user, setUser] = useState({});
    const [error, setError] = useState("");

    // this function will get all user data
    const onSubmit = (data) => {
        setUserFormData(data);
        reset();
    }

    const auth = getAuth();

    //sign in google
    const googleSignIn = () => {
        const googleProvider = GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user)
            }).catch((error) => {
                setError(error.message);
            });
    }

    // sign up

    return { handleSubmit, onSubmit, errors, register, userData: userFormData, trigger, googleSignIn, user, setUser, error }
}

export default useFirebase