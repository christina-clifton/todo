import './App.css';
import {useState} from 'react';

export const Input = ({list, updateList, todoCount, updateTodoCount}) => {
    const [value, updateValue] = useState('')

    const handleUpdateValue = (e) => {
        const newValue = e.target.value;
        updateValue(newValue);
    }

    const handleUpdateList = (e) => {
        if(e.charCode === 13) {
            updateList(list.concat([
                {   id: list.length + 1,
                    name: value,
                    isCompleted: false,
                }
            ]));
            updateValue('');
            updateTodoCount(todoCount + 1);
        }
    }

    return (
        <input className="NewTaskInput"
            type="text"
            placeholder="What needs to be done?"
            value={value}
            onChange={handleUpdateValue}
            onKeyPress={handleUpdateList}
        />
    );
} 