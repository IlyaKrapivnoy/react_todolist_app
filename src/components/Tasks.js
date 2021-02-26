import Task from './Task'

const Tasks = ({ tasks }) => {

    return (
        <div style={{ padding: '20px 40px' }}>
            {tasks.map((task) => (
                <Task key={task.id} task={task} />
            ))}
        </div>
    )
}

export default Tasks
