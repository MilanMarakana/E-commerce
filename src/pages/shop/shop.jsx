import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview.jsx';

import CollectionPage from './../collection/collection';

const Shop = () => {
  return (
    <div className='shop-page'>
      <Routes>
        <Route path='/' element={<CollectionsOverview />} />
        <Route path=':collectionId' element={<CollectionPage />} />
      </Routes>
    </div>
  );
};

export default Shop;
