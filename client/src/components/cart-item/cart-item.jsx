import React from 'react';

import {
	CartItemContainer,
	ItemDetailsContainer,
	CartItemImage,
} from './cart-item.styles';

const cartItem = ({ item: { imageUrl, price, name, quantity } }) => {
	return (
		<CartItemContainer>
			<CartItemImage src={imageUrl} alt='item' />
			<ItemDetailsContainer>
				<span className='name'>{name}</span>
				<span className='price'>
					{quantity} x ${price}
				</span>
			</ItemDetailsContainer>
		</CartItemContainer>
	);
};

export default React.memo(cartItem);
