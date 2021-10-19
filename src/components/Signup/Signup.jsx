import React from 'react';
import { NavLink } from 'react-router-dom';
import useCommonFirebase from '../../Hooks/useCommonFirebase';
const Signup = () => {
    const { firebaseContext: { handleSubmit, onSubmit, errors, register, trigger } } = useCommonFirebase();
    return (
        <div className="flex items-center justify-center my-20 mx-6">
            <div className="bg-white  rounded-md overflow-hidden shadow-xl">
                <h3 className="text-center text-yellow-500 text-2xl mt-8 font-bold">SIGN UP </h3>
                <div>
                    <div className="p-8">
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <input
                                {...register("name", {
                                    required: 'Name is Required',
                                    minLength: {
                                        value: 4,
                                        message: 'min name length required 4'
                                    },
                                    pattern: {
                                        value: /^[a-z]*$/,
                                        message: 'number is not allowed'
                                    }
                                })}
                                onKeyPress={() => trigger("name")}
                                className={`border-2 ${errors.name && "border-red-400"} rounded-full block w-full px-4 py-3  outline-none`}
                                type="text" placeholder="Your Name" 

                                />
                            {
                                errors.name && (<small className="text-red-500">{errors.name.message} </small>)
                            }
                            <input
                                {...register("email", {
                                    required: 'Email is Required',
                                    pattern: {
                                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        message: 'email is invalid'
                                    }
                                })}
                                onKeyPress={() => trigger("email")}
                                className={`border-2 ${errors.email && "border-red-400"} rounded-full block w-full px-4 py-3 mt-3 outline-none`} type="email" placeholder="Your Email" />
                            {
                                errors.email && (<small className="text-red-500">{errors.email.message} </small>)
                            }

                            <input
                                {...register("imgUrl")}
                                className="border-2 rounded-full block w-full px-4 py-3 mt-3 outline-none" type="url" placeholder="your img url* optional" />

                            <input
                                {...register("password", {
                                    required: 'password is Required',
                                    minLength: {
                                        value: 8,
                                        message: 'min password length required 8'
                                    },
                                })}
                                onKeyPress={() => trigger("password")}
                                className={`border-2  ${errors.password && "border-red-400"}  rounded-full block w-full px-4 py-3 mt-3 outline-none`} type="password" placeholder="Your password" />
                            {
                                errors.password && (<small className="text-red-500">{errors.password.message} </small>)
                            }

                            <div className="my-4">
                                <input className="w-7 h-4" type="checkbox" name="" id="terms" />
                                <label htmlFor="terms">Accepts The <span className="text-blue-500">Terms & Condition </span> </label>
                            </div>

                            <button type="submit" className="px-8 mr-2 py-2 rounded-3xl bg-blue-500 hover:bg-blue-600  text-white shadow-lg">Sing Up </button>
                            <p className="inline-block pb-2">Already have an account?<NavLink to="/login" className="text-blue-500 cursor-pointer">Login </NavLink> </p>

                        </form>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Signup;