import React from 'react';
import CartContext from 'context/CartContext';
import { CartItem, CartHeader, CartFooter } from './styles'

import { QuantityAdjuster } from '../QuantityAdjuster'
import { RemoveLineItems } from '../RemoveLineItem'

export const CartContents = () => {
  const { checkout, updateLineItem } = React.useContext(CartContext);

  const handleAjusterQuantity = ({ quantity, variantId }) => {
    updateLineItem({ quantity, variantId });
  }
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
            <QuantityAdjuster item={item} onAdjuster={handleAjusterQuantity} />
          </div>
          <div>
            R$ {(item.quantity * item.variant.price).toFixed(2)}
          </div>
          <div><RemoveLineItems lineItemId={item.id} /></div>
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
