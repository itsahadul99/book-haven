import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { toast } from "react-toastify";

// import { savedDataLS } from "../utils/localStorage";

const BookDetails = () => {
    const books = useLoaderData();
    const { bookId } = useParams();
    const [storeReadBook, setStoreReadBook] = useState(false);
    const [storeWishList, setStoreWishList] = useState(false);
    // console.log(typeof bookId);
    const book = books.find(book => book.bookId === parseInt(bookId));
    // console.log(book);
    const { bookName, image, review, category, tags, totalPages, publisher, rating, yearOfPublishing, author } = book;


    const handleReadBook = () => {
        if (!storeReadBook) {
            addToLocalStorage('read_book', book);
            setStoreReadBook(true);
            toast.success('Successfully added to Read list')
        } else {
            toast.error('Already exists to Read')
        }
    }
    const handleWishList = () => {
        if (!storeWishList) {
            if (!storeReadBook) {
                addToLocalStorage('wish_list', book)
                setStoreWishList(true);
                toast.success('Successfully added to Wishlists')
            } else {
                toast.warning("Already read this book. Can't added to wishlist")
            }
        } else {
            toast.error('Already exists on Wishlists')
        }
    }
    const addToLocalStorage = (key, book) => {
        const getItem = JSON.parse(localStorage.getItem(key)) || [];
        getItem.push(book)
        localStorage.setItem(key, JSON.stringify(getItem))
    }


    return (
        <div className="flex flex-col lg:flex-row gap-12 h-full lg:min-h-[calc(100vh-220px)] space-y-3">
            <div className="bg-[#1313130D] flex items-center justify-center rounded-xl flex-1">
                <img className=" h-[290px]" src={image} />
            </div>
            <div className=" text-[#131313] flex-1 px-5 lg:px-0 ">
                <h1 className="text-4xl font-bold ">{bookName}</h1>
                <p className="border-b-2 border-dotted font-medium text-lg pb-2">By: {author}</p>
                <p className="border-b-2 border-dotted font-medium text-lg pb-2">{category}</p>
                <p className="pl-0"><span className=" font-bold">Review: </span>{review}</p>
                <div className="flex gap-2 lg:gap-7 items-center  border-b-2 border-dotted pb-2">
                    <p className="font-bold">Tags:</p>
                    <p className="px-3 py-2 text-[#23BE0A] bg-[#23BE0A0D] rounded-full font-medium">#{tags[0]}</p>
                    <p className="px-3 py-2 text-[#23BE0A] bg-[#23BE0A0D] rounded-full font-medium">#{tags[1]}</p>
                </div>
                <div className="w-full lg:w-1/3  flex items-center justify-between pt-3 ">
                    <div className="text-[#131313B3]">
                        <p>Number of Pages:</p>
                        <p>Publisher:</p>
                        <p>Year of Publishing:</p>
                        <p>Rating:</p>
                    </div>
                    <div className="font-bold text-[#131313]">
                        <p>{totalPages}</p>
                        <p>{publisher}</p>
                        <p>{yearOfPublishing}</p>
                        <p>{rating}</p>
                    </div>
                </div>
                <div className="space-y-2">
                    <button onClick={handleReadBook} className="border-2 mr-7 px-6 py-2 text-[#131313] font-bold text-lg hover:bg-green-200 rounded-lg">Read</button>
                    <button onClick={handleWishList} className="px-6 py-2 text-white font-bold text-lg bg-[#50B1C9] hover:bg-[#50b1c982] hover:text-black rounded-lg">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;