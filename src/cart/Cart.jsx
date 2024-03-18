import React from "react";
import { useCart } from "react-use-cart";
import "./cart.css";

function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  if (isEmpty) return <p className="empty-cart">your cart is empty</p>;
  return (
    <section className="cart-container">
      <div className="items">
        <div className="item">
          <h5>
            cart ({totalUniqueItems}) total items: ({totalItems})
          </h5>
          <table>
            <tbody>
              {items.map((item, index) => {
                return (
                  <tr key={index}>
                    <div className="product-img">
                      <td>
                        <img
                          src={item.img}
                          alt="product"
                          style={{ height: "7rem", borderRadius: "10PX" }}
                        />
                      </td>
                    </div>
                    <td>{item.title}</td>
                    <td>{item.price}$</td>
                    <td>quantity: ({item.quantity})</td>
                    <td>
                      <button
                        className="btn minus"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <button
                        className="btn plus"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                      <button
                        className="normal"
                        onClick={() => removeItem(item.id)}
                      >
                        remove item
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <h5 className="total-price">
          total <span>price:</span> {cartTotal}$
        </h5>
        <div className="buttons">
          <button className="clear-btn" onClick={() => emptyCart()}>
            clear cart
          </button>
          <button className="clear-btn">buy now</button>
        </div>
      </div>
    </section>
  );
}

export default Cart;
