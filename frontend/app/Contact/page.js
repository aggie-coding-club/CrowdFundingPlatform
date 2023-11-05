'use client'

import React from 'react';

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showModal: false, submitted: false };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        fetch('https://script.google.com/macros/s/AKfycbxWxtYUdFyxXWQ2Ntcd-usd9RShwEgazYG-kxnbT9VpgTrHdKPd4ONc_hAnserzKsUfIw/exec', {
            method: 'POST',
            body: data,
        }).then(() => {
            this.setState({ showModal: true, submitted: true });
            event.target.reset();
        });
    }

    render() {
        return (
            <main data-theme="light">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="py-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Contact Us</h2>
                </div>
                <div className="flex items-center justify-center p-12">
                    <div className="mx-auto w-full max-w-[550px]">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-control w-full max-w-xl">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="Name" placeholder="Type here" className="input input-bordered w-full max-w-xl" required/>
                            </div>

                            <div className="form-control w-full max-w-xl">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="Email" placeholder="Type here" className="input input-bordered w-full max-w-xl" required/>
                            </div>

                            <div className="form-control w-full max-w-xl">
                                <label className="label">
                                    <span className="label-text">Feedback</span>
                                </label>
                                <textarea type="text" name="Feedback" placeholder="Type here" className="textarea textarea-bordered" required></textarea>
                            </div>

                            <button type="submit" className="mt-6 btn btn-block">{this.state.submitted ? 'Submitted' : 'Submit'}</button>
                        </form>
                    </div>
                </div>
                {this.state.showModal && (
                    <div className="modal modal-open">
                        <div className="modal-box">
                            <h2 className="text-xl">Success!</h2>
                            <p>Your form has been submitted successfully.</p>
                            <div className="modal-action">
                                <button onClick={() => this.setState({ showModal: false, submitted: false })} className="btn">Close</button>
                            </div>
                        </div>
                    </div>
                )}



                <div className="bg-gray-100 font-serif ">
                    <div className="flex justify-center">
                        <img src="/ReveilleX.jpg" className="w-[100%] h-[40%]" alt="Reveille in a field of flowers" />
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
            </main>
        );
    }
}

export default MyForm;
