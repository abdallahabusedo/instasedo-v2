import React from 'react';

function CreatePost(props) {
    return (
        <div>
            <a href="/home" className='p-10 flex max-w-min bg-gray-500 rounded-full w-4 h-4 justify-center items-center mt-5 ml-auto mr-20'>X</a>
            <div className="bg-gray-200 max-w-5xl my-0 mx-auto mt-1 p-20 rounded-3xl"> 
                <div className="max-w-7xl mx-auto  flex items-center justify-center pb-5">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:tracking-tight" >Create New Post </h1>
                </div>
                <form className="flex flex-col max-w-2xl justify-center my-0 mx-auto ">
                    <label className="block text-lg font-large text-gray-900 dark:text-gray-1000 font-bold mb-5">Title</label>
                    <input type="text" className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    <label className="block mb-2 text-lg font-large text-gray-900 dark:text-gray-1000 font-bold mt-5">Discription</label>
                    <input type="text" className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    
                    <label className="mb-2 text-lg font-large text-gray-900 dark:text-gray-1000 font-bold mt-5">Upload Image</label>
                    <input type="file" className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                
                    <button className="p-5 mt-10 my-0 mx-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Post</button>
                </form>
            </div>
        </div>
    );
}

export default CreatePost;