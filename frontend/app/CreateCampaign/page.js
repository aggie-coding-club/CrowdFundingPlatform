'use client'
import React, { useState } from 'react';
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export default function CreateCampaign() {
	const [formData, setFormData] = useState({
		Authors: '',
		Email: '',
		Recipients: '',
		City: '',
		State: '',
		Country: '',
		RecipientEmail: '',
		FundraisingGoal: '',
		AccountDetails: '',
		Title: '',
		Description: '',
		Content: '',
	});

	const [success, setSuccess] = useState(false);

	// Handle form input changes
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const mutation = useMutation({
		mutationFn: (params) => {

			const token = fetchCSRFToken();
			console.log(token);
			return axios.post('http://127.0.0.1:8000/campaigns/create_campaign_form/', params, {
				headers: {
					'X-CSRFToken': token,
				},
			});
		},
		onSuccess: () => {
			setSuccess(true);
		},
	})

	const fetchCSRFToken = async () => {
		try {
			const response = await axios.get('http://127.0.0.1:8000/campaigns/csrf-token/'); // Replace with your actual endpoint
			const csrfToken = response.data.csrfToken;

			// Store the CSRF token in a secure way (e.g., in state or a global context)
			// For simplicity, I'm just updating the state directly here
			return csrfToken;
		} catch (error) {
			console.error('Error fetching CSRF token:', error);
		}
	};

	function HandleSubmit(event) {
		event.preventDefault();

		mutation.mutate({
			name: formData.Title,
			summary: formData.Description,
			date_launch: "2023-11-14",
			authors: formData.Authors,
			target: formData.FundraisingGoal,
			raised: 0,
			content: formData.Content,
			recipient_name: formData.Recipients,
			recipient_account: formData.AccountDetails,
		});
	}

	const handleTabKey = (e) => {
		// Capture Tab key press
		if (e.key === 'Tab') {
			e.preventDefault(); // Prevent default behavior (focus shifting)

			// Insert four spaces (you can customize this based on your preference)
			const updatedContent = `${formData.Content}    `;
			setFormData({ ...formData, Content: updatedContent });
		}
	};

	return (
		<div className='bg-white py-24'>
			<h2 className="font-semibold text-4xl text-center">Create Campaign</h2>
			<div className="container max-w-screen-lg mx-auto mt-12">
				<div>
					<form className="" onSubmit={HandleSubmit}>

						<div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
							<div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">

								<div className="text-gray-600">
									<p className="font-medium text-xl">Campaign Details</p>
									<p className='text-lg'>Please fill out all the fields.</p>
								</div>

								{
									success ? <p className='text-lg'> Successfully Submitted! </p> :
										<div className="lg:col-span-2">
											<div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
												<div className="md:col-span-5">
													<label>Authors</label>
													<input
														required
														type="text"
														name="Authors"
														id="Authors"
														className="h-10 border mt-1 mb-1 rounded px-4 w-full bg-gray-50"
														value={formData.Authors}
														onChange={handleInputChange}
													/>
												</div>

												<div className="md:col-span-5">
													<label>Email Address</label>
													<input
														required
														type="email"
														name="Email"
														id="Email"
														className="h-10 border mt-1 mb-1 rounded px-4 w-full bg-gray-50"
														value={formData.Email}
														placeholder="email@domain.com"
														onChange={handleInputChange}
													/>
												</div>

												<div className="md:col-span-5">
													<label>Recipients</label>
													<input
														required
														type="text"
														name="Recipients"
														id="Recipients"
														className="h-10 border mt-1 mb-1 rounded px-4 w-full bg-gray-50"
														value={formData.Recipients}
														placeholder=""
														onChange={handleInputChange}
													/>
												</div>

												{/* for later use such as search for nearby fundraisers */}
												<div className="md:col-span-3">
													<label>City</label>
													<input
														required
														type="text"
														name="City"
														id="City"
														className="h-10 border mt-1 mb-1 rounded px-4 w-full bg-gray-50"
														value={formData.City}
														placeholder=""
														onChange={handleInputChange}
													/>
												</div>

												<div className="md:col-span-1">
													<label>State</label>
													<input
														required
														type="text"
														name="State"
														id="State"
														className="h-10 border mt-1 mb-1 rounded px-4 w-full bg-gray-50"
														value={formData.State}
														placeholder=""
														onChange={handleInputChange}
													/>
												</div>

												<div className="md:col-span-1">
													<label>Country</label>
													<input
														required
														type="text"
														name="Country"
														id="Country"
														className="h-10 border mt-1 mb-1 rounded px-4 w-full bg-gray-50"
														value={formData.Country}
														placeholder=""
														onChange={handleInputChange}
													/>
												</div>

												<div className="md:col-span-5">
													<label>Recipients Email</label>
													<input
														required
														type="email"
														name="RecipientEmail"
														id="RecipientEmail"
														className="h-10 border mt-1 mb-1 rounded px-4 w-full bg-gray-50"
														value={formData.RecipientEmail}
														placeholder=""
														onChange={handleInputChange}
													/>
												</div>

												<div className="md:col-span-2">
													<label>Fundraising Goal $</label>
													<input
														required
														type="text"
														name="FundraisingGoal"
														id="FundraisingGoal"
														className="h-10 border mt-1 mb-1 rounded px-4 w-full bg-gray-50"
														value={formData.FundraisingGoal}
														placeholder=""
														onChange={handleInputChange}
													/>
												</div>

												<div className="md:col-span-3">
													<label>Stripe Connected Account ID</label>
													<input
														required
														type="text"
														name="AccountDetails"
														id="AccountDetails"
														className="h-10 border mt-1 mb-1 rounded px-4 w-full bg-gray-50"
														value={formData.AccountDetails}
														placeholder=""
														onChange={handleInputChange}
													/>
												</div>

												<div className="md:col-span-5">
													<label>Title</label>
													<input
														required
														type="text"
														name="Title"
														id="Title"
														className="h-10 border mt-1 mb-1 rounded px-4 w-full bg-gray-50"
														value={formData.Title}
														placeholder=""
														onChange={handleInputChange}
													/>
												</div>

												<div className="md:col-span-5">
													<label>Summary</label>
													<textarea
														required
														name="Description"
														id="Description"
														className="border mt-1 mb-1 rounded px-4 w-full bg-gray-50"
														value={formData.Description}
														placeholder=""
														onChange={handleInputChange}
														onKeyDown={handleTabKey}
														rows={4}
													/>
												</div>

												<div className="md:col-span-5">
													<label>Story</label>
													<textarea
														required
														name="Content"
														id="Content"
														className="border mt-1 rounded px-4 w-full bg-gray-50"
														value={formData.Content}
														placeholder=""
														onChange={handleInputChange}
														onKeyDown={handleTabKey}
														rows={10}
													/>
												</div>

											</div>
											<div className="flex justify-center mt-6">
												<button type="submit" className="bg-red-950 hover:bg-gray-100 hover:text-black text-white text-lg font-bold py-2 px-8 rounded-xl"> Create </button>
											</div>
										</div>
								}


							</div>

						</div>
					</form>

				</div>

			</div>
		</div>
	)
}