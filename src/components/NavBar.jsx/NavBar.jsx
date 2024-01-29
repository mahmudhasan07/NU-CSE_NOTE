import { NavLink } from "react-router-dom";


const NavBar = () => {

    const userRoute = <>
    <NavLink>
        <li>Home</li>
    </NavLink>
    <NavLink>
        <li>Course</li>
    </NavLink>
    <NavLink>
        <li>About</li>
    </NavLink>
    <NavLink>
        <li>Notice</li>
    </NavLink>
    <NavLink>
        <li>Create Notes</li>
    </NavLink>
    </>
    return (
        <section className="bg-[#4f46e5] text-white ">
            <div className="flex justify-around">
                <div>
                <h1 className="text-3xl font-bold italic">
                    <span>NU Cse</span> <br /> <span className="ml-10">Note</span>
                </h1>
                </div>
                <div className="my-auto">
                    <ul className="flex gap-5 text-lg">
                    {
                        userRoute
                    }
                    </ul>
                </div>
                <div className="my-auto">
                    <input type="text" className="border-2 p-1 bg-gray-100 border-gray-500 rounded-xl w-60" placeholder="Enter your search topic" />
                    
                </div>
                <div className="my-auto">
                    <button className="btn btn-sm">LogOut</button>
                </div>

            </div>
        </section>
    );
};

export default NavBar;