export const Checkbox = ({task, handleUpdateTodoCount}) => {
    
    const handleCompleteTask = () => {
        task.isCompleted = !task.isCompleted;
        console.log(`${task.name}: ${task.isCompleted}`);
        handleUpdateTodoCount();
        //need Checkbox to stay checked when switching views
    } 
    
    return (
        <button className="checkbox" onClick={handleCompleteTask}></button>
    )
}