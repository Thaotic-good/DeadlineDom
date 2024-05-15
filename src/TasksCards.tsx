/*COMPONENT STRUCTURE:
* 3. button: Crushed it = card will flip (ReactCardFlip), user will read a message, card will disappear
* 4. button: Failed = card will flip, user will read a message, card will disappear
* 5. drop: 1.edit 2.delete*/
import React from "react";

function TasksCards() {
    const [tasks, setTasks] = React.useState(["8.5.2024"])
    const [showDropMenu, setShowDropMenu] = React.useState(false)

    const handleClickDropMenu = ()=>{
        setShowDropMenu(!showDropMenu)
    }

    return (
        <>
            <div
                className="w-full max-w-sm border border-gray-200 rounded-lg shadow">
                <div className="flex justify-end relative px-4 pt-4" onClick={handleClickDropMenu}>
                    <button id="dropdownButton" data-dropdown-toggle="dropdown"
                            className="bg-gray-700 inline-block text-gray-500 hover:bg-gray-600 rounded-lg text-sm p-1.5"
                            type="button">
                        <span className="sr-only">Open dropdown</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                             fill="currentColor" viewBox="0 0 16 3">
                            <path
                                d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1
                                0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                        </svg>
                    </button>
                    {showDropMenu &&
                        <div id="dropdown"
                             className="absolute top-12 -right-14 z-10 text-base list-none bg-white divide-y divide-gray-100 rounded-lg
                         shadow w-fit dark:bg-gray-700">
                            <ul className="py-2" aria-labelledby="dropdownButton">
                                <li>
                                    <a href="#"
                                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100
                                   dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100
                                   dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                </li>
                            </ul>
                        </div>
                    }
                </div>
                <div className="flex flex-col items-center pb-10">
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{tasks}</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">...description of the deadline..</span>
                    <div className="flex mt-4 md:mt-6">
                        <a href="#"
                           className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800
                               focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Crushed
                            it</a>
                        <a href="#"
                           className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200
                               hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800
                               dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Failed</a>
                    </div>
                </div>
            </div>


        </>
    )
}

export default TasksCards
