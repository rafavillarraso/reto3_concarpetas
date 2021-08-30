import React, {useState} from 'react';
import {Typography, InputBase} from '@material-ui/core';
import {makeStyles} from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';


const useStyle = makeStyles((theme)=>({
    editableTitleContainer: {
        display: 'flex',
        margin: theme.spacing(1),
        padding: theme.spacing(2,2,2,1 ),
    },
    editableTitle: {
        flexGrow: 1,
        fontSize:'1.2rem',
        // fontWeight: 'bold',
    },
    input:{
        fontSize:'1.2rem',
        // fontWeight: 'bold',
        margin: theme.spacing(1),
        "&:focus":{
            background:'white',
        },
    },
}));

const Title = ( {title} ) => {
    const [open, setOpen] = useState(false);
    const classes = useStyle();

    return(
        <div>
        {open ? (
            <div>
                <InputBase 
                    autoFocus
                    value={title}
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
                    {title}
            </Typography> 
            <MoreHorizIcon />       
        </div>
    )}
    </div>  
    );
}

export default Title;
