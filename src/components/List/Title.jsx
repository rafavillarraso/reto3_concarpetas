import React, {useState} from 'react';
import {Typography} from '@material-ui/core';

function Title(){
    const [open, setOpen] = useState(false);
    return(
        <div>
        {open ? (
            <div>
                <InpupBase value="Todo" />
            </div>
            ) : (
                <div>
            <Typography>Todo</Typography>        
        </div>
    )}
    </div>  
    );
}

export default Title;
