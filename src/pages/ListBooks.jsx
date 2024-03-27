import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import ReadBooks from "../components/ReadBooks";
import WishListBooks from "../components/WishListBooks";
const ListBooks = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const readBooksData = JSON.parse(localStorage.getItem('read_book')) || [];
    const wishListBookData = JSON.parse(localStorage.getItem('wish_list')) || [];
    const [sortOption, setSortOption] = useState(null);
    const handleSort = (option) =>{
        setSortOption(option);
    }
    const handleSortReadItem = () =>{
        if(sortOption === 'Rating'){
            return readBooksData.slice().sort((a, b) => b.rating - a.rating)
        }
        else if(sortOption === 'Number of pages'){
            return readBooksData.slice().sort((a, b) => b.totalPages - a.totalPages)
        }
        else if(sortOption === 'Published year'){
            return readBooksData.slice().sort((a, b) => b.yearOfPublishing - a.yearOfPublishing)
        }
        return readBooksData;
    }
    const handleSortedWishList = () =>{
        if(sortOption === 'Rating'){
            return wishListBookData.slice().sort((a, b) => b.rating - a.rating)
        }
        else if(sortOption === 'Number of pages'){
            return wishListBookData.slice().sort((a, b) => b.totalPages - a.totalPages)
        }
        else if(sortOption === 'Published year'){
            return wishListBookData.slice().sort((a, b) => b.yearOfPublishing - a.yearOfPublishing)
        }
        return wishListBookData;
    }
    
    return (
        <div>
            <div className="flex justify-center items-center w-full h-[100px] rounded-xl bg-[#1313130D]">
                <h1 className="text-[#131313] font-bold text-3xl">Books</h1>
            </div>
            <div className="flex items-center justify-center w-full py-5 mb-5">
                <div className="dropdown dropdown-down">
                    <div tabIndex={0} role="button" className="btn bg-[#23BE0A] text-lg text-white font-medium m-1">Sort by <FaAngleDown size={15} /> </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={() => handleSort('Rating')}><a>Rating</a></li>
                        <li onClick={() => handleSort('Number of pages')}><a>Number of pages</a></li>
                        <li onClick={() => handleSort('Published year')}><a>Published year</a></li>
                    </ul>
                </div>
            </div>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist</Tab>
                </TabList>
                <TabPanel>
                    <ReadBooks handleSortReadItem={handleSortReadItem} />
                </TabPanel>
                <TabPanel>
                    <WishListBooks handleSortedWishList={handleSortedWishList} />
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListBooks;