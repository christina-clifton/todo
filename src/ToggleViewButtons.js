export const ToggleViewButtons = ({list, currentView, updateCurrentView}) => {

    const todoList = list.filter((task) => task.isCompleted === false);
    const completedList = list.filter((task) => task.isCompleted === true);
    const allTasksList = todoList.concat(completedList);

    const todoCount = todoList.length;

    const handleUpdateView = (e) => {
        let currentList = list;
        const newList = e.target.className;

        if (newList === 'All') {
            currentList = allTasksList;
        } 
        else if (newList === 'Active') {
            currentList = todoList;
        }
        else if (newList === 'Completed') {
            currentList = completedList;
        }

        updateCurrentView(currentList);
    }
    
    return (
        <div>
            <p>{todoCount} item{todoCount > 1 ? 's' : ''} left</p>
            <button className="All" onClick={handleUpdateView}>All</button>
            <button className="Active" onClick={handleUpdateView}>Active</button>
            <button className="Completed" onClick={handleUpdateView}>Completed</button>
        </div>
    )
}