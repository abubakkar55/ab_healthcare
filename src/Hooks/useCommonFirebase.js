import React, { useContext } from 'react'
import { CommonFirebaseContext } from '../context/CommonFirebaseProvider'

const useCommonFirebase = () => {
 const commonFirebaseContext = useContext(CommonFirebaseContext);
return commonFirebaseContext;
}

export default useCommonFirebase;