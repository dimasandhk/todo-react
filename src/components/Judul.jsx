import React, { useState } from "react";
import "./Judul.css";

const InputGroup = (props) => {
  const [inputValue, setInputValue] = useState("");
  const setInputHandler = (ev) => setInputValue(ev.target.value);

  const newTodoHandler = (ev) => {
    ev.preventDefault();
    props.onSubmitInput(inputValue);

    setInputValue("");
  };

  return (
    <div className="row justify-content-center">
      <div className="col-12 col-md-12 col-lg-8">
        <form onSubmit={newTodoHandler}>
          <div className="input-group mb-3 mt-3">
            <input
              type="text"
              required
              value={inputValue}
              onChange={setInputHandler}
              className="form-control shadow-none border-black"
            />
            <div className="input-group-append">
              <button type="submit" className="btn btn-dark shadow-none">
                Add New Todo
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

const Judul = (props) => {
  const submitInputHandler = (title) => {
    props.onPushTodo(title);
  };

  return (
    <div className="judul mt-5">
      <div className="container text-center">
        <h3 className="font-weight-bold text-white">{props.title}</h3>
        <InputGroup onSubmitInput={submitInputHandler} />
      </div>
    </div>
  );
};

export default Judul;
