export default function Campaigns() {
    const campaigns = [
        { image: 'https://placehold.co/600x400', title: 'Campaign 1', value: 'short description of campaign 1...' },
        { image: 'https://placehold.co/600x400', title: 'Campaign 2', value: 'short description of campaign 2...' },
        { image: 'https://placehold.co/600x400', title: 'Campaign 3', value: 'short description of campaign 3...' },
        { image: 'https://placehold.co/600x400', title: 'Campaign 4', value: 'short description of campaign 4...' },
        { image: 'https://placehold.co/600x400', title: 'Campaign 5', value: 'short description of campaign 5...' },
    ];

    return (
        <main data-theme="light" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-40 pl-20">
            {campaigns.map((campaign, index) => (
                <div key={index} className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={campaign.image} alt={campaign.title} /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{campaign.title}</h2>
                        <p>{campaign.value}</p>
                        <div className="card-actions justify-end">
                            <kbd className="kbd">$$$$</kbd>
                        </div>
                    </div>
                </div>
            ))}
        </main>
    );
}

