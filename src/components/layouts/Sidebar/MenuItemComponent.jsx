import { MdDashboardCustomize } from "react-icons/md";

const MenuItemComponent = ({ active, menuName, Icon }) => {
    return <>
        <div className={`w-full flex items-center cursor-pointer px-3.5 py-1 ${active ? 'bg-[#1abc9c]' : ''} my-1.5`}>
            <div className={`text-3xl ${active ? 'text-white' : 'text-[#1abc9c]'} `}>
                {Icon}
            </div>

            <span className={`ml-3 ${active ? 'text-white' : 'text-[#1abc9c]'}`}>{menuName}</span>
        </div> </>
}

export default MenuItemComponent;