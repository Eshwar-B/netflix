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

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) 
            {
                // whenever the user sign in or sign Up, this part will be executed. 
                const {uid, email, displayName, photoURL} = user;
                dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
            } 
            else 
            {
                // whenever the user sign out, this part will be executed.
                dispatch(removeUser());
            }
          });
    }, []);

  return (
    <div>
      
        <RouterProvider router={appRouter} />

    </div>
  );

};

export default Body;