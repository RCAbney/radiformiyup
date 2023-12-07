import useAuthStore from "../store/authStore";
import { useNavigate, Link } from "react-router-dom";

export default function Header() {
    const isAuth = useAuthStore((state) => state.isAuth);
    const login = useAuthStore((state) => state.loginUser);
    const logout = useAuthStore((state) => state.logoutUser);

    const navigate = useNavigate();

    const handleLogin = () => {
        login();
        navigate("/app");
    };
    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <header className="p-8 flex justify-between item-center bg-slate-300">
            <Link to="/">Logo</Link>
            {isAuth ? (
                <div className="flex gap-4">
                    <Link to="/app">App</Link>
                    <Link to="/invoices">Invoices</Link>
                </div>
            ) : null}
            {!isAuth ? (
                <button
                    className="rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={handleLogin}
                >
                    Login
                </button>
            ) : (
                <div className="flex items-center gap-4">
                    <span>Fake User</span>{" "}
                    <button
                        className="rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </div>
            )}
        </header>
    );
}
