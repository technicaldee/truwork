import React from "react";

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-white p-6 flex flex-col items-center">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl">
        <div className="flex items-center mb-6">
          <img
            className="w-24 h-24 rounded-full mr-4"
            src="https://via.placeholder.com/100"
            alt="Avatar"
          />
          <div>
            <h1 className="text-2xl font-semibold">Andre Yang</h1>
            <p className="text-gray-600">Professional Voice Actor</p>
          </div>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">About Me</h2>
          <p className="text-gray-700">
            Hello! I am Andre Yang, a professional voice actor with over 10
            years of experience in the industry. I specialize in providing
            high-quality voice overs for commercials, narrations, and various
            other types of projects. My goal is to bring your project to life
            with a unique and engaging voice.
          </p>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Skills</h2>
          <div className="flex flex-wrap gap-2">
            <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded">
              Voice Over
            </span>
            <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded">
              Narration
            </span>
            <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded">
              Commercials
            </span>
            <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded">
              Audiobooks
            </span>
            <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded">
              Radio
            </span>
          </div>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Reviews</h2>
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <div className="flex items-center mb-2">
              <img
                className="w-10 h-10 rounded-full mr-2"
                src="https://via.placeholder.com/50"
                alt="Reviewer Avatar"
              />
              <div>
                <h3 className="text-sm font-semibold">John Doe</h3>
                <div className="flex">
                  {[...Array(4)].map((_, index) => (
                    <svg
                      key={index}
                      className="w-4 h-4 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-3.09 1.637a1 1 0 0 1-1.451-1.054l.59-3.431-2.49-2.426a1 1 0 0 1 .554-1.705l3.451-.501L9.75 3.276a1 1 0 0 1 1.8 0l1.54 3.144 3.451.501a1 1 0 0 1 .554 1.705l-2.49 2.426.59 3.431a1 1 0 0 1-1.451 1.054L10 15z" />
                    </svg>
                  ))}
                  <svg
                    className="w-4 h-4 text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-3.09 1.637a1 1 0 0 1-1.451-1.054l.59-3.431-2.49-2.426a1 1 0 0 1 .554-1.705l3.451-.501L9.75 3.276a1 1 0 0 1 1.8 0l1.54 3.144 3.451.501a1 1 0 0 1 .554 1.705l-2.49 2.426.59 3.431a1 1 0 0 1-1.451 1.054L10 15z" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="text-gray-700">
              Andre provided an exceptional voice over for our commercial. His
              delivery was perfect and he was a pleasure to work with.
            </p>
          </div>
          {/* Add more reviews as needed */}
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Project Title</h3>
              <p className="text-gray-700">
                Description of the project, highlighting the key points and what
                was accomplished.
              </p>
            </div>
            {/* Add more portfolio items as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
