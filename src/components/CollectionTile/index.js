import React from 'react';

import { CollectionTitleWrapper, CollectionTileContent, Title, Description } from './styles';
import BackgroundImage from 'gatsby-background-image';

export function CollectionTile({ description, title, backgroundImage, sale }) {
  return(
    <CollectionTitleWrapper>
      <BackgroundImage fluid={backgroundImage} />
      <CollectionTileContent>
        <div>
          <Title sale={sale}>{title}</Title>
          <Description sale={sale}>{description}</Description>
        </div>
      </CollectionTileContent>
    </CollectionTitleWrapper>
  )
}