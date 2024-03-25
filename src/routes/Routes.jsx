import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import BookDetails from "../components/BookDetails";

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
            }
        ]
    }
]);

export default Router;
