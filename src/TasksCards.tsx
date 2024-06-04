/*COMPONENT STRUCTURE:
WHAT IS THE FUCKING PROBLEM: what will happen visually after a task is completed or not
* 3. button: Crushed it = card will flip (ReactCardFlip), user will read a message, card will disappear
* 4. button: Failed = card will flip, user will read a message, card will disappear
* 5. drop: 1.edit 2.delete
* */
import React, {useEffect} from "react";
import axios from "axios";

interface Task {
    "userId": number,
    "id": number,
    "title": string,
    "completed": boolean,
    "showDropMenu": boolean,
    "showEditInput": boolean,
}

function TasksCards() {
    const [tasks, setTasks] = React.useState<Task[]>([])
    const [updatedTitle, setUpdatedTitle] = React.useState("")

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const response =
                await axios.get("https://jsonplaceholder.typicode.com/users/1/todos");
            setTasks(response.data);
        } catch (error) {
            console.error("Error fetching tasks:", error);
        }
    }
    const handleClickDropMenu = (taskID: number) => {
        setTasks((prevTasks) =>
            prevTasks.map(task =>
                taskID === task.id ? {...task, showDropMenu: !task.showDropMenu} : task))
    }
    /* change state for the currentTask */

    const handleDelete = async (taskID: number) => {
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/users/1/todos/"${taskID}`)
            const updatedTasksToRender = tasks.filter((task) => task.id !== taskID)
            setTasks(updatedTasksToRender)
        } catch (error) {
            console.error("Error deleting task:", error)
        }
    }
    const handleEdit = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = (event.target as HTMLInputElement).value
        setUpdatedTitle(value)
    }
    const handleShowInput = (taskID: number) => {
        setTasks((prevTask) =>
            prevTask.map(task =>
                taskID === task.id ? {...task, showEditInput: !task.showEditInput} : task))
    }

    const handleUpdate = async (taskID: number) => {
        try {
            const response = await axios.put<Task>
            (`https://jsonplaceholder.typicode.com/users/1/todos/${taskID}`, {
                // headers: {
                //     "Content-Type": "application/json"
                // },
                // body: JSON.stringify({
                //     id: taskID,
                //     title: {updatedTitle},
                //     userId: 1,
                // }
                // )
                updatedTitle
            });
            const updatedTasks = tasks.map((task)=> (task.id ===taskID? response.data : task));
            setTasks(updatedTasks)
            setUpdatedTitle("")
        } catch (error) {
            console.error("Error updating task:", error)
        }
    }
    useEffect(() => {
        console.log(updatedTitle)
    }, [updatedTitle])
    return (
        <>
            <div className=" flex flex-row flex-wrap place-content-center">
                {tasks.map((task) => (
                    <div className="m-3 place-self-center" key={task.id}>
                        <div className="bg-gray-600 max-w-sm border border-gray-500 rounded-lg shadow">
                            <div className="flex justify-end relative px-4 pt-4" onClick={() => handleClickDropMenu(task.id)}>
                                <button id="dropdownButton" data-dropdown-toggle="dropdown" type="button" className="bg-gray-700 inline-block text-gray-500 hover:bg-gray-600 rounded-lg text-sm p-1.5">
                                    <span className="sr-only">Open dropdown</span>
                                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                        <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                                    </svg>
                                </button>
                                {task.showDropMenu &&
                                    <div id="dropdown" className="absolute top-12 -right-14 z-10 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-fit">
                                        <ul className="py-2" aria-labelledby="dropdownButton">
                                            <li>
                                                <button onClick={() => handleShowInput(task.id)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                                    Edit
                                                </button>
                                            </li>
                                            <li>
                                                <button onClick={() => handleDelete(task.id)} className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                                    Delete
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                }
                            </div>
                            {task.showEditInput ?
                                <div className="flex p-2"><input type="text" id="titleEdit" value={updatedTitle}
                                                                 onChange={handleEdit}
                                                                 className=" border border-blue-200 text-gray-900 text-sm rounded-lg mb-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                                 placeholder={`${task.title}`}/>
                                    <button onClick={() => handleUpdate(task.id)}>
                                        <svg className="w-10 h-5" aria-hidden="true"
                                             xmlns="http://www.w3.org/2000/svg"
                                             stroke={"gray"} fill={"none"} viewBox="0 -1 10 10">
                                            <path d="M 0 3 L 3 6 L 9 1"/>
                                        </svg>
                                    </button>
                                </div>
                                :
                                <h5 className="flex flex-wrap mb-1 p-3 text-xl font-medium text-gray-300">{task?.title}</h5>
                            }
                            <div className="flex flex-col items-center pb-10">
                                <span
                                    className="text-sm text-gray-500 dark:text-gray-400">{task.completed ? "completed" : "not completed"}</span>
                                <div className="flex m-1 mt-4 md:mt-6">
                                    <button
                                        className={`inline-flex items-center px-4 py-2  ${!task.completed ? "bg-red-300" : "bg-gray-400"} rounded-lg hover:bg-red-400 `}>
                                        <svg className="w-5 h-5" aria-hidden="false" xmlns="http://www.w3.org/2000/svg"
                                             stroke={`${!task.completed ? "red" : "gray"}`} viewBox="0 0 10 10">
                                            <path d=" M 0 0 L 10 10 M 0 10 L 10 0"/>
                                        </svg>
                                    </button>
                                    <button
                                        className={`inline-flex items-center px-2 py-2 ${task.completed ? "bg-green-300" : "bg-gray-400"} rounded-lg hover:bg-red-400 `}>
                                        <svg className="w-10 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                             stroke={`${task.completed ? "green" : "gray"}`} fill={"none"}
                                             viewBox="0 -1 10 10">
                                            <path d="M 0 4 L 4 7 L 10 2"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>))
                }
            </div>
        </>
    )
}

export default TasksCards
