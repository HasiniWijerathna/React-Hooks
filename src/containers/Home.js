/**
 * I have used "yarn add react@16.7.0-alpha.2 react-dom@16.7.0-alpha.2" to upgrade react and react dom
  Check package.json
 */

import React, { useState } from 'react'; 


function Todo ({todo, index, completeTodo, deleteTodo }) {
  /**
   * Destructuring from props 
      const todo = props.todo;
      const index = props.index;
      
      is equivalent to below,
      const { todo, todo } = props;
   */
  return <div style={{textDecoration: todo.isCompleted ? 'line-through' : ''}}>
  {todo.text}
    <div>
      <button onClick={() => completeTodo(index)}>Complete</button>
      <button onClick={() => deleteTodo(index)}>Delete</button>
    </div>
  </div>;
}


function TodoForm ({addTodo}) {
  
  const [value, setValue] = useState('');
  
  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  }
   
  return(
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Add todos.. "
        value={value} 
        onChange={ e => setValue(e.target.value )} 
      />
    </form>
  )
  
}

/**
 * Defines the function component which use React features without writing a class
 */
function Home() {
  
  /**
   * State of the function component
    useState returns a pair: the current state value and a function that lets you update the state
    Only argument useState accepts is the initial state
    We make two variables using the retun values of useState with array destructuring 
    The first item is the current value, and the second is a function that lets us update it 
    
    Here my todos array contains with todo objects
   */
   const [todos, setTodos] = useState([  
     {
      text: 'Learn react hooks',
      isCompleted: false
    },{
      text: 'Learn react useEffetcs',
      isCompleted: false
    },{
      text: 'Learn react State',
      isCompleted: false
    }  
  ]);
  
  const addTodo = text => {
    const newTodos = [...todos, {text}];
    setTodos(newTodos);
  }
  
  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true; 
    setTodos(newTodos);
  }
  
  const deleteTodo = index => {
    const newTodos = [...todos];
    // Splicing by the index and one is effected
    newTodos.splice(index, 1)
    setTodos(newTodos);
  }
  
  return(
    <div>
      <div>
        {todos.map((todo, index) =>  (
          <Todo 
            key={index} 
            index={index} 
            todo={todo}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
           />
        ))}
        
        <TodoForm addTodo={addTodo } />
      </div>
    </div>
  )
    
  
}

export default Home;