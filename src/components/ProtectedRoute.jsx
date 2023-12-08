import { Navigate, Outlet } from "react-router-dom";
import { useAdminStore } from "../store/adminStore";

function ProtectedRoute({ children, redirectPath = "/" }) {
    const isAuth = useAdminStore((state) => state.isAuth);

    if (!isAuth) {
        return <Navigate to={redirectPath} replace />;
    }

    return children ? children : <Outlet />
}

export default ProtectedRoute;
