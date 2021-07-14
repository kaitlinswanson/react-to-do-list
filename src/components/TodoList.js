import React from 'react'; 
//import components
import Todo from './Todo.js';

const TodoList = ({ todos }) => {
    return (
        <div className="todo-container">
        <ul className="todo-list">
           {todos.map(todo => (
             <Todo text={todo.text} id={todo.id}/>  
           ))}
        </ul>
      </div>
    );
};

export default TodoList;