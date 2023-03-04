import React, { useState } from "react";
import "./text_game.css";

const scenes = [
  {
    sceneID: 0,
    scene: "start",
    background: "src/assets/talky_talky_startscreen.png",
    avatar: "src/assets/start_model.png",
    text: "Talky-Talky",
    backgroundSize: undefined,
  },
  {
    sceneID: 1,
    scene: "employee",
    background: "src/assets/employee_background.png",
    avatar: "src/assets/micperson.png",
    text: "Hi sir! How can I help you today?",
    backgroundSize: 963,
  },
  {
    sceneID: 2,
    scene: "customer",
    background: "src/assets/third_scene_backgorund.png",
    avatar: "src/assets/customer_third.png",
    text: "I would like to move my reservations to a new date",
    backgroundSize: 1203,
  },
  {
    sceneID: 3,
    scene: "employee",
    background: "src/assets/employee_background.png",
    avatar: "src/assets/micperson.png",
    text: "The line is really long right now so it will take awhile",
    backgroundSize: 963,
  },
  {
    sceneID: 4,
    scene: "question",
    background: "src/assets/employee_background.png",
    question:
      "You know he will have to wait in a long line, what would you say to him?",
    options: [
      {
        option: "Let him wait without saying anything",
        goToQuestionSceneID: 5,
      },
      {
        option:
          "Tell him that the line might be long, if its not urgent. He can try calling after 1 hour",
        goToQuestionSceneID: 6,
      },
    ],
    backgroundSize: 963,
  },
  {
    sceneID: 5,
    scene: "customer",
    background: "src/assets/third_scene_backgorund.png",
    avatar: "src/assets/customer_third.png",
    text: "Its more than 5 minutes. Let me call them again in an hour",
    backgroundSize: 1263,
  },
  {
    sceneID: 6,
    scene: "customer",
    background: "src/assets/third_scene_backgorund.png",
    avatar: "src/assets/fifth_model.png",
    text: "I have waited for so long! I need to call them again!",
    backgroundSize: 1263,
  },
  {
    sceneID: 7,
    scene: "time",
    background: "src/assets/third_scene_backgorund.png",
    text: "1 Hour Later",
    backgroundSize: 1263,
  },
  {
    sceneID: 8,
    scene: "employee",
    background: "src/assets/employee_background.png",
    avatar: "src/assets/micperson.png",
    text: "Hello Sir! How can I help you?",
    backgroundSize: 963,
  },
  {
    sceneID: 9,
    scene: "customer",
    background: "src/assets/third_scene_backgorund.png",
    avatar: "src/assets/customer_third.png",
    text: "Hi, I would like to request a change in my reservation's date",
    backgroundSize: 1203,
  },
  {
    sceneID: 10,
    scene: "customer",
    background: "src/assets/third_scene_backgorund.png",
    avatar: "src/assets/customer_third.png",
    text: "If possible, can I move my reservation date to the 15th of Feb?",
    backgroundSize: 1203,
  },
  {
    sceneID: 11,
    scene: "employee",
    background: "src/assets/employee_background.png",
    avatar: "src/assets/micperson.png",
    text: "That is possible but there will be a fee for changing date of reservation",
    backgroundSize: 963,
  },
  {
    sceneID: 12,
    scene: "customer",
    background: "src/assets/third_scene_backgorund.png",
    avatar: "src/assets/fifth_model.png",
    text: "What? I thought there were not fees for changing",
    backgroundSize: 1263,
  },
  {
    sceneID: 12,
    scene: "employee",
    background: "src/assets/employee_background.png",
    avatar: "src/assets/micperson.png",
    text: "I'm sorry but if you change 3 days prior, we will charge a fee sir.",
    backgroundSize: 963,
  },
  {
    sceneID: 13,
    scene: "question",
    background: "src/assets/employee_background.png",
    question:
      "The customer is complaining, what should you do in this situation?",
    options: [
      {
        option:
          "Apologize and tell him that they will make it clear on the website in the future",
        goToQuestionSceneID: 5,
      },
      {
        option:
          "Apologize to him and suggest a new promotion that comes with the bookings",
        goToQuestionSceneID: 6,
      },
    ],
    backgroundSize: 963,
  },
  {
    sceneID: 14,
    scene: "employee",
    background: "src/assets/employee_background.png",
    avatar: "src/assets/micperson.png",
    text: "We're really sorry about this, we will make it more clear on the website!",
    backgroundSize: 963,
  },
  {
    sceneID: 15,
    scene: "customer",
    background: "src/assets/third_scene_backgorund.png",
    avatar: "src/assets/customer_third.png",
    text: "Okay! then can I change to 14th of Feb? That has no fees right?",
    backgroundSize: 1203,
  },
  {
    sceneID: 16,
    scene: "question",
    background: "src/assets/employee_background.png",
    question: "The customer is louder and has more energy, what would you do?",
    options: [
      {
        option: "Stay Calm and control the tone",
        goToQuestionSceneID: 5,
      },
      {
        option: "Be adaptable and match the energy of the customer",
        goToQuestionSceneID: 6,
      },
    ],
    backgroundSize: 963,
  },
  {
    sceneID: 17,
    scene: "employee",
    background: "src/assets/employee_background.png",
    avatar: "src/assets/micperson.png",
    text: "Yes, that would incur no extra fees. Would you like to proceed?",
    backgroundSize: 963,
  },
  {
    sceneID: 18,
    scene: "customer",
    background: "src/assets/third_scene_backgorund.png",
    avatar: "src/assets/customer_third.png",
    text: "Yes, I would like to proceed with that option!",
    backgroundSize: 1203,
  },
  {
    sceneID: 19,
    scene: "employee",
    background: "src/assets/employee_background.png",
    avatar: "src/assets/micperson.png",
    text: "Okay, your reservations has been changed. ",
    backgroundSize: 963,
  },
  {
    sceneID: 20,
    scene: "question",
    background: "src/assets/employee_background.png",
    question: "The problem has been solve. What will you do next?",
    options: [
      {
        option: "Ask if there is anything else he needs?",
        goToQuestionSceneID: 5,
      },
      {
        option:
          "Just tell him the change is done and say Thank you for using their service",
        goToQuestionSceneID: 6,
      },
    ],
    backgroundSize: 963,
  },
  {
    sceneID: 21,
    scene: "customer",
    background: "src/assets/third_scene_backgorund.png",
    avatar: "src/assets/customer_third.png",
    text: "That is it now, Thank you so much!",
    backgroundSize: 1203,
  },
];

