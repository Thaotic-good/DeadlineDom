/*FUTURE USE CASE:
* DeadlineDom lore: */
import TasksCards from "./TasksCards";
import React from "react";
function AddTask() {
    const [completeTask, setCompleteTask] =
        React.useState({
            id: "",
            deadline: "",
            task: "",
            description: ""})
    const [currentTask, setCurrentTask] = React.useState("")

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentTask(event.target.value)
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }
    return (
        <>
            <TasksCards/>
            <form  onSubmit={handleSubmit} className="shadow w-1/3 m-5">
            <label htmlFor="helper-text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Insert task </label>
                <div>
                <input onChange={handleInput} type="text" id="helper-text" value={currentTask} aria-describedby="helper-text-explanation"
                   className="bg-gray-50 border border-blue-200 text-gray-900 text-sm rounded-lg mb-2 focus:ring-blue-500
                   focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                   dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="Deadline"/>
            <input type="email" id="helper-text" aria-describedby="helper-text-explanation"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg mb-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="Task"/>
                    <input type="email" id="helper-text" aria-describedby="helper-text-explanation"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg mb-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="Description"/>
                </div>
            <div className="flex justify-between items-center mt-8">
                <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800
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
