export const DeleteButton = ({list, updateList, task, todoCount, updateTodoCount}) => {
    
    const handleDeleteTask = () => {
        updateList(list.filter((item) => item !== task));
        if(!task.isCompleted) {
            updateTodoCount(todoCount - 1)
        };
    }

    return (
        <button className="deleteButton" onClick={handleDeleteTask}></button>
    )
}