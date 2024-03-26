import { useLoaderData, useParams } from "react-router-dom";
import { savedBooksAsRead, savedBooksAsWishList } from "../utils/localStorage";

const BookDetails = () => {
    const books = useLoaderData();
    const { bookId } = useParams();
    // console.log(typeof bookId);
    const book = books.find(book => book.bookId === parseInt(bookId));
    // console.log(book);
    const { bookName, image, review, category, tags, totalPages, publisher, rating, yearOfPublishing, author } = book;
    const handleReadBook = (bookId) => {
        savedBooksAsRead(bookId)
    }
    const handleWishList = (bookId) => {
        savedBooksAsWishList(bookId)
    }
    return (
        <div className="flex gap-12 h-full sm:min-h-[calc(100vh-190px)]">
            <div className="bg-[#1313130D] flex items-center justify-center p-14">
                <img className="w-full h-full" src={image} />
            </div>
            <div className=" text-[#131313] flex-1">
                <h1 className="text-4xl font-bold ">{bookName}</h1>
                <p className="border-b-2 border-dotted font-medium text-lg py-4">By: {author}</p>
                <p className="border-b-2 border-dotted font-medium text-lg py-4">{category}</p>
                <p className="pl-0 textarea-md"><span className=" font-bold">Review: </span>{review}</p>
                <div className="flex gap-7 items-center py-4 border-b-2 border-dotted">
                    <p className="font-bold">Tags:</p>
                    <p className="px-3 py-2 text-[#23BE0A] bg-[#23BE0A0D] rounded-full font-medium">#{tags[0]}</p>
                    <p className="px-3 py-2 text-[#23BE0A] bg-[#23BE0A0D] rounded-full font-medium">#{tags[1]}</p>
                </div>
                <div className="my-5 w-2/3  flex items-center justify-between ">
                    <div className="text-[#131313B3]">
                        <p>Number of Pages:</p>
                        <p>Publisher:</p>
                        <p>Year of Publishing:</p>
                        <p>Rating:</p>
                    </div>
                    <div  className="font-bold text-[#131313]">
                        <p>{totalPages}</p>
                        <p>{publisher}</p>
                        <p>{yearOfPublishing}</p>
                        <p>{rating}</p>
                    </div>
                </div>
                <div>
                    <button onClick={() => handleReadBook(bookId)} className="border-2 mr-7 px-6 py-4 text-[#131313] font-bold text-lg hover:bg-green-200 rounded-lg">Read</button>
                    <button onClick={() => handleWishList(bookId)} className="px-6 py-4 text-white font-bold text-lg bg-[#50B1C9] hover:bg-[#50b1c982] hover:text-black rounded-lg">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;