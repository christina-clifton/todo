//stylesheet
import './App.css';

//dependencies
import React, { useState } from 'react';

const App = () => {

  /* Creates states for the app. Tracks input value, list items, currently selected view & the number of todos. */
  const [newTodoValue, updateNewTodoValue] = useState('');     /* Creates a state for input value. */
  
  const [list, updateList] = useState([]);     /* Creates a state for all list items - todo and done. */

  const [currentView, updateCurrentView] = useState('all-filter');     /* Creates a state for the current view of the app - all, todo & done. */

  const [todoCount, updateTodoCount] = useState(0);     /* Creates a state for the number of current todos - excludes done. */  

  /* Updates the input value's state while user types */
  const handleUpdateInputValue = (e) => {
    const newValue = e.target.value;
    
    if (e.target.id === 'add-todo') {
      updateNewTodoValue(newValue);
    } else {
      const newList = [...list];
      const foundIndex = newList.findIndex((item) => item.id === e.target.id);
      newList[foundIndex].name = newValue;

      updateList(newList);
    }
  }

  /* Adds a new todo to the list when user presses enter. Resets the input value */
  const handleUpdateList = (e) => {
    if(e.charCode === 13) {
      updateList(
        [{ 
          id: `${newTodoValue}: ${todoCount + 1}`,
          name: newTodoValue,
          isdone: false
        }].concat(list)
      );
  
      updateTodoCount(todoCount + 1);

      updateNewTodoValue('');
    }
  }

  /* When the user clicks on the checkbox next to a list item, the item's isdone property is toggled.
  The todoCount is updated. */
  const handleToggleListItem = (listItem) => {
    const newList = [...list];
    const foundIndex = newList.findIndex((item) => item.id === listItem.id);
    newList[foundIndex].isdone = !listItem.isdone;

    updateList(newList);

    updateTodoCount(newList.filter((item) => item.isdone === false).length);
  }

  /* When the user clicks on the delete button next to a todo item, the item is removed from the list.
  The todoCount is updated. */
  const handleDeleteListItem = (listItem) => {
    const newList = list.filter((item) => item.id !== listItem.id);

    updateList(newList);

    updateTodoCount(newList.filter((item) => item.isdone === false).length);
  }

  /* When the user selects a new view ('all', 'todo' or 'done'), the app's state is updated to reflect
  the selected view. */
  const handleUpdateView = (e) => {
    updateCurrentView(e.target.className);
  }

  /* Creates the currently displayed list, depending on which view the user has selected ('all'[default], 'todo', 
    'done') */
  const getCurrentList = () => {
    switch (currentView) {
      case 'todo-filter':
        return list.filter((item) => item.isdone === false);
      case 'done-filter': 
        return list.filter((item) => item.isdone === true);
      default:
        return list;
    }
  }

  /* Renders the app. Includes the title, input bar & currentView list. If 
  there is at least 1 list item, the footer is included */
  return (
    <section aria-label='todo app' className='todos'>
      <header><h1>todos</h1></header>      
      <main className="app">
        <input 
          id='add-todo'
          type="text"
          aria-label='add todo'
          placeholder="...what's on your list?"
          value={newTodoValue}
          onChange={handleUpdateInputValue}
          onKeyPress={handleUpdateList}
        />
        
        <div className="list">
          <ul>
            {getCurrentList().map((listItem) => (
              <li key={listItem.id} className='list-item'>
              <div className='checkbox-wrapper'>
                <button className='checkbox' onClick={() => handleToggleListItem(listItem)} value={listItem.isDone}>
                  {listItem.isdone && <img
                    className='icon'
                    src={require('../src/images/checkmark.png')}
                    alt='checkbox status'
                  />}
                </button>
                <input 
                  className={listItem.isdone ? "done" : "todo"}
                  type="text"
                  value={listItem.name}
                  aria-label={listItem.name}
                  onChange={handleUpdateInputValue}
                  id={listItem.id}
                />
              </div>
              <button id={listItem.id} className='delete-button' onClick={() => handleDeleteListItem(listItem)}>
                <img 
                  className='icon'
                  src={require('../src/images/delete.png')}
                  alt='delete'
                />
              </button>
            </li>
            ))}
          </ul>
        </div>
        
        {list.length > 0 && 
          <footer>
            <p className="todoCount">{todoCount} todo{todoCount !== 1 ? 's' : ''} left</p>
            <div className="filter-buttons" >
              <button className='all-filter' id={currentView === 'all-filter' ? 'currentView' : ''} onClick={handleUpdateView}>all</button>
              <button className='todo-filter' id={currentView === 'todo-filter' ? 'currentView' : ''} onClick={handleUpdateView}>todo</button>
              <button className='done-filter' id={currentView === 'done-filter' ? 'currentView' : ''} onClick={handleUpdateView}>done</button>
            </div>
          </footer>
        }
      </main>
    </section>
  )
}

export default App;
