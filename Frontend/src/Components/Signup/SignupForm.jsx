import React, { useState } from 'react';
import UseCollection from '../../Composables/useCollection';
import UseSignup from '../../Composables/useSignup';
import Logo from "./../../Assets/Images/Posidoonb.png"

function SignupForm(props) {
    const [_Email, _setEmail] = useState()
    const [_Password, _setPassword] = useState()
    const [_ConfiermPassword, _setConfiermPassword] = useState()
    const [_Fname, _setFname] = useState()
    const [_Lname, _setLname] = useState()
    const [_Username, _setUsername] = useState()
    const [_Gender, _setGender] = useState()
    const [_ProfilePic, _setProfilePic] = useState([])

   const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log("_Email",_Email);
        console.log("_Password",_Password);
        console.log("_ConfiermPassword",_ConfiermPassword);
        console.log("_Fname",_Fname);
        console.log("_Lname",_Lname);
        console.log("_Username",_Username);
        console.log("_Gender",_Gender);
        console.log("_ProfilePic",_ProfilePic);
        
        const {error , signup} = UseSignup()
        await signup(_Email,_Password,_Username,_ProfilePic)
        const {er, addDoce} = UseCollection("Users")
        console.log(_ProfilePic);
        if (!error) {
            const userInfo ={
                email: _Email,
                fname: _Fname,
                lname: _Lname,
                username: _Username,
                gender: _Gender,
            }
            await addDoce(userInfo)
            if (!er) {
                //window.location.href ='/home'
            }
        }
    }

    return (
        <form className="mt-2 pl-52 pr-52 mb-20" onSubmit={handleSubmit}> 
                <div className="flex items-center justify-center  p-5">
                <img
                    className="h-32 w-auto" 
                    src={Logo}
                    alt="Workflow"
                 />
                </div>
            <div className="max-w-7xl mx-auto  flex items-center justify-center pb-5">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:tracking-tight text-indigo-600">Sign Up Now</h1>
            </div>
            {ProfilePic()}
            {Email()}
            {Password()}
            {ConfiermPassword()}
            <div className="grid md:grid-cols-2 md:gap-6">
                {Fname()}
                {Lname()}
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                {Username()}
                {Gender()}
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            <a href='/login' className='block flex align-center justify-center font-bold text-2xl'> I have an Account 🤞</a>
        </form>
    );

    function ProfilePic() {
        return <div>
            <label htmlFor="Profile" className="block mb-2 text-lg font-large text-gray-900 dark:text-gray-1000 font-bold">Profile Pic</label>
            <div className="py-3 center mx-auto flex items-center justify-center ">
                <div className="bg-white px-4 py-5 rounded-lg shadow-lg text-center w-48">
                <div className="mb-4">
                    {/* <img className="w-auto mx-auto rounded-full object-cover object-center" 
                    src={_ProfilePic.name} alt="Avatar Upload" /> */}
                    {_ProfilePic.map((elem,id) => {
                        return <>
                        <span  className=" flex items-center justify-center w-100  h-100 ">
                            <div className="flex items-center justify-center w-100  h-100 rounded-full">
                                <img src={elem} key={id} alt="med1" className="w-70 h-70 object-cover object-center rounded-full"  />
                            </div>
                        </span>
                        </>
                    })}
                </div>
                <label className="cursor-pointer mt-6">
                    <span className="mt-2 text-base leading-normal px-4 py-2 bg-blue-500 text-white text-sm rounded-full" >Select Avatar</span>
                    <input type='file' className="hidden" onChange={e =>_setProfilePic(imgfile => [...imgfile, URL.createObjectURL(e.target.files[0])])} />
                </label>
                </div>
            </div>
        </div>;
    }

    function Username() {
        return <div className="relative z-0 mb-6 w-full group">
            <label htmlFor="Email" className="block mb-2 text-lg font-large text-gray-900 dark:text-gray-1000 font-bold">Username</label>
            <input 
                type="text" 
                id="Email" 
                className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder='Username' 
                onChange={e => _setUsername(e.target.value)}
                />
        </div>;
    }

    function Gender() {
        return <div className="relative z-0 mb-6 w-full group">
                    <label htmlFor="Email" className="block mb-2 text-lg font-large text-gray-900 dark:text-gray-1000 font-bold">Gender</label>
                    <fieldset>
                        <div className="flex items-center mb-4">
                            <input 
                                id="country-option-1" 
                                type="radio" 
                                name="countries" 
                                value="Male" 
                                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" 
                                onChange={e => _setGender("Male")} 
                                />
                            <label 
                                htmlFor="country-option-1" 
                                className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-1000">
                                    Male
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input 
                                id="country-option-2" 
                                type="radio" 
                                name="countries" 
                                value="Female" 
                                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" 
                                onChange={e => _setGender("Female")} 
                                />
                            <label htmlFor="country-option-2" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-1000">
                                Female
                            </label>
                        </div>
                    </fieldset>
                </div>;
    }

    function Lname() {
        return <div className="relative z-0 mb-6 w-full group">
            <label htmlFor="Lname" className="block mb-2 text-lg font-large text-gray-900 dark:text-gray-1000 font-bold">Last name</label>
            <input 
                type="text" 
                id="Lname" 
                className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder='Last name' 
                onChange={e => _setLname(e.target.value)}
                />
        </div>;
    }

    function Fname() {
        return <div className="relative z-0 mb-6 w-full group">
            <label htmlFor="Fname" className="block mb-2 text-lg font-large text-gray-900 dark:text-gray-1000 font-bold">First name</label>
            <input 
                type="text" 
                id="Fname" 
                className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder='First name'
                onChange={e => _setFname(e.target.value)}
                />
        </div>;
    }

    function ConfiermPassword() {
        return <div className="relative z-0 mb-6 w-full group">
            <label htmlFor="ConfiermPassword" className="block mb-2 text-lg font-large text-gray-900 dark:text-gray-1000 font-bold">Confierm Password</label>
            <input 
                type="text" 
                id="ConfiermPassword" 
                className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder='Confierm Password'
                onChange={e => _setConfiermPassword(e.target.value)} 
                />
        </div>;
    }

    function Password() {
        return <div className="relative z-0 mb-6 w-full group">
            <label htmlFor="Password" className="block mb-2 text-lg font-large text-gray-900 dark:text-gray-1000 font-bold">Password</label>
            <input 
                type="text" 
                id="Password" 
                className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder='Password'
                onChange={e => _setPassword(e.target.value)}
                />
        </div>;
    }

    function Email() {
        return <div className="relative z-0 mb-6 w-full group ">
            <label htmlFor="Email" className="block mb-2 text-lg font-large text-gray-900 dark:text-gray-1000 font-bold">Email</label>
            <input 
                type="text" 
                id="Email" 
                className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder='example@example.com' 
                onChange={e=> _setEmail(e.target.value)}
                />
        </div>;
    }
}

export default SignupForm;