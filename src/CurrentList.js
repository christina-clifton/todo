import {ToggleViewButtons} from './ToggleViewButtons';
import {useState} from 'react';


export const CurrentList = ({list, updateList, currentView, updateCurrentView}) => {

    const currentList = currentView.map((task) => {
        return (
            <li key={task.name}>
                <div>
                    <input className="ask" type="checkbox" name={task.name}></input>
                    <label>{task.name}</label>
                    <button className="deleteTask"></button>
                </div>
            </li>
        )
    })
    
    return (
        <div className="currentList">
            <ul>{currentList}</ul>
            <ToggleViewButtons 
                list={list}
                currentView={currentView} 
                updateCurrentView={updateCurrentView}
            />
        </div>
    )
}