import React from "react";

function Item({ item }) {
  return (
    <li className="Item">
      <span>{item.name}</span>
      <span>{item.category}</span>
    </li>
  );
}

export default Item;
