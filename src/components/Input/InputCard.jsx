 import React from 'react';
 import {Paper, InputBase, Button, IconButton } from '@material-ui/core';
 import ClearIcon from '@material-ui/icons/Clear';
 import {makeStyles, alpha} from '@material-ui/core/styles';


 const useStyle = makeStyles((theme)=>({
    card: {
        padding: theme.spacing(0,1,1,1),
        paddingBottom: theme.spacing(4),
    },
    input: {
        margin: theme.spacing(1),
    },
    btnConfirm: {
        backgroundColor: 'DarkSlateBlue',
        color: '#ffffff',
        '&:hover':{
            background: alpha('#483D8B',0.25),
            color: alpha('#000000',0.90)
        }
    },
    confirm: {
        margin: theme.spacing(0,1,1,1),

    }
}));

 const InputCard=( {setOpen} )=>{
    const classes = useStyle();
    return(
         <div>
            <div className={classes.card}>
                <Paper className={classes.card}>
                    <InputBase 
                    multiline
                    onBlur={()=> setOpen(false)}
                    fullWith
                    inputProps={{
                        className: classes.input,
                    }}
                    placeholder='introduce una tarea' />
                </Paper>
            </div>
            <div className={classes.confirm}>
                <Button className={classes.btnConfirm} onClick={()=> setOpen(false)}>Añadir Tarjeta</Button>
                <IconButton onClick={()=> setOpen(false)}>
                    <ClearIcon />
                </IconButton>
            </div>
         </div>
     )
 }

 export default InputCard