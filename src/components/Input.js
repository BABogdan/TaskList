import '../styles/Main.css';
import { useState, useEffect, useMemo } from 'react';
import TaskList from './TaskList';


const Input = (props) => {
    const [sub, setSub] = useState(false)
    const [taskCard, setTaskCard] = useState()

    let curent
    let arr

    const takeInputValue = () => {
        curent = document.getElementById('rat').value
    }

    const takeCurrentStorage = () => {
        arr = JSON.parse(localStorage.getItem("tasks")) || [];
    }
    
    const pushNewValue = () => {
        arr.push(curent)
        localStorage.setItem("tasks", JSON.stringify(arr)) 
        setSub(!sub)                                                                                     
    }

    const switcher = () => {
        takeInputValue();
        takeCurrentStorage();
        pushNewValue();
    }

    useEffect(() => {
        let history = JSON.parse(localStorage.getItem('tasks'))
        setTaskCard(history)
    }, [sub])
    
    

    return (
        <div>
            <div className="main">
                <h1>Task Submission Box</h1>
                <div className='enterField'>
                    <input 
                    id="rat"
                    className='input' 
                    autoComplete='off'
                    placeholder='Enter your task here' 
                    type="text"
                    />
                    <input type="submit" onClick={() => switcher()}/>
                </div>
            </div>
            <TaskList taskCard={taskCard} setTaskCard={setTaskCard}/>
        </div> 
    );
}
 
export default Input;