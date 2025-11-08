
import { MdDashboardCustomize } from "react-icons/md";
import { GiClothes } from "react-icons/gi";
import { FaCartArrowDown } from "react-icons/fa";

import MenuItemComponent from "./MenuItemComponent";


const SidebarComponent = () => {
    return <>
        <div className="w-64 h-full bg-[#ecf0f1]">
            <div className="h-14 flex justify-center items-center">
                <h2 className="text-center text-2xl text-[#1abc9c]">Admin Lite</h2>
            </div>
            <hr />  
            <div className="max-h-[92vh] overflow-auto">
                <MenuItemComponent Icon={<MdDashboardCustomize />} menuName="Dashboard" active={true} />
                <MenuItemComponent Icon={<GiClothes />} menuName="Product" />
                <MenuItemComponent Icon={<FaCartArrowDown />} menuName="Carts" />
                <MenuItemComponent Icon={<FaCartArrowDown />} menuName="Carts" />
                <MenuItemComponent Icon={<FaCartArrowDown />} menuName="Carts" />
            </div>

        </div>
    </>
}

export default SidebarComponent;