import React from 'react';

export default function SearchBar() {
  return (
    <>
      <input type="text" name="" placeholder="Search..." />
      <div>
        <input type="checkbox" name="" id="stock" />
        <label htmlFor="stock">Only show products in stock</label>
      </div>
    </>
  );
}
