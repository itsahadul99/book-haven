import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
// import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import ReadBooks from "../components/ReadBooks";
import WishListBooks from "../components/WishListBooks";
const ListBooks = () => {
    const [tabIndex, setTabIndex] = useState(0);
    // const [tabIndex, setTabIndex] = useState(0);
    // const [storedRead, setStoreRead] = useState();
    const readBooksData = JSON.parse(localStorage.getItem('read_book')) || [];
    // console.log(getFromLS);
    const wishListBookData = JSON.parse(localStorage.getItem('wish_list')) || [];
    return (
        <div>
            <div className="flex justify-center items-center w-full h-[100px] rounded-xl bg-[#1313130D]">
                <h1 className="text-[#131313] font-bold text-3xl">Books</h1>
            </div>
            <div className="flex items-center justify-center w-full py-5 mb-5">
                <div className="dropdown dropdown-down">
                    <div tabIndex={0} role="button" className="btn bg-[#23BE0A] text-lg text-white font-medium m-1">Sort by <FaAngleDown size={15} /> </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Pages</a></li>
                        <li><a>Publish date</a></li>
                        <li><a>Rating</a></li>
                    </ul>
                </div>
            </div>
            {/* <div className="flex -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
                <Link to='' onClick={() =>  setTabIndex(0)} className={`text-xl px-5 py-3 ${tabIndex ===0? 'border border-b-0': 'border-b'} dark:border-gray-400 dark:text-gray-400`}>
                    <span onClick={() => handleReadbook()}>Read Books</span>
                </Link>
                <Link to='' onClick={() => setTabIndex(1)} className={` text-xl  px-5 py-3  ${tabIndex ===1? 'border border-b-0': 'border-b'} dark:border-gray-400 dark:text-gray-400`}>
                    
                    <span>Wishlist Books</span>
                </Link>
            </div> */}
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist</Tab>
                </TabList>
                <TabPanel>
                <ReadBooks readBooksData = {readBooksData} /> 
                </TabPanel>
                <TabPanel>
                    <WishListBooks wishListBookData = {wishListBookData}/>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListBooks;