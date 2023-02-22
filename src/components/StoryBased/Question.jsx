import React from "react";
import { useState } from "react";

const Question = ({ textNode, arrayTextNodes, next }) => {
  // function submitAnswer(e, each, textNode) {
  //   if (textNode.answer === each.text) {
  //     setTimeout(() => {
  //       setNext(each.next)
  //     }, 500);
  //   }
  // }

  return (
    <div className="questionandanswer">
      <h1>{textNode.text}</h1>
      <div>
        <form id="submitform">
          {textNode.options.map((each, key) => {
            return (
              <span key={key}>
                <input
                  type="radio"
                  key={key}
                  id={key}
                  onClick={(e) => submitAnswer(e, each, textNode)}
                  name="radio"
                />
                <label
                  className={
                    textNode.answer === each.text
                      ? "correctanswer"
                      : "wronganswer"
                  }
                  htmlFor={key}
                >
                  {each.text}
                </label>
              </span>
            );
          })}
        </form>
      </div>
    </div>
  );
};

export default Question;
