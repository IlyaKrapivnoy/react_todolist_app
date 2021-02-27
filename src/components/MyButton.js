import React from 'react'
import { Button } from '@material-ui/core';

const MyButton = ({buttonName, onClick, showAdd}) => {

    return (
        <div>
            <Button 
            variant="contained" 
            color="secondary"
            onClick={onClick}            
            >{buttonName}</Button>
        </div>
    )
}

export default MyButton
