import React from 'react';
import './Profile.css';
import ProfileImage from '../../media/profile.jfif';

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
                            <p className="email">israelbeni71@gmail.com</p>
                            <p className="contact-number">(+603) 546 624 342</p>
                        </div>
                    </div>
                    <div className="description">
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