
export default function Contact(){
    return(
        <div className="bg-gray-100 font-serif">
            <img src="/ReveilleX.jpg" width={500} height={500} alt="Reveille in a field of flowers" />
            <div className="flex flex-wrap justify-center bg-red-800 h-28 mb-14">
                    <hr className="basis-full items-start border-1"/>
                    <p className="text-center font-bold text-4xl items-center justify-center basis-full">Contact Us</p>
                    <hr className="items-stretch border-2 w-52 -mt-4"/>
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
                    <form action="/url"method="GET" className="w-[87%] text-xl flex-wrap grid-rows-3 flex justify-center">
                        <input type="text" placeholder="Name" className="rounded-sm basis-full h-14 my-5 text-gray-700 placeholder-gray-700 bg-white"/>
                        <input type="text" placeholder="Email" className="rounded-sm basis-full h-14 mb-5 text-gray-700 placeholder-gray-700 bg-white"/>
                        <textarea placeholder="Feedback" className="basis-full h-56 mb-5 rounded-sm bg-white text-gray-700 placeholder-gray-700"></textarea>
                        <button type="Submit" className="bg-white text-black mb-4 w-[10%] h-[7%]">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}