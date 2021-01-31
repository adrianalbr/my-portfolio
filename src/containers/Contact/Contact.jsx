import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <main>
            <div className="container about-me">
                 <div className="row">
                    <div className="col-md-9 main-body-contain">
                        <h1>Let's Connect!</h1>
                         <br/>

                         <form
                            className="container-fluid"
                            id="form-container"
                            action="https://formspree.io/f/maylkwno"
                            method="post"
                        >
                            <div className="row">
                            <div className="col-sm">
                            
                                <div className="form-group">
                                
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Name"
                                    name="Name"
                                    id="name"
                                />
                                <div className="form-group">
                                    <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Email address"
                                    name="Email"
                                    id="_replyto"
                                    />
                                </div>
                                <div className="form-group">
                                    <textarea
                                    className="form-control"
                                    rows="3"
                                    placeholder="Message"
                                    name="Message"
                                    id="message"
                                    ></textarea>
                                </div>
                                <button className="btn" type="submit" value="Send">
                                    Submit
                                </button>
                                </div>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </main>
            
        </div>
    );
};

export default Contact;