export const CurrentList = ({filteredList}) => {
    
    console.log(filteredList)

    return (
        <div className="currentList">
            <ul>
                {filteredList.map((task) => {
                    return (
                        <li key={task.name}>
                            <div>
                                <input className="completeTask" type="checkbox" name={task.name}></input>
                                <label>{task.name}</label>
                                <button className="deleteTask"></button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}