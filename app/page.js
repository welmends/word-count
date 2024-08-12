"use client";

import { useState } from "react";

const Home = () => {
  const [content, setContent] = useState("");

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = () => {
    console.log(content);
  };

  return (
    <div>
      <div className="flex-grow flex flex-col items-center">
        <h1 className="text-2xl font-bold">Word Count</h1>
        <p className="text-lg">
          A simple form that counts the number of words in a block of text
        </p>
      </div>
      <div className="flew-grow flex flex-col items-center justify-between gap-4 mx-auto p-4">
        <textarea
          value={content}
          onChange={handleChange}
          className="flex-grow textarea textarea-bordered w-full bg-gray-200 resize-none rounded-md hover:textarea-primary"
          rows={20}
        />
        <button onClick={handleSubmit} className="btn btn-primary mt-4">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Home;
