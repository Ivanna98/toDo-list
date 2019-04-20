import React from 'react';

 export const List = props => (
    <ul>
      {
        props.items.map((item, index) => <li key={index}>{item.text}<button onClick={() => props.onRemove(item.id)} >X</button></li>)
      }
    </ul>
  );