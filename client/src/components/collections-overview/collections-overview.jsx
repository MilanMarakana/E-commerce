import { React } from 'react';
import { connect } from 'react-redux';

import CollectionPreview from './../collection-preview/collection-preview';

import { CollectionsOverviewContainer } from './collections-overview.styles';

import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from './../../redux/shop/shop-selector.js';

const CollectionsOverview = ({ collections }) => {
	return (
		<CollectionsOverviewContainer>
			{collections.map(({ id, ...otherCollectionProps }) => (
				<CollectionPreview key={id} {...otherCollectionProps} />
			))}
		</CollectionsOverviewContainer>
	);
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
