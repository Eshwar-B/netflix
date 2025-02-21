import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { addUser ,removeUser } from '../utils/userSlice'; 
import { onAuthStateChanged } from "firebase/auth";
import { LOGO } from "../utils/constants";

const Header = () => {
    const user = useSelector((state) => state.user?.user); // Get user from Redux
    const reduxPhotoURL = user?.photoURL; // Extract photo URL

    const navigate = useNavigate();
    const dispatch = useDispatch();

    // console.log("photoURL from Redux:", reduxPhotoURL);

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                dispatch(removeUser()); // Clear user from Redux store
                navigate('/'); // Redirect to login
            })
            .catch((error) => {
                console.error("Sign-out error:", error);
            });
    };

    const handleLogoclick = () => {
        navigate('/');
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) 
            {
                // whenever the user sign in or sign Up, this part will be executed. 
                const {uid, email, displayName, photoURL} = user;
                dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL})); // adding the user to our redux store
                navigate('/Browse'); //taking the using to Browse page  
            } 
            else 
            {
                // whenever the user sign out, this part will be executed.
                dispatch(removeUser()); // removing the user from the redux store
                navigate('/');  // taking the user to login / sign in page
            }
          });

          return () => unSubscribe();  // when header component unmounts, we unsubscribe
    }, []);


    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img 
                onClick={handleLogoclick}
                className="w-44 cursor-pointer"
                src={LOGO}
                alt="Logo" 
            />

            {/* Only show this section when user is signed in */}
            {user && (
                <div className="flex items-center">
                    {reduxPhotoURL && (
                        <img 
                            key={reduxPhotoURL} // Forces React to update image when URL changes
                            className="h-12 w-12 rounded-full m-5 border-2 border-white" 
                            src={reduxPhotoURL} 
                            alt="User Profile" 
                            referrerPolicy="no-referrer"
                            onError={(e) => console.error("Image failed to load:", e.target.src)}
                        />
                    )}

                    <button onClick={handleSignOut} className="text-white font-bold cursor-pointer">
                        Sign Out
                    </button>
                </div>
            )}
        </div>
    );
};

export default Header;
