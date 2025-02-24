import Header from "./Header";
import { useState, useRef } from "react";
import { useDispatch ,useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { checkValidData } from "../utils/validate";
import { auth, googleProvider } from '../utils/firebase';
import { signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { addUser } from '../utils/userSlice'

const Login = () => {
    const [sign, setSign] = useState("Sign In");
    const [errMsg, setErrMsg] = useState("");
    // const [photoURL, setPhotoURL] = useState(null);

    const email = useRef(null);
    const password = useRef(null);

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);

    const toggleSignInform = () => {
        // if sign in then show sign up form
        sign === "Sign In" 
        ? setSign("Sign Up")
        : setSign("Sign In");
    };

    const handleButtonClick = async () => {
        // Validate the form
        const message = checkValidData(email.current.value, password.current.value);
        setErrMsg(message);
        if (message) return;

        if (sign === 'Sign Up') {
            // Sign up logic
            try {
                await createUserWithEmailAndPassword(auth, email.current.value, password.current.value);
                console.log("User signed up!");
            } catch (error) {
                setErrMsg(error.message);
            }
        } else {
            // Sign in logic
            try {
                await signInWithEmailAndPassword(auth, email.current.value, password.current.value);
                console.log("User signed in!");
            } catch (error) {
                setErrMsg(error.message);
            }
        }
    };


    const handleGoogleSignIn = async () => {
        try 
        {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;

            // update the user profile
            updateProfile(user, {
                displayName: user.displayName, photoURL: user.photoURL
              }).then(() => {
                // Profile updated!
               // console.log("Profile Updated")
              }).catch((error) => {
                // An error occurred
                setErrMsg(error.message)
                console.log("Error Occurred: ", errMsg);
              });

            // console.log("Google User Info: ", user);
            // console.log("photo URL: ", user.photoURL);
            
            dispatch(addUser({
                uid: user.uid,
                email: user.email,
                photoURL: user.photoURL,
            }));
            navigate('/Browse');
        } 
        catch (error) 
        {
            setErrMsg(error.message);
        }
    };

    return (
        <div>
            <Header />
            
            <div className="absolute">
                <img 
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/IN-en-20250210-TRIFECTA-perspective_92338d5d-6ccd-4b1a-8536-eb2b0240a55e_medium.jpg"
                    alt="Background Image" 
                />
            </div>

            <form onSubmit={(e) => { e.preventDefault() }} className="p-8 bg-black/80 w-1/4 absolute my-36 mx-auto right-0 left-0 rounded-lg">
                <h2 className="font-bold text-white py-4 mx-4 text-3xl">{sign === "Sign In" ? "Sign In" : "Sign Up"}</h2>

                {sign === "Sign Up" && (
                    <input type="text" placeholder="Full Name" className="text-white p-4 my-4 w-full bg-gray-700 rounded-lg" />
                )}

                <input ref={email} type="text" placeholder="Email Address" className="text-white p-4 my-4 w-full bg-gray-700 rounded-lg" />
                <input ref={password} type="password" placeholder="Password" className="text-white p-4 my-4 w-full bg-gray-700 rounded-lg" />

                <p className="text-red-600 font-bold py-2">{errMsg}</p>

                <button className="p-4 my-4 bg-blue-600 text-white font-black w-full rounded-lg cursor-pointer" onClick={handleGoogleSignIn}>
                    {sign === "Sign In" ? "Sign In with Google" : "Sign Up with Google"}
                </button>

                <button className="p-4 my-4 bg-red-600 text-white font-black w-full rounded-lg cursor-pointer" onClick={handleButtonClick}>
                    {sign === "Sign In" ? "Sign In " : "Sign Up "}
                </button>

                <p className="text-white cursor-pointer" onClick={toggleSignInform}>
                    {sign === "Sign In" ? "New to Netflix? " : "Already Registered? "}
                    <span className="text-rose-600">
                        {sign === "Sign In" ? "Sign Up" : "Sign In"} here
                    </span>
                </p>
            </form>
        </div>
    );
};

export default Login;
