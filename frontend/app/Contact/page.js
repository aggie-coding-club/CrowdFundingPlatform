
export default function Contact(){
    return(
        <main data-theme="light" className="pb-24">
        <div className="bg-gray-100 font-serif ">
            <div className="flex justify-center">
                <img src="/ReveilleX.jpg" className="w-[100%] h-[40%] mt-10" alt="Reveille in a field of flowers" />
            </div>
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
                        <button type="Submit" className="bg-white text-black mb-4 px-5 h-[7%]">Submit</button>
                    </form>
                </div>
            </div>
        </div>


        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="py-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Log In</h2>
        </div>
        <div className="flex items-center justify-center p-12">
            <div className="mx-auto w-full max-w-[550px]">
                <form action="https://script.google.com/macros/s/AKfycbxWxtYUdFyxXWQ2Ntcd-usd9RShwEgazYG-kxnbT9VpgTrHdKPd4ONc_hAnserzKsUfIw/exec" method="POST">

                    <div className="form-control w-full max-w-xl">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name="Name" placeholder="Type here" className="input input-bordered w-full max-w-xl" required/>
                    </div>

                    <div className="form-control w-full max-w-xl">
                        <label className="label">
                            <span className="label-text">Password</span>
                            <span className="label-text-alt"><a href="#!" className="text-gray-400 focus:outline-none focus:text-black-500 hover:text-black-500 dark:hover:text-black-300">Forgot password?</a></span>
                        </label>
                        <input type="test" name="Email" placeholder="Type here" className="input input-bordered w-full max-w-xl" required/>
                    </div>

                    <div className="form-control w-full max-w-xl">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name="Feedback" placeholder="Type here" className="input input-bordered w-full max-w-xl" required/>
                    </div>

                    <button type="submit" className="mt-6 btn btn-block">Sign In</button>
                </form>
                <div className="text-center pt-8">
                    <p className="text-center text-gray-400">Don&#x27;t have an account yet? <a href="/SignUp" className="link text-black-400 focus:outline-none focus:underline focus:text-black-500 dark:focus:border-gray-800">Sign up</a></p>
                </div>
            </div>
        </div>
        </main>
    )
}