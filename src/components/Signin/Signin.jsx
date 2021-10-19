import React from 'react'
import { NavLink } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import useCommonFirebase from './../../Hooks/useCommonFirebase';
const Login = () => {

    const { firebaseContext: { handleSubmit, logInData, errors, register, trigger, googleSignIn, logIn } } = useCommonFirebase();
    return (
        <>
            <div className="flex items-center justify-center my-20 mx-6">
                <div className="bg-white  rounded-md overflow-hidden shadow-md">
                    <h3 className="text-center text-yellow-500 text-2xl mt-8 font-bold">SIGN IN </h3>
                    <div>
                        <div className="p-8">
                            <form onSubmit={handleSubmit(logInData)}>

                                <input
                                    {...register("logInEmail", {
                                        required: 'Email is Required',
                                        pattern: {
                                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                            message: 'email is invalid'
                                        }
                                    })}
                                    onKeyPress={() => trigger("email")}
                                    className={`border-2 ${errors.logInEmail && "border-red-400"} rounded-full block w-full px-4 py-3 mt-3 outline-none`} type="email" placeholder="Your Email" />
                                {
                                    errors.logInEmail && (<small className="text-red-500">{errors.logInEmail.message} </small>)
                                }

                                <input
                                    {...register("logInPassword", {
                                        required: 'password is Required',
                                    })}
                                    className={`border-2  ${errors.logInPassword && "border-red-400"}  rounded-full block w-full px-4 py-3 mt-3 outline-none`} type="password" placeholder="Your password" />
                                {
                                    errors.logInPassword && (<small className="text-red-500">{errors.logInPassword.message} </small>)
                                }
                                <div className="mt-6">
                                    <button onClick={logIn} type="submit" className="px-8 mr-2 py-2 rounded-3xl bg-blue-500 hover:bg-blue-600  text-white shadow-lg">Sing in </button>
                                    <p className="inline-block pb-2">new to ABHealth care?<NavLink to="/signup" className="text-blue-500 cursor-pointer">Signup </NavLink> </p>
                                </div>
                            </form>

                            {/*  google sign in */}
                            <div className="text-center pt-3">
                                <h4 className="text-lg font-semibold mb-2">sign in with </h4>
                                <button onClick={googleSignIn}> <FcGoogle className="text-xl" />   </button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </>
    )
}

export default Login
