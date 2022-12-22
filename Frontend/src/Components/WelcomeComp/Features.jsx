import React from "react";

const FeaturesArr = [
  {
    logo: "home",
    title: "Authentication Methods",
    description:
      "You can sign up or login because it is deployed on firebase that good for security",
  },
  {
    logo: "favorite_border",
    title: "Post your favorite Photos",
    description:
      "Go to this step by step guideline process on how to certify for your weekly benefits:",
  },
  {
    logo: "question_answer",
    title: "Chat Room",
    description:
      "Hope i do it 🤣 but i will learn WebSockets and make a chat like instagram messages",
  },
  {
    logo: "face",
    title: "Customized Profile",
    description:
      "here you can change your profile information's like profile picture or edit your bio",
  },
];

function Features() {
  return (
    <div className="lg:text-center bg-gray-100 p-1">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:tracking-tight">
        <span className="block">Features</span>
      </h2>
      <div className=" min-w-100 m-4 sm:px-2 lg:flex lg:py-16 lg:px-8 lg:flex-grow lg:justify-center">
        {FeaturesArr.map((feature, id) => {
          return (
            <div
              key={id}
              className="m-2 p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 lg:text-center "
            >
              <span className="material-icons text-6xl text-white">
                {feature.logo}
              </span>
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {feature.title}
              </h5>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Features;
