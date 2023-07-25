import { Navigate } from "react-router-dom";

function AuthenticatedRouteGuard({ component }: {component: JSX.Element}) {
    const isAllowed = () => {
        let flag = false;
 
       //check user has JWT token
       localStorage.getItem("token") ? flag = false : flag = true
      
       return flag
    }

    return (
        isAllowed() ? component : <Navigate to="/" />
    );
}

export default AuthenticatedRouteGuard;