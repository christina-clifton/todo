import './App.css';
import {Title} from './Title';
import {Input} from './Input';
import React, {useState} from 'react';
import {CurrentList} from './CurrentList';


function App() {

  const [list, updateList] = useState([
    {
      name:'Groceries',
      isCompleted: false,
    },
    {
      name: 'laundry',
      isCompleted: true,
    }
  ])

  const [currentView, updateCurrentView] = useState(list);

  return (
    <div className="App">
      <Title />
      <Input 
        list={list} 
        updateList={updateList}
        currentView={currentView}
        updateCurrentView={updateCurrentView}
      />
      <CurrentList 
        list={list} 
        updateList={updateList}
        currentView={currentView}
        updateCurrentView={updateCurrentView}
      />
    </div>
  );
}

export default App;
