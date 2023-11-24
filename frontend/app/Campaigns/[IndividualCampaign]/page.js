import axios from 'axios';
import Carousel from './Carousel';
import Link from 'next/link';

export default async function IndividualCampaign(props) {
    // Set this to true to use database, false to use default
    // If this is set to true, the using_database variable on Campaigns grid page should also be true
    var useDatabase = false;
    const id = props.params.IndividualCampaign;

    var data;
    if (useDatabase) {
        // get details based on id, and set data to it
        const info = await axios.get("http://127.0.0.1:8000/campaigns/get_campaign_by_id/", {
            params: {
                id: id,
            }
        })
        data = info.data;
    }

    //console.log(data);

    // Calculate the proportion of raised to target
    var progress = data.raised / data.target;
    if(progress > 1){
        progress = 1;
    }

    return (
        <div className="bg-white font-serif text-black">
            <div className="h-[100%] md:h-screen flex flex-col md:flex-row justify-between">
                <div className="md:w-[45%] mx-[5%] -mt-6 md:-mt-0">
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



                <div className="order-first md:order-1 flex flex-col justify-center md:w-[40%] md:-mt-[10%]">
                    <div className="flex flex-col md:ml-[6%]">
                        {
                            useDatabase
                                ? <p className="text-6xl font-bold pt-16 my-2">{data.name}</p>
                                : <p className="text-center md:text-left text-6xl font-bold pt-16 my-3">Help Reveille</p>
                        }
                        {
                            useDatabase
                                ? <p className="mb-6 text-3xl">Fundraiser Type</p>
                                : <p className="text-center md:text-left mb-6 text-3xl">Fundraiser Type</p>
                        }
                        <div className="text-2xl self-center items-center md:self-start md:text-base flex flex-row mb-6">
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

                        <Link href={"/Donate?id=" + id} >
                            <button className="mb-6 rounded-md self-center md:self-start text-white bg-[#901010] w-5/6 md:w-3/4 h-16">
                                Donate
                            </button>
                        </Link>

                        <div className="flex w-[100%] md:w-3/4 self-center self-center py-1">
                            {
                                useDatabase
                                    ? <p className="w-1/3 text-lg">Raised: ${data.raised}</p>
                                    : <p className="w-1/2 text-center md:text-left text-lg">Raised: $XXX</p>
                            }
                            {
                                useDatabase
                                    ? <p className="w-1/2 text-lg">Goal: ${data.target}</p>
                                    : <p className="w-1/2  text-center md:text-left text-lg">Goal: $XXX</p>
                            }
                        </div>
                        <div className="self-center md:self-start bg-white rounded-full border-black border-2 w-5/6 md:w-3/4 h-7"></div>

                        <div className="self-center md:self-start w-5/6 md:w-3/4 h-7 bg-white rounded-full border-black border-2">
                            <div className="h-full rounded-full bg-[#500000]" style={{ width: `${progress * 100}%` }}></div>
                        </div>

                        <div className="flex flex-col self-center md:self-start w-[95%] md:w-[70%] mt-10">
                            <div className="flex flex-col mb-7 md:mb-2">
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
                            <p className="self-center">
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

            <div className="flex flex-col mt-10 md:-mt-28">
                <div className="w-[95%] self-center mb-16 md:mx-24">
                    <div className="flex flex-col mb-7 md:mb-2">
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
