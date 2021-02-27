import { TextField, Button  }from '@material-ui/core';
import { useState } from 'react';

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        console.log("test", e)

        if(!text) {
            alert('Please add a task')
            return
        }

        onAdd({ text, day })

        setText('')
        setDay('')
    }

    return (
        <form style={formStyles}>
            <TextField 
            value={text} 
            onChange={(e) => setText(e.target.value)}
            label="Task"
            type="text" 
            variant="outlined" 
            style={textFieldStyles}>
            </TextField>

            <TextField  
            value={day} 
            onChange={(e) => setDay(e.target.value)}
            label="Day & Time" 
            type="text"
            variant="outlined" 
            style={textFieldStyles}>
            </TextField>
            <div style={{ postition: 'relative', textAlign: 'right' }}>
                <Button variant="contained" onClick={onSubmit} style={buttonStyle}>Save Task</Button>
            </div>
        </form>
    )
}
const formStyles = {
    display: 'flex',
    flexDirection: 'column',
    padding: 40,
}
const textFieldStyles = {
    marginBottom: 10
}
const buttonStyle = {
    background: '#59A9C2',
    color: '#fff'
}
export default AddTask
