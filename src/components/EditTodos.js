import React, { useEffect, useState } from "react";
import axios from "axios";

const EditTodos = () => {
  //State
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  //Hook
  useEffect(() => {
    const urlParams = window.location.href.split("/");
    const ID = urlParams[urlParams.length - 1];

    axios
      .get(`http://localhost:5000/todo/${ID}`)
      .then((res) => {
        setTodos(res.data);
        setText(res.data.todoitem);
      })
      .catch((err) => console.log("error"));
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    const jsonPost = {
      todoitem: text,
    };

    const urlParams = window.location.href.split("/");
    const ID = urlParams[urlParams.length - 1];

    axios
      .post("http://localhost:5000/todo/update/" + ID, jsonPost)
      .then((res) => res.data);

    setText("");

    window.location = "/";
  };

  return (
    <div>
      <h3>Edit to do:</h3>
      <form onSubmit={onSubmit}>
        <div className="ui input">
          <input
            type="text"
            placeholder="Edit to do"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default EditTodos;
