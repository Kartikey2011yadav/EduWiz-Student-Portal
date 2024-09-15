import React from "react";
import { FaUserGraduate } from "react-icons/fa";
import { FaBookOpenReader } from "react-icons/fa6";
import { FaChartLine } from "react-icons/fa6";
import { GrDocumentStore } from "react-icons/gr";
import { TbMessageCircleQuestion } from "react-icons/tb";
import { useNavigate } from "react-router";
import "./Navbar.css";

const Navbar=()=>
{
    const navigate=useNavigate();
    return(
        <>
            <div className="navbar">
                <div className="navbar-contents" onClick={()=>{navigate("/")}}>
                    <div className="navbar-icons">
                        <FaUserGraduate />
                    </div>
                    <div className="navbar-text">Student Profile</div>
                </div>
                <div className="navbar-contents" onClick={()=>{navigate("/studymaterial")}}>
                    <div className="navbar-icons">
                        <FaBookOpenReader />
                    </div>
                    <div className="navbar-text">Study Material</div>
                </div>
                <div className="navbar-contents">
                    <div className="navbar-icons">
                        <FaChartLine />
                    </div>
                    <div className="navbar-text">Test Analysis</div>
                </div>
                <div className="navbar-contents">
                    <div className="navbar-icons">
                        <GrDocumentStore/>
                    </div>
                    <div className="navbar-text">Previous Year Paper</div>
                </div>
                <div className="navbar-contents">
                    <div className="navbar-icons">
                        <TbMessageCircleQuestion/>
                    </div>
                    <div className="navbar-text">FAQs</div>
                </div>
            </div>
        </>
    );
}

export default Navbar;