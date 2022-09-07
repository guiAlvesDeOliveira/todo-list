import './style.css'
import { IoIosAddCircleOutline } from "react-icons/io";
import { useState } from 'react';
import { Task } from '../../components/task';

export function Home(){
    const [task, setTask] = useState('');
    const [dayTask, setDayTask] = useState([]);

    function handleAddTask(){
        const newTask = {
            desc: task,
            time: new Date()
        };
        setDayTask(prevState => [...prevState, newTask])
        setTask('')
    }

    return (
        <div className='container'>
            <h1>To Do List</h1>

            <div className="containerInput">
                <input placeholder='Type your activity' onChange={e => setTask(e.target.value)} value={task}></input>
                <button className='buttonAdd' onClick={handleAddTask}><IoIosAddCircleOutline/></button>
            </div>

            <div className="tasks">
                {
                    dayTask.map(task => (
                        <Task key={task.time} desc={task.desc}/>
                    ))
                }
            </div>
        </div>
    )
}