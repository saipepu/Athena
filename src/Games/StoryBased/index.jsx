import React, { useEffect, useReducer, useState } from "react";
import "./text_game.css";
import Question from "../../components/StoryBased/Question";

const scenes = [
  // First scene
  {
    sceneID: 0,
    scene: "start",
    background: "src/assets/talky_talky_startscreen.png",
    avatar: "src/assets/start_model.png",
    title: "Talky-Talky",
    backgroundSize: undefined,
  },
  // Second scene
  {
    sceneID: 1,
    scene: "employee",
    background: "src/assets/employee_background.png",
    avatar: "src/assets/micperson.png",
    // speakbox: "src/assets/speakbubble.png",
    text: "Hi sir! How can I help you today?",
    backgroundSize: 963,
  },
  // Third scene
  {
    sceneID: 2,
    scene: "customer",
    background: "src/assets/third_scene_backgorund.png",
    avatar: "src/assets/customer_third.png",
    // speakbox: "src/assets/speakbubble.png",
    text: "I want to reserve table for tonight at 8 pm.",
    backgroundSize: 1203,
  },
  // Fourth scene
  {
    sceneID: 3,
    scene: "employee",
    background: "src/assets/employee_background.png",
    avatar: "src/assets/micperson.png",
    // speakbox: "src/assets/speakbubble.png",
    text: "Sorry, we do not take reservation on weekend sir.",
    backgroundSize: 963,
  },
  // Fifth scene
  {
    sceneID: 4,
    scene: "customer",
    background: "src/assets/third_scene_backgorund.png",
    avatar: "src/assets/fifth_model.png",
    // speakbox: "src/assets/speakbubble.png",
    text: "Why don't you make it clear on the website?",
    backgroundSize: 1263,
  },
  // six scene
  {
    sceneID: 5,
    scene: "customer",
    background: "src/assets/third_scene_backgorund.png",
    avatar: "src/assets/six_model.png",
    // speakbox: "src/assets/speakbubble.png",
    text: "This is awful I will never eat at your restaurant again!",
    backgroundSize: 1263,
  },
  // question scene, seven scene
  {
    sceneID: 6,
    scene: "question",
    background: "src/assets/employee_background.png",
    avatar: "src/assets/micperson.png",
    question: "How would you deal with this situation?",
    options: [
      {
        option: "Stay calm and apologize to him",
      },
      {
        option: "Hang up call and ignore it",
      },
      {
        option: "Transfer the call to the manager",
      },
    ],
    answer: "Stay calm and apologize to him",
    backgroundSize: 963,
  },
];

