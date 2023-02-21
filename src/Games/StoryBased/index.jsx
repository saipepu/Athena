import React, { useEffect, useReducer, useState } from 'react'
import './text_game.css'

const sampleData = null;
var images = [
  "src/assets/talky_talky_startscreen.png", // start scene
  "src/assets/employee_background.png", // employee background
]

var imgPath = "url(" + images[0] + ")"



const StoryBased = () => {
  const [next, setNext] = useState(1);
  const [startingImage, setStartingImage] = useState(false);
  const [employeeBackground, setEmployeeBackground] = useState(false);
  const [currentImage, setCurrentImage] = useState(images[0]);



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

  function startScene(startingImage, setStartingImage, startTime, endTime, imageIndex, endIndex) {
    useEffect(() => {
      if (sampleData === null) {
        const toRef = setTimeout(() => {
          setStartingImage(true);
          imgPath = "url(" + images[imageIndex] + ")"
          clearTimeout(toRef);
        }, startTime);
      }
    }, [sampleData]);

    // useEffect(() => {
    //   const toRef = setTimeout(() => {
    //     setStartingImage(false);
    //     imgPath = "url(" + images[endIndex] + ")"
    //     clearTimeout(toRef);
    //   }, endTime);
    // }, [startingImage]);
  }

  function showTextNode(textNodesIndex) {
    const textNode = arrayTextNodes.find(
      (arrayTextNodes) => arrayTextNodes.id === textNodesIndex
    );

    // Starting Image Diplay
    startScene(startingImage, setStartingImage, 2000, 2000, 0, 1)
    // employee_background
    startScene(employeeBackground, setEmployeeBackground, 2000, 4000, 1, 2)

    return (
      <div style={{ backgroundImage: `${imgPath}` }} className='container'>

        {/* <div style={{backgroundImage: `url("src/assets/employee_background.png")`}} className='employeebackground'></div> */}

        <div className='speakbubble'>
          <p className='hisir'>Hi sir! How can I help you today?</p>
        </div>
        <div className='micperson'>

        </div>
        <div className='startscreen'>
        </div>
        <div className='questionandanswer'>
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
                      className={textNode.answer === each.text ? 'correctanswer' : 'wronganswer'}
                      htmlFor={key}>
                      {each.text}
                    </label>
                  </span>
                );
              })}
            </form>
          </div>
        </div>
      </div>
    );
  }
  return <div className='wrapper'>{showTextNode(next)}</div>;

}
export default StoryBased;
