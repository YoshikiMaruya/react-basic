import React from "react";
import { useState } from "react";
import "./style.css"
import { InputArea } from "./components/InputArea";
import { IncompleteArea } from "./components/IncompleteArea";
import { CompleteArea } from "./components/CompleteArea";


export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = (index) => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    if (newTodos.length > 5) {
      alert("upper limit is 5");
      setTodoText("");
    }
    else {
      setIncompleteTodos(newTodos);
      setTodoText("");
    }
  }

  const deleteTodos = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  }

  const onClickDelete = (index) => {
    deleteTodos(index);
  }

  const onClickComplete = (index) => {
    deleteTodos(index)
    const newTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newTodos);
  }

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    setCompleteTodos(newCompleteTodos)

    const newBackTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newBackTodos);
  }


  return (
    <>
      <InputArea
        todoText={todoText}
        onChangeTodoText={onChangeTodoText}
        onClickAdd={onClickAdd}
      />

      <IncompleteArea
        incompleteTodos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />

      <CompleteArea
        completeTodos={completeTodos}
        onClickBack={onClickBack}
      />

    </>
  );
};
