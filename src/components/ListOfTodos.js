import React from 'react'
import axios from 'axios';

const ListOfTodos = ({todos, setTodos}) => {

const deleteTodo = (todo)=>{

    axios.delete('http://localhost:5000/')
    .then(response=>{console.log(response.data)});

    setTodos(todos.filter(item=>item!==todo))
}


const list = todos.map((todo,index)=>{
    return <div className="ui middle aligned divided list" key={index}>
  <div className="item" style={{backgroundColor: 'lightgrey'}}>
    <div className="right floated content">
      <div className="ui button" onClick={()=>deleteTodo(todo,index)}>Delete</div>
    </div>
    <div className="content" style={{fontSize:'2em'}}>
      {todo}
    </div>
    </div>
  </div>
  
});
  

    
// console.log(todos)
return (
    <div style={{marginTop: '10px'}}>
        {list}
    </div>
  )
}

export default ListOfTodos