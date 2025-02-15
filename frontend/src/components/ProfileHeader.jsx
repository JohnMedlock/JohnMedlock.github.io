import React from 'react';
import './ProfileHeader.css';

const ProfileHeader = () => {
    return (
        <div className="profile-header">
            <img src="images/Headshot1.jpg" alt="Headshot of John Medlock" className="buddy-icon" />
            <div>
                <h1 className="screen-name">John Medlock</h1>
                <div>Status: Online</div>
            </div>
        </div>
    );
};

export default ProfileHeader;