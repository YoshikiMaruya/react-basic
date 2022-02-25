import React from "react";

export const CompleteArea = (props) => {
  const { completeTodos, onClickBack } = props;
  return (
    <div className="complete-area">
      <p className="title">Complete TODO</p>
      <div id="complete-list">
        {completeTodos.map((todo, index) => {
          return (
            <ul key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>back</button>
            </ul>
          );
        })}
      </div>
    </div>
  );
}
