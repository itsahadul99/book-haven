import { NavLink } from "react-router-dom";

const Nav = () => {
    const links = <>
        <li><NavLink to='/' className={({ isActive }) =>
            isActive
                ? "btn btn-outline btn-success font-bold text-lg"
                : "font-bold"
        }>Home</NavLink></li>
        <li><NavLink to='/list-books' className={({ isActive }) =>
            isActive
                ? "btn btn-outline btn-success font-bold text-lg"
                : "font-bold"
        }>Listed Books</NavLink></li>
        <li><NavLink to='/read-pages' className={({ isActive }) =>
            isActive
                ? "btn btn-outline btn-success font-bold text-lg"
                : "font-bold"
        }>Pages to Read</NavLink></li>
    </>
    return (
        <div className="flex justify-between items-center max-w-7xl mx-auto my-10">
            <div>
                <button className="text-3xl text-[#131313] font-bold">Book Haven</button>
            </div>
            <div className="">
                <ul className="flex gap-5 items-center">
                    {links}
                </ul>
            </div>
            <div className="flex gap-7 items-center *:px-7 *:py-3 *:text-white *:font-semibold *:rounded-lg">
                <button className="bg-[#23BE0A]">Sign In</button>
                <button className="bg-[#59C6D2]">Sign Up</button>

            </div>
        </div>
    );
};

export default Nav;