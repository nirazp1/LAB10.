import React from 'react';

const Select = ({ onChange }) => (
  <select className="form-select" onChange={onChange}>
    <option value="List 1">List 1</option>
    <option value="List 2">List 2</option>
  </select>
);

export default Select;
