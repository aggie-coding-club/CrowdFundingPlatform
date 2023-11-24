'use client'

import CheckoutForm from './CheckoutForm';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';


export default function ClientSide(props){
    var clientSecret = props.clientSecret;
    var account = props.account;

    const stripePromise = loadStripe('pk_test_51O90DOFfT6IQyyJPSMZU4AwYqKddMGsIQhatfF389SNAvsc7B77tmbkRNrtYOiZMylQTvj9N7yhXMHwEt1zKgo3100dEufhmwG', {
        stripeAccount: account,
    });

    const appearance = {
        theme: 'stripe',
    };
    const options = {
        clientSecret,
        appearance,
    };
    
    return(
        <div className="pb-16 lg:mx-[25%] text-center">
            {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                    <CheckoutForm clientSecret={clientSecret} campaignID={props.id} account={account}/>
                </Elements>
            )}
        </div>
    )
}