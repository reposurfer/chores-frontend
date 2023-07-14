import { Navigate } from "react-router-dom";

function RouteGuard({ component }: {component: JSX.Element}) {
    function hasJWT() {
        let flag = false;
 
       //check user has JWT token
       localStorage.getItem("token") ? flag=true : flag=false
      
       return flag
    }

    return (
        hasJWT() ? component : <Navigate to="/login" />
    );
}

export default RouteGuard;