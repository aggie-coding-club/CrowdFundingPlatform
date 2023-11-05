import axios from "axios";

// If you use the AxiosTest route, you can test out the backend 
async function fetchData(props){
    console.log(props);
    var data = await axios.get("http://127.0.0.1:8000/campaigns/create_campaign/", {
        params: {
            name: "Campaign 3",
            authors: "Author 3",
            summary: "Test",
            date_launch: "lol",
            authors: "Allen",
            target: "100.0",
            raised: "50.00",
            content: "Please help",
        }
    });
    return data.data;      
}

export default async function AxiosTest(){
    const data = await fetchData();

    return(
        <div className="py-24">
            {data.authors}
        </div>
    )
}