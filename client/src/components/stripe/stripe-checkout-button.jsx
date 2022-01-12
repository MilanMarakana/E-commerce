import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

// const onToken = (token) => {
//   console.log(token);
//   alert('Your Payment is successfully done.');
// };

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
		'pk_test_51K8QxMEaf38bD88AYND5LJWPH5RFOsUSuudUNyd0CB4e2HRy5MIGCws459oZ8VlqejOOjpn4f3l4hj6FxNOtwri1008M4i4GBd';

	const onToken = (token) => {
		axios({
			url: 'payment',
			method: 'post',
			data: {
				amount: priceForStripe,
				token: token,
			},
		})
			.then((response) => {
				alert('Your payment has been successfully done.');
			})
			.catch((error) => {
				console.log('Payment Error: ', error);
				alert(
					'There was an issue with your payment! Please make sure you use the provided credit card.'
				);
			});
	};

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
