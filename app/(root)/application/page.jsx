import React from "react";

const Application = () => {
  return (
    <section className="px-16 my-16 md:my-20 lg:my-32 ">
      <div className="flex flex-col lg:flex-row ">
        {/* Left Section */}
        <div className="lg:w-10/12 lg:h-96  bg-gray-100  p-4">
          <label className="font-bold mb-2">Select Algorithm:</label>
          <div className="mb-4">
            <input
              type="radio"
              id="algorithm1"
              name="algorithm"
              className="mr-2"
            />
            <label htmlFor="algorithm1">Random Forest</label>
          </div>
          <div className="mb-4">
            <input
              type="radio"
              id="algorithm2"
              name="algorithm"
              className="mr-2"
            />
            <label htmlFor="algorithm2">Logistic Regression</label>
          </div>
          {/* Add more radio buttons or checkboxes as needed */}
        </div>

        {/* Middle Section */}

        {/* Right Section */}
        <div className="lg:w-10/12 h-[254px] lg:h-96 bg-gray-100 p-4">
          <textarea
            className="w-full h-full border border-gray-300 rounded-md p-2 focus:outline-none resize-none"
            placeholder="Enter text to analyze..."
          ></textarea>
        </div>

        <div className="lg:w-full flex justify-center items-center bg-gray-100 p-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full lg:w-auto">
            Analyze Text
          </button>
        </div>
      </div>
    </section>
  );
};

export default Application;
