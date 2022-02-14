import './App.css';

import {Checkbox} from './Checkbox';
import {DeleteButton} from './DeleteButton';

export const CurrentList = ({list, updateList, filteredList, todoCount, updateTodoCount, handleUpdateTodoCount}) => {
    
    const getClassName = (task) => {
        if (task.isCompleted) {
            return "completedTask";
        } else {
            return "todoTask";
        }
    }

    return (
        <div className="currentList">
            <ul>
                {filteredList.map((task) => {
                    return (
                        <li className={getClassName(task)}>
                            <div>
                                <Checkbox 
                                    list={list}
                                    task={task}
                                    handleUpdateTodoCount={handleUpdateTodoCount}
                                /> 
                                <label>{task.name}</label>
                                <DeleteButton 
                                    list={list}
                                    updateList={updateList}
                                    task={task}
                                    todoCount={todoCount}
                                    updateTodoCount={updateTodoCount}
                                />
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}