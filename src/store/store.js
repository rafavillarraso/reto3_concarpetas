const cards = [
    {
        id: 'card-1',
        title: 'estudiar código',
    },
    {
        id: 'card-2',
        title: 'tocar la guitarra',
    },
    {
        id: 'card-3',
        title: 'limpieza del hogar',
    },
];

const data = {
    lists: {
        'list-1': {
            id:'list-1',
            title: 'Tareas Pendientes',
            cards,
            },
        'list-2': {
            id:'list-2',
            title: 'Tareas en curso',
            cards: [],
            },
    },
    listIds: ['list-1', 'list-2'],
};

export default data;