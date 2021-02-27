import React from 'react'
import { Typography } from '@material-ui/core';
import MyButton from './MyButton'

const Header = ({ title, onAdd, showAdd }) => {
    return (
        <div style={headerStyles} >
            <Typography variant="h4" gutterBottom>{title}</Typography>
            <MyButton 
            buttonName={showAdd ? 'Close' : 'Add'} 
            onClick={onAdd} 
            />
        </div>
    )
}
const headerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '30px 40px'
}
export default Header