const StoryBased = () => {
  const [nextSceneCount, setNextSceneCount] = useState(0);
  const [start, setStart] = useState(true);
  const [next, setNext] = useState(false);
  const [buttonColor, setButtonColor] = useState("");

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

  const submitAnswer = (each) => {
    setTimeout(() => {
      setNextSceneCount(each.goToQuestionSceneID);
    }, 1000);
  };

  const checkAnswerBackgorundColor = (each) => {
    if (scenes[nextSceneCount].answer === each.option) {
      setButtonColor("green");
    } else {
      setButtonColor("red");
    }
  };

  let isLast = nextSceneCount == scenes.length - 1;

  return (
    <div className="wrapper">
      <div
        style={{ backgroundImage: `url(${scenes[nextSceneCount].background})` }}
        className="Scontainer"
      >
        {/* Button  */}
        {start ? (
          <button className="start_btn" onClick={nextScene}>
            {isLast ? "Done!" : start ? "Start!" : "Next!"}
          </button>
        ) : (
          <button className="next_btn" onClick={nextScene}></button>
        )}

        {isLast || (!start && scenes[nextSceneCount].scene !== "start") ? (
          <button className="back_btn" onClick={backScene}></button>
        ) : null}
        {start ? <h1 className="title">Talky-Talky</h1> : null}

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
          <>
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
              <div>
                {scenes[nextSceneCount].scene === "question" ? (
                  <>
                    {scenes[nextSceneCount].avatar === undefined ? null : (
                      <div
                        style={{
                          backgroundImage: `url(${scenes[nextSceneCount].avatar})`,
                          backgroundSize: `${scenes[nextSceneCount].backgroundSize}px`,
                        }}
                        className="employeePosition"
                      ></div>
                    )}
                    <div className="containerquestion">
                      <div className="questionScene">
                        <p className="questionText">
                          {scenes[nextSceneCount].question}
                        </p>
                      </div>
                      <form id="submitform">
                        {scenes[nextSceneCount].options.map((each, key) => {
                          return (
                            <div key={key}>
                              <label
                                onClick={() => submitAnswer(each)}
                                className="correctanswer"
                                htmlFor={key}
                              >
                                {key + 1}. {each.option}
                              </label>
                              <input
                                type="radio"
                                key={key}
                                id={key}
                                name="radio"
                              />
                            </div>
                          );
                        })}
                      </form>
                    </div>
                  </>
                ) : (
                  <div>
                    {scenes[nextSceneCount].scene === "start" ? (
                      <>
                        <div
                          style={{
                            backgroundImage: `url(${scenes[nextSceneCount].avatar})`,
                            backgroundSize: `${scenes[nextSceneCount].backgroundSize}px`,
                          }}
                          className="StartPosition"
                        ></div>
                        <h1 className="title">{scenes[nextSceneCount].text}</h1>
                        <button className="start_btn" onClick={nextScene}>
                          Start!
                        </button>
                      </>
                    ) : (
                      <>
                        {scenes[nextSceneCount].scene === "time" ? (
                          <div className="timebox">
                            <div className="questionScene">
                              <p className="timetext">
                                {scenes[nextSceneCount].text}
                              </p>
                            </div>
                          </div>
                        ) : (
                          <>
                            <div className="customerSpeakbubble">
                              <p className="hisir">
                                {scenes[nextSceneCount].text}
                              </p>
                            </div>

                            <div
                              style={{
                                backgroundImage: `url(${scenes[nextSceneCount].avatar})`,
                                backgroundSize: `${scenes[nextSceneCount].backgroundSize}px`,
                              }}
                              className="customerPosition"
                            ></div>
                          </>
                        )}
                      </>
                    )}
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
export default StoryBased;
