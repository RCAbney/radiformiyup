import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "../store/authStore";

function ProtectedRoute({ children, redirectPath = "/" }) {
    const isAuth = useAuthStore((state) => state.isAuth);

    if (!isAuth) {
        return <Navigate to={redirectPath} replace />;
    }

    return children ? children : <Outlet />
}

export default ProtectedRoute;
