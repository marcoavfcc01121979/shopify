import React from 'react'
import { QuantityAdjusterWraper, AdjusterButton } from './styles';

export function QuantityAdjuster({ item, onAdjuster }) {
  const { quantity } = item;

  const handleDecrementQuantity = () => {
    onAdjuster({ variantId: item.variant.id, quantity: -1 })
  };

  const handleIncrementQuantity = () => {
    onAdjuster({ variantId: item.variant.id, quantity: +1 })
  }
  return(
    <QuantityAdjusterWraper>
      <AdjusterButton onClick={handleDecrementQuantity}>-</AdjusterButton>
       <div>{quantity}</div>
      <AdjusterButton onClick={handleIncrementQuantity}>+</AdjusterButton>
    </QuantityAdjusterWraper>
  )
}