import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import NotFound from "./components/NotFound.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import "./index.css";
import Root from "./routes/Root.jsx";
import App from "./routes/App.jsx";
import Oops from "./routes/Oops.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route element={<Root />} path="/" errorElement={<ErrorBoundary />}>
                <Route path="/app" element={<ProtectedRoute><App /></ProtectedRoute>} />
                <Route
                    element={<Oops />}
                    path="/oops"
                    errorElement={<ErrorBoundary />}
                />
                <Route element={<NotFound />} path="*" />
            </Route>
        </>
    )
);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
