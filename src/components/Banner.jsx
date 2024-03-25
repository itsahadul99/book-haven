import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="hero rounded-lg min-h-[calc(100vh-110px)] bg-[#1313130D]">
            <div className="hero-content flex-col lg:flex-row-reverse gap-20">
                <img src="https://i.postimg.cc/hPmHKWSq/to-kill-a.jpg" className="max-w-sm" />
                <div>
                    <h1 className="text-6xl font-bold text-start mb-5">Books to freshen up <br /> your bookshelf</h1>
                    <Link to='/'><button className="px-7 py-3 bg-[#23BE0A] rounded-lg text-white font-semibold">View The List</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;