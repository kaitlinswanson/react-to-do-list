import React, { useState, useEffect } from 'react';
import './App.css';
//importing components
import Form from './components/Form.js'
import TodoList from './components/TodoList.js'


function App() {

  //states
  const [inputText, setInputText] = useState("");
  //now you can use { inputText } it can render anywhere
  const [todos, setTodos] = useState([]);
  //for drop down filter. all is the default status
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //useEffect to get local storage one time when app loads


  useEffect(() => {
    const getLocalTodos = () => {
      if(localStorage.getItem('todos') === null) {
        localStorage.setItem('todos', JSON.stringify([]));
      }else{
       let todoLocal = JSON.parse(localStorage.getItem('todos'))
       setTodos(todoLocal)
      }
    };
    getLocalTodos();
  }, []);

    //useEffect - whenever this thing changes, do this...(run filter function
    useEffect(() => {
      const filterHandler = () => {
        switch(status){
          case 'completed':
            setFilteredTodos(todos.filter(todo => todo.completed === true))
            break;
            case 'uncompleted':
              setFilteredTodos(todos.filter(todo => todo.completed === false))
              break; 
              default: 
              setFilteredTodos(todos);
              break;
        }
      };
       //save to local storage 

      const saveLocalTodos = () => {
          localStorage.setItem('todos', JSON.stringify(todos));
        
        };

      
      filterHandler();
      saveLocalTodos();
    
    }, [todos, status]);


  return (
    <div className="App">
      <header>
        <h1>Kate's Todo List</h1>
        </header>
        <Form 
        inputText={inputText} 
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText}
        setStatus={setStatus}
        />
        <TodoList 
        setTodos={setTodos}
        todos={todos} 
        filteredTodos={filteredTodos}
        />
    </div>
  );
}

export default App;
