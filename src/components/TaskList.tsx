import { useSelector } from "react-redux";
import { Task } from "../types/Task";
import { TaskItem } from "./TaskItem";
import { RootState } from "../store";

export const TaskList: React.FC = () => {
    const tasks = useSelector((state: RootState) => state.tasks);
    
    const taskList = tasks.map((task: Task) => (
        <li key={task.id}>
            <TaskItem
                id={task.id}
                title={task.title}
                description={task.description}
                completed={task.completed}
            />
        </li>
    ));

    return (
        <div>
            <h1>Task List</h1>
            <ul>
                {taskList}
            </ul>
        </div>
    );
};
