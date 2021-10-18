import React, { useState } from 'react'

const useCommon = () => {
    const [data, setData] = useState(false);
    return { data, setData };
}

export default useCommon;