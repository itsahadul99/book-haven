import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="hero rounded-lg mt-10 lg:mt-0 h-full lg:min-h-[calc(100vh-180px)] bg-[#1313130D]">
            <div className="hero-content flex-col lg:flex-row-reverse gap-10 lg:gap-20">
                <img src="https://i.postimg.cc/SQJBtY3R/the-lord.jpg" className=" h-[200px] lg:h-full max-w-sm" />
                <div>
                    <h1 className="text-3xl lg:text-6xl font-bold text-start mb-5">Books to freshen up <br /> your bookshelf</h1>
                    <Link to='/list-books'><button className="px-7 mt-5 py-3 bg-[#23BE0A] rounded-lg text-white font-semibold">View The List</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;