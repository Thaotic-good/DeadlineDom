/*TASKS:
* 2.
* 3. validity checks: const [attemptedSubmit, setAttemptedSubmit] = React.useState(false)
* */
import TasksCards from "./TasksCards";
import React from "react";
import {useTaskRender} from "./TaskRenderContext"
interface Task {
    id: string;
    deadline: string;
    name: string;
    description: string;
}
function AddTask() {

    const [taskList, setTaskList] = React.useState<Task[]>([])
    const {setTasksToRender} = useTaskRender()
    const [task, setTask] =
        React.useState<Task>({
            id: "",
            deadline: "",
            name: "",
            description: ""
        })

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        const {name, value} = event.target /*destructuring `event.target` object (=DOM element that triggered the event) and not `task` object */
                                                        /*`name` = accessing name of input etc.*/
        setTask((prevTask)=>({ /*used () around the object literal instead of `return` because body of a function {} and object {} are the same syntax */
            ...prevTask,                                        /*use curly braces to create new object property names (with computed property names update)*/
            [name]:value                                        /*since `name` of the input && properties are the same*/
        }))
    }
    const handleSubmit = (event:React.MouseEvent<HTMLButtonElement>)=>{
        event.preventDefault()
        const currentId =  Date.now().toString()

        const updatedTask: Task = {
            ...task,
            id: currentId,
        }

        setTask(updatedTask)
        setTaskList(prevTaskList=> [...prevTaskList, {...task, id: currentId} ])
        setTask({...task, id: "", deadline: "", name: "", description: ""}) /*...spreading existing properties, re-setting states*/
    }

    React.useEffect(()=>{
        setTasksToRender(taskList)
    },[setTasksToRender, taskList])
    return (
        <>
            <TasksCards/>
            <form className="shadow w-fit m-5 ">
                <label htmlFor="helper-text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Insert
                    task </label>
                <div>
                    <input type="text" name="deadline" id="helper-text" onChange={handleInputChange} value={task.deadline}
                           aria-describedby="helper-text-explanation"
                           className="bg-gray-50 border border-blue-200 text-gray-900 text-sm rounded-lg mb-2 focus:ring-blue-500
                   focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                   dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="Due date"/>
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
                </div>
            </form>
        </>
    )
}

export default AddTask
