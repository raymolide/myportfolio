import React, { Component } from 'react';

export class Contact extends Component {
    static displayName = Contact.name;


    render() {
        return (
            <section className="card justify-content-center align-self-center">


                <h2 className="h1-responsive font-weight-bold text-center my-4">Contact me</h2>

                <div className="d-flex justify-content-around flex-row">


                    <div className="col-md-9 mb-md-0 mb-5">
                        <form id="contact-form" name="contact-form" action="mail.cs" method="POST">


                            <div className="row">


                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <label for="name" className="">Your name</label>
                                        <input type="text" id="name" name="name" className="form-control" />
                                    </div>
                                </div>



                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <label for="email" className="">Your email</label>
                                        <input type="text" id="email" name="email" className="form-control" />
                                    </div>
                                </div>


                            </div>



                            <div className="row">
                                <div className="col-md-12">
                                    <div className="md-form mb-0">
                                        <label for="subject" className="">Subject</label>
                                        <input type="text" id="subject" name="subject" className="form-control" />
                                    </div>
                                </div>
                            </div>



                            <div className="row">


                                <div className="col-md-12">

                                    <div className="md-form">
                                        <label for="message">Your message</label>
                                        <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                                    </div>

                                </div>
                            </div>
                            <br />
                            <div className="text-center text-md-left">
                                <button className="btn btn-primary">Submit</button>
                            </div>

                        </form>



                    </div>


                </div>

            </section>
        );
    }

}
