import React, {useContext, useState} from 'react';
import {Typography, InputBase} from '@material-ui/core';
import {makeStyles} from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import storeApi from '../../store/storeApi';


const useStyle = makeStyles((theme)=>({
    editableTitleContainer: {
        display: 'flex',
        margin: theme.spacing(1),
        padding: theme.spacing(2,2,2,1 ),
    },
    editableTitle: {
        flexGrow: 1,
        fontSize:'1.2rem',
    },
    input:{
        fontSize:'1.2rem',
        margin: theme.spacing(1),
        "&:focus":{
            background:'white',
        },
    },
}));

const Title = ( {title, listId} ) => {
    const [open, setOpen] = useState(false);
    const [newTitle,setNewTitle] = useState(title);
    const {updateListTitle} = useContext(storeApi);
    const classes = useStyle();
    const handleOnChange =(e)=>{
        setNewTitle(e.target.value);
    };
    const handleOnBlur = ()=>{
        updateListTitle(newTitle, listId);
        setOpen(false);
    }

    return(
        <div>
        {open ? (
            <div>
                <InputBase 
                    onChange={handleOnChange}
                    autoFocus
                    value={newTitle}
                    inputProps={{
                        className: classes.input
                    }}
                    fullWidth
                    onBlur={handleOnBlur}/>
            </div>
            ) : (
            <div className={classes.editableTitleContainer}>
            <Typography
                onClick={()=> setOpen(!open)}
                className={classes.editableTitle}>
                    {title}
            </Typography> 
            <MoreHorizIcon />       
        </div>
    )}
    </div>  
    );
}

export default Title;
