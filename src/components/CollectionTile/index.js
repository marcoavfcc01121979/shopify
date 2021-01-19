import React from 'react';

import { CollectionTitleWrapper } from './styles';
import BackgroundImage from 'gatsby-background-image';

export function CollectionTile({ description, title, backgroundImage }) {
  return(
    <CollectionTitleWrapper>
      <BackgroundImage fluid={backgroundImage} />
      <h1>{title}</h1>
      <p>{description}</p>
    </CollectionTitleWrapper>
  )
}