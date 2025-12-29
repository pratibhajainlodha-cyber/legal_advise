import React from 'react'

const Location = () => {
    return (
        <div className="location" style={{ width: "100%", height: "400px" }}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.1587916919298!2d78.47500568552832!3d17.404165559756976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99e7175cb4d9%3A0x9749e8618c7eaf68!2sVijaya%20Diagnostic%20Centre%20%7C%20Himayatnagar%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1760696123384!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
            ></iframe>
        </div>
    )
}

export default Location