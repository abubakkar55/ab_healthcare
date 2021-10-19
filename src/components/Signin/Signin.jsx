import React from 'react'
import { NavLink } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import useCommonFirebase from './../../Hooks/useCommonFirebase';
import { useHistory } from 'react-router';
const Login = () => {
    const { firebaseContext: { setEmail, setPassword, logIn, googleSignIn } } = useCommonFirebase();

    return (
        <div className="flex items-center justify-center my-12">
            <div className="bg-white rounded-md overflow-hidden shadow-xl">
                <h3 className="text-center text-blue-500 text-2xl mt-8 font-semibold">SIGN IN </h3>
                <div>
                    <div className="p-8">

                        <input onBlur={(e) => setEmail(e.target.value)} className="border-2 rounded-full block w-full px-4 py-3 my-4 outline-none" type="email" placeholder="Your Email" />
                        <input onBlur={(e) => setPassword(e.target.value)} className="border-2 rounded-full block w-full px-4 py-3 my-3 outline-none" type="password" placeholder="Your password" />
                        <div className="my-4">
                            <input className="w-7 h-4" type="checkbox" name="" id="terms" />
                            <label htmlFor="terms">Accepts The <span className="text-blue-500">Terms & Condition </span> </label>
                        </div>
                        <button onClick={logIn} className="px-8 mr-2 py-2 rounded-3xl bg-blue-500 hover:bg-blue-600  text-white shadow-lg">Sing Up </button>
                        <p className="inline-block pb-2">new to ABHealth care?<NavLink to="/signup" className="text-blue-500 cursor-pointer">Sign up </NavLink> </p>

                        {/*  google sign in */}
                        <div className="text-center pt-3">
                            <h4 className="text-lg font-semibold mb-2">sign in with </h4>
                            <button onClick={googleSignIn}> <FcGoogle className="text-xl" />   </button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Login
