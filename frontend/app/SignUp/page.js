export default function SignUp() {
    return (
        <main data-theme="light" className="pb-24">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="py-20 text-center text-5xl font-semibold leading-9 tracking-tight text-gray-900">Sign Up</h2>
            </div>
            <div className="flex items-center justify-center p-12">
                <div className="mx-auto w-full max-w-[550px]">
                    <form action="" method="POST">
                        <div className="-mx-3 flex flex-wrap">
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">First Name</span>
                                    </label>
                                    <input type="text" name="" placeholder="Type here" className="input input-bordered w-full max-w-xs" required />
                                </div>
                            </div>

                            <div className="w-full px-3 sm:w-1/2">
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Last Name</span>
                                    </label>
                                    <input type="text" name="" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                                </div>
                            </div>
                        </div>

                        <div className="form-control w-full max-w-xl">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="" placeholder="Type here" className="input input-bordered w-full max-w-xl" required />
                        </div>

                        <div className="form-control w-full max-w-xl">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="" placeholder="Type here" className="input input-bordered w-full max-w-xl" required />
                        </div>

                        <button type="submit" className="bg-red-950 hover:bg-gray-100 hover:text-black text-white text-lg font-semibold py-2 px-8 rounded-xl mt-6 btn btn-block">Sign Up</button>
                    </form>
                    <div className="text-center pt-8">
                        <p className="text-center text-gray-400">Already have an account? <a href="/Login" className="link text-black-400 focus:outline-none focus:underline focus:text-black-500 dark:focus:border-gray-800">Login</a></p>
                    </div>
                </div>
            </div>
        </main>
    )
}
