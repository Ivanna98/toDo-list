import React from 'react';
 export const List = props => (
    <ul>
      {
        props.items.map((item, index) => <li key={index}>{item.text}</li>)
      }
    </ul>
  );