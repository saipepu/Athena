import React, { useEffect, useReducer, useState } from 'react'
import './text_game.css'
import startScreen from '../../assets/talky_talky_startscreen.png'


const StoryBased = () => {
  const [next, setNext] = useState(1);
  const [start, setStart] = useState(false);

  const arrayTextNodes = [
    {
      id: 1,
      text: "Question 1",
      options: [
        {
          text: "Option 1",
          next: 2,
        },
        {
          text: "Option 2",
        },
        {
          text: "Option 3",
        },
        {
          text: "Option 4",
        },
      ],
      answer: "Option 1"
    },

    {
      id: 2,
      text: "Question 2",
      options: [
        {
          text: "Option 1",
        },
        {
          text: "Option 2",
          next: 3,
        },
        {
          text: "Option 3",
        },
        {
          text: "Option 4",
        },
      ],
      answer: "Option 2"
    },
  ];

  useEffect(() => {
    document.getElementById('submitform').reset()
  }, [next]);

  function submitAnswer(e, each, textNode) {
    if (textNode.answer === each.text) {
      setTimeout(() => {
        setNext(each.next)
      }, 500);
    }
  }

  function showTextNode(textNodesIndex) {
    const textNode = arrayTextNodes.find(
      (arrayTextNodes) => arrayTextNodes.id === textNodesIndex
    );
    
    return (
      <div>
        <div className='startscreen'>
          {/* <img src={startScreen}></img> */}
        </div>
        <h1>{textNode.text}</h1>
        <div>
          <form id='submitform'>
            {textNode.options.map((each, key) => {
              return (
                <span key={key}>
                  <input 
                    type="radio"
                    key={key}
                    id={key}
                    onClick={(e) => submitAnswer(e, each, textNode)}
                    name="radio" />
                  <label
                    className={textNode.answer === each.text? 'correctanswer': 'wronganswer'}
                    htmlFor={key}>
                    {each.text}
                  </label>
                </span>
              );
            })}
          </form>
        </div>
      </div>
    );
  }
  return <div className="app">{showTextNode(next)}</div>;

}
export default StoryBased;
