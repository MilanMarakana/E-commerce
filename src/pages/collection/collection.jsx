import React from 'react';
import { connect } from 'react-redux';
import CollectionItem from '../../components/collection-item/collection-item';
import { selectCollection } from '../../redux/shop/shop-selector.js';

import './collection.scss';

const CollectionPage = ({ collections }) => {
  const { title, items } = collections;
  console.log(collections);
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
