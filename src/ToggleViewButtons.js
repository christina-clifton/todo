export const ToggleViewButtons = ({todoCount, updateCurrentView}) => {

    const handleUpdateView = (e) => {
        updateCurrentView(e.target.className);
    }
    
    return (
        <div>
            <p>{todoCount} item{todoCount !== 1 ? 's' : ''} left</p>
            <button className='All' onClick={handleUpdateView}>All</button>
            <button className='Active' onClick={handleUpdateView}>Active</button>
            <button className='Completed' onClick={handleUpdateView}>Completed</button>
        </div>
    )
}