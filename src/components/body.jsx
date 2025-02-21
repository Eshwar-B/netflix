import Login from './login';
import Browse from './Browse';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';


const Body = () => {

    const dispatch = useDispatch();

    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login/>
        },

        {
            path: '/browse',
            element: <Browse/>
        },

    ]);


  return (
    <div>
      
        <RouterProvider router={appRouter} />

    </div>
  );

};

export default Body;