import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import Router from "./routes/Routes";
import  { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={Router}></RouterProvider>
    <Toaster 
     position='top-right'
     reverseOrder={false}
    />
  </>,
)
