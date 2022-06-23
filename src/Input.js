import './App.css';
import {useState} from 'react';

export const Input = ({handleAddNewTask}) => {
    
    /* Creates a state for input value */
    const [value, updateValue] = useState('')

    /* Updates the input value's state while user types */
    const handleUpdateValue = (e) => {
        const newValue = e.target.value;
        updateValue(newValue);
    }

    /* Adds a new todo task to the list when user presses enter. Resets the input value */
    const handleUpdateTodoList = (e) => {

        if(e.charCode === 13) {
            handleAddNewTask(value);
            updateValue('');
        }
    }

    /* Returns the Input component to be rendered in App.js */
    return (
        <input className="NewTaskInput"
            type="text"
            placeholder="...what's on your list?"
            value={value}
            onChange={handleUpdateValue}
            onKeyPress={handleUpdateTodoList}
        />
    );
} 