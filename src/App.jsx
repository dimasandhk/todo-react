import React, { useState } from "react";
import { nanoid } from "nanoid";

import Judul from "./components/Judul";
import Todo from "./components/Todo/TodoItem";

const App = () => {
  const [list, setList] = useState([{ id: nanoid(10), title: "Dummy Text" }]);
  const pushTodoHandler = (title) => {
    const setUpNano = { id: nanoid(10), title };
    setList((prevList) => [setUpNano, ...prevList]);
  };

  const shiftTodo = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  return (
    <>
      <Judul title="YNTKTS To Do" onPushTodo={pushTodoHandler} />
      <div className="row justify-content-center mb-5">
        {list.map((value) => {
          return (
            <Todo onDeleteList={shiftTodo} provide={value.id} title={value.title} key={value.id} />
          );
        })}
      </div>
    </>
  );
};
export default App;
