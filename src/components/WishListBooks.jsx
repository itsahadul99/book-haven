/* eslint-disable react/prop-types */
const WishListBooks = ({wishListBookData}) => {
    return (
        <div>
            {
                wishListBookData.map((book) => {
                    return (
                        <div key={book.bookId} className="flex flex-col items-start gap-5 lg:gap-10 lg:flex-row border rounded-xl p-5 h-fit shadow-md">
                            <div className="px-5 lg:px-10 py-3 lg:py-10 bg-[#F3F3F3]">
                                <img className="w-[150px] h-[200px]" src={book.image} />
                            </div>
                            <div>
                                <h1 className="text-2xl lg:text-3xl font-bold my-3 lg:my-5">{book.bookName}</h1>
                                <p className="font-semibold text-sm lg:text-lg">By: {book.author}</p>
                                <div className="flex gap-2 lg:gap-5 mt-5 *:px-1 *:py-1 lg:*:px-3 lg:*:py-2 *:rounded-full *:font-medium *:text-lg">
                                    <p className="text-black bg-none border-none px-0 py-0">Tags: </p>
                                    <p className="bg-[#23BE0A0D] text-[#23BE0A]">{book.tags[0]}</p>
                                    <p className="bg-[#23BE0A0D] text-[#23BE0A]">{book.tags[1]}</p>
                                    <p className="bg-none flex gap-2 items-center"><IoLocation /> Year of Publishing: {book.yearOfPublishing}</p>
                                </div>
                                <div className="pt-3 flex gap-10 items-center">
                                    <p className="flex items-center gap-2"><FaUsers size={20}/> PUblisher: {book.publisher}</p>
                                    <p className="flex items-center gap-2"><MdOutlineContactPage size={20}/> Page: {book.totalPages}</p>
                                </div>
                                <div className="flex gap-2 lg:gap-5 mt-5 *:px-1 *:py-1 lg:*:px-3 lg:*:py-2 *:rounded-full *:font-medium *:text-lg">
                                    <p className="bg-[#328eff0f] text-[#328EFF]">Category: {book.category}</p>
                                    <p className="bg-[#ffad3322] text-[#FFAC33]">Ratings: {book.rating}</p>
                                    <p className="bg-[#23BE0A] text-white">View Details</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default WishListBooks;