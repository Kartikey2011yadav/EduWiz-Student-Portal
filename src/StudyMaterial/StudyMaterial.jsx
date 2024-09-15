import React from "react";
import Navbar from "../Navbar/Navbar";
import { IoDocumentTextSharp } from "react-icons/io5";
import { TbCheckupList } from "react-icons/tb";
import { PiVideoConference } from "react-icons/pi";
import "./StudyMaterial.css";
const StudyMaterial = () => {
    const studymaterial=[
        {
            subject: "Mathematics",
            topic: "Arithmetic Progression",
            level: "Level 1"
        },
        {
            subject: "Mathematics",
            topic: "Arithmetic Progression",
            level: "Level 1"
        },
        {
            subject: "Mathematics",
            topic: "Arithmetic Progression",
            level: "Level 1"
        },
    ];
    return (
        <div className="navbar-body-display-flex">

            <Navbar />

            <div className="body-container">

                <div className="study-material-container">
                    <div className="study-material-heading">Study Material</div>
                    <div class="button-container">
                        <button class="custom-button">
                            <PiVideoConference color="#23538f" style={{height: "70px", width: "70px"}}/>
                            <span>Video</span>
                        </button>
                        <button class="custom-button">
                            <IoDocumentTextSharp color="#23538f" style={{height: "70px", width: "70px"}}/>
                            <span>Article</span>
                        </button>
                        <button class="custom-button">
                            <TbCheckupList color="#23538f" style={{height: "70px", width: "70px"}}/>
                            <span>Questions</span>
                        </button>
                    </div>
                    <div className="study-material-heading">Recommended Study Material</div>
                    <div  className="study-material-box">
                        {
                            studymaterial.map((material) => (
                                <div className="upcoming-test">
                                    <div className="upcoming-subject">
                                        {material.subject}
                                        <span class="current-level"> {material.level}</span>
                                    </div>
                                    <div className="upcoming-topic">
                                        {material.topic}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>


        </div>
    );
};

export default StudyMaterial;