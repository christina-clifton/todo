export const CompletedList = ({completedList}) => {
    completedList = completedList.map((task) => {
        return (
            <li key={`Completed: ${task.name}`}>
                <div>
                    <label>{task.name}</label>
                    <button className="deleteTask"></button>
                </div>
            </li>
        )
    })

    return (
        <div className="completedTasks">
            <ul>{completedList}</ul>
        </div>
    )
}