import React, { useEffect, useReducer, useState } from 'react'
import './text_game.css'
import Question from '../../components/StoryBased/Question'


const sampleData = null;
var images = [
  "src/assets/talky_talky_startscreen.png", // start scene
  "src/assets/employee_background.png", // employee background
  "src/assets/third_scene_backgorund.png"
]

var imgPath = "url(" + images[0] + ")"



const StoryBased = () => {
  const [next, setNext] = useState(1);
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

  // function submitAnswer(e, each, textNode) {
  //   if (textNode.answer === each.text) {
  //     setTimeout(() => {
  //       setNext(each.next)
  //     }, 500);
  //   }
  // }

  function secondScene(startTime, imageIndex) {
    useEffect(() => {
      if (sampleData === null) {
        const toRef = setTimeout(() => {
          // close first scene
          setIsStartingSceneModel(false);
          imgPath = "url(" + images[imageIndex] + ")"
          clearTimeout(toRef);
        }, startTime);
      }
    }, [sampleData]);

    useEffect(() => {
      const timeoutId = setTimeout(() => {
        // Show models in second scene
        setIsVisible(true);
      }, 2500);
      return () => clearTimeout(timeoutId);
    }, []);
  }

  function secondSceneEnd(startTime) {
    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setIsVisible(false);
      }, startTime);
      return () => clearTimeout(timeoutId);
    }, [isVisible]);
  }

  function showTextNode(textNodesIndex) {
    const textNode = arrayTextNodes.find(
      (arrayTextNodes) => arrayTextNodes.id === textNodesIndex
    );

    // Second scene
    // startScene(2000, 0)
    secondScene(2000, 1)
    secondSceneEnd(1000)

    return (
      <div style={{ backgroundImage: `${imgPath}` }} className='container'>
        <h1 style={{ display: isStartingSceneModel? 'block' : 'none' }} className='title'>Talky-Talky</h1>
        <div style={{ display: isStartingSceneModel? 'block' : 'none' }} className="startingscenemodel"></div>

        {/* Employee Scene */}
        <div style={{display: isVisible? 'block' : 'none'}} className='speakbubble'>
          <p className='hisir'>Hi sir! How can I help you today?</p>
        </div>
        <div style={{display: isVisible? 'block' : 'none'}} className='micperson'></div>

        <div >

        </div>

        <Question textNode={textNode} next={next}/>
      </div>
    );
  }
  return <div className='wrapper'>{showTextNode(next)}</div>;

}
export default StoryBased;
