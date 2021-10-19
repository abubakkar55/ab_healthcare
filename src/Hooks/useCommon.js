import { useState } from 'react';
import ServiceData from "../Data/ServicesData";

const useCommon = () => {

    const [serviceData, setServiceData] = useState(ServiceData);
    const [clickedPd, setClickedPd] = useState([]);

    const handleStoredProduct = (pd) => {
        const newArray = [...clickedPd, pd];
        setClickedPd(newArray);
        //const uniquePd = clickedPd.map((pd) => pd)
    }

    return { serviceData, clickedPd, handleStoredProduct };
}

export default useCommon;