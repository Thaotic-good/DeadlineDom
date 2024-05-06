/*COMPONENTS:
* 1.TasksCards
* - delete task
* - finished task (if you finish a task, you will be rewarded with a picture of an anime lady)
* 3.EditTaskWindow
* 2.AddTaskInput*/
import './App.css';
import TasksCards from "./TasksCards";
import AddTask from "./AddTask";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <TasksCards/>
          <AddTask/>
      </header>
    </div>
  );
}

export default App;
