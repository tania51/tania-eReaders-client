import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const PrivateRoute = ({children}) => {

    const {user, loading} = useAuth();
    const location = useLocation();

    if(loading) {
        return <div className="flex justify-center h-[80vh] items-center">
            <span className="loading loading-bars loading-lg text-rose-600"></span>
        </div>
    }

    if(user) {
        return children;
    }
    return <Navigate state={location} to="/login"></Navigate>


    
};

export default PrivateRoute;