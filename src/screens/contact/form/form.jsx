import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        service: "Civil Law",
        subject: "",
        message: "",
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post("http://localhost:5000/send-email", formData);
            alert("Email sent successfully!");
            setFormData({
                name: "",
                phone: "",
                email: "",
                service: "Civil Law",
                subject: "",
                message: "",
            });
        } catch (error) {
            alert("Failed to send email");
            console.error(error);
        }
    };
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

                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="input-group">
                                    <label>Name</label>
                                    <input id="name" value={formData.name} onChange={handleChange} required />
                                </div>

                                <div className="input-group">
                                    <label>Phone</label>
                                    <input id="phone" value={formData.phone} onChange={handleChange} required />
                                </div>
                            </div>

                            <div className="row">
                                <div className="input-group">
                                    <label>Email</label>
                                    <input id="email" type="email" value={formData.email} onChange={handleChange} required />
                                </div>

                                <div className="input-group">
                                    <label>Service</label>
                                    <select id="service" value={formData.service} onChange={handleChange}>
                                        <option>Civil Law</option>
                                        <option>Business Law</option>
                                        <option>Family Law</option>
                                        <option>Real Estate</option>
                                    </select>
                                </div>
                            </div>

                            <div className="input-group full-width">
                                <label>Subject</label>
                                <input id="subject" value={formData.subject} onChange={handleChange} />
                            </div>

                            <div className="input-group full-width">
                                <label>Message</label>
                                <textarea id="message" value={formData.message} onChange={handleChange} />
                            </div>

                            <button type="submit" className="submit-btn">Request consultation</button>
                        </form>
                    </div>

                </div>
            </section>
        </>);
};

export default ContactForm;
