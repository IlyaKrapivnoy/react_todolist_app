import { Typography } from '@material-ui/core';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

const Task = ({ task, onDelete }) => {
    return (
        <div  style={ taskItemStyles }>
            <Typography 
            style={ taskTextStyles }>
                { task.text }
                <DeleteOutlinedIcon onClick={() => onDelete(task.id)} />
            </Typography>
            <Typography 
            style={{ fontSize: 12 }}>
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
    borderRadius: 15
}
const taskTextStyles = {
    fontWeight: 600, 
    cursor: 'pointer', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'space-between'
}