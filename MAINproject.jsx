import React, { useState, useEffect } from "react"

function Main() {
const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("n-tasks")
    return saved ? JSON.parse(saved) : []
})

const [inputValue, setInputValue] = useState("")


useEffect(() => {
    localStorage.setItem("n-tasks", JSON.stringify(tasks))
}, [tasks])

const handleAddTask = () => {
    if (inputValue.trim()) {
        setTasks([...tasks, inputValue])
        setInputValue("")
    }
}

const handleRemoveTask = (indexToRemove) => {
    setTasks(tasks.filter((_, index) => index !== indexToRemove))
}

const handleKeyPress = (e) => {
    if (e.key === "Enter") handleAddTask()
    }

    return (
    <div className="container">
        <h1>N-TASKS</h1>
        
        <div className="input-group">
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={handleKeyPress}
        placeholder="Enter your tasks here"/>

        <button onClick={handleAddTask}>Add</button>
        </div>
        
        <ul className="task-list">
        {tasks.map((task, index) => (
        <li className="task-item" key={index}>
            <span>{task}</span>
            <button onClick={() => handleRemoveTask(index)}>✖</button>
        </li>
        ))}
        </ul>
        
        {tasks.length === 0 && <p className="empty">No Tasks yet...</p>}
        
        </div>
)
}

export default Main