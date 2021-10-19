import React from 'react'
import { useHistory } from 'react-router';

const NotFound = () => {
    const history = useHistory();
    const handleBack = () => {
        history.push("/");
    }
    return (
        <>
             <div className="h-screen  bg-gray-50 flex items-center justify-center flex-col">
            <h3 className="text-3xl font-semibold mb-6">the page you want to go is currently unavailable 😭 </h3>
            <button onClick={handleBack}
                className="px-8 border-2 border-green-400 text-lg font-semibold py-3  hover:bg-green-400  hover:text-white">
                <span> Back to home </span>
            </button>

        </div>
        </>
    )
}

export default NotFound
