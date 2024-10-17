import { ITaskItem } from "../interfaces/ITaskItem";

export const TaskItem: React.FC<ITaskItem> = ({
    id,
    title,
    description,
    completed
}) => {
    return (
        <>
            <p>{id}</p>
            <p>{title}</p>
            <p>{description}</p>
            <p>{completed}</p>
        </>
    )
}