import React from 'react';
import Heading from '../heading';

class Contact extends React.Component {
    render() {
        return (
            <div className="contactWrapper">
                <Heading name="Contact" />
                <div className="form">
                    <input className="" type="text" placeholder="Name" name="name" />
                    <input type="text" placeholder="Email" name="email" />
                    <textarea placeholder="Message"></textarea>
                </div>
            </div>
        )
    }
}

export default Contact;