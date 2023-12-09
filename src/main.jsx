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
import Invoices from "./routes/Invoices.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route element={<Root />} path="/" errorElement={<ErrorBoundary />}>
                <Route element={<ProtectedRoute />}>
                    <Route
                        element={<App />}
                        // path="/app"
                        index
                        errorElement={<ErrorBoundary />}
                    />
                    <Route
                        element={<Invoices />}
                        path="/invoices"
                        errorElement={<ErrorBoundary />}
                    />
                </Route>
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

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    </React.StrictMode>
);
