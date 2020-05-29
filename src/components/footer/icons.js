import React from 'react';
import './icons.css'

class Icons extends React.Component {

    render() {
        return (
            <div>
                <div className="social_media_icons">
                    <a href="https://www.facebook.com/piyush.kushwaha.963">
                        <img loading="lazy" src={require('../../assets/img/facebook.svg')} alt='fb' />
                    </a>
                    <a href="https://www.linkedin.com/in/piyush-kushwah/">
                        <img loading="lazy" src={require('../../assets/img/linkedin.svg')} alt='fb' />
                    </a>
                    <a href="https://www.twitter.com">
                        <img loading="lazy" src={require('../../assets/img/twitter.svg')} alt='fb' />
                    </a>
                    <a href="https://github.com/piyushkushwah">
                        <img loading="lazy" src={require('../../assets/img/github.svg')} alt='fb' />
                    </a>
                </div>
                <div className="copyright">
                    <p>&copy; 2020 Piyush Kushwaha</p>
                </div>
            </div>
        )
    }
}

export default Icons;