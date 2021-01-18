import React from 'react';
import CartContext from 'context/CartContext';
import { CartItem, CartHeader, CartFooter } from './styles'

export const CartContents = () => {
  const { checkout } = React.useContext(CartContext);

  return(
    <section>
      <h1>
        Your cart
      </h1>
      <CartHeader>
        <div>Product</div>
        <div>Unit price</div>
        <div>Quantity</div>
        <div>Amount</div>
      </CartHeader>
      {checkout?.lineItems?.map(item => (
        <CartItem key={item.variant.id}>
          <div>
            <div>
              {item.title}
            </div>
            <div>{item.variant.title === 'Default Title' ? '' : item.variant.title}</div>
            <div>
              {item.variant.title}
            </div>
          </div>
          <div>
            R$ {item.variant.price}
          </div>
          <div>
            {item.quantity}
          </div>
          <div>
            R$ {(item.quantity * item.variant.price).toFixed(2)}
          </div>
        </CartItem>
      ))}
      <CartFooter>
        <div><strong>Total:</strong></div>
        <div>
          <span>R$ {checkout?.totalPrice}</span>
        </div>
      </CartFooter>
    </section>
  )
}
