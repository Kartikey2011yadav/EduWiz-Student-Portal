import React from "react";
import "./Articles.css";
import Navbar from "../Navbar/Navbar";

const Articles=()=>
{
    const articles=[
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
        <div className="articles-container">
            <Navbar />
            <div className="articles-contents">

                <div className="articles-heading">
                    Articles
                </div>
                {
                            articles.map((article)=>(
                                <div className="article">
                                    <div className="article-details">
                                        <div className="article-question">{article.question}</div>
                                        <br/>
                                        <div>{article.description}</div>
                                        <div className="article-level">{article.level}</div>
                                    </div>
                                </div>
                            ))
                    }
            </div>
        </div>
        </>
    );
}

export default Articles;