/*COMPONENTS:
* 1.AddTask
* - when a task is created, TaskCards will map over it
* TasksCards
* - delete task
* - finished task (if you finish a task, you will be rewarded with a picture of an anime lady)
* EditTaskWindow
* */
import './App.css';
import AddTask from "./AddTask";
import {TaskRenderProvider} from "./TaskRenderContext";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <TaskRenderProvider>
              <AddTask/>
          </TaskRenderProvider>
      </header>
    </div>
  );
}

export default App;
