'use client'

import CheckoutForm from './CheckoutForm';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51O90DOFfT6IQyyJPSMZU4AwYqKddMGsIQhatfF389SNAvsc7B77tmbkRNrtYOiZMylQTvj9N7yhXMHwEt1zKgo3100dEufhmwG');

export default function ClientSide(props){

    var clientSecret = props.clientSecret;

    const appearance = {
        theme: 'stripe',
    };
    const options = {
        clientSecret,
        appearance,
    };
    
    return(
        <div className="py-24 lg:mx-[25%] text-center">
            {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                    <CheckoutForm clientSecret={clientSecret}/>
                </Elements>
            )}
        </div>
    )
}