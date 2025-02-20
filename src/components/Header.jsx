// import { useDispatch, useSelector } from "react-redux";
// import { auth } from "../utils/firebase";
// import { useNavigate } from "react-router-dom";
// import { signOut } from "firebase/auth";
// import { removeUser } from '../utils/userSlice'; 

// const Header = () => {
//     const user = useSelector((state) => state.user?.user); // Get user from Redux
//     const reduxPhotoURL = user?.photoURL; // Extract photo URL

//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     console.log("photoURL from Redux:", reduxPhotoURL);

//     const handleSignOut = () => {
//         signOut(auth)
//             .then(() => {
//                 dispatch(removeUser()); // Clear user from Redux store
//                 navigate('/'); // Redirect to login
//             })
//             .catch((error) => {
//                 console.error("Sign-out error:", error);
//             });
//     };

//     return (
//         <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
//             <img 
//                 className="w-44"
//                 src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
//                 alt="Logo" 
//             />

//             <div className="flex items-center">
//                 {/* Only show profile image if reduxPhotoURL exists */}
//                 {reduxPhotoURL ? (
//                     <img 
//                         key={reduxPhotoURL} // Forces React to update image when URL changes
//                         className="h-12 w-12 rounded-full m-5 border-2 border-white" 
//                         src={reduxPhotoURL} 
//                         alt="User Profile" 
//                         referrerPolicy="no-referrer"
//                         onError={(e) => console.error("Image failed to load:", e.target.src)}
//                     />
//                 ) : (
//                     <p className="text-white m-5">No Profile Image</p>
//                 )}

//                 <button onClick={handleSignOut} className="text-white font-bold cursor-pointer">
//                     Sign Out
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Header;

import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { removeUser } from '../utils/userSlice'; 

const Header = () => {
    const user = useSelector((state) => state.user?.user); // Get user from Redux
    const reduxPhotoURL = user?.photoURL; // Extract photo URL

    const navigate = useNavigate();
    const dispatch = useDispatch();

    console.log("photoURL from Redux:", reduxPhotoURL);

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

    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img 
                className="w-44"
                src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
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
