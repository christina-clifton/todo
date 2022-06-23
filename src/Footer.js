export const Footer = ({todoCount, currentView, handleUpdateView}) => {

    /* Returns the Footer to be rendered in App.js. Footer includes the todoCount and filterButtons. */    
    return (
        <div className="footer">
            <p className="todoCount">{todoCount} todo{todoCount !== 1 ? 's' : ''} left</p>
            <div className="filterButtons" >
                <button className='all' id={currentView === 'all' ? 'currentView' : ''} onClick={handleUpdateView}>all</button>
                <button className='todo' id={currentView === 'todo' ? 'currentView' : ''} onClick={handleUpdateView}>todo</button>
                <button className='done' id={currentView === 'done' ? 'currentView' : ''} onClick={handleUpdateView}>done</button>
            </div>
        </div>
    )
}