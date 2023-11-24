import React from "react";
import {
	PaymentElement,
	useStripe,
	useElements
} from "@stripe/react-stripe-js";
import axios from "axios";

export default function CheckoutForm(props) {
	const stripe = useStripe();
	const elements = useElements();


	const [message, setMessage] = React.useState(null);
	const [isLoading, setIsLoading] = React.useState(false);

	const campaignID = props.campaignID;

	console.log(props);

	React.useEffect(() => {
		if (!stripe) {
			return;
		}

		const clientSecret = props.clientSecret;

		if (!clientSecret) {
			return;
		}

		stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
			switch (paymentIntent.status) {
				case "succeeded":
					setMessage("Payment succeeded!");
					break;
				case "processing":
					setMessage("Your payment is processing.");
					break;
				case "requires_payment_method":
					setMessage("Payment method required.");
					break;
				default:
					setMessage("Something went wrong.");
					break;
			}

		});
	}, [stripe]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!stripe || !elements) {
			// Stripe.js hasn't yet loaded.
			// Make sure to disable form submission until Stripe.js has loaded.
			return;
		}

		setIsLoading(true);

		var id;

		await stripe.retrievePaymentIntent(props.clientSecret).then(({ paymentIntent }) => { 
			id = paymentIntent.id;
		})

		await axios.get("http://127.0.0.1:8000/payments/update_intent/", {
			params: {
				id: id,
				donation: donation,
				account: props.account,
			}
		});

		// add funds to campaign database
		await axios.get("http://127.0.0.1:8000/campaigns/add_funds/", {
			params: {
				id: campaignID,
				added: donation,
			}
		});

		const { error } = await stripe.confirmPayment({
			elements,
			confirmParams: {
				// Make sure to change this to your payment completion page
				return_url: "http://localhost:3000/Campaigns/" + campaignID,
			},
		});

		// This point will only be reached if there is an immediate error when
		// confirming the payment. Otherwise, your customer will be redirected to
		// your `return_url`. For some payment methods like iDEAL, your customer will
		// be redirected to an intermediate site first to authorize the payment, then
		// redirected to the `return_url`.

		// Undo database funding addition since payment failed
		const negativeFunds = donation * -1;
		await axios.get("http://127.0.0.1:8000/campaigns/add_funds/", {
			params: {
				id: campaignID,
				added: negativeFunds,
			}
		});

		if (error.type === "card_error" || error.type === "validation_error") {
			setMessage(error.message);
		} else {
			setMessage("An unexpected error occurred.");
		}

		setIsLoading(false);
	};

	const paymentElementOptions = {
		layout: "tabs",
	};

	const [donation, setDonation] = React.useState(1.00);

	const handleInputChange = async (e) => {
		setDonation(e.target.value);
	}

	return (
		<form id="payment-form" onSubmit={handleSubmit}>
			<h1 className='text-center text-4xl'>Make a Donation</h1>
			<div className="text-center">
				<h1 className="pt-16 pb-6 text-2xl text-center">Select Donation Amount</h1>
				<span className="text-xl">Custom $</span>
				<input
					className="py-2 px-4 mx-2"
					type="text"
					value={donation}
					onChange={handleInputChange}
				/>
			</div>
			<h1 className="text-2xl text-center py-8">Enter Payment Details</h1>
			<PaymentElement id="payment-element" options={paymentElementOptions} />
			<button className="mt-6 bg-red-950 hover:bg-gray-100 hover:text-black text-white text-lg font-bold py-2 px-8 rounded-xl" disabled={isLoading || !stripe || !elements} id="submit">
				<span id="button-text">
					{isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
				</span>
			</button>
			{/* Show any error or success messages */}
			{message && <div className="mt-4" id="payment-message">{message}</div>}
		</form>
	);
}