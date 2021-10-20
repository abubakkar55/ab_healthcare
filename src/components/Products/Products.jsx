import React from 'react';
import productsData from './../../Data/ProductsData';
import { HiSearch, HiShoppingCart, HiHeart } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
import "./products.css";
import useCommonFirebase from './../../Hooks/useCommonFirebase';
const Products = () => {
    const { commonContext: { handleStoredProduct} } = useCommonFirebase();
    return (
        <div className="px-6 md:px-20 my-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold py-7 md:py-16 text-center">Our Featured Products </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

                {
                    productsData.map(pd => {
                        const { img, id } = pd
                        return (
                            <div key={id} style={{ backgroundColor: "#f6fbfd" }} className="item p-6 flex justify-center items-center flex-col relative rounded-md">
                                <div className="w-60 h-60 rounded-full bg-white flex items-center justify-center">
                                    <img className="w-44 h-44" src={img} alt="" />
                                </div>
                                <div className="icons flex items-center justify-center">
                                    <ul className="flex items-center gap-4 absolute inset-y-0  m-auto">
                                        <li className="cart">
                                            <button
                                                onClick={() => handleStoredProduct(pd)}
                                                className="link h-10 w-10 shadow-xl  rounded-full flex items-center justify-center bg-white"> <HiShoppingCart className="h-6 w-6" /> </button>
                                        </li>

                                        <li className="search">
                                            <NavLink to={`/product_details/${id}`}
                                                className="link h-10 w-10 shadow-xl  rounded-full flex items-center justify-center bg-white">
                                                <HiSearch className="h-6 w-6" /> </NavLink>
                                        </li>
                                        <li className="heart">

                                            <NavLink to=""
                                                className="link h-10 w-10 shadow-xl  rounded-full flex items-center justify-center bg-white">
                                                <HiHeart className="h-6 w-6" /> </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Products
