import React from 'react';
import { Route } from 'react-router-dom';
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from '../../firebase/firebase.utils.js';

import CollectionsOverview from '../../components/collections-overview/collections-overview.jsx';
import CollectionPage from './../collection/collection';
import { connect } from 'react-redux';
import { updateCollections } from './../../redux/shop/shop-action';
import WithSpinner from '../../components/with-spinner/with-spinner.jsx';

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
class Shop extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }

  unSubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;

    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(Shop);
