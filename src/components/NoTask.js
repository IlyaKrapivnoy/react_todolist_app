import { Typography } from '@material-ui/core';

const NoTask = () => {
    return (
        <div  style={ noTaskItemStyles }>
            <Typography 
            style={ noTaskTextStyles }>
                No More Tasks Left 
            </Typography>
        </div>
    )
}
const noTaskItemStyles = {
    margin: '10px 0', 
    padding: '10px 20px', 
    background: '#fff', 
    padding: '20px 40px'
}
const noTaskTextStyles = {
    fontWeight: 300, 
}

export default NoTask
