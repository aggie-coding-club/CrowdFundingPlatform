import axios from "axios";

// If you use the AxiosTest route, you can test out the backend 
async function fetchData(props){
    var data = await axios.get("http://127.0.0.1:8000/campaigns/add_funds/", {
        params: {
            name: "Campaign 3",
            authors: "Allen",
            summary: "Lol",
            date_launch: "lol",
            target: "200.0",
            raised: "50.00",
            content: "Please help",
            added: "420.69",
        }
    });
    return data.data;      
}

export default async function AxiosTest(){
    const data = await fetchData();

    return(
        <div className="py-24">
            {data[0].raised}
        </div>
    )
}