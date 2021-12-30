import React from 'react';
import {Link} from 'react-router-dom';
// import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as Logo } from '../../assets/logo/crown.svg';

import './header.scss';

import CartIcon from '../cart-icon/cart-icon.jsx';
import CartDropDown from '../cart-dropdown/cart-dropdown.jsx';
import { selectCurrentUser } from './../../redux/user/user-selector';
import { selectCartHidden } from '../../redux/cart/cart-selectors.js';
import { signOutStart } from './../../redux/user/user-action';

const Header = ({ currentUser, hidden, signOutStart }) => {
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          Shop
        </Link>
        <Link className='option' to='/shop'>
          Contact
        </Link>
        {currentUser ? (
          <div className='option' onClick={signOutStart}>
            SIGN OUT
          </div>
        ) : (
          <Link className='option' to='/sign-in'>
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropDown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

