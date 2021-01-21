import React from 'react';
import { CollectionTile } from '../CollectionTile';
import { RemainingCollection } from './styles';

export function HomepageCollectionsGrid({ collections }) {
    const saleCollection = collections.find(collection => collection.title === 'SALE');
    const remainingCollections = collections.filter(collection => collection.title !== 'SALE');

  return(
    <div>
      {!!saleCollection && (
        <CollectionTile 
          sale
          title={saleCollection.title}
          description={saleCollection.description}
          backgroundImage={saleCollection.image.localFile.childImageSharp.fluid}
        />
      )}
      <RemainingCollection>
        {remainingCollections.map(collection => (
          <CollectionTile 
            title={collection.title}
            description={collection.description}
            backgroundImage={collection.image.localFile.childImageSharp.fluid}
            key={collection.shopifyId}
          />
        ))}
      </RemainingCollection>
    </div>
  )
}