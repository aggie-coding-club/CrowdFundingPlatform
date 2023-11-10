'use client'

import CheckoutForm from './CheckoutForm';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe('sk_test_51O90DOFfT6IQyyJPX2GRBIuSY60BOAS5PCKflhvjyTE9xufUx7jLgxOvuKWTm3nM2iYkLiUemlTZGVzbe6O4r0iS00VjaU9XXo');

export default function ClientSide(props){

    const appearance = {
        theme: 'stripe',
    };
    const options = {
        clientSecret,
        appearance,
    };
    
    var clientSecret = props.clientSecret;

    return(
        <div className="py-24">
            {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            )}
        </div>
    )
}