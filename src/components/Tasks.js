import Task from './Task'

const Tasks = ({ tasks, onDelete }) => {

    return (
        <div style={{ padding: '20px 40px' }}>
            {tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={onDelete} />
            ))}
        </div>
    )
}

export default Tasks
