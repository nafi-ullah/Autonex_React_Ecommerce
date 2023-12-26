import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "./FormatPrice";

const Product = (curElem) => {
  const { id, name, image, price, category } = curElem;
  return (
    //product gula to database er data thekei show kortese.
    // database er datar sathe id o ashe
    // jokhn ee id ta ashbe tokhn oi id theke product api a redirect kora jabe.
    <NavLink to={`/singleproduct/${id}`}>
      <div className="card">
        <figure>
          <img src={image} alt={name} />
          <figcaption className="caption">{category}</figcaption>
        </figure>

        <div className="card-data">
          <div className="card-data-flex">
            <h3>{name}</h3>
            <p className="card-data--price">{<FormatPrice price={price} />}</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;