'use client'

import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

export default function Campaigns() {
    const [searchTerm, setSearchTerm] = useState('');
    const [campaigns, setCampaigns] = useState([]);

    // set true to use database values instead of placeholder values
    var using_database = false;

    useEffect(() => {
        const fetchData = async () => {

            var data = [
                { image: 'https://placehold.co/600x400', title: 'Campaign 1', summary: 'short description of campaign 1...' , raised: '0', date: '2023-11-07', authors: 'None', id:1},
                { image: 'https://placehold.co/600x400', title: 'Campaign 2', summary: 'short description of campaign 2...' , raised: '0', date: '2023-11-07', authors: 'None', id:2},
                { image: 'https://placehold.co/600x400', title: 'Campaign 3', summary: 'short description of campaign 3...' , raised: '0', date: '2023-11-07', authors: 'None', id:3},
                { image: 'https://placehold.co/600x400', title: 'Campaign 4', summary: 'short description of campaign 4...' , raised: '0', date: '2023-11-07', authors: 'None', id:4},
                { image: 'https://placehold.co/600x400', title: 'Campaign 5', summary: 'short description of campaign 5...' , raised: '0', date: '2023-11-07', authors: 'None', id:5},
            ];
            
            if(using_database){
                const response = await axios.get("http://127.0.0.1:8000/campaigns/get_recent_campaigns/", {
                    params: {
                        rows: 15,
                    }
                });

                if(response != undefined){
                    data = response.data.map(campaign => {
                        return {
                            id: campaign.id,
                            title: campaign.name,
                            authors: campaign.authors,
                            summary: campaign.summary,
                            raised: campaign.raised,
                            date: campaign.date_launch,
                            image: 'https://placehold.co/600x400',
                        };
                    });
                }
            }     

            setCampaigns(data);
        };

        fetchData();
    }, []);

    const filteredCampaigns = campaigns.filter(campaign =>
        campaign.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='bg-white py-20'>

            <h1 className='text-5xl font-semibold text-center mb-2'>Campaigns</h1>
            
            <div className="text-right mx-24 bg-white mb-6">
                <Link href={"/CreateCampaign"}>
                    <button className="bg-red-950 hover:bg-gray-100 hover:text-black text-white text-lg font-semibold py-2 px-8 rounded-xl">
                        + Create New Campaign
                    </button>
                </Link>
            </div>

            <main data-theme="light" className="pb-10 flex justify-center">
            <form className="flex items-center" onSubmit={e => e.preventDefault()}>
                <label htmlFor="simple-search" className="sr-only">Search</label>
                <div className="relative w-100">
                    <input
                        type="text"
                        id="simple-search"
                        placeholder="Search campaign name..."
                        className="input input-bordered w-[400px]"
                        required
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-square ml-3">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                    <span className="sr-only">Search</span>
                </button>
            </form>
            </main>

            <main data-theme="light" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pl-20">
            {filteredCampaigns.length > 0 ? (
                filteredCampaigns.map((campaign, index) => (
                <div key={index} className="card w-96 bg-base-100 shadow-xl mb-10">
                    <Link key={index} href={`/Campaigns/${campaign.id}`}>
                        <figure className="rounded-t-xl">
                            <img src={campaign.image} alt={campaign.title} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{campaign.title}</h2>
                            <p>{campaign.summary}</p>
                            <p>Creators: {campaign.authors}</p>
                            <p>Date Created: {campaign.date}</p>
                            <div className="card-actions justify-end">
                                <kbd className="kbd">Raised: ${campaign.raised}</kbd>
                            </div>
                        </div>
                    </Link>
                </div>
                ))
            ) : (
                <div className='py-48'>
                <div className="alert">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="shrink-0 w-6 h-6" style={{ stroke: "rgb(69, 10, 10, 0.5)" }}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>There are currently no campaigns that match your search. Please try again with a different search term.</span>
                </div>
                </div>
            )}
            </main>
        </div>
    );
}