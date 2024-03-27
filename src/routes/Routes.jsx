import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import BookDetails from "../components/BookDetails";
import ListBooks from "../pages/ListBooks";
import TopBooks from "../pages/TopBooks";
import PagesToRead from "../pages/PagesToRead";
import FamousLibrary from "../pages/FamousLibrary";

const Router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage />,
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/book-details/:bookId',
                loader: () => fetch('./data.json'),
                element: <BookDetails />
            },
            {
                path: '/list-books',
                element: <ListBooks />,
            },
            {
                path: '/top-books',
                loader: () => fetch('./topBooksData.json'),
                element: <TopBooks />
            },
            {
                path: '/pages-to-read',
                element: <PagesToRead />
            },
            {
                path: '/famous-library',
                loader: () => fetch('./library.json'),
                element: <FamousLibrary />
            }
        ]
    }
]);

export default Router;
