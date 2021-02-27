import React from 'react'
import { Button } from '@material-ui/core';

const MyButton = ({buttonName, onClick}) => {

    return (
        <div>
            <Button 
            variant="contained" 
            // color="primary"
            style={{ background: "#23B684", color: "#fff", padding: '5px 30px' }}
            onClick={onClick}            
            >{buttonName}</Button>
        </div>
    )
}

export default MyButton
