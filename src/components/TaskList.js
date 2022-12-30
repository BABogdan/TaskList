import '../styles/TaskList.css'
import {useState, useEffect} from 'react'

const TaskList = ({taskCard, setTaskCard}) => {

    const [sub, setSub] = useState()

    let arr
    const takeCurrentStorage = () => {
        arr = JSON.parse(localStorage.getItem("tasks")) || [];
    }

    const removeIdentifiedItem = (identity) => {
        arr.splice(identity, 1)
    }

    const pushNewValue = () => {
        localStorage.setItem("tasks", JSON.stringify(arr))
        setSub(!sub)
    }

    const deleter = (identity) => {
        takeCurrentStorage(identity)
        removeIdentifiedItem()
        pushNewValue()
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