import { Navigate, Outlet } from "react-router-dom";

import useAuth from "components/shared/hooks/useAuth";

const PublicRoute = () => {
    const isUserLogin= useAuth();

    if(isUserLogin) {
        return <Navigate to='/my-contacts' />
    }

    return <Outlet />
}

export default PublicRoute;