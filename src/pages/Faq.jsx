import React, { useState } from 'react'
import './faq.css';
import { FcLike } from "react-icons/fc";


function Faq() {

  const questions = [
    { id: '1', name: 'Max', qst: ['What subscription plan are you interested in?'], ans: ['Preminum'] },
    { id: '2', name: 'George', qst: ['How many users do you have?'], ans: ['as per subscription '] },
    { id: '3', name: 'Avinash', qst: ['Are you adding in chatting?'], ans: ['yes'] },
    { id: '4', name: 'Navaneeth', qst: ['What are your storages?'], ans: ['as your need'] },
    { id: '5', name: 'Arun', qst: ['What is your preferred chat?'], ans: ['gmail'] },
    { id: '6', name: 'Sreerag', qst: ['Do you have a low price subscription?'], ans: ['yes'] },
    { id: '7', name: 'George', qst: ['Do you have  data security ?'], ans: ['sure'] },
    { id: '8', name: 'Salawudheen', qst: ['Do you have any  customization ?'], ans: ['yes in addons'] },
    { id: '9', name: 'Mikle', qst: [''], ans: [''] },
    { id: '10', name: 'Jack', qst: [''], ans: [''] },
  ];

  const [likeCounts, setLikeCounts] = useState(Array(questions.length).fill(0));

  const handleLikeClick = (index) => {
    setLikeCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      newCounts[index] += 1;
      return newCounts;
    });
  };
  return (
    <div className='page'>
      <h1 style={{marginBottom:"5%"}}>Frequently Asked Question</h1>
      <div className='slider-container'>
        {questions.map((plan, index) => (
          <div className={`slider-item `} key={plan.id}>
            <h2>{plan.name}</h2>
            <p className='price'>{plan.price}</p>
            <div className='features'>
              {plan.qst.map((qsts, qIndex) => (
                <h6 key={qIndex}>{qsts}</h6>
              ))}
              {plan.ans.map((ansr, aIndex) => (
                <p key={aIndex}>{ansr}</p>
              ))}
              <div>
                <p>{likeCounts[index]} Likes</p>
                <div onClick={() => handleLikeClick(index)}><FcLike size={20}/></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="question-form">
      <h2>Ask a Question</h2>
      <form>
        <label htmlFor="askerName">Your Name:</label>
        <input type="text" id="askerName" name="askerName" required />

        <label htmlFor="email">Email Address:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="question">Your Question:</label>
        <textarea id="question" name="question" rows="4" required></textarea>

        <button type="submit">Submit Question</button>
      </form>
    </div>
    </div>
  )
}

export default Faq