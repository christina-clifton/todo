import React, { useState } from 'react';
import './App.css';

import { Input } from './Input';
import { List } from './List';
import { Footer } from './Footer';

function App() {

  /* Creates states for the app. Tracks list, currently selected view & the number of todo tasks. */
  const [list, updateList] = useState([]);

  const [currentView, updateCurrentView] = useState('all');

  const [todoCount, updateTodoCount] = useState(0);


  /* When the user submits a new task into the input bar, this function adds the task to the todoList 
  and updates the todoCount. */
  function handleAddNewTask(taskName) {
    updateList(
      [{ 
        id: `${taskName}: ${todoCount + 1}`,
        name: taskName,
        isdone: false
      }].concat(list)
    );

    updateTodoCount(todoCount + 1);
  }


  /* When the user clicks on the checkbox next to a todo task, the task's isdone property is toggled.
  The todoCount is updated. */
  function handleToggleTask(task) {
    const newList = [...list];
    const foundIndex = newList.findIndex((item) => item.id === task.id);
    newList[foundIndex].isdone = !task.isdone;

    updateList(newList);

    updateTodoCount(newList.filter((item) => item.isdone === false).length);
  }


  /* When the user clicks on the delete button next to a todo task, the task is removed from the list.
  The todoCount is updated. */
  function handleDeleteTask(task) {
    const newList = list.filter((item) => item.id !== task.id);

    updateList(newList);

    updateTodoCount(newList.filter((item) => item.isdone === false).length);
  }


  /* When the user selects a new view ('all', 'todo' or 'done'), the app's state is updated to reflect
  the selected view. */
  function handleUpdateView(e) {
    updateCurrentView(e.target.className);
  }


  /* Creates the currently displayed list, depending on which view the user has selected ('all'[default], 'todo', 
    'done') */
  function getCurrentList() {
    const todos = list.filter((item) => item.isdone === false);
    const doneTasks = list.filter((item) => item.isdone === true);
    
    switch (currentView) {
      case 'todo':
        return todos;
      case 'done': 
        return doneTasks;
      default:
        return list;
    }
  }


  /* Renders the app. Includes the title, input bar & currentView list. If 
  there is at least 1 todo or done task, the footer is included */
  return (
    <div>
      <header className="App-Title">todos</header>
      <div className="App">
        <Input 
          handleAddNewTask={handleAddNewTask}
        />
        
        <List
          list={getCurrentList()}
          handleToggleTask={handleToggleTask}
          handleDeleteTask={handleDeleteTask}
        />
        
        {list.length > 0 && 
          <Footer 
            todoCount={todoCount}
            currentView={currentView}
            handleUpdateView={handleUpdateView}
          />
        }

      </div>
    </div>
  );
}

export default App;
