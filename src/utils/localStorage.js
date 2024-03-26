import toast from "react-hot-toast";

export const getReadBooks = () => {
    const storedReadBook = localStorage.getItem('read-book');
    if(storedReadBook){
        return JSON.parse(storedReadBook);
    }
    else{
        return [];
    }
}
export const getWhishListBooks = () => {
    const storedWishListBooks = localStorage.getItem('wishlist-book');
    if(storedWishListBooks){
        return JSON.parse(storedWishListBooks);
    }
    else{
        return [];
    }
}
export const savedBooksAsRead = id => {
    const storedReadBook = getReadBooks();
    const isExit = storedReadBook.find(book => book === id);
    if(!isExit){
        storedReadBook.push(id);
        localStorage.setItem('read-book', JSON.stringify(storedReadBook));
        toast('Successfully added as read books');
    }
    else{
        toast('Already exists on read books')
    }
}

export const savedBooksAsWishList = (id) => {
    const storedReadBook = getReadBooks();
    const storedWishListBooks = getWhishListBooks();
    const isExits = storedWishListBooks.find((book) => {
        return (book === id);
    });
    // console.log(isExits);
    if(!isExits){
        storedWishListBooks.push(id);
        localStorage.setItem('wishlist-book', JSON.stringify(storedWishListBooks))
        toast('Successfully added on Wishlist');
    }
    else{
        storedWishListBooks;
        toast('Already exists on wishlist');
    }
}