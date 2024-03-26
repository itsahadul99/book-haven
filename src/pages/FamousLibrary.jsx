import { useLoaderData } from "react-router-dom";

const FamousLibrary = () => {
    const libraryData = useLoaderData();
    return (
        <div>
            <h1 className="text-xl lg:text-5xl font-bold text-center ">Here Top Best World Library</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-5 lg:gap-8 mt-5 lg:mt-10">
                {
                    libraryData.map((item, idx) => {
                        return (
                            <div key={idx} className=" max-w-sm p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900 space-y-3 border mb-5">
                                <img src={item.image} className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                                <div className="mt-6 mb-2">
                                    <div className="flex justify-between items-center">
                                        <span className="block text-lg opacity-70 font-semibold ">#Library</span>
                                        <p className="text-sm font-semibold"><span className="font-bold">Contains Books:</span> {item.stored_books} million</p>
                                    </div>
                                    <h2 className="text-xl lg:text-2xl mt-2 font-bold tracking-wide">{item.name}</h2>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-semibold"> <span className="font-bold">Location</span>: {item.location}</p>
                                    <p className="text-sm font-semibold"><span className="font-bold">Area:</span> {item.area}</p>
                                </div>
                                <p className="font-bold">Website Link: <a target="_blank" className="text-black text-sm font-semibold underline" href={item.website}>{item.website}</a></p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default FamousLibrary;