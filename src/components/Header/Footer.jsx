import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaPhoneAlt, FaFacebookF, FaInstagram, FaLinkedinIn, FaLocationArrow, FaTwitter, FaEnvelope } from "react-icons/fa"

const Footer = () => {
    return (
        <div>
            <div className="p-5 md:p-10 grid md:grid-cols-2 lg:grid-cols-3 gap-9 md:place-items-center">
                <div >
                    <h2 className="text-2xl font-bold mb-3">ABHealth Care </h2>
                    <p> Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum  </p>
                    <ul className="flex items-center gap-6 pt-6">
                        <li className="w-10 h-10 bg-black text-white rounded  flex items-center justify-center"><FaFacebookF /> </li>
                        <li className="w-10 h-10 bg-black text-white rounded  flex items-center justify-center"> <FaInstagram /> </li>
                        <li className="w-10 h-10 bg-black text-white rounded  flex items-center justify-center"><FaLinkedinIn />  </li>
                        <li className="w-10 h-10 bg-black text-white rounded  flex items-center justify-center"><FaTwitter />  </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-3">Usefull Links</h2>
                    <div className="flex font-medium">
                        <ul className="mr-7 md:mr-20">
                            <li>
                                <NavLink to="/"> Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">About us </NavLink>
                            </li>

                            <li>
                                <NavLink to="/orderReview"> Cart</NavLink>
                            </li>

                            <li>
                                <NavLink to="/orderReview"> Services</NavLink>
                            </li>

                        </ul>

                        <ul>
                            <li>
                                <NavLink to="/shop"> shop</NavLink>
                            </li>

                            <li>
                                <NavLink to=""> Doctors </NavLink>
                            </li>

                            <li>
                                <NavLink to=""> privacy & security </NavLink>
                            </li>
                            <li>
                                <NavLink to=""> policy & payment </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-3">contact</h2>
                    <ul>
                        <li className="flex gap-3 mb-3"> <FaPhoneAlt /> <span>  +0154517815</span>  </li>
                        <li className="flex gap-3 mb-3">  <FaLocationArrow /> <span> Road 105 new york city, usa</span> </li>
                        <li className="flex gap-3 mb-3"><FaEnvelope /> contact@abhelthcare.com   </li>
                        <li> <img className="w-56" src="https://i1.wp.com/caffeinetreat.com/wp-content/uploads/2018/10/Paypa-e1541212828289.png?ssl=1" alt="payment-getway" />  </li>
                    </ul>
                </div>
            </div>
            <div
                className="bg-gray-100 text-center p-6">
                Copyright © 2021  alright reserved  AB-HealthCare.com.  designed by AB.Siddik
            </div>
        </div>
    )
}

export default Footer;