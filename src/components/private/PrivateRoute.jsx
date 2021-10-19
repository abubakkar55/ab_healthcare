import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import useCommonFirebase from '../../Hooks/useCommonFirebase';

const PrivateRoute = ({ children, ...rest }) => {
    const { firebaseContext: { user, isLoading } } = useCommonFirebase();

    if (isLoading) {
        return <div>
            <img src="https://cdn.dribbble.com/users/5484/screenshots/2145786/for_dribbble.gif" alt="loading-img" />
        </div>
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>

                user?.email ?
                    children :

                    <Redirect to={{
                        pathname: "/login",
                        state: { from: location }
                    }}> </Redirect>


            }
        >

        </Route >
    )
}

export default PrivateRoute
