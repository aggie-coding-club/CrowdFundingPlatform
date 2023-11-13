'use client'

import React, { useEffect } from 'react';

export default function Carousel(){
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

    return(
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
            <img src="/ColorfulRev.jpg"/>
            </div>

            <a className="prev" onClick={() => plusSlide(-1)}>&#10094;</a>
            <a className="next" onClick={() => plusSlide(1)}>&#10095;</a>
        </div>
    )
}