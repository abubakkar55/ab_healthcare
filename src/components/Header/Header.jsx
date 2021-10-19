import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdHealthAndSafety, MdShoppingCart, MdLogout } from "react-icons/md";
import useCommonFirebase from './../../Hooks/useCommonFirebase';

const Header = () => {
    const { firebaseContext: { user, logOut } } = useCommonFirebase();
    const { commonContext: {  clickedPd } } = useCommonFirebase();
    return (
        <div className="">
            <div className="flex flex-col md:flex-row items-center md:justify-between px-6 md:px-20 h-20 py-2 shadow-md">
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
                        <li className="hover:text-green-500 mr-4">
                            <NavLink to="/shop"> Shop </NavLink>
                        </li>
                        <li className=" hover:text-green-500">
                            <NavLink to="/orderReview"> Order Review  </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="hidden md:block">
                    <div className="flex items-center font-semibold">
                        <div className="relative mr-5">
                            <NavLink to="/orderReview" className="mr-5 md:mr-0">
                                <MdShoppingCart className="h-7 w-7" />
                                <span className="bg-yellow-400 w-5 h-5 flex items-center justify-center rounded-full text-xs absolute -right-2 bottom-4 font-bold"> {clickedPd.length} </span>
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