import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Service.css"
import useCommonFirebase from './../../Hooks/useCommonFirebase';
const Services = () => {
    const { commonContext: { serviceData } } = useCommonFirebase();
    return (
        <div className="my-container px-5 py-16">
            <h2 className="text-2xl md:text-4xl font-bold text-center my-8
        ">Our Services </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {
                    serviceData.map((item) => {
                        const { id, name, img, des } = item;
                        return (
                            <div key={id} className="service-item shadow-md px-3 pt-4 pb-6 rounded-lg">
                                <img className="h-48 w-full rounded-lg" src={img} alt={name} />
                                <div className="p-3">
                                    <h3 className="text-xl font-semibold mb-3">{name} </h3>
                                    <p className="text-gray-500">{des.slice(0, 60)}... </p>
                                </div>
                                <button className="service-btn font-semibold px-6 py-2 border-2 border-green-400 rounded-full">
                                    <NavLink to={`/serviceDetails/${id}`}> See Details </NavLink>
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Services
