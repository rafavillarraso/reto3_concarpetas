import './App.css';
import React, { useState } from 'react';
import {v4 as uuid} from 'uuid';
import List from './components/List/List';
import store from './store/store';
import StoreApi from './store/storeApi';


function App() {
  const [data, setData] = useState(store);
  const addMoreCard = (title, listId) => {
    const newCardId = uuid();
    const newCard = {
      id: newCardId,
      title,
    };

    const list = data.lists[listId];
    list.cards = [...list.cards,newCard];

    const NewState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    };
    setData(NewState);
  };
  return (
    <StoreApi.Provider value={{ addMoreCard }}>
    <div>
      {data.listIds.map((listId)=> {
        const list = data.lists[listId];
        return <List list={list} key={listId} />;
      })}
    </div>
    </StoreApi.Provider>

  );
}

export default App;
