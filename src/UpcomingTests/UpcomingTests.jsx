import React from "react";
import "./UpcomingTests.css";

const UpcomingTests=()=>
{
    const tests=[
        {
            subject: "Mathematics",
            topic: "Arithmetic Progression",
            date: "15/09/2024",
        },
        {
            subject: "Mathematics",
            topic: "Arithmetic Progression",
            date: "15/09/2024",
        },
        {
            subject: "Mathematics",
            topic: "Arithmetic Progression",
            date: "15/09/2024",
        },
    ];
    return(
        <>
        <div className="upcoming-tests-container">
            <div className="upcoming-heading">Upcoming Tests</div>
            <div className="upcoming-tests">
                {
                    tests.map((test)=>(
                        <div className="upcoming-test">
                            <div className="upcoming-subject">
                                {test.subject}
                            </div>
                            <div className="upcoming-topic">
                                {test.topic}
                            </div>
                            <div className="upcoming-date">
                                <u>{test.date}</u>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        </>
    );
}

export default UpcomingTests;