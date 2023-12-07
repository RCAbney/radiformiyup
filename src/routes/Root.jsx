import Header from "../components/Header";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import { Outlet } from "react-router-dom";

export default function Root() {
    return (
        <div className="h-full w-full flex flex-col">
            <Header />
            <Layout>
                <Outlet />
            </Layout>
            <Footer />
        </div>
    );
}
