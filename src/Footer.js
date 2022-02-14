export const Footer = ({todoCount, currentView, updateCurrentView}) => {

    const determineCurrentView = (buttonName) => {
        if (currentView === buttonName) {
            return 'currentView';
        } 
    }

    const handleUpdateView = (e) => {
        updateCurrentView(e.target.id);
    }
    
    return (
        <div className="footer">
            <p id="todoCount">{todoCount} item{todoCount !== 1 ? 's' : ''} left</p>
            <div id="filterButtons" >
                <button className="filterButton" id='All' className={determineCurrentView('All')} onClick={handleUpdateView}>All</button>
                <button className="filterButton" id='Active' className={determineCurrentView('Active')} onClick={handleUpdateView}>Active</button>
                <button className="filterButton" id='Completed' className={determineCurrentView('Completed')} onClick={handleUpdateView}>Completed</button>
            </div>
        </div>
    )
}