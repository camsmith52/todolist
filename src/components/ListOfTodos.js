import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ListOfTodos = ({ todos, setTodos }) => {
  const deleteTodo = (id) => {
    axios
      .delete(`http://localhost:5000/todo/${id}`) //path needs to match the backend route - see todo.js /todo/:id
      .then((response) => {
        console.log(response.data);
      });

    setTodos(todos.filter((item) => item._id !== id));
  };

  const list = todos.map((todo) => {
    return (
      <div className="ui middle aligned divided list" key={todo._id}>
        <div className="item" style={{ backgroundColor: "lightgrey" }}>
          <div className="right floated content">
            <Link className="ui button" to={"/edit/" + todo._id}>
              Edit
            </Link>
            <div className="ui button" onClick={() => deleteTodo(todo._id)}>
              Delete
            </div>
          </div>
          <div className="content" style={{ fontSize: "2em" }}>
            {todo.todoitem}
          </div>
        </div>
      </div>
    );
  });

  return <div style={{ marginTop: "10px" }}>{list}</div>;
};

export default ListOfTodos;
