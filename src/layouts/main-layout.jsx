import { Navigate, Route, Routes } from "react-router";
import HeaderComponent from "../components/layouts/header/HeaderComponent";
import SidebarComponent from "../components/layouts/Sidebar/SidebarComponent";
import DashboardPage from "../pages/DashboardPage";
import ProductPage from "../pages/ProductPage";
import CartPage from "../pages/CartPage";
import { useEffect, useState } from "react";

const MainLayout = () => {

    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    useEffect(()=>{
        console.log(isSidebarCollapsed)
    }, [isSidebarCollapsed])

    return <div className="w-full h-screen flex">
        {/* here started our sidebar */}

        <SidebarComponent isSidebarCollapsed={isSidebarCollapsed} />

        {/* here started our right panel */}
        <div className="w-full h-full">
            <HeaderComponent isSidebarCollapsed={isSidebarCollapsed} setIsSidebarCollapsed={setIsSidebarCollapsed} />
 
            <div className="p-2 bg-[#c8d6e5]">
                <Routes>
                    <Route path="" element={<Navigate to="dashboard" />} />
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/product" element={<ProductPage />} />
                    <Route path="/cart" element={<CartPage />} />
                </Routes>
            </div>

        </div>
    </div>
}

export default MainLayout;