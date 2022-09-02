import React from 'react';
import NavBer from "../Components/NavBar/NavBar.jsx"
import MyPosts from '../Components/Profile/MyPosts.jsx';
import ProfileInfo from '../Components/Profile/ProfileInfo.jsx';
function Profile(props) {
    return (
        <div>
            <NavBer />
            <ProfileInfo />
            <MyPosts />
        </div>
    );
}

export default Profile;