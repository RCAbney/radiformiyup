import { useAdminStore } from "../store/adminStore";
import { useNavigate, Link } from "react-router-dom";

export default function Header() {
    const isAuth = useAdminStore((state) => state.isAuth);
    const userName = useAdminStore((state) => state.user?.userName);
    const login = useAdminStore((state) => state.loginUser);
    const logout = useAdminStore((state) => state.logoutUser);

    const navigate = useNavigate();

    const handleLogin = () => {
        login();
        // navigate("/app");
    };
    const handleLogout = () => {
        logout();
        // navigate("/");
    };

    return (
        <header className="px-8 py-4 flex justify-between items-center bg-slate-300">
            <div className="h-10 flex items-center">
                <Link to="/">Logo</Link>
            </div>
            {isAuth ? (
                <div className="flex gap-4">
                    {/* <Link to="/app">App</Link> */}
                    {/* <Link to="/invoices">Invoices</Link> */}
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
                    <img
                        className="inline-block h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                    />
                    <span>{userName ? userName : "fake user"}</span>{" "}
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
