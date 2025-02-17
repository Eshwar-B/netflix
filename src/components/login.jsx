import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";


const Login = () => {

const [sign, setSign] = useState("Sign In");
const [errMsg, setErrMsg] = useState("");

const email = useRef(null);
const password = useRef(null);

const toggleSignInform = () => {

    // if sign in then show sign up form

    sign === "Sign In" 
    ?setSign("Sign Up")
    :setSign("Sign In");
};

const handleButtonClick = () => {

    // Validate the form
    
    console.log("Email : ",email.current.value);
    console.log("Password : ",password.current.value);
    
    const message = checkValidData(email.current.value, password.current.value);
    setErrMsg(message);
    console.log(message);
};


return (
    <div>
        <Header />
        <div className="absolute">
            <img 
            src="https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/IN-en-20250210-TRIFECTA-perspective_92338d5d-6ccd-4b1a-8536-eb2b0240a55e_medium.jpg"
            alt="Background Image" />
        </div>

        <form  onSubmit={(e) => {e.preventDefault()}} className="p-8 bg-black/80 w-1/4 absolute my-36 mx-auto right-0 left-0 rounded-lg">
            <h2 className="font-bold text-white py-4 mx-4 text-3xl">{sign === "Sign In" ? "Sign In": "Sign Up"}</h2>

            {
                sign === "Sign Up" && 
                (
                    <input type="text" placeholder="Full Name" className="text-white p-4 my-4  w-full bg-gray-700 rounded-lg"/>
                )
            }

            <input ref={email} type="text" placeholder="Email Address" className="text-white p-4 my-4  w-full bg-gray-700 rounded-lg"/>

            <input ref={password} type="password" placeholder="Password"  className="text-white p-4 my-4  w-full bg-gray-700 rounded-lg"/>

            <p className="text-red-600 font-bold  py-2">{errMsg}</p>

            <button className="p-4 my-4 bg-red-600 text-white font-black w-full rounded-lg" onClick={handleButtonClick}> {sign === "Sign In" ? "Sign In": "Sign Up"} </button>

            <p className="text-white cursor-pointer" onClick={toggleSignInform} > {sign === "Sign In" ? "New to Netflix? " :"Already Registered? "} <span className="text-rose-600"> {sign === "Sign In" ? "Sign Up" : "Sign In"}</span> here </p>
        </form>
    </div>
);

};

export default Login;