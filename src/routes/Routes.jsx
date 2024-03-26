import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import BookDetails from "../components/BookDetails";
import ListBooks from "../pages/ListBooks";

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
                loader: () => fetch('../data.json'),
                element: <BookDetails />
            },
            {
                path: '/list-books',
                element: <ListBooks />
            }
        ]
    }
]);

export default Router;
