export const TodoList = ({todoList, updateTodoList, completedList, updateCompletedList}) => {

    const handleCompleteTask = (e) => {
        const completedTask = e.target.name;
        console.log(completedTask)

        updateTodoList(todoList.filter((task) => task.name !== completedTask))
        updateCompletedList(completedList.concat([
            {
                name: completedTask,
            }
        ]))
    }

    todoList = todoList.map((task) => {
        return (
            <li key={task.name}>
                <div>
                    <input className="completeTask" type="checkbox" name={task.name} onClick={handleCompleteTask}></input>
                    <label>{task.name}</label>
                    <button className="deleteTask"></button>
                </div>
            </li>
        )
    })

    return (
        <div className="todoTasks">
            <ul>{todoList}</ul>
        </div>
    )
}