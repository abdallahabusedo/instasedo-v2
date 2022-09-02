import React from 'react';
import { Link } from 'react-router-dom';
import profilePicture from './../../Assets/Images/myProfile.jpg'
function ProfileInfo(props) {
    return (
        <div className="flex justify-center">
            <div className='flex justify-center'>
                {/* Profile pic */}
                <div>
                    <img src={profilePicture} alt="profilePicture" className='border-4 border-red-500 rounded-full w-80 h-80 object-cover p-1  m-24' />
                </div>
                <div className='flex flex-col w-auto mt-32'>
                    <div className='flex justify-between'>
                    {/* Username */}
                    <h2 className='p-3 text-xl font-bold'>UserName</h2>
                    {/* Edit Profile */}
                    <button className='p-3 border-4 rounded-full border-red-500 border-opacity-20 '>Edit Profile</button>
                    </div>
                    {/* #posts #Followers  #Following */}
                    <div className='flex '>
                        <h4 className='p-3'>50 posts</h4>
                        <h4 className='p-3'>50 Followers</h4>
                        <h4 className='p-3'>50 Following</h4>
                    </div>
                    {/* Bio */}
                    <h4 className='p-3'>Bio</h4>
                    {/* Link */}
                    <Link to="/profile" className='p-3'>Link</Link>
                </div>
            </div>
            {/* Posts */}
        </div>
    );
}

export default ProfileInfo;