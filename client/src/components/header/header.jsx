import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/logo/crown.svg';

import CartIcon from '../cart-icon/cart-icon.jsx';
import CartDropDown from '../cart-dropdown/cart-dropdown.jsx';
import { selectCurrentUser } from './../../redux/user/user-selector';
import { selectCartHidden } from '../../redux/cart/cart-selectors.js';
import { signOutStart } from './../../redux/user/user-action';

import {
	HeaderContainer,
	LogoContainer,
	OptionsContainer,
	OptionLink,
} from './header.styles';

const Header = ({ currentUser, hidden, signOutStart }) => {
	return (
		<HeaderContainer>
			<LogoContainer to='/'>
				<Logo className='logo' />
			</LogoContainer>
			<OptionsContainer>
				<OptionLink to='/shop'>Shop</OptionLink>
				<OptionLink to='/shop'>Contact</OptionLink>
				{currentUser ? (
					<div className='option' onClick={signOutStart}>
						SIGN OUT
					</div>
				) : (
					<OptionLink to='/sign-in'>SIGN IN</OptionLink>
				)}
				<CartIcon />
			</OptionsContainer>
			{hidden ? null : <CartDropDown />}
		</HeaderContainer>
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
