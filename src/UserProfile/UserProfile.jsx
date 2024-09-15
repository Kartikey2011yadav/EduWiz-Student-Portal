import React from "react";
import Navbar from "../Navbar/Navbar";
import "./UserProfile.css";
import Body from "../Body/Body";

const UserProfile=()=>
{
    return(
        <>
        <div className="navbar-body-display-flex">
            <Navbar />
            <Body />
        </div>
        </>
    );
}

export default UserProfile;