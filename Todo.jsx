import {useState} from 'react';
import "./Todo.css"
function Todo(){
    const [task,setTask] = useState('');
    const [tasks,setTasks] = useState([]);

    const addTask = () => {
        if(task.trim === ''){
            alert('Enter a Task');
            return;
        }

        const newTask = {
            id: Date.now(),
            text: task,
            completed: false
        }

        setTasks([...tasks, newTask]);
        setTask('');
    }

    const deleteTask = (id) => {
        const updateTasks = tasks.filter((item)=> item.id !== id);
        setTasks(updateTasks);
    }

    const toggleTask = (id) => {
        
        const updateTasks = tasks.map((item)=> item.id === id ? {...item, completed: !item.completed} : item
        );
         setTasks(updateTasks);
    }
    return(
        <div className="container">
            <h1>React To-Do App</h1>
            <div className="input-section">
                <input type="text" placeholder="Enter Task" value={task} onChange={(e)=>setTask(e.target.value)}/>
                <button onClick={addTask}>Add Task</button>
            </div>

            <ul>
                {tasks.map((item)=>(
                    <li key={item.id}>
                        <span className={item.completed ? 'completed' : ''} onClick={()=>toggleTask(item.id)}>
                            {item.text}
                        </span>
                        <button className="delete-btn" onClick={()=>deleteTask(item.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todo