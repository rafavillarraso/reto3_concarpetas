import React from 'react';
import {Paper} from '@material-ui/core';
import {makeStyles} from '@material-ui/core';
import Title from './Title'

const useStyle = makeStyles((theme)=>({
    root: {
        width: '300px',
        backgroundColor: 'lightgray',
        marginLeft: theme.spacing(1),
    }
}));

function List(){
    const classes = useStyle();
    return (
        <div> 
            <Paper className={classes.root}>
                <Title />
            </Paper>
        </div>
    )
}

export default List