import React from "react";

export const IncompleteArea = (props) => {
  const { incompleteTodos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">Incomplete TODO</p>
      <div id="incomplete-list">
        {incompleteTodos.map((todo, index) => {
          return (
            <ul key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>complete</button>
              <button onClick={() => onClickDelete(index)}>delete</button>
            </ul>
          );
        })}
      </div>
    </div>
  );
}
