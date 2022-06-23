import React from 'react';
import './App.css';
import { Checkbox } from './Checkbox.js';
import { Delete } from './Delete.js';

export const List = ({list, handleToggleTask, handleDeleteTask}) => {
    
    /* Creates the current view of the list. Each list item has a checkbox, label and delete button. */
    const currentList = list.map((task) => (
            <li key={task.id} className='listItem'>
                <div className='checkbox-wrapper'>
                    <Checkbox
                        handleToggleTask = {handleToggleTask}
                        task={task}
                    />
                    <label className={task.isdone ? "doneTask" : " "}>{task.name}</label>
                </div>
                <Delete
                    handleDeleteTask = {handleDeleteTask}
                    task = {task}
                />
            </li>
    ));

    /* Returns the List component to be rendered in App.js */
    return ( 
        <ul>
            {currentList}
        </ul>
    )
}