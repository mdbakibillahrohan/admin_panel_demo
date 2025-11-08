import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";

const MenuItemComponent = ({  menuName, Icon, path, isSidebarCollapsed }) => {

    const [active, setActive] = useState(false);
    const route = useLocation();

    useEffect(()=>{
        if(route.pathname===path){
            setActive(true)
        }else{
            setActive(false)
        }
    }, [route.pathname])

    return <>
        <Link to={path}>
            <div className={`w-full flex items-center cursor-pointer px-3.5 py-1 ${active ? 'bg-[#1abc9c]' : ''} my-1.5`}>
                <div className={`text-3xl ${active ? 'text-white' : 'text-[#1abc9c]'} `}>
                    {Icon}
                </div>

                {isSidebarCollapsed?<></>:<span className={`ml-3 ${active ? 'text-white' : 'text-[#1abc9c]'}`}>{menuName}</span>}
            </div>
        </Link>
    </>
}

export default MenuItemComponent;