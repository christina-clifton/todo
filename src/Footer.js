export const Footer = ({todoCount, currentView, handleUpdateView}) => {

    const determineCurrentView = (buttonName) => {
        if (currentView === buttonName) {
            return 'currentView';
        } 
    }
    
    return (
        <div className="footer">
            <p id="todoCount">{todoCount} item{todoCount !== 1 ? 's' : ''} left</p>
            <div id="filterButtons" >
                <button className='All' id={determineCurrentView('All')} onClick={handleUpdateView}>All</button>
                <button className='Active' id={determineCurrentView('Active')} onClick={handleUpdateView}>Active</button>
                <button className='Completed' id={determineCurrentView('Completed')} onClick={handleUpdateView}>Completed</button>
            </div>
        </div>
    )
}