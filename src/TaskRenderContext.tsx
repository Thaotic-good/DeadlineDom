import React, {ReactNode} from "react";

interface Task {
    id: string;
    deadline: string;
    name: string;
    description: string;
}
interface TaskRenderContextType {
    tasksToRender: Task[]; /*object[] = array of objects*/
    setTasksToRender: React.Dispatch<React.SetStateAction<Task[]>>;
                    /*defined as a function that takes an array of objects as an argument*/
}
/*for specifying types of props*/

const initialValue : TaskRenderContextType = {
    tasksToRender: [] ,
    setTasksToRender: () => {},
}
/*setTaskToRender is defined as a function that takes in object as a parameter*/
export const TaskRenderContext:  React.Context<TaskRenderContextType>  = React.createContext<TaskRenderContextType>(initialValue);
/*created a context container that holds the information*/
export function useTaskRender() : TaskRenderContextType {
    return React.useContext(TaskRenderContext)
}
/*custom hook for components to retrieve the state, can be shared to any component*/

export function TaskRenderProvider({children}:{children: ReactNode}) {
/*responsible for sharing to children and updating the container whenever the state changes*/
    const [tasksToRender, setTasksToRender] = React.useState<Task[]>([])
    return(
        <TaskRenderContext.Provider value={{tasksToRender, setTasksToRender}}>
                                 {/*value= props that we are passing around*/}
            {children}
        </TaskRenderContext.Provider>
    )
}
