import React from "react";
import "./Analytics.css";

const Analytics=()=>
{
    const data=[
        {
            subject: "English",
            pointsEarned: 50,
            questionsSolved: 50,
            currentLevel: 5,
        },
        {
            subject: "English",
            pointsEarned: 50,
            questionsSolved: 50,
            currentLevel: 5,
        },
        {
            subject: "English",
            pointsEarned: 50,
            questionsSolved: 50,
            currentLevel: 5,
        },
        {
            subject: "English",
            pointsEarned: 50,
            questionsSolved: 50,
            currentLevel: 5,
        },
        {
            subject: "English",
            pointsEarned: 50,
            questionsSolved: 50,
            currentLevel: 5,
        },
    ];
    return(
        <>
            <div className="analytics-container">
                <div className="analytics-heading">
                    Subject-Wise Analytics
                </div>
                <div className="analytics-table">
                    <table border={1} cellSpacing={0}>
                        <tr>
                            <th>Subject</th>
                            <th>Points Earned</th>
                            <th>Questions Solved</th>
                            <th>Current Level</th>
                        </tr>
                        {
                            data.map((row)=>(
                                <tr>
                                    <td>{row.subject}</td>
                                    <td>{row.pointsEarned}</td>
                                    <td>{row.questionsSolved}</td>
                                    <td>{row.currentLevel}</td>
                                </tr>
                            ))
                        }
                    </table>
                </div>
            </div>
        </>
    );
}

export default Analytics;