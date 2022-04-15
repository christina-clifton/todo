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

    /* Adds a new todo task to todoList when user presses enter. Resets the input value */
    const handleUpdateTodoList = (e) => {

        if(e.charCode === 13) {
            handleAddNewTask(value);
            updateValue('');
        }
    }

    return (
        <input className="NewTaskInput"
            type="text"
            placeholder="What needs to be done?"
            value={value}
            onChange={handleUpdateValue}
            onKeyPress={handleUpdateTodoList}
        />
    );
} 