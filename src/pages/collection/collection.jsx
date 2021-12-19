import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop-selector.js';
import CollectionItem from '../../components/collection-item/collection-item';

import './collection.scss';

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  console.log(title);
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  collections: selectCollection(state),
});

export default connect(mapStateToProps)(CollectionPage);
