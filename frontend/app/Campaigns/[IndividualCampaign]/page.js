'use client'
import React, { useEffect } from 'react';

export default function IndividualCampaign(props){

    // console.log(props);
    // fetch from database, populate values
    const id = props.params.IndividualCampaign;

    let slideIndex = 1;

    function plusSlide(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(n) {
        let i;
        let slides = document.querySelectorAll(".carousel");
        if (n > slides.length) {
        slideIndex = 1;
        }

        if (n < 1) {
        slideIndex = slides.length;
        }

        for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        }

        slides[slideIndex-1].style.display = "block";
    }

    useEffect(() => {
        showSlides(slideIndex);
    }, []);

    return (
        <div className="bg-white text-black h-screen flex flex-row justify-between font-serif">
        <div className="w-[45%] ml-[5%]">
            <div className="flex flex-col items-start">
            <div className="self-center">
                <div className="carousel hidden pt-24">
                <div className="absolute px-1 mt-2 ml-2 bg-white bg-opacity-70 rounded-md">1 / 3</div>
                <img src="/ReveilleX.jpg" />
                </div>

                <div className="carousel hidden pt-24 mb-20">
                <div className="absolute px-1 mt-2 ml-2 bg-white bg-opacity-70 rounded-md">2 / 3</div>
                <img src ="/BasketRev.jpg" className="w-full object-cover"/>
                </div>

                <div className="carousel hidden pt-24 mb-20 object-cover">
                <div className="absolute px-1 mt-2 ml-2 bg-white bg-opacity-70 rounded-md">3 / 3</div>
                <img src="ColorfulRev.jpg"/>
                </div>

                <a className="prev" onClick={() => plusSlide(-1)}>&#10094;</a>
                <a className="next" onClick={() => plusSlide(1)}>&#10095;</a>
            </div>

            <p>
                Description Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
                gravida viverra sapien, ac feugiat est ultricies sed.
            </p>
            </div>
        </div>

        <div className="flex flex-col w-[40%] mr-[5%]">
            <div className="w-[100%]">
            <p className="text-6xl font-bold pt-16 my-2">Help Reveille</p>
            <p className="mb-6 text-3xl">Fundraiser Type</p>
            <div className="flex flex-row mb-6">
                <img
                src="\ReveilleX.jpg"
                className="object-cover object-[70%] rounded-full h-16 w-16"
                />
                <div className="ml-5 self-center">Profile Name</div>
            </div>
            <button className="mb-6 rounded-md text-white bg-[#901010] w-3/4 h-16">
                Donate
            </button>
            <div className="bg-white rounded-full border-black border-2 w-3/4 h-7"></div>
            <div className="w-[70%] mt-16">
                <div className="flex flex-col mb-5">
                <p className="text-center mb-2">Organizer Message/Comments</p>
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
        </div>
    );
}