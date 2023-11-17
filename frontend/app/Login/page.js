export default function Login() {
    return (
        <main data-theme="light" className="pb-24">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="py-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Log In</h2>
            </div>
            <div className="flex items-center justify-center p-12">
                <div className="mx-auto w-full max-w-[550px]">
                    <form action="" method="POST">

                        <div className="form-control w-full max-w-xl">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="" placeholder="Type here" className="input input-bordered w-full max-w-xl" required />
                        </div>

                        <div className="form-control w-full max-w-xl">
                            <label className="label">
                                <span className="label-text">Password</span>
                                <span className="label-text-alt"><a href="#!" className="text-gray-400 focus:outline-none focus:text-black-500 hover:text-black-500 dark:hover:text-black-300">Forgot password?</a></span>
                            </label>
                            <input type="password" name="" placeholder="Type here" className="input input-bordered w-full max-w-xl" required />
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
