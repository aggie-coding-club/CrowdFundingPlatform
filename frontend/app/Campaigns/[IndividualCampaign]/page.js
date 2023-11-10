
export default function IndividualCampaign(props){

    // console.log(props);
    // fetch from database, populate values
    const id = props.params.IndividualCampaign;

    return(
        <div>
            <p>Individual Campaign Page goes here!</p>
            <p>id: {props.params.IndividualCampaign} </p>
        </div>
    )
}