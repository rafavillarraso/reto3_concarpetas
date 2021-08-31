 import React, { useContext, useState } from 'react';
 import {Paper, InputBase, Button, IconButton } from '@material-ui/core';
 import ClearIcon from '@material-ui/icons/Clear';
 import {makeStyles, alpha} from '@material-ui/core/styles';
import storeApi from '../../store/storeApi';


 const useStyle = makeStyles((theme)=>({
    card: {
        padding: theme.spacing(0,1,1,1),
        paddingBottom: theme.spacing(1),
        fontWeight: '100',
    },
    input: {
        margin: theme.spacing(1),
    },
    btnConfirm: {
        backgroundColor: '#ff9900',
        color: '#ffffff',
        '&:hover':{
            background: alpha('#483D8B',0.25),
            color: alpha('#000000',0.90)
        }
    },
    confirm: {
        margin: theme.spacing(0,1,1,1),

    },
}));

 const InputCard=( {setOpen, listId, type} )=>{
    const classes = useStyle();
    const {addMoreCard, addMoreList} = useContext(storeApi);
    const [title,setTitle] = useState('');
    const handleOnChange = (e) => {
        setTitle(e.target.value);
    }
    const handleBtnConfirm =()=>{
        if (type==='card') {    
        addMoreCard(title, listId);
        setTitle('');
        setOpen(false);
        } else {
           addMoreList(title) ;
        }
    };
    return(
         <div className={classes.contenedor}> 
            <div className={classes.card}>
                <Paper className={classes.card}>
                    <InputBase 
                    onChange={handleOnChange}
                    multiline
                    // onBlur={()=> setOpen(false)}
                    fullWith
                    inputProps={{
                        className: classes.input,
                    }}
                    value={title}
                    placeholder={
                        type === 'card'
                            ? 'Añade una tarea..'
                            : 'Añade una lista de tareas...'
                    } 
                    />
                </Paper>
            </div>
            <div className={classes.confirm}>
                <Button className={classes.btnConfirm} onClick={handleBtnConfirm}>
                    {type === 'card' ? 'Añadir Tarea' : 'Añadir Lista' }
                </Button>
                <IconButton onClick={()=> setOpen(false)}>
                    <ClearIcon />
                </IconButton>
            </div>
         </div>
     )
 }

 export default InputCard