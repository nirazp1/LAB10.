import React from 'react';

const List = ({ items }) => (
  <ul className="list-group">
    {items.map((item) => (
      <li className="list-group-item" key={item.id}>
        {item.name}
      </li>
    ))}
  </ul>
);

export default List;
