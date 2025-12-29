import React from 'react';

const ContactForm = () => {
    return (
        <>
            <section id="serve" className="form-sec">
                <div className="container">
                    <div className="from-dd">
                        <div className="form-thy">
                            <h1>Have any questions?
                                Feel free to contact us!</h1>
                            <div className="address-from">
                                <div className="info-ddta">
                                    <div className="top-data">
                                        <div className="info-left">
                                            <img src="/phone.png" alt="Phone" />
                                        </div>
                                        <div className="info-ryt">
                                            <h2>Phone Numbers</h2>
                                            <span>(+91)8639062427</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="info-ddta">
                                    <div className="top-data">
                                        <div className="info-left">
                                            <img src="/location.png" alt="location" />
                                        </div>
                                        <div className="info-ryt">
                                            <h2>Physical Address</h2>
                                            <p>205, QUEEN’S COURT APARTMENTS, NEARBY VIJAYA DIAGNOISTIC CENTRE, STREET NO. 19, HIMAYATNAGAR, HYDERABAD- 29, TELANGANA, INDIA.

                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="info-ddta">
                                    <div className="top-data">
                                        <div className="info-left">
                                            <img src="/mail.png" alt="Phone" />
                                        </div>
                                        <div className="info-ryt">
                                            <h2>Email Address</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="info-ddta">
                                    <div className="top-data">
                                        <div className="info-left">
                                            <img src="/time.png" alt="Phone" />
                                        </div>
                                        <div className="info-ryt">
                                            <h2>Opening Hours</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <form className="contact-form">
                            <div className="row">
                                <div className="input-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" placeholder="Your Name" />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="phone">Phone</label>
                                    <input type="text" id="phone" placeholder="Your Phone" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" placeholder="Your Email" />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="service">Service</label>
                                    <select id="service" defaultValue="Civil Law">
                                        <option value="Civil Law">Civil Law</option>
                                        <option value="Business Law">Business Law</option>
                                        <option value="Family Law">Family Law</option>
                                        <option value="Real Estate">Real Estate</option>
                                    </select>
                                </div>
                            </div>
                            <div className="input-group full-width">
                                <label htmlFor="subject">Subject</label>
                                <input type="text" id="subject" placeholder="Subject" />
                            </div>
                            <div className="input-group full-width">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" placeholder="Message" />
                            </div>
                            <button type="submit" className="submit-btn">Request consultation</button>
                        </form>
                    </div>

                </div>
            </section>
        </>);
};

export default ContactForm;
