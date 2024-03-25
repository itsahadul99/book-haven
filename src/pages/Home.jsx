import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import BooksCard from "../components/BooksCard";

const Home = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])
    return (
        <div>
            <Banner />
            <BooksCard books = {books}/>
        </div>
    );
};

export default Home;