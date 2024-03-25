import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

const MainLayout = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Nav />
            <Outlet />
        </div>
    );
};

export default MainLayout;