import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './routes/root';
import ErrorPage from "./error-page";
import Categories,{loader as categoriesLoader} from './routes/categories';
import Home, {loader as homeLoader} from './routes/home';
import Category ,{loader as categoryLoader}from './routes/category';
import Product, {loader as productLoader} from './routes/product';
import SignUp from './routes/signUp';
import Login from './routes/login';
import store from './app/store'
import { Provider } from 'react-redux'
import Logout from './routes/logout';
import Cart from './routes/cart';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,

    children: [
      {
        path:"/",
        element:<Home/>,
        loader:homeLoader
        
      },

      {
        path:"/categories",
        element:<Categories/>,
        loader:categoriesLoader
      },


      {
        path:"/categories/:categoryId", //when the top wear or bottom wear is clicked ,id will be displayed in the search bar,so that id category page should be displayed.
        element:<Category/>,
        loader:categoryLoader
      },

      {
        path:"/products/:productId",
        element:<Product/>,
        loader:productLoader
      },

      {
        path:"/signUp",
        element:<SignUp/>
      },

      {
        path:"/login",
        element:<Login/>
      },

      {
        path:"/logout",
        element:<Logout/>
      },

      {
        path:"/cart",
        element:<Cart/>
      }

    ]
  },
]);
  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      </Provider>,
  </React.StrictMode>,
)
