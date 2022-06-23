import React from 'react';


export const Checkbox = ({handleToggleTask, task}) => {

    /* Returns a single Checkbox to be added to a single list item in List.js. */
    return (
        <button className='checkbox' onClick={() => handleToggleTask(task)}>
            {task.isdone && <img
                className='icon'
                src={require('../src/images/checkmark.png')}
                alt='checkbox status'
            />}
        </button>
    )
}
