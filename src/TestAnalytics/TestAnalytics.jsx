import React from "react";
import "./TestAnalytics.css";
import Navbar from "../Navbar/Navbar";
import graph from "../assets/image1.jpg";

const TestAnalytics=()=>
{
    const options=[
        {
            option: "Mathematics",
        },
        {
            option: "English",
        },
        {
            option: "Hindi",
        },
        {
            option: "Science",
        },
    ];
    const rows=[
        {
            difficulty: "Easy",
            stats1: 10,
            stats2: 5,
        },
        {
            difficulty: "Medium",
            stats1: 15,
            stats2: 10,
        },
    ];
    return(
        <>
            <div className="test-analytics">
                <Navbar />
                <div className="test-body">
                    <div className="test-heading">
                        Test Analytics
                    </div>
                    <div className="test-graph">
                        <img src={graph} alt="Graph"/>
                    </div>
                    <div className="test-analysis">
                        Question Analysis
                    </div>
                    <div className="test-question">
                        <div className="question-">Question -</div>
                        <br/>
                        <div className="question-try">Try to improve number counting</div>
                        <div className="test-level">LEVEL 1</div>
                    </div>
                    <div className="test-question-2">
                        <div className="question-">Question -</div>
                        <br/>
                        <div className="question-try">Try to improve number counting</div>
                        <div className="test-level">LEVEL 3</div>
                    </div>
                    <div className="test-dropdown-container">
                        <select className="test-dropdown">
                            {
                                options.map((op)=>(
                                    <option>{op.option}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="test-table">
                        <table cellSpacing={0} border={1}>
                            <tr>
                                <th colSpan={3}>Test Jan 18, 2024</th>
                            </tr>
                            {
                                rows.map((row)=>(
                                    <tr>
                                        <td>{row.difficulty}</td>
                                        <td>{row.stats1}</td>
                                        <td>{row.stats2}</td>
                                    </tr>
                                ))
                            }
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TestAnalytics;