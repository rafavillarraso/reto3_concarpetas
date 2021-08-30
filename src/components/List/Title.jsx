import React, {useState} from 'react';
import {Typography, InputBase} from '@material-ui/core';
import {makeStyles} from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';


const useStyle = makeStyles((theme)=>({
    editableTitleContainer: {
        display: 'flex',
        margin: theme.spacing(1),
    },
    editableTitle: {
        flexGrow: 1,
    },
    input:{
        margin: theme.spacing(1),
        "&:focus":{
            background:'white',
        },
    },
}));

function Title(){
    const [open, setOpen] = useState(false);
    const classes = useStyle();

    return(
        <div>
        {open ? (
            <div>
                <InputBase 
                    value="Todo"
                    inputProps={{
                        className: classes.input
                    }}
                    fullWidth
                    onBlur={()=>setOpen(!open)}/>
            </div>
            ) : (
            <div className={classes.editableTitleContainer}>
            <Typography
                onClick={()=> setOpen(!open)}
                className={classes.editableTitle}>
                    Todo
            </Typography> 
            <MoreHorizIcon />       
        </div>
    )}
    </div>  
    );
}

export default Title;
