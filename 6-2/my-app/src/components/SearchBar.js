import React from 'react';

export default function SearchBar(props) {
  const { text, inStockOnly } = props.filter;

  const handleText = (e) => {
    // setFilter
    props.updateFilter(e.target.name, e.target.value);
  };

  const handleInStockOnly = (e) => {
    props.updateFilter(e.target.name, e.target.checked);
  };

  return (
    <>
      <input
        name="text"
        placeholder="Search..."
        value={text}
        onChange={handleText}
      />
      <div>
        <input
          type="checkbox"
          name="inStockOnly"
          id="stock"
          checked={inStockOnly}
          onChange={handleInStockOnly}
        />
        <label htmlFor="stock">Only show products in stock</label>
      </div>
    </>
  );
}
