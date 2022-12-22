import React from 'react';
import HomePost from '../Components/Home/HomePost';
function Home(props) {
    return (
        <div>
            <HomePost user={props.user} />
        </div>
    );
}

export default Home;