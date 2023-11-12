'use client'

import React from 'react';
import Image from 'next/image';

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
                <div className="relative w-full h-[400px]">
                    <Image
                        src="/ReveilleX.jpg"
                        alt="Reveille in a field of flowers"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>                
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
            </main>
        );
    }
}

export default MyForm;
