import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import moment from "moment";
import copy from "copy-to-clipboard";

import upvote from "../assets/sort-up.svg";
import downvote from "../assets/sort-down.svg";
import Avatar from '../components/avatar';
import DisplayAnswer from './displayAnswer';
import './questions.scss';

const Questionsdetails = () => {

    const {id}=useParams();
    const [Answer, setAnswer] = useState("");

    const User=null;

    var questionsList=[{
        _id:'1',
        upVotes:3,
        downVotes:2,
        noOfAnswers:2,
        questionTitle:"What is a function",
        questionTags:['css','js']

    }]

    const handleDelete=()=>{

    }
    const handleShare=()=>{
        
    }
   
    const handlePostAns=()=>{
        
    }
  return (
    <div className='question-details-page'>

    {
        questionsList===null?
        <h1>Loading...</h1>:
        <>
            {
                questionsList.filter(question=>question._id===id).map(question=>(
                    <div key={question._id}>
                        <section className='question-details-container'>

                            <h1>{question.questionTitle}</h1>
                            <div className='question-details-container-2'>

                                <div className='question-votes'>

                                    <img src={"upvote"}></img>
                                    <p></p>
                                    <img src={"downvote"}></img>

                                </div>

                                <div style={{ width: "100%" }}>
                      <p className="question-body">{question.questionBody}</p>
                      <div className="question-details-tags">
                        {question.questionTags.map((tag) => (
                          <p key={tag}>{tag}</p>
                        ))}
                      </div>
                      <div className="question-actions-user">
                        <div>
                          <button type="button" onClick={handleShare}>
                            Share
                          </button>
                          {User?.result?._id === question?.userId && (
                            <button type="button" onClick={handleDelete}>
                              Delete
                            </button>
                          )}
                        </div>
                        <div>
                          <p>asked {moment(question.askedOn).fromNow()}</p>
                          <Link
                            to={`/Users/${question.userId}`}
                            className="user-link"
                            style={{ color: "#0086d8" }}
                          >
                            <Avatar
                              backgroundColor="orange"
                              px="8px"
                              py="5px"
                              borderRadius="4px"
                            >
                              {/* {question.userPosted.charAt(0).toUpperCase()} */}
                            </Avatar>
                            <div>{question.userPosted}</div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {question.noOfAnswers !== 0 && (
                  <section>
                    <h3>{question.noOfAnswers} Answers</h3>
                    <DisplayAnswer
                      key={question._id}
                      question={question}
                      handleShare={handleShare}
                    />
                  </section>
                )}
                <section className="post-ans-container">
                  <h3>Your Answer</h3>
                  <form
                    onSubmit={(e) => {
                      handlePostAns(e, question.answer.length);
                    }}
                  >
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      value={Answer}
                      onChange={(e) => setAnswer(e.target.value)}
                    ></textarea>
                    <br />
                    <input
                      type="submit"
                      className="post-ans-btn"
                      value="Post Your Answer"
                    />
                  </form>
                  <p>
                    Browse other Question tagged
                    {question.questionTags.map((tag) => (
                      <Link to="/Tags" key={tag} className="ans-tags">
                        {" "}
                        {tag}{" "}
                      </Link>
                    ))}{" "}
                    or
                    <Link
                      to="/AskQuestion"
                      style={{ textDecoration: "none", color: "#009dff" }}
                    >
                      {" "}
                      ask your own question.
                    </Link>
                  </p>
                </section>
              </div>

                            
                ))
            }
        </>
    }

    </div>
  )
}

export default Questionsdetails