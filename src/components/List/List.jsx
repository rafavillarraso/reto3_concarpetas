import React from 'react';
import {CssBaseline, Paper} from '@material-ui/core';
import {makeStyles} from '@material-ui/core';
import Title from './Title';
import Card from './Card/Card';
import InputContainer from '../Input/InputContainer'


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
                <CssBaseline />
                <Title />
                <Card />
                <Card />
                <Card />
                <InputContainer />
            </Paper>
        </div>
    )
}

export default List