/**
 * I have used "yarn add react@16.7.0-alpha.2 react-dom@16.7.0-alpha.2" to upgrade react and react dom
  Check package.json
 */

import React, { useState } from 'react';

import { makeStyles } from '@material-ui/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

/**
 * Should access the primary color form theam
 */
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: '#11cb5f',
  },
}));


function Todo ({todo, index, completeTodo, deleteTodo }) {
  /**
   * Destructuring from props
      const todo = props.todo;
      const index = props.index;

      is equivalent to below,
      const { todo, todo } = props;
   */

  function   handleOncomplete () {
      completeTodo(index);
    }

    function   handleRemove () {
        deleteTodo(index);
      }

  return (

  <div>
  <ListItem key={index} role={undefined} dense button onClick={handleOncomplete}>
          <Checkbox
            checked={todo.isCompleted }
            tabIndex={-1}
            disableRipple
          />
          <ListItemText primary={todo.text} />
          <ListItemSecondaryAction>
            <IconButton aria-label="Comments" onClick={handleRemove}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
  </div>

)
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
   const classes = useStyles();
  /**
   * State of the function component
    useState returns a pair: the current state value and a function that lets you update the state
    Only argument useState accepts is the initial state
    We make two variables using the retun values of useState with array destructuring
    The first item is the current value, and the second is a function that lets us update it

    Here's my todos array contains with todo objects
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
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
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

    <List className={classes.root}>
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
  )


}

export default Home;
