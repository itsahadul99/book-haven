/* eslint-disable react/prop-types */

import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const BooksCard = ({books}) => {
    return (
        <div className="my-8 lg:my-16">
            <h1 className=" text-3xl lg:text-5xl font-bold text-center">Books</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start mt-4 lg:mt-8">
                {
                    books.map(book => {
                        return (
                            <Link to={`/book-details/${book.bookId}`} key={book.bookId}>
                                <div className=" p-6 flex flex-col shadow-xl space-y-5 border rounded-lg">
                                    <div className="px-5 bg-[#F3F3F3] p-8 flex justify-center rounded-lg h-[300px]">
                                        <img src={book.image} alt="" className="rounded-xl max-w-40" />
                                    </div>
                                    <div className="flex-grow">
                                        <div className="flex gap-5 text-[#23BE0A] *:px-3 *:py-2 *:rounded-full *:bg-[#23BE0A0D] *:font-medium *:text-lg">
                                            <p className="">{book.tags[0]}</p>
                                            <p>{book.tags[1]}</p>
                                        </div>
                                        <h2 className="text-2xl font-bold text-[#131313]">{book.bookName}</h2>
                                        <p className="text-[#131313] border-b-2 border-dotted font-medium text-sm py-4">By: {book.author}</p>
                                        <div className=" mt-5 flex justify-between">
                                            <p className="font-medium text-[#131313]">{book.category}</p>
                                            <div className="flex gap-3 items-center">
                                                <p className="text-xl">{book.rating}</p>
                                                <FaRegStar size={18}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default BooksCard;