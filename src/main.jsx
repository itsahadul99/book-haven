import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import Router from "./routes/Routes";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
   <ToastContainer />
    <RouterProvider router={Router}></RouterProvider>
    
  </>,
)
