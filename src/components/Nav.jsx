import { Link, NavLink } from "react-router-dom";

const Nav = () => {
    const links = <>
        <li>
            <NavLink to='/' className={({ isActive }) =>
                isActive
                    ? "btn btn-outline btn-success font-bold text-xs lg:text-lg"
                    : "font-bold"
            }>Home</NavLink>
        </li>
        <li>
            <NavLink to='/list-books' className={({ isActive }) =>
                isActive
                    ? "btn btn-outline btn-success font-bold text-xs lg:text-lg"
                    : "font-bold"
            }>Listed Books</NavLink>
        </li>
        <li>
            <NavLink to='/pages-to-read' className={({ isActive }) =>
                isActive
                    ? "btn btn-outline btn-success font-bold text-xs lg:text-lg"
                    : "font-bold"
            }>Pages to Read</NavLink>
        </li>
        <li>
            <NavLink to='/top-books' className={({ isActive }) =>
                isActive
                    ? "btn btn-outline btn-success font-bold text-xs lg:text-lg"
                    : "font-bold"
            }>Top Books</NavLink>
        </li>
        <li>
            <NavLink to='/famous-library' className={({ isActive }) =>
                isActive
                    ? "btn btn-outline btn-success font-bold text-xs lg:text-lg"
                    : "font-bold"
            }>Famous Library</NavLink>
        </li>
    </>
    return (
        <div className="navbar my-5 lg:my-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content font-bold text-xs lg:text-lg w-52">

                    </ul>
                </div>
                <Link to='/' className="text-xl lg:text-3xl text-[#131313] font-bold">Book Haven</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal space-x-5 px-1 font-bold text-xs lg:text-lg">
                    {links}
                </ul>
            </div>
            <div className="navbar-end space-x-3 lg:space-x-5 *:px-3 lg:*:px-7 *:py-1 lg:*:py-3 text-sm lg:text-lg *:text-white *:font-semibold *:rounded-lg">
                <button className="bg-[#23BE0A]">Sign In</button>
                <button className="bg-[#59C6D2]">Sign Up</button>
            </div>
        </div>
    );
};

export default Nav;