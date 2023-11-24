import ClientSide from './ClientSide';
import axios from 'axios';
import Link from 'next/link';

export default async function Donate(props) {
    const id = props.searchParams.id;

    const data = await axios.get("http://127.0.0.1:8000/payments/payment_intent/", {});
    var clientSecret = data.data.client_secret;

    //console.log(data.data.client_secret);

    return (
        <div className="py-24 bg-white px-6">
            <Link href={"/Campaigns/" + id}>
                <button className='bg-red-950 hover:bg-gray-100 hover:text-black text-white text-lg font-bold py-2 px-8 rounded-xl'>Back to Fundraiser</button>
            </Link>
            <ClientSide clientSecret={clientSecret} id={id} />
        </div>
    );
}