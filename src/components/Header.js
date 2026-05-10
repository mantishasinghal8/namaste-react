import { useState } from "react";

//# Header Component 
const Header = () => {
    let [btnName, setBtnName] = useState("Login");

    return (

        <div className="header">
            <div className="logo-container">
                <a href=""> 🍟🍕</a>
            </div>
            <div className="nav-container">

                <ul className="nav-items">
                    <li><a href="">Home</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Contact Us</a></li>
                    <li><a href="">Cart</a></li>
                </ul>
                <button className="login" onClick={() => {
                    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                }}>{btnName}</button>
            </div>
        </div>
    );
};


export default Header;