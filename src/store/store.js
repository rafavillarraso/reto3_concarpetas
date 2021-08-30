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
    },
    listIds: ['list-1'],
};

export default data;