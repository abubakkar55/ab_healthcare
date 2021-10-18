import React, { createContext } from 'react'
import useFirebase from './../Hooks/useFirebase';
import useCommon from './../Hooks/useCommon';

export const CommonFirebaseContext = createContext();

const CommonFirebaseProvider = ({ children }) => {
    const firebaseContext = useFirebase();
    const commonContext = useCommon();
    return (
        <CommonFirebaseContext.Provider value={{ firebaseContext, commonContext }}>
            {children}
        </CommonFirebaseContext.Provider>
    )
}

export default CommonFirebaseProvider