import './App.css';
import React, {useState} from 'react';

export const Input = ({list, updateList, updateCurrentView}) => {
    const [value, updateValue] = useState('')

    const handleUpdateValue = (e) => {
        const newValue = e.target.value;
        updateValue(newValue);
    }

    const handleUpdateTodoList = (e) => {
        if(e.charCode === 13) {
            updateList(list.concat([
                {
                    name: value,
                    isCompleted: false,
                }
            ]));
            updateValue('');
            updateCurrentView(list);
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