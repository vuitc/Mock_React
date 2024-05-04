import Breadcrumb from '~/components/Breakcrumb';
import React from 'react';
import '~/pages/Contact/contact.css';
import MapComponent from '~/components/MapComponent';
function Contact() {
    return (
        <React.Fragment>
            <Breadcrumb item={{ label: 'Contacts' }} />
            <div className="c-box">
                <div className="c-input">
                    <input type="text" name="firstName" id="firstName" placeholder="First Name" />
                    <input type="text" name="lastName" id="lastName" placeholder="Last Name" />
                </div>
                <input type="email" name="email" id="email" placeholder="Email" />
                <textarea name="message" id="message" cols="30" rows="4" placeholder="Message"></textarea>
                <button className="c-button">Send Message</button>
            </div>
            <div className="c-map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d125438.50940941383!2d106.708992!3d10.7380736!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f9c1cba2a0f%3A0x144714c33236fa57!2zMTU1IMSQxrDhu51uZyBz4buRIDc5LCBUw6JuIFF1eSwgUXXhuq1uIDcsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaA!5e0!3m2!1svi!2s!4v1714182946632!5m2!1svi!2s"
                    width="100%"
                    height="600"
                    style={{ border: '0' }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps"
                ></iframe>
            </div>
            <div className="c-map">
                <MapComponent />
            </div>
        </React.Fragment>
    );
}

export default Contact;
