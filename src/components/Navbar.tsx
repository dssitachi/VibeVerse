import { Bookmark, Feather, Home, LogOut, User2 } from "lucide-react";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <aside className="max-w-xs p-4 rounded h-screen fixed">
            <ul className="mt-12">
                <li className="p-4">
                    <NavLink to="/" className={`flex items-center`}>
                        <span className="inline">
                            
                            <Home />
                        </span>
                        <span className="hidden xl:block ml-4 font-semibold">
                            Home
                        </span>
                    </NavLink>
                </li>
                <li className="p-4">
                    <NavLink to="/bookmark" className={`flex items-center`}>
                        <span className="inline-block">
                            
                            <Bookmark />
                        </span>
                        <span className="hidden xl:block ml-4 font-semibold">
                            Bookmarks
                        </span>
                    </NavLink>
                </li>
                <li className="p-4">
                    <NavLink to="/profile" className={`flex items-center`}>
                        <span className="inline-block">
                            
                            <User2 />
                        </span>
                        <span className="hidden xl:block ml-4 font-semibold">
                            Profile
                        </span>
                    </NavLink>
                </li>
                <li
                    className="p-4"
                    onClick={() => {
                        
                    }}
                >
                    <NavLink to="/login" className={`flex items-center`}>
                        <span className="inline-block">
                        
                            <LogOut />
                        </span>
                        <span className="hidden xl:block ml-4 font-semibold">
                            Logout
                        </span>
                    </NavLink>
                </li>
                <li
                    className="py-4"
                    
                >
                    <button className="hidden xl:block font-bold text-white bg-[#1DA1F2] px-4 py-2 rounded-lg w-36">
                        Vibe
                    </button>
                    <button className="xl:hidden font-bold text-white bg-[#1DA1F2] px-4 py-4 rounded-full">
                    <Feather />
                    </button>
                </li>
            </ul>

            <div className="flex absolute gap-2 bottom-16">
                <div>
                    <img
                        src="https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-8_coy7oo.jpg"
                        alt="Post Image"
                        className="w-10 h-10 border rounded-full"
                    />
                </div>
                <div className="hidden xl:flex flex-col">
                    <span className="text-sm font-semibold">
                        {" "}
                        {/* {`${user.firstName} ${user.lastName}`}{" "} */}
                    </span>
                    <span className="text-sm  text-gray-400">
                        {" "}
                        {/* {user.username}{" "} */}
                    </span>
                </div>
            </div>
        </aside>
    );
}

export default Navbar;
