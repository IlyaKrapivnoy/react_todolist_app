import React from 'react'
import { Button } from '@material-ui/core';

const MyButton = ({buttonName, onClick}) => {

    return (
        <div>
            <Button 
            variant="contained" 
            color="primary"
            onClick={onClick}            
            >{buttonName}</Button>
        </div>
    )
}

export default MyButton
