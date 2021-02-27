import { Typography } from '@material-ui/core';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import styles from '../App.css'

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div  style={ taskItemStyles } 
        className={`task ${task.reminder ? 'reminder' : ''}`}

        onDoubleClick={() => onToggle(task.id)} 
        >
            <Typography 
            style={ taskTextStyles }>
                { task.text }
                <DeleteOutlinedIcon onClick={() => onDelete(task.id)} />
            </Typography>
            <Typography 
            style={{ fontSize: 12, display: 'flex', justifyContent: 'flexStart' }}>
                { task.day }
            </Typography>
        </div>
    )
}

export default Task

const taskItemStyles = {
    margin: '10px 0', 
    padding: '10px 20px', 
    background: '#eee', 
    borderRadius: 15,
    cursor: 'pointer'
}
const taskTextStyles = {
    fontWeight: 600, 
    cursor: 'pointer', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'space-between'
}