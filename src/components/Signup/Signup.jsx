import React from 'react';
import { NavLink } from 'react-router-dom';
import useCommonFirebase from '../../Hooks/useCommonFirebase';
import { FcGoogle } from "react-icons/fc";
import { useHistory } from 'react-router';
const Signup = () => {
    const { firebaseContext: { setName, setEmail, setPassword, registerUser, googleSignIn, setPhoto, error, setUser, setError, updateUserProfile } } = useCommonFirebase();

    const history = useHistory();

    const handleRegisterUser = () => {
        registerUser()
            .then((result) => {
                updateUserProfile();
                setUser(result.user);
                history.push("/home");
            }).catch((error) => {
                setError(error.message);
            });
    }

    return (

        <div className="flex items-center justify-center my-12 mx-5">
            <div className="bg-white   rounded-md overflow-hidden shadow-xl">
                <h3 className="text-center text-blue-500 text-2xl mt-8 font-semibold">SIGN UP </h3>
                <div>
                    <div className="p-8">
                        <input onBlur={(e) => setName(e.target.value)} className="border-2 rounded-full block w-full px-4 py-3 mb-3 outline-none" type="text" placeholder="Your Name" required />
                        <input onBlur={(e) => setEmail(e.target.value)} className="border-2 rounded-full block w-full px-4 py-3 my-4 outline-none" type="email" placeholder="Your Email" required />
                        <input onBlur={(e) => setPassword(e.target.value)} className="border-2 rounded-full block w-full px-4 py-3 my-3 outline-none" type="password" placeholder="Your password" required />
                        <input onBlur={(e) => setPhoto(e.target.value)} className="border-2 rounded-full block w-full px-4 py-3 my-3 outline-none" type="url" placeholder="Your img url" required />
                        {
                            error ? <p className="text-red-500">{error} </p> : ""
                        }
                        <div className="my-4">
                            <input className="w-7 h-4" type="checkbox" name="" id="terms" />
                            <label htmlFor="terms">Accepts The <span className="text-blue-500">Terms & Condition </span> </label>
                        </div>
                        <button onClick={handleRegisterUser} className="px-8 mr-2 py-2 rounded-3xl bg-blue-500 hover:bg-blue-600  text-white shadow-lg">Sing Up </button>
                        <p className="inline-block pb-2">Already have an account?<NavLink to="/login" className="text-blue-500 cursor-pointer">Login </NavLink> </p>

                        {/*  google sign in */}
                        <div className="text-center pt-3">
                            <h4 className="text-lg font-semibold mb-2">sign up with </h4>
                            <button onClick={googleSignIn}> <FcGoogle className="text-xl" />   </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Signup;