import React from "react";
import "./Body.css";
import UpcomingTests from "../UpcomingTests/UpcomingTests";
import Analytics from "../Analytics/Analytics";
import user from "../assets/MaleUser.jpg";

const Body = () => {
  return (
    <>
      <div className="body-container">
        <div className="body-left">
          <UpcomingTests />
          <Analytics />
        </div>
        <div className="body-right">
          <div className="user-profile">
            <img src={user} alt="User" className="user-image"/>
            <div className="user-contents">
                <div className="user-level">Level 1</div>
                <br/>
                <div className="user-name">John Doe</div>
                <br/>
                <div className="user-class">M.Tech. IT 8<sup>th</sup> Sem</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
