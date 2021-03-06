import axios from "axios";
import React, { useState, useEffect } from "react";
import ListOfTodos from "./ListOfTodos";

const MakeToDo = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  // console.log(text)

  useEffect(() => {
    axios
      .get("http://localhost:5000/todo")
      .then((res) => setTodos(res.data))
      .catch((err) => console.log("error"));
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { todoitem: text }]);

    const jsonPost = {
      todoitem: text,
    };

    axios
      .post("http://localhost:5000/todo/add", jsonPost)
      .then((res) => res.data);

    setText("");

    window.location = "/";
  };

  const deleteAll = () => {
    setTodos([]);
  };
  console.log(todos);
  return (
    <div>
      <h3>Enter to do:</h3>
      <form onSubmit={onSubmit}>
        <div className="ui input">
          <input
            type="text"
            placeholder="Enter to do"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </form>
      <ListOfTodos todos={todos} setTodos={setTodos} />
      <button onClick={deleteAll} style={{ marginTop: 15 }}>
        Clear all to do's
      </button>
    </div>
  );
};

export default MakeToDo;
