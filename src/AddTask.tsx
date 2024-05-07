/*FUTURE USE CASE:
* DeadlineDominatrix = 1. for each deadline you will be able to place a bet, If you meet your deadline you can place bet
* on to the next deadline and see some titties, if you miss you'll lose it and the anime dominatrix will "spank" you
* 2. betting game with friends to meet assignments*/
function AddTask() {
    return (
        <>
            <form className="bg-red-800 rounded-lg m-5">
            <label htmlFor="helper-text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Important deadline
                </label>
            <input type="text" id="helper-text" aria-describedby="helper-text-explanation"
                   className="bg-gray-50 border border-blue-200 text-gray-900 text-sm rounded-lg mb-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   placeholder="name@flowbite.com"/>
            <input type="email" id="helper-text" aria-describedby="helper-text-explanation"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg mb-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="name@flowbite.com"/>
            <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Out of ideas?
                <a href="https://mystudentvoices.com/what-are-good-habits-to-start-young-that-will-significantly-make-your-adult-life-easier-f6983c666280"
                   className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                    Helpful guide</a>.</p>
            </form>
        </>
    )
}

export default AddTask
