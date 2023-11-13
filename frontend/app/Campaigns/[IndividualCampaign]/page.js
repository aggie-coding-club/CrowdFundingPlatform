import axios from 'axios';
import Carousel from './Carousel';

export default async function IndividualCampaign(props) {
    // Set this to true to use database, false to use default
    // If this is set to true, the using_database variable on Campaigns grid page should also be true
    var useDatabase = false;

    var data;
    if (useDatabase) {
        const id = props.params.IndividualCampaign;
        // get details based on id, and set data to it
        const info = await axios.get("http://127.0.0.1:8000/campaigns/get_campaign_by_id/", {
            params: {
                id: id,
            }
        })
        data = info.data;
    }

    //console.log(data);


    return (
        <div>
            <div className="bg-white text-black h-screen flex flex-row justify-between font-serif">
                <div className="w-[45%] ml-[5%]">
                    <div className="flex flex-col items-start">
                        <Carousel />


                        {useDatabase
                            ? <p>{data.content}</p>
                            : <p>Description Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Nulla eget odio facilisis, iaculis nibh eget, eleifend ex. Sed id
                                sapien in mi mollis finibus. Maecenas quam neque, tincidunt id lorem
                                a, vestibulum porttitor massa. Nam leo tortor, pharetra vitae
                                efficitur a, euismod id ligula. Sed at malesuada eros, ut blandit
                                sem. Fusce varius, libero vel feugiat ullamcorper, diam nisi euismod
                                arcu, quis ultricies sem libero quis dui. Suspendisse nunc nunc,
                                tempus et tristique non, semper eget purus. Sed non justo sed velit
                                tempus luctus. Vivamus fringilla est id mauris sollicitudin
                                lobortis. Phasellus eget arcu nisi. Nulla pulvinar vitae enim et
                                finibus. Proin enim tortor, blandit at cursus id, suscipit in eros.
                                Praesent suscipit erat vitae elit mollis sagittis. Sed lacus nibh,
                                dignissim consequat metus et, fringilla elementum dolor. Nullam
                                vitae ante vel libero aliquam convallis vel sed ligula. Nulla at
                                urna egestas, consequat ante et, consectetur orci. Nunc lacus nibh,
                                imperdiet vitae fermentum eget, suscipit sed risus. Morbi at
                                consectetur leo. Donec imperdiet sem non ante rhoncus, sed dapibus
                                nulla auctor. Phasellus pulvinar pharetra massa quis auctor. In
                                gravida viverra sapien, ac feugiat est ultricies sed.</p>
                        }

                    </div>
                </div>



                <div className="flex flex-col justify-center w-[40%]">
                    <div className="w-[100%] ml-[6%]">
                        {
                            useDatabase
                                ? <p className="text-6xl font-bold pt-16 my-2">{data.name}</p>
                                : <p className="text-6xl font-bold pt-16 my-2">Help Reveille</p>
                        }
                        {
                            useDatabase
                                ? <p className="mb-6 text-3xl">Fundraiser Type</p>
                                : <p className="mb-6 text-3xl">Fundraiser Type</p>
                        }
                        <div className="flex flex-row mb-6">
                            <img
                                src="\ReveilleX.jpg"
                                className="object-cover object-[70%] rounded-full h-16 w-16"
                            />
                            {
                                useDatabase
                                    ? <div className="ml-5 self-center">{data.authors}</div>
                                    : <div className="ml-5 self-center">Profile Name</div>
                            }
                        </div>
                        <button className="mb-6 rounded-md text-white bg-[#901010] w-3/4 h-16">
                            Donate
                        </button>

                        <div className="flex py-1">
                            <p className="w-1/3 text-lg">Raised: </p>
                            <p className="w-1/2 text-lg">Goal: </p>
                        </div>
                        <div className="bg-white rounded-full border-black border-2 w-3/4 h-7"></div>


                        <div className="w-[70%] mt-10">
                            <div className="flex flex-col mb-2">
                                <p className="text-center mb-2">Organizer Messages</p>
                                <hr className="self-center border-[#901010] border-1 w-1/6" />
                            </div>
                            <div className="flex mb-2">
                                <img
                                    src="\ReveilleX.jpg"
                                    className="object-cover object-[70%] rounded-full h-16 w-16"
                                />
                                {
                                    useDatabase
                                        ? <p className="ml-5 self-center">{data.authors}</p>
                                        : <p className="ml-5 self-center">Username</p>
                                }
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                                eget odio facilisis, iaculis nibh eget, eleifend ex. Sed id sapien
                                in mi mollis finibus. Maecenas quam neque, tincidunt id lorem a,
                                vestibulum porttitor massa. Nam leo tortor, pharetra vitae
                                efficitur a, euismod id ligula.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="bg-white text-black mb-24 flex flex-row justify-between font-serif">

            <div className="mt-24 mx-24">
                <div className="flex flex-col mb-2">
                    <p className="text-center mb-2">Comments</p>
                    <hr className="self-center border-[#901010] border-1 w-1/6" />
                </div>
                <div className="flex mb-2">
                    <img
                        src="\ReveilleX.jpg"
                        className="object-cover object-[70%] rounded-full h-16 w-16"
                    />
                    <p className="ml-5 self-center">Username</p>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                    eget odio facilisis, iaculis nibh eget, eleifend ex. Sed id sapien
                    in mi mollis finibus. Maecenas quam neque, tincidunt id lorem a,
                    vestibulum porttitor massa. Nam leo tortor, pharetra vitae
                    efficitur a, euismod id ligula.
                </p>
            </div>
            </div>

        </div>

    );
}
