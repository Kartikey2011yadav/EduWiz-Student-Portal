import React from "react";
import { FaUserGraduate } from "react-icons/fa";
import { FaBookOpenReader } from "react-icons/fa6";
import { FaChartLine } from "react-icons/fa6";
import { GrDocumentStore } from "react-icons/gr";
import { TbMessageCircleQuestion } from "react-icons/tb";
import { GrDocumentVideo } from "react-icons/gr";
import { MdArticle } from "react-icons/md";
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
                <div className="navbar-contents" onClick={()=>{navigate("/testAnalytics")}}>
                    <div className="navbar-icons">
                        <FaChartLine />
                    </div>
                    <div className="navbar-text">Test Analysis</div>
                </div>
                <div className="navbar-contents" onClick={()=>{navigate("/practicePapers")}}>
                    <div className="navbar-icons">
                        <GrDocumentStore/>
                    </div>
                    <div className="navbar-text">Practice Papers</div>
                </div>
                <div className="navbar-contents" onClick={()=>{navigate("/videoContent")}}>
                    <div className="navbar-icons">
                        <GrDocumentVideo/>
                    </div>
                    <div className="navbar-text">Video Content</div>
                </div>
                <div className="navbar-contents" onClick={()=>{navigate("/articles")}}>
                    <div className="navbar-icons">
                        <MdArticle/>
                    </div>
                    <div className="navbar-text">Articles</div>
                </div>
            </div>
        </>
    );
}

export default Navbar;