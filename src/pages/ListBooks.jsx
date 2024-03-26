import { FaAngleDown } from "react-icons/fa6";
const ListBooks = () => {
    return (
        <div>
            <div className="flex justify-center items-center w-full h-[100px] rounded-xl bg-[#1313130D]">
                <h1 className="text-[#131313] font-bold text-3xl">Books</h1>
            </div>
            <div className="flex items-center justify-center w-full py-5">
                <div className="dropdown dropdown-top">
                    <div tabIndex={0} role="button" className="btn bg-[#23BE0A] text-lg text-white font-medium m-1">Sort by <FaAngleDown size={15} /> </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ListBooks;