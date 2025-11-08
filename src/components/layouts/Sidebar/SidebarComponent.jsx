
import { MdDashboardCustomize } from "react-icons/md";
import { GiClothes } from "react-icons/gi";
import { FaCartArrowDown } from "react-icons/fa";

import MenuItemComponent from "./MenuItemComponent";
import { useEffect, useState } from "react";


const SidebarComponent = ({isSidebarCollapsed}) => {

    const [menus, setMenus] = useState([
        {
            path: "/dashboard",
            icon: <MdDashboardCustomize />,
            menuName: "Dashboard"
        },
        {
            path: "/product",
            icon: <GiClothes />,
            menuName: "Product"
        },
        {
            path: "/cart",
            icon: <FaCartArrowDown />,
            menuName: "Cart"
        },
    ]);

    useEffect(()=>{
        
    }, [])

    return <>
        <div style={{
            width: isSidebarCollapsed?"60px":"200px"
        }} className="h-full bg-[#ecf0f1]">
            <div className="h-14 flex justify-center items-center">
                <h2 className="text-center text-2xl text-[#1abc9c]"> {isSidebarCollapsed?"A":"Admin Lite"} </h2>
            </div>
            <hr />  
            <div className="max-h-[92vh] overflow-auto">
                {menus?.map((menuItem)=>{
                    return <MenuItemComponent isSidebarCollapsed={isSidebarCollapsed} path={menuItem?.path} Icon={menuItem?.icon} menuName={menuItem?.menuName}/>
                })}
                
            </div>

        </div>
    </>
}

export default SidebarComponent;