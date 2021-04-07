import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartIcons from "./CartIcons";

function Cart() {
  const { cartItems, cartValue, products } = useSelector((st) => st);

  const renderTable = () => {
    const itemRows = Object.keys(cartItems).map((id) => (
      <tr key={id}>
        <td className="text-center align-middle">
          <Link to={`/products/${id}`}>{products[id].name}</Link>
        </td>
        <td className="text-center align-middle">${products[id].price}</td>
        <td className="text-center align-middle">{cartItems[id]}</td>
        <td>
          <CartIcons id={id} />
        </td>
      </tr>
    ));

    return (
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Item Price</th>
            <th>Item Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{itemRows}</tbody>
      </table>
    );
  };

  return cartItems.length === 0 ? (
    <h2>No items in cart yet!</h2>
  ) : (
    <div>
      {renderTable()}
      <p>Total: ${cartValue}</p>
    </div>
  );
}

export default Cart;
