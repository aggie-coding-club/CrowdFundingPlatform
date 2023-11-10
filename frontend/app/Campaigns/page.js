import axios from "axios";
import Link from "next/link";

export default async function Campaigns() {
    // set true to use database values instead of placeholder values
    var using_database = true;

    var campaigns = [
        { image: 'https://placehold.co/600x400', title: 'Campaign 1', summary: 'short description of campaign 1...' , raised: '0', date: '2023-11-07', authors: 'None', id:1},
        { image: 'https://placehold.co/600x400', title: 'Campaign 2', summary: 'short description of campaign 2...' , raised: '0', date: '2023-11-07', authors: 'None', id:2},
        { image: 'https://placehold.co/600x400', title: 'Campaign 3', summary: 'short description of campaign 3...' , raised: '0', date: '2023-11-07', authors: 'None', id:3},
        { image: 'https://placehold.co/600x400', title: 'Campaign 4', summary: 'short description of campaign 4...' , raised: '0', date: '2023-11-07', authors: 'None', id:4},
        { image: 'https://placehold.co/600x400', title: 'Campaign 5', summary: 'short description of campaign 5...' , raised: '0', date: '2023-11-07', authors: 'None', id:5},
    ];

    if(using_database){
        // create array of objects 
        var data = await axios.get("http://127.0.0.1:8000/campaigns/get_recent_campaigns/", {
            params: {
                rows: 6,
            }
        })

        campaigns = data.data.map(campaign => {
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

    return (
        <main data-theme="light" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-40 pl-20">
            {campaigns.map((campaign, index) => (
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
            ))}
        </main>
    );
}

