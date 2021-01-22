import React from 'react';

import { ProductTitleWrapper, Title, Description, Price } from './styles';
import Img from 'gatsby-image';
import { StyledLink } from '../StyledLink'

export function ProductTile({ title, imageFluid, description, minPrice, handle }) {
  return(
    <ProductTitleWrapper>
      <Img fluid={imageFluid} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Price>
        De R$ {parseFloat(minPrice).toFixed(2)}
      </Price>
      <StyledLink to={`/products/${handle}`}>
        View product
      </StyledLink>
    </ProductTitleWrapper>
  )
}