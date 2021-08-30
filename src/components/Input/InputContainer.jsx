import React from 'react';
import {Paper, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core';


const useStyle = makeStyles((theme)=>({
    addCard: {
        
    }
}));

const InputContainer = (props)=>{
    const classes = useStyle();
    return (
        <div>
            <Paper className={classes.addCard}>
                <Typography>
                    Añade una tarjeta
                </Typography>
            </Paper>
        </div>
    )
}

export default InputContainer;