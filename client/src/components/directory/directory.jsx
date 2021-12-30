import React from 'react';
import { connect } from 'react-redux';
import MenuItem from '../menu-item/menu-item';

import './directory.scss';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from './../../redux/directory/directory-selector';

const Director = ({ sections }) => {
  return (
    <div className='directory-menu'>
      {sections.map(({ id, ...otherSectionProps }) => {
        return <MenuItem key={id} {...otherSectionProps} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Director);
