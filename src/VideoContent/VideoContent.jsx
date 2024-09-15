import React from "react";
import "./VideoContent.css";
import { PiMonitorPlayFill } from "react-icons/pi";
import Navbar from "../Navbar/Navbar";

const VideoContent=()=>
{
    const videos=[
        {
            question: "What are Pointers?",
            description: "Lorem ipsum......",
            level: "LEVEL 1",
        },
        {
            question: "What are Pointers?",
            description: "Lorem ipsum......",
            level: "LEVEL 1",
        },
        {
            question: "What are Pointers?",
            description: "Lorem ipsum......",
            level: "LEVEL 1",
        },
        {
            question: "What are Pointers?",
            description: "Lorem ipsum......",
            level: "LEVEL 1",
        },
    ];
    return(
        <>
            <div className="video-container">
                <Navbar />
                <div className="video-contents">
                    <div className="video-heading">
                        Video Content
                    </div>
                    {
                        videos.map((video)=>(
                            <div className="video">
                                <div className="video-icon">
                                    <PiMonitorPlayFill />
                                </div>
                                <div className="video-details">
                                    <div className="video-question">{video.question}</div>
                                    <br/>
                                    <div>{video.description}</div>
                                    <div className="video-level">{video.level}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default VideoContent;