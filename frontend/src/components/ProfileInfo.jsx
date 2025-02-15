import React from 'react';
import './ProfileInfo.css';

const ProfileInfo = () => {
    return (
        <div className="profile-info">
            <h2>Profile Information</h2>
            <ul>
                <li>
                    <strong>Location:</strong> Alpharetta, GA 30004, US
                </li>
                <li>
                    <strong>Email: </strong>
                    <a href="mailto:jwmedlock@icloud.com"> jwmedlock@icloud.com</a>
                </li>
                <li>
                    <strong>Phone: </strong>
                    <a href="tel:+17708838690"> (770) 883-8690</a>
                </li>
            </ul>
            
            <h2>About Me</h2>
            <p>
                Eager front-end developer with hands-on experience using frontend frameworks and backend logic. Strong background in frontend design and user experience. Skilled in team management and project progression with demonstrated success. Dedicated musician and passionate about innovative user experiences.
            </p>
            <h2>Interests</h2>
            <ul>
                <li>Innovative User Experiences</li>
                <li>Web Application Architecture</li>
                <li>Music Production</li>
                <li>Digital Design</li>
            </ul>
        </div>
    );
};

export default ProfileInfo;