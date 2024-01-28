import { Outlet } from "react-router-dom";
import { sidebarGenerator } from "../../utils/generateSideBar";
import SideRoutes from "../../routes/routes.user";
import { IoIosMenu } from "react-icons/io";



const MainLayout = () => {

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <label htmlFor="my-drawer-2" className="drawer-button lg:hidden ml-2"><IoIosMenu /></label>
            <div className="drawer-content flex flex-col items-center ">
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {
                        sidebarGenerator(SideRoutes)?.map(item => <li key={item.key}>{item.label}</li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default MainLayout;