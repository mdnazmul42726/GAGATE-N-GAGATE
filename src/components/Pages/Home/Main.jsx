import { NavLink, Outlet } from "react-router-dom"; // Importing necessary components from react-router-dom.

// Define the Main component.
const Main = () => {
    return (
        <div>
            {/* Navigation bar */}
            <div className="navbar bg-base-100 shadow-md flex justify-between">
                <div className="">
                    <h1 className="md:text-2xl font-bold uppercase md:ml-8">gagate n <span className="text-[#854294cc]">gagate</span> </h1>
                </div>
                <div className="">
                    {/* Navigation links */}
                    <ul className="flex gap-5">
                        <li>
                            {/* Home link */}
                            <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-500 underline" : ""}>Home</NavLink>
                        </li>
                        <li>
                            {/* Products link */}
                            <NavLink to="/products" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-500 underline" : ""}>Products</NavLink>
                        </li>
                        <li className="mr-8">
                            {/* Dashboard link */}
                            <NavLink to="/dashboard" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-500 underline" : ""}>Dashboard</NavLink>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Main content */}
            <div className="my-8 mx-8 min-h-screen"><Outlet /></div>

            {/* Footer */}
            <footer className="dark:bg-gray-900">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        {/* Footer title */}
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white uppercase">gagate n <span className="text-[#854294cc]">gagate</span></span>

                        {/* Footer links */}
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
                    {/* Footer separator */}
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    {/* Copyright notice */}
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="" className="hover:underline uppercase">gagate n gagate™</a>. All Rights Reserved.</span>
                </div>
            </footer>
        </div>
    );
};

export default Main; // Export the Main component.
