import { Navigate } from "react-router-dom";
import useAuthStore from "../store/authStore";

function ProtectedRoute({children}) {

    const isAuth = useAuthStore((state) => state.isAuth);

    if (!isAuth) {
        return <Navigate to="/" replace />
    }

  return children
}

export default ProtectedRoute