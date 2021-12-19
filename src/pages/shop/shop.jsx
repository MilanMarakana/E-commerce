import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from '../../firebase/firebase.utils.js';

import CollectionsOverview from '../../components/collections-overview/collections-overview.jsx';
import CollectionPage from './../collection/collection';
import { connect } from 'react-redux';
import { updateCollections } from './../../redux/shop/shop-action';

class Shop extends React.Component {
  unSubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;

    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
    });
  }

  render() {
    return (
      <div className='shop-page'>
        <Routes>
          <Route path='/' element={<CollectionsOverview />} />
          <Route path=':collectionId' element={<CollectionPage />} />
        </Routes>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(Shop);
