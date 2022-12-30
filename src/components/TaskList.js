import '../styles/TaskList.css'
import {useState, useEffect} from 'react'

const TaskList = ({taskCard, setTaskCard}) => {

    const [sub, setSub] = useState()

    const deleter = (identity) => {
        let arr = JSON.parse(localStorage.getItem("tasks")) || [];
        arr.splice(identity, 1)
        localStorage.setItem("tasks", JSON.stringify(arr))
        setSub(!sub)
    }

    useEffect(() => {
        let history = JSON.parse(localStorage.getItem('tasks'))
        setTaskCard(history)
    }, [sub])

    return ( 
        <div className='list'>
            {taskCard?.map((item, index) => {
                return(
                    <div className="card" key={index}> 
                        {item} 
                        <button className='delete' onClick={() => deleter(index)}>Delete</button>
                    </div>
                )
            })}
        </div>
    );
}
 
export default TaskList;