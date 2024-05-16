import React, {ReactNode} from "react";

interface TaskRenderContextType {
    taskToRender: object[]; /*object[] = array of objects*/
    setTaskToRender: React.Dispatch<React.SetStateAction<object[]>>;
                    /*defined as a function that takes an array of objects as an argument*/
}
/*for specifying types of props*/

const initialValue : TaskRenderContextType = {
    taskToRender: [],
    setTaskToRender: () => {},
}
/**/
export const TaskRenderContext:  React.Context<TaskRenderContextType>  = React.createContext<TaskRenderContextType>(initialValue);
/*created a context container that holds the information*/
export function useTaskRender() : TaskRenderContextType {
    return React.useContext(TaskRenderContext)
}
/*custom hook for components to retrieve the state, can be shared to any component*/

export function TaskRenderProvider({children}:{children: ReactNode}) {
/*responsible for sharing to children and updating the container whenever the state changes*/
    const [taskToRender, setTaskToRender] = React.useState<object[]>([])
    return(
        <TaskRenderContext.Provider value={{taskToRender, setTaskToRender}}>
                                 {/*value= props that we are passing around*/}
            {children}
        </TaskRenderContext.Provider>
    )
}
