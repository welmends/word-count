"use client";

import { useState } from "react";

const wordCounter = (content) => {
  if (content.length === 0) {
    return 0;
  } else {
    return (
      content
        .trim()
        .split(" ")
        .filter((word) => word !== "").length +
      content
        .trim()
        .split("\n")
        .filter((word) => word !== "").length -
      1
    );
  }
};

const Home = () => {
  const [content, setContent] = useState("");
  const [words, setWords] = useState(0);

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = () => {
    setWords(wordCounter(content));
    document.getElementById("result_modal").showModal();
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
        <dialog id="result_modal" className="modal">
          <div className="modal-box">
            {words === 0 ? (
              <div>
                <h3 className="font-bold text-lg">Error</h3>
                <p className="py-4">Your input should not be empty!</p>
              </div>
            ) : (
              <div>
                <h3 className="font-bold text-lg">Result</h3>
                <p className="py-4">
                  Your form contains <strong>{words}</strong> words!
                </p>
              </div>
            )}
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default Home;
