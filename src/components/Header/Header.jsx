import React from 'react';
import { NavLink } from 'react-router-dom';
import useCommonFirebase from '../../Hooks/useCommonFirebase';
import { MdHealthAndSafety, MdShoppingCart, MdLogout } from "react-icons/md";

const Header = () => {
    const { firebaseContext: { user, logOut } } = useCommonFirebase();
    return (
        <div className="">
            <div className="flex items-center justify-between px-20 h-20 shadow-md">
                <div>
                    <NavLink to="/" className="flex items-center font-bold text-xl"> <span>  <MdHealthAndSafety className="w-8 h-8  text-green-500" />  </span> <span>ABHealthCare </span>  </NavLink>
                </div>
                <div>
                    <ul className="flex items-center font-semibold">
                        <li className="mr-4 hover:text-green-500">
                            <NavLink to="/">Home  </NavLink>
                        </li>
                        <li className="mr-4 hover:text-green-500">
                            <NavLink to="/services"> Service  </NavLink>
                        </li>
                        <li className="mr-4 hover:text-green-500">
                            <NavLink to="/doctors"> Doctors  </NavLink>
                        </li>
                        <li className="hover:text-green-500">
                            <NavLink to="/shop"> Shop </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="">
                    <div className="flex items-center font-semibold">
                        <div className="relative mr-5">
                            <NavLink to="/orderReview" className="mr-5 md:mr-0">
                                <MdShoppingCart className="h-7 w-7" />
                                <span className="bg-yellow-500 w-5 h-5 flex items-center justify-center rounded-full text-xs absolute -right-2 bottom-4 font-bold">0 </span>
                            </NavLink>
                        </div>
                        {
                            !user?.email ?
                                <div className="flex items-center font-semibold">
                                    <NavLink to="/login" className="mr-4"> Login </NavLink>
                                    <button className="px-7 py-2 bg-green-400 font-semibold  text-white rounded-full hover:bg-green-500">
                                        <NavLink to="/signup"> Sign up </NavLink>
                                    </button>
                                </div>
                                :
                                <div className="flex items-center font-semibold">
                                    <span className="mr-4"> {user?.displayName} </span>
                                    <img
                                        className="w-10 h-10 rounded-full shadow-lg mr-4"
                                        src={user?.photoURL} alt="" />
                                    <button onClick={logOut}> <MdLogout className="h-7 w-7" /> </button>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header