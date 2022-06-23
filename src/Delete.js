import React from 'react';

export const Delete = ({handleDeleteTask, task}) => {

    /* Returns a single Delete button to be added to a single list item in List.js. */
    return (
        <button id={task.id} className='deleteButton' onClick={() => handleDeleteTask(task)}>
            <img className='icon'
            src={require('../src/images/delete.png')}
            alt='delete'
            />
        </button>
    )
}