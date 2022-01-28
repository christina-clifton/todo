import './App.css';
import {Title} from './Title';
import {Input} from './Input';
import React, {useState} from 'react';
import {CurrentList} from './CurrentList';
import {ToggleViewButtons} from './ToggleViewButtons';


function App() {

  const [list, updateList] = useState([]);

  const [currentView, updateCurrentView] = useState ('All');

  const [todoCount, updateTodoCount] = useState(0);


  function filteredList() {

    switch (currentView) {
      case 'Active':
        return list.filter((task) => !task.isCompleted);
      case 'Completed': 
        return list.filter((task) => task.isCompleted);
      case 'All':
        return list;
    }

  }

  return (
    <div className="App">
      <Title />
      <Input 
        list={list} 
        updateList={updateList}
        todoCount={todoCount}
        updateTodoCount={updateTodoCount}
      />
      <CurrentList 
        list={list}
        filteredList={filteredList()} 
      />
      <ToggleViewButtons 
        todoCount={todoCount}
        updateCurrentView={updateCurrentView}
        filteredList={filteredList}
      />
    </div>
  );
}

export default App;
