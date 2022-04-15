import React, {useState} from 'react';
import './App.css';

import {Input} from './Input';
import {List} from './List';
import {Footer} from './Footer';


function App() {

  /* Creates state for the app. Tracks todoList, completedTasksList, currently selected view & the number of todo tasks. */
  
  const [app, updateApp] = useState({
    todoList:[],
    completedTasksList: [],
    currentView: 'All',
    todoCount: 0
  })

  /* When the user enters a new task into the input bar, this function adds the task to the todoList */

  function handleAddNewTask(taskName) {

    updateApp({
      todoList: [
        {   id: `Todo ${app.todoList.length + 1}`,
          name: taskName,
        }].concat(app.todoList),
      completedTasksList: app.completedTasksList,
      currentView: app.currentView,
      todoCount: app.todoCount + 1
    });
  }

  /* When the user clicks on the checkbox next to a todo task, the task is moved removed from the todoList & 
  added to the completedTasksList. The todoCount is updated. */

  function handleCompleteTask(e) {

    const taskName = e.currentTarget.taskName;

    console.log(taskName);
  
    // updateApp({
    //   todoList: app.todoList.filter((item) => item.name === taskName),
    //   completedTasksList: [
    //     {   id: `Completed ${app.completedTasksList.length + 1}`,
    //         name: taskName,
    //     }].concat(app.completedTasksList),
    //   currentView: app.currentView,
    //   todoCount: app.todoCount - 1
    // })
  }

  /* When the user clicks on the delete button next to a todo task, the task is removed from its list (either
    todoList or completedTasksList). If the task had been in the todoList, the todoCount is updated. */

  function handleDeleteTask(e) {
    
    console.log('handleDelteTask function called')

    const taskId = e.currentTarget.id;

    console.log(taskId)
    
    let newTodoCount = app.todoCount;

    if(app.todoList.some(item => item.id === taskId)) {
      newTodoCount = app.todoCount - 1
    }

    updateApp({
      todoList: app.todoList.filter((item) => item.id !== taskId),
      copletedList: app.completedTasksList.filter((item) => item.id !== taskId),
      currentView: app.currentView,
      todoCount: newTodoCount
    })
  }

  /* Creates the currently displayed list, depending on which view the user has selected. The default 
  list is 'All', with the todo tasks at the top and the completed tasks at the bottom. */

  function getCurrentList() {
    switch (app.currentView) {
      case 'Active':
        return app.todoList;
      case 'Completed': 
        return app.completedTasksList;
      default:
        return app.todoList.concat(app.completedTasksList);
    }
  }

  /* When the user selects a new view ('All', 'Active' or 'Completed'), the app's state is updated to reflect
  the selected view. */

  function handleUpdateView(e) {
    updateApp({
      todoList: app.todoList,
      completedTasksList: app.completedTasksList,
      currentView: e.target.className,
      todoCount: app.todoCount
    })
  }

  /* Renders the app. Includes the title, input bar & currentView list. If 
  there is at least 1 active or completed task, the footer is included */
  return (
    <div>
      <header className="App-Title">todos</header>
      <div className="App">
        <Input 
          handleAddNewTask={handleAddNewTask}
        />
        
        <List
          list={getCurrentList()}
          handleCompleteTask={handleCompleteTask}
          handleDeleteTask={handleDeleteTask}
        />
        
        {app.todoList.length > 0 && 
          <Footer 
            todoCount={app.todoList.length}
            currentView={app.currentView}
            handleUpdateView={handleUpdateView}
          />
        }

      </div>
    </div>
  );
}

export default App;
