import React from 'react';

import ListItem from './../list-item/listItem.component';

import './list.styles.sass';

function List({ list }) {
  console.log(list.data);

  return <main className="list">
    {list.data
      ? list.data.map(gif =>  <ListItem key={gif.id} gif={gif} />)
      : <h2>Gif something...</h2>
    }
  </main>
}

export default List;
