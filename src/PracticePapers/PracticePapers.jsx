import React from "react";
import "./PracticePapers.css";
import Navbar from "../Navbar/Navbar";
import { TbReportSearch } from "react-icons/tb";
import { PiExamFill } from "react-icons/pi";

const PracticePapers=()=>
{
    const data=[
        {
            level: "LEVEL 1",
            topic: "Arithmetic Progression",
            subject: "Mathematics",
        },
        {
            level: "LEVEL 1",
            topic: "Arithmetic Progression",
            subject: "Mathematics",
        },
        {
            level: "LEVEL 1",
            topic: "Arithmetic Progression",
            subject: "Mathematics",
        },
        {
            level: "LEVEL 1",
            topic: "Arithmetic Progression",
            subject: "Mathematics",
        },
    ];
    return(
        <>
            <div className="practice-papers">
                <Navbar />
                <div className="practice-contents">
                    <div className="practice-heading">
                        Practice Papers
                    </div>
                    {
                        data.map((divs)=>(
                            <>
                            <div className="practice-paper">
                                <div className="practice-level">{divs.level}</div>
                                <br/>
                                <div className="practice-topic">{divs.topic}</div>
                                <br/>
                                <div className="practice-subject">{divs.subject}</div>
                                <div className="practice-view">
                                    <TbReportSearch />
                                    <div>View Paper</div>
                                </div>
                                <div className="practice-test">
                                    <PiExamFill />
                                    <div>Take Test</div>
                                </div>
                            </div>
                            </>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default PracticePapers;