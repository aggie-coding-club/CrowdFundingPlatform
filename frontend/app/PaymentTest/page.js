import ClientSide from './ClientSide';
import axios from 'axios';

export default async function PaymentTest(){

    const data = await axios.get("http://127.0.0.1:8000/payments/payment_intent/", {});
    var clientSecret = data.data.client_secret;

    //console.log(data.data.client_secret);

    return (
        <div className="py-24 bg-white px-6">
            <h1 className='text-center text-4xl'>Payment Test</h1>
            <ClientSide clientSecret={clientSecret}/>
        </div>
    );
}