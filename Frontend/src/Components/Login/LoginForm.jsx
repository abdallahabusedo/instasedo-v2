import React, { useState } from "react";
import Logo from "./../../Assets/Images/Posidoonb.png";
import M from "materialize-css";
import { useNavigate } from "react-router-dom";

var axios = require("axios");
function LoginForm(props) {
  const [_Email, _setEmail] = useState();
  const [_Password, _setPassword] = useState();
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        _Email
      )
    ) {
      M.toast({ html: "Invalid Email", classes: "#f44336 red" });
      return;
    }
    // send sign up request
    axios
      .post("http://localhost:5000/login", {
        email: _Email,
        password: _Password,
      })
      .then(function (response) {
        console.log(response.data);
        localStorage.setItem("token",response.data.token);
        M.toast({ html: "Signed in successfully", classes: "#f44336 green" });
        navigate("/home");
      })
      .catch(function (error) {
        console.log(error.response.data.error);
        M.toast({ html: error.response.data.error, classes: "#f44336 red" });
      });
  };
  return (
    <form className="mt-2 pl-32 pr-32 mb-20">
      <div className="flex items-center justify-center  p-5">
        <img className="h-32 w-auto" src={Logo} alt="Workflow" />
      </div>
      <div className="max-w-7xl mx-auto  flex items-center justify-center pb-5">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:tracking-tight text-indigo-600">
          Log in
        </h1>
      </div>
      {Email()}
      {Password()}
      <button
        onClick={(e) => handleSubmit(e)}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
      <a
        href="/signup"
        className="block flex align-center justify-center font-bold text-2xl"
      >
        Let's create a new Account ????
      </a>
    </form>
  );

  function Password() {
    return (
      <div className="relative z-0 mb-6 w-full group">
        <label
          htmlFor="Password"
          className="block mb-2 text-lg font-large text-gray-900 dark:text-gray-1000 font-bold"
        >
          Password
        </label>
        <input
          type="text"
          id="Password"
          className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Password"
          onChange={(e) => _setPassword(e.target.value)}
        />
      </div>
    );
  }

  function Email() {
    return (
      <div className="relative z-0 mb-6 w-full group ">
        <label
          htmlFor="Email"
          className="block mb-2 text-lg font-large text-gray-900 dark:text-gray-1000 font-bold"
        >
          Email
        </label>
        <input
          type="text"
          id="Email"
          className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="example@example.com"
          onChange={(e) => _setEmail(e.target.value)}
        />
      </div>
    );
  }
}

export default LoginForm;
