import { useState } from 'react';
import ServiceData from "../Data/ServicesData";

const useCommon = () => {

    const [serviceData, setServiceData] = useState(ServiceData);
   

    return { serviceData,  };
}

export default useCommon;