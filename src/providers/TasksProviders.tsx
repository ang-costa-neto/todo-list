import { Provider } from "react-redux";
import { store } from "../store";
import { ITaskProvider } from "../interfaces/ITaskProvider";

const TasksProvider: React.FC<ITaskProvider> = ({ children }) => {
    return <Provider store={store}>{ children }</Provider>
}

export default TasksProvider;