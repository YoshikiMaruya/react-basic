import React from "react";

const style = {
  backgroundColor: '#c1ffff',
  width: '400px',
  height: '30px',
  padding: '8px',
  margin: '8px',
  borderRadius: '8px',
}

export const InputArea  = (props) => {
  const { todoText, onChangeTodoText, onClickAdd } = props;
  return (
    <div style={ style }>
      <input placeholder="input a TODO" value={todoText} onChange={onChangeTodoText} />
      <button onClick={onClickAdd}>add</button>
    </div>
  );
}
