import React from 'react';
import post from "./../../Assets/Images/myProfile.jpg"
function MyPosts(props) {
    const posts = [
        post,post,post,post,post,post,post
    ]
    return (
        <div className='flex flex-wrap justify-around max-w-2xl my-0 mx-auto'  >
                {
                    posts.map((post,id) =>{
                        return <img className='w-4/12 rounded-5 p-1' src={post} alt="" />
                    })
                }
        </div>
    );
}

export default MyPosts;