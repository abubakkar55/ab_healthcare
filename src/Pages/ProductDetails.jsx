import React from 'react'
import { useParams } from 'react-router'
import productsData from './../Data/ProductsData';
import { HiShoppingCart, } from 'react-icons/hi';
import useCommonFirebase from '../Hooks/useCommonFirebase';
const ProductDetails = () => {

    const { pdId } = useParams();
    const { commonContext: { handleStoredProduct } } = useCommonFirebase();
    const clickedProduct = productsData.find((pd) => pd.id === parseInt(pdId))

    return (
        <div className="p-8 md:p-16">
            <div className="flex flex-col md:flex-row gap-6 md:items-center">
                <div className="md:w-1/2">
                    <img className="w-52 md:w-3/5 mx-auto md:mx-0 h-52 md:h-72" src={clickedProduct?.img} alt={clickedProduct?.name} />
                </div>
                <div className="md:w-1/2">
                    <h3 className="text-xl md:text-2xl mb-3 md:mb-6 font-semibold">{clickedProduct?.name} </h3>
                    <p className="mb-3 md:mb-7 md:w-3/4 font-medium"> {clickedProduct?.des}</p>
                    <h3 className="text-3xl mb-6">${clickedProduct?.price} </h3>

                        <div className="py-4">
                            <button to="/shop"
                                onClick={() => handleStoredProduct(clickedProduct)}
                                className="px-8 border-2 border-black flex items-center max-w-max py-3 gap-2 hover:bg-black hover:text-white">
                                <span> <HiShoppingCart className="h-5 w-5" /> </span>
                                <span> add to cart </span>
                            </button>
                        
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProductDetails
