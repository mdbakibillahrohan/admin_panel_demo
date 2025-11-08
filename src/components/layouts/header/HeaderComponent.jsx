import { CiMenuBurger } from "react-icons/ci";

const HeaderComponent = ({isSidebarCollapsed,setIsSidebarCollapsed}) => {

    return <><div className="w-full bg-[#ecf0f1] h-14 px-3.5">
        <div className="h-full w-full flex justify-between items-center">
            <div className="text-2xl cursor-pointer">
                <CiMenuBurger onClick={()=>{
                    setIsSidebarCollapsed(!isSidebarCollapsed)
                }} />
            </div>

            <div className="w-[60%]">

                <htmlForm className="w-full">
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-[#1abc9c] sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokLinecap="round" strokeLinejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-[#1abc9c] focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>
                </htmlForm>

            </div>

            <div className="flex justify-center items-center cursor-pointer">
                <div className="mr-1.5">
                    <h2 className="text-2xl text-start">John Smith</h2>
                    <span className="text-start text-xs">Software Engineer</span>
                </div>
                <div className="w-14 h-14 flex items-center justify-center rounded-[50%] overflow-hidden p-0.5 border border-[#1abc9c]">
                    <img className="w-full h-full object-cover" src="https://t4.ftcdn.net/jpg/04/31/64/75/360_F_431647519_usrbQ8Z983hTYe8zgA7t1XVc5fEtqcpa.jpg" />
                </div>
            </div>
        </div>
    </div></>
}

export default HeaderComponent;