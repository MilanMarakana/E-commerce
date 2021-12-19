import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const onToken = (token) => {
  console.log(token);
  alert('Your Payment is successfully done.');
};

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51K8QxMEaf38bD88AYND5LJWPH5RFOsUSuudUNyd0CB4e2HRy5MIGCws459oZ8VlqejOOjpn4f3l4hj6FxNOtwri1008M4i4GBd';

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
