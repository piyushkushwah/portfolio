import React from 'react';
import Heading from '../heading';
import './contact.css';

class Contact extends React.Component {
    render() {
        return (
            <div className="contactWrapper">
                <Heading name="Contact" />
                <div className="form">
                    <input className="name-input" type="text" placeholder="Name" name="name" />
                    <input className="email-input" type="text" placeholder="Email" name="email" />
                    <textarea className="message" placeholder="Message" row="20"></textarea>
                    <div className="button-wrapper">
                        <button className="submit-btn">Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;