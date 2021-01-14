import React from 'react';

import { CartWrapper } from './styles';
import { FaShoppingCart } from 'react-icons/fa'

export function Cart() {
  return(
    <CartWrapper>
      <FaShoppingCart size="1.5rem" />
    </CartWrapper>
  )
}

export default Cart;
