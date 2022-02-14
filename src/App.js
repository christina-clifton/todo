import React, {useState} from 'react';
import './App.css';

import {Title} from './Title';
import {Input} from './Input';
import {CurrentList} from './CurrentList';
import {Footer} from './Footer';


function App() {

  const [list, updateList] = useState([]);

  const [currentView, updateCurrentView] = useState ('All');

  const [todoCount, updateTodoCount] = useState(0);

  function handleUpdateTodoCount() {
    const todoList = list.filter((task) => !task.isCompleted);
    updateTodoCount(todoList.length);
  }

  function getFilteredList() {

    switch (currentView) {
      case 'Active':
        return list.filter((task) => !task.isCompleted);
      case 'Completed': 
        return list.filter((task) => task.isCompleted);
      case 'All':
        return list.filter((task) => !task.isCompleted).concat(list.filter((task) => task.isCompleted));
    }

  }

  return (
    <div>
      <Title />
      <div className="App">
        <Input 
          list={list} 
          updateList={updateList}
          todoCount={todoCount}
          updateTodoCount={updateTodoCount}

        />
        
        <CurrentList 
          list={list}
          updateList={updateList}
          filteredList={getFilteredList()}
          todoCount = {todoCount}
          updateTodoCount={updateTodoCount}
          handleUpdateTodoCount={handleUpdateTodoCount}
        />
        
        {list.length > 0 && 
          <Footer 
            todoCount={todoCount}
            currentView={currentView}
            updateCurrentView={updateCurrentView}
          />
        }

      </div>
    </div>
  );
}

export default App;
