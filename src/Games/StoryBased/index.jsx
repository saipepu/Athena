import React, { useEffect, useReducer, useState } from 'react'
import './text_game.css'
import Question from '../../components/StoryBased/Question'


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
  const [isVisible, setIsVisible] = useState(false)
  const [isStartingSceneModel, setIsStartingSceneModel] = useState(true);

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

  function startScene(setImage, startTime, imageIndex) {
    useEffect(() => {
      if (sampleData === null) {
        const toRef = setTimeout(() => {
          setIsStartingSceneModel(false);
          setImage(true);
          imgPath = "url(" + images[imageIndex] + ")"
          clearTimeout(toRef);
        }, startTime);
      }
    }, [sampleData]);
  }
  

  function startModel() {
    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setIsVisible(true);
      }, 2500);
      return () => clearTimeout(timeoutId);
    }, []);
  }

  function showTextNode(textNodesIndex) {
    const textNode = arrayTextNodes.find(
      (arrayTextNodes) => arrayTextNodes.id === textNodesIndex
    );

    // Starting Image Diplay
    startScene(setStartingImage, 2000, 0)

    // employee_background
    startScene(setEmployeeBackground, 2000, 1)
    startModel();

    return (
      <div style={{ backgroundImage: `${imgPath}` }} className='container'>
        <h1 style={{ display: isStartingSceneModel? 'block' : 'none' }} className='title'>Talky-Talky</h1>
        <div style={{ display: isStartingSceneModel? 'block' : 'none' }} className="startingscenemodel"></div>

        {/* Employee Scene */}
        <div style={{display: isVisible? 'block' : 'none'}} className='speakbubble'>
          <p className='hisir'>Hi sir! How can I help you today?</p>
        </div>
        <div style={{display: isVisible? 'block' : 'none'}} className='micperson'></div>
        <Question textNode={textNode} next={next}/>
      </div>
    );
  }
  return <div className='wrapper'>{showTextNode(next)}</div>;

}
export default StoryBased;
