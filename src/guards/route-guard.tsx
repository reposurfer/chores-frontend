import { Navigate } from "react-router-dom";

function RouteGuard({ component }: {component: JSX.Element}) {
    const isAllowed = () => {
        let flag = false;
 
       //check user has JWT token
       localStorage.getItem("token") ? flag = true : flag = false
      
       return flag
    }

    return (
        isAllowed() ? component : <Navigate to="/login" />
    );
}

export default RouteGuard;