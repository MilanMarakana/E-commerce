import React from 'react';
import { connect } from 'react-redux';
import MenuItem from '../menu-item/menu-item';

import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from './../../redux/directory/directory-selector';

import { DirectoryMenuContainer } from './directory.styles';

const Director = ({ sections }) => {
	return (
		<DirectoryMenuContainer>
			{sections.map(({ id, ...otherSectionProps }) => {
				return <MenuItem key={id} {...otherSectionProps} />;
			})}
		</DirectoryMenuContainer>
	);
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Director);
