import React from 'react';
import './Profile.css';
import ProfileImage from '../../media/profile.jfif';
import email from '../../media/email.svg';
import phone from '../../media/phone.svg';

class Profile extends React.Component {
    render() {
        return (
            <div className="component-container profile-container">
                <div className="profile-image">
                    <img src={ProfileImage} alt="my profile" />
                </div>
                <div className="profile-info">
                    <div className="profile-header">
                        <div className="column1">
                            <h1 className="name">Ben T. Degbe</h1>
                            <p className="title">Front-end Developer</p>
                        </div>
                        <div className="column2">
                            <div className="email-container">
                                <img src={email} alt="" />
                                <p className="email">israelbeni71@gmail.com</p>
                            </div>
                            <div className="phone-container">
                                <img src={phone} alt="" />
                                <p className="contact-number">(+603) 546 624 342</p>
                            </div>
                        </div>
                    </div>
                    <div className="description">
                        <div className="fade-out"></div>
                        <p>
                            Self-motivated developer, who is willing to learn and create outstanding UI 
                            applications.
                        </p>
                        <br />
                        <p>
                            Self-motivated developer, who is willing to learn and create outstanding UI 
                            applications.
                        </p>
                        <br />
                        <p>
                            Self-motivated developer, who is willing to learn and create outstanding UI 
                            applications.
                        </p>
                        <br />
                        <p>
                            Self-motivated developer, who is willing to learn and create outstanding UI 
                            applications.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
};

export default Profile;