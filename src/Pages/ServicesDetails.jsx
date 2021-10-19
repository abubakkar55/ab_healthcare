import React from 'react'
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import useCommonFirebase from '../Hooks/useCommonFirebase';
import { BsFillBookmarkCheckFill } from "react-icons/bs";
const ServicesDetails = () => {
    const { commonContext: { serviceData } } = useCommonFirebase();
    const { serviceId } = useParams();
    const parseId = parseInt(serviceId);
    const clickedItemData = [serviceData.find((item) => item?.id === parseId)]

    return (
        <div className="my-container py-10">
            {
                clickedItemData?.map((item) => {
                    const { id, name, img, des } = item || {};
                    return (
                        <div key={id} className="flex items-center">
                            <div className="w-1/2">
                                <h2 className="text-4xl font-bold mb-3">{name} </h2>
                                <p className="text-gray-500 mr-32 mb-5">{des} </p>
                                <button>
                                    <NavLink
                                        to="/appointment"
                                        className="px-7 py-3 text-white bg-yellow-400 flex items-center gap-2 font-semibold  rounded-full"
                                    >
                                        <BsFillBookmarkCheckFill className="text-xl" />
                                        <span>Book appointment </span>
                                    </NavLink>
                                </button>
                            </div>
                            <div className="w-1/2 p-4 shadow-md rounded-lg">
                                <img className="rounded-lg h-96 w-full" src={img} alt={name} />
                            </div>
                        </div>
                    )
                })
            }
        </div>

    )
}

export default ServicesDetails
