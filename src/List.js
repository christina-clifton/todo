import React from 'react';
import './App.css';

export const List = ({list, handleCompleteTask, handleDeleteTask}) => {

    const currentList = list.map((task) => (
        <li id={task.id}>
            <button className="checkbox" onClick={(e) => handleCompleteTask(e)} taskName={task.name}></button>
            <label>{`${task.name}: ${task.id}`}</label>
            <button id={task.id} className="deleteButton" onClick={handleDeleteTask}></button>
        </li>
    ));


    return ( 
        <ul>
            {currentList}
        </ul>
    )
}