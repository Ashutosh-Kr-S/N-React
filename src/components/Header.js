import React, { useState, useContext } from "react";
import { LOGO_URL } from "../Utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

  const [btnName, setBtnName] = useState("Login");

  const {loggedInUser} = useContext(UserContext);

  // suscribing to store using a selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const loginHandler = () => {
    (btnName === "Login")? setBtnName("Logout"):setBtnName("Login");
  }

  const onlineStatus = useOnlineStatus();

    return (
      <div className="header flex w-full justify-between z-20 lg:bg-gradient-to-b lg:from-yellow-100 lg:to-white shadow-lg sticky top-0 rounded-b-lg bg-gradient-to-b from-green-100 to-white sm:bg-gradient-to-b sm:from-red-100 sm:to-white">
        <div className="logo-container w-28">
          <img
            className="logo aspect-square object-contain mix-blend-multiply"
            src={LOGO_URL}
          />
        </div>
        <div className="nav-items w-[50%] mt-10">
          <ul className="flex justify-evenly items-center">
            <li>
              Online Status : {onlineStatus? "🟢":"🔴"}
            </li>
            <li>
              <Link to={"/"}>Home</Link></li>
            <li>
              <Link to={"/about"}>About Us</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact Us</Link>
            </li>
            <li>
              <Link to={"/grocery"}>Grocery</Link>
            </li>
            <li>
              <Link to={"/cart"}>Cart-({cartItems.length})</Link>
            </li>
            <button className="login-btn" onClick={() => loginHandler()}>{btnName}</button>

            <li className="font-bold">{loggedInUser}</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;