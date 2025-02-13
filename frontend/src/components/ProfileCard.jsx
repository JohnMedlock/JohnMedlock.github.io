import React from 'react';
import './ProfileCard.css';

const ProfileCard = () => {
    return (
        <div className="profile-card">
            <div className="profile-header">
                <img src="../../public/images/HeadShot1.jpg" alt="Headshot of John Medlock" className="buddy-icon" />
                <div>
                    <h1 className="screen-name">John Medlock</h1>
                    <div>Status: Online</div>
                </div>
            </div>
            <div className="profile-info">
                <p>Location: Alpharetta, GA 30004</p>
                <p>Email: jwmedlock@icloud.com</p>
                <p>Phone: (770) 883-8690</p>
                <p>Proficient in full-stack development with hands-on experience with frontend frameworks and backend logic. Strong background in software optimization and troubleshooting. Skilled in team management and project progression with demonstrated success. Passionate about innovative user experiences and a dedicated musician.</p>
            </div>
        </div>
    );
};

export default ProfileCard;