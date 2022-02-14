export const Checkbox = ({task, handleUpdateTodoCount}) => {
    
    const handleCompleteTask = () => {
        task.isCompleted = true;
        handleUpdateTodoCount();
        //need Checkbox to stay checked when switching views
    } 
    
    return (
        <button className="checkbox" onClick={handleCompleteTask}></button>
    )
}