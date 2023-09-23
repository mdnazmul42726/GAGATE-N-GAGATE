import { NavLink, Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-md flex justify-between">
                <div className="">
                    <h1 className="md:text-2xl font-bold uppercase md:ml-8">gagate n <span className="text-[#854294cc]">gagate</span> </h1>
                </div>
                <div className="">
                    <ul className="flex gap-5">
                        <li>
                            <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-500 underline" : ""}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/products" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-500 underline" : ""}>Products</NavLink>
                        </li>
                        <li className="mr-8">
                            <NavLink to="/dashbord" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-500 underline" : ""}>Dashbord</NavLink>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="my-8 mx-8 min-h-screen"><Outlet /></div>

            <footer className=" dark:bg-gray-900">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">

                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white uppercase">gagate n <span className="text-[#854294cc]">gagate</span></span>

                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                            </li>
                            <li>
                                <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="" className="hover:underline uppercase">gagate n gagate™</a>. All Rights Reserved.</span>
                </div>
            </footer>


        </div>
    )
};

export default Main;