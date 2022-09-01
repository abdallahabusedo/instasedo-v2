import React from 'react';
import myProfile from "./../../Assets/Images/myProfile.jpg"
function Aboutus(props) {
    return (
        <div id='About'>
            <div className="bg-gray-50 lg:text-center">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-10 lg:px-18  lg:items-center lg:justify-between">
                      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:tracking-tight mb-5">
                        <span className="block">About me </span>
                      </h2>
                    <img src={myProfile} className="rounded-lg w-64 block ml-auto mr-auto w-1/3 max-w-6xl max-h-6xl" alt='profile' ></img>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:tracking-tight mb-10">
                        <span className="block text-indigo-600 mt-5">Abdallah Zaher</span>
                        <span className="block text-indigo-500 text-xl">Software Enginner</span>
                    </h2>
                    <div className="mt-8 flex lg:mt-0 lg:text-center lg:justify-center ">
                        <div className="ml-3 inline-flex rounded-md shadow">
                            <a href="https://github.com/abdallahabusedo" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"> 
                            Github </a>
                        </div>
                        <div className="ml-3 inline-flex rounded-md shadow">
                            <a href="https://www.linkedin.com/in/abdallahabusedo/" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"> 
                            Linkedin </a>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    );
}

export default Aboutus;