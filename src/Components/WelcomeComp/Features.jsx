import React from 'react';

const Featuresarr = [{
    logo:"home",
    title:"Authintcation Methods",
    discription:"You can sign up or login becouse it is deployed on firebase that good for security",
},{
    logo:"favorite_border",
    title:"Post your favorite Photos",
    discription:"Go to this step by step guideline process on how to certify for your weekly benefits:",
},{
    logo:"question_answer",
    title:"Chat Room",
    discription:"Hope i do it 🤣 but i will learn WebScokets and make a chat like instagram messages",
},{
    logo:"face",
    title:"Custimized Profile",
    discription:"here you can change your profile informations like profile picture or edit your bio",
}
]

function Features(props) {

    return (
        <div className="lg:text-center bg-gray-100 p-10">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:tracking-tight mb-5">
                <span className="block">Features</span>
            </h2>
            <div className="inline flex m-4">
                {Featuresarr.map(feature =>{
                    return <div className="m-2 p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 lg:text-center ">
                        <span className="material-icons text-6xl text-white">{feature.logo}</span>
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{feature.title}</h5>
                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{feature.discription}</p>
                    </div>
                })}
                
            </div>
        </div>
    );
}


export default Features;