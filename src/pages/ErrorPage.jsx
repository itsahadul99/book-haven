import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col space-y-5 justify-center items-center h-[80vh]">
            <h1 className="text-4xl font-bold">Oops !!</h1>
            <Link to='/'><button className="btn btn-secondary font-bold text-sm">Go Home</button></Link>
        </div>
    );
};

export default ErrorPage;