const StoryBased = () => {
  const [nextSceneCount, setNextSceneCount] = useState(0);
  const [start, setStart] = useState(true);
  const [next, setNext] = useState(false);
  console.log(nextSceneCount);
  console.log(scenes.length - 1);

  const nextScene = () => {
    if (nextSceneCount === scenes.length - 1) {
      return nextSceneCount;
    } else {
      setNextSceneCount(nextSceneCount + 1);
    }
    setStart(false);
  };

  const backScene = () => {
    if (nextSceneCount >= scenes.length - 1) {
      setNextSceneCount(nextSceneCount - 1);
    }
    setNextSceneCount(nextSceneCount - 1);
  };

  return (
    <div className="wrapper">
      <div
        style={{ backgroundImage: `url(${scenes[nextSceneCount].background})` }}
        className="container"
      >
        {/* Button  */}
        {nextSceneCount == scenes.length - 1 ? (
          <div>
            <button className="start_btn" onClick={nextScene}>
              Done!
            </button>
            <button className="back_btn" onClick={backScene}>
              Back
            </button>
          </div>
        ) : (
          <>
            {start ? (
              <div>
                <button className="start_btn" onClick={nextScene}>
                  Start!
                </button>
                <h1 className="title">Talky-Talky</h1>
              </div>
            ) : (
              <div>
                <button className="start_btn" onClick={nextScene}>
                  Next!
                </button>
                {scenes[nextSceneCount].scene === "start" ? (
                  <></>
                ) : (
                  <>
                    <button className="back_btn" onClick={backScene}>
                      Back
                    </button>
                  </>
                )}
              </div>
            )}
          </>
        )}

        {/* Process bar */}
        {!start ? (
          <div className="progress_wrapper">
            <div className="info">
              <div className="name_container">
                <p className="rank">A</p>
                <p className="name">5 ATHENA</p>
              </div>
              <div className="avatar">
                <img
                  src="src/assets/avatar.png"
                  alt="avatar"
                  className="avatar_img"
                />
              </div>
            </div>
            <div className="progress_container">
              <div className="title">Experience Bar</div>
              <div className="progress">
                <img
                  src="src/assets/exp_img.png"
                  alt="exp"
                  className="exp_img"
                />
                <div className="progress_bar">
                  <div className="bar" id="bar"></div>
                  <div className="xp">XP</div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}

        {start ? (
          <div
            style={{
              backgroundImage: `url(${scenes[nextSceneCount].avatar})`,
              backgroundSize: `${scenes[nextSceneCount].backgroundSize}px`,
            }}
            className="StartPosition"
          ></div>
        ) : (
          <div>
            {scenes[nextSceneCount].scene === "employee" ? (
              <>
                <div className="employeeSpeakbubble">
                  <p className="hisir">{scenes[nextSceneCount].text}</p>
                </div>
                <div
                  style={{
                    backgroundImage: `url(${scenes[nextSceneCount].avatar})`,
                    backgroundSize: `${scenes[nextSceneCount].backgroundSize}px`,
                  }}
                  className="employeePosition"
                ></div>
              </>
            ) : (
              <>
                {scenes[nextSceneCount].scene === "question" ? (
                  <>
                    <div
                      style={{
                        backgroundImage: `url(${scenes[nextSceneCount].avatar})`,
                        backgroundSize: `${scenes[nextSceneCount].backgroundSize}px`,
                      }}
                      className="employeePosition"
                    ></div>
                    <div className="questionScene">
                      <p className="questionText">
                        {scenes[nextSceneCount].question}
                      </p>
                    </div>
                  </>
                ) : (
                  <div>
                    {scenes[nextSceneCount].scene === "start" ? (
                      <></>
                    ) : (
                      <>
                        <div className="customerSpeakbubble">
                          <p className="hisir">{scenes[nextSceneCount].text}</p>
                        </div>
                      </>
                    )}
                    {scenes[nextSceneCount].scene === "start" ? (
                      <>
                        <div
                          style={{
                            backgroundImage: `url(${scenes[nextSceneCount].avatar})`,
                            backgroundSize: `${scenes[nextSceneCount].backgroundSize}px`,
                          }}
                          className="StartPosition"
                        ></div>
                        <h1 className="title">Talky-Talky</h1>
                        <button className="start_btn" onClick={nextScene}>
                          Start!
                        </button>
                      </>
                    ) : (
                      <>
                        <div
                          style={{
                            backgroundImage: `url(${scenes[nextSceneCount].avatar})`,
                            backgroundSize: `${scenes[nextSceneCount].backgroundSize}px`,
                          }}
                          className="customerPosition"
                        ></div>
                      </>
                    )}
                  </div>
                )}
              </>
            )}

            {/* Avatar display */}
            {/* <div
              style={{
                backgroundImage: `url(${scenes[nextSceneCount].avatar})`,
                backgroundSize: `${scenes[nextSceneCount].backgroundSize}px`,
              }}
              className={
                scenes[nextSceneCount].scene === "employee"
                  ? "employeePosition"
                  : "customerPosition"
              }
            ></div> */}
          </div>
        )}
      </div>
    </div>
  );
};
export default StoryBased;
