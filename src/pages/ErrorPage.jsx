import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col space-y-5 justify-center items-center h-[80vh]">
            <h1 className="text-4xl font-bold">Oops !!</h1>
            <p className="text-xl font-bold">An error ocurred ☹</p>
            <Link to='/' className="px-7 py-3 bg-[#23BE0A] rounded-lg text-white font-semibold hover:bg-[#22be0a90]">View The List</Link>
        </div>
    );
};

export default ErrorPage;