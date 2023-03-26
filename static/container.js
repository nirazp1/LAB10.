import React, { useState } from 'react';
import List from './List';
import Selector from './Selector';

const items1 = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];

const items2 = [
  { id: 4, name: 'Item 4' },
  { id: 5, name: 'Item 5' },
  { id: 6, name: 'Item 6' },
];

const options = [
  { label: 'List 1', value: 'list1' },
  { label: 'List 2', value: 'list2' },
];

const Container = () => {
  const [list, setList] = useState('list1');

  const handleSelect = (value) => {
    setList(value);
  };

  return (
    <div className="container">
      <h1>My List App</h1>
      <Selector options={options} onSelect={handleSelect} />
      {list === 'list1' ? <List items={items1} /> : <List items={items2} />}
    </div>
  );
};

export default Container;
