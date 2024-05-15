/*TASKS:
* 1. <inputs> = will collect/contain data
* - does every input need to be a separate state? I think that yes
* 2. setCompleteTask = setter function will load this into a completeTask object
* 3. there needs to be an array of completeTask objects, that will be passed via Context to TaskCard component then be rendered*/
import TasksCards from "./TasksCards";
import React from "react";

function AddTask() {
    const [task, setTask] =
        React.useState({
            id: "",
            deadline: "",
            name: "",
            description: ""
        })
    const [taskList, setTaskList] = React.useState([{}])
    // const [attemptedSubmit, setAttemptedSubmit] = React.useState(false)

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        const {name, value} = event.target
    /*destructuring `event.target` object (=DOM element that triggered the event) and not `task` object */
    /*`name` = accessing name of input etc.*/
        setTask((prevTask)=>({
            ...prevTask, /* ... = spread operator*/
            [name]:value
    /*use curly braces to create new object property names (with computed property names update)
    since `name` of the input && properties are the same*/
        }))
    /*used () around the object literal instead of `return` because body of a function {} and object {} are the same syntax */
    }
    const handleSubmit = (event:React.MouseEvent<HTMLButtonElement>)=>{
        setTaskList(prevTaskList=> [...prevTaskList, task ]
        )
        console.log(taskList)
    }
    React.useEffect(()=>{
        console.log()
    })
    return (
        <>
            <TasksCards/>
            <form className="shadow w-1/3 m-5">
                <label htmlFor="helper-text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Insert
                    task </label>
                <div>
                    <input type="text" name="deadline" id="helper-text" onChange={handleInputChange} value={task.deadline}
                           aria-describedby="helper-text-explanation"
                           className="bg-gray-50 border border-blue-200 text-gray-900 text-sm rounded-lg mb-2 focus:ring-blue-500
                   focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                   dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="Task name"/>
                    <input type="email" name="name" onChange={handleInputChange} value={task.name}
                           aria-describedby="helper-text-explanation"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg mb-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="Name of the task"/>
                    <input type="text" name="description" onChange={handleInputChange} value={task.description}
                           aria-describedby="helper-text-explanation"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg mb-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="Description"/>
                </div>
                <div className="flex justify-between items-center mt-8">
                    <button onClick={handleSubmit} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800
                        focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Submit
                    </button>
                    <div className="flex gap-2">
                        <p id="helper-text-explanation" className="text-sm text-gray-500 dark:text-gray-400">
                            Out of ideas?</p>
                        <a href="https://mystudentvoices.com/what-are-good-habits-to-start-young-that-will-significantly-make-your-adult-life-easier-f6983c666280"
                           className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                            Helpful guide</a>
                    </div>
                </div>
            </form>
        </>
    )
}

export default AddTask
