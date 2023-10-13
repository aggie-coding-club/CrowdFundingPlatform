import React from "react";

export default function Paragraph(){
    return(
        <div>
            <img src="/ReveilleX.jpg" alt="Reveille in a field of flowers" />
            <div className="flex justify-center items-center bg-red-800 h-28 mb-14">
                <div className="flex-wrap grid-rows-2 w-[97%] h-[87%] border-4 border-white flex justify-center items-center">
                    <p className="font-bold text-4xl basis-full">Contact Us</p>
                    <hr className="w-56"/>
                </div>
            </div>
            <div className="flex justify-center items-center bg-red-800 h-56 mb-14">
                <div className="text-xl font-medium flex-wrap grid-rows-3 w-[97%] h-[87%] border-4 border-white flex items-center">
                    <p className="basis-full ml-3">Email:</p>
                    <p className="font-light -mt-4 basis-full ml-3">example@gmail.com</p>
                    <p className="basis-full ml-3">Phone:</p>
                    <p className="font-light -mt-4 basis-full ml-3">(XXX) XXX-XXXX</p>
                    <p className="basis-full ml-3">Address:</p>
                    <p className="font-light -mt-4 basis-full ml-3">1600 Pennsylvania Avenue NW, Washington, DC 20500</p>
                </div>
            </div>
            <div className="flex justify-center items-center bg-red-800">
                <div className="flex justify-center items-center w-[97%] h-[87%] my-4 border-4 border-white flex">
                    <form action="/url"method="GET" className="w-[87%] text-l flex-wrap grid-rows-3 flex justify-center items-center">
                        <input type="text" placeholder="Name" className="rounded-sm basis-full h-14 my-5 text-black placeholder-black"/>
                        <input type="text" placeholder="Email" className="rounded-sm basis-full h-14 mb-5 text-black placeholder-black"/>
                        <input type="text" placeholder="Feedback" className="rounded-sm basis-full mb-5 h-36 text-black placeholder-black"/>
                        <button type="submit" className="bg-white text-black mb-4 w-[10%] h-[7%]">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}