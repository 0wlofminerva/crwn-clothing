import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51I03wYC1Xdl26aMgmj4mWIEH1dCm73n8MnLdSi2TUq47bfiCukaaaR9OkzHmCY4a12RHirGnVa6nh1P29kMSNt3B00L53ZAezh';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }
    
    return (
        <StripeCheckout 
          label='Pay Now'
          name='CRWN Clothing Ldt.'
          billingAddress
          shippingAddress
          image='https://sendeyo.com/up/d/f3eb2117da'
          description={`Your total is $${price}`}
          amount={priceForStripe}
          panelLabel='Pay Now'
          token={onToken}
          stripeKey={publishableKey}
        />
    );
};



export default StripeCheckoutButton;