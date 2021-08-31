import React from 'react';
import {CssBaseline, Paper} from '@material-ui/core';
import {makeStyles} from '@material-ui/core';
import Title from './Title';
import Card from './Card/Card';
import InputContainer from '../Input/InputContainer'
import { Droppable } from 'react-beautiful-dnd';


const useStyle = makeStyles((theme)=>({
    root: {
        minWidth: '100px',
        backgroundColor: '#d7e7e7',
        marginLeft: theme.spacing(1),
    },
}));

const List = ({list}) => {
    const classes = useStyle();
    return (
        <div> 
            <Paper className={classes.root}>
                <CssBaseline />
                <Title title={list.title} listId={list.id} />
                <Droppable droppableId={list.id}>
                    {(provided)=>(
                        <div 
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        >
                            {list.cards.map((card, index)=>(
                                <Card key={card.id} card={card} index={index} />
                            ))}
                            {provided.placeholder}
                        </div>
                 )}
                </Droppable>
                <InputContainer  listId={list.id} type='card'/>
            </Paper>
        </div>
    )
};

export default List